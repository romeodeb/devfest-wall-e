(function () {
    'use strict';
 
    angular
        .module('neoQCM')
        .controller('QCMController', QCMController);
 
    QCMController.$inject = ['$scope', '$location', '$routeParams', '$timeout', 'webStorage', 'QuizzService', '$interval', 'hotkeys', '$http', 'appParam'];

    function QCMController($scope, $location, $routeParams, $timeout, webStorage, QuizzService, $interval, hotkeys, $http, appParam) {
        
    	//CONSTANTES
        var timePerQuestion = appParam.timePerQuestion; //en secondes
        var penaliteBadAnswer = appParam.penaliteBadAnswer //en secondes
        var counterTime = appParam.counterTime; //Temps decompte en secondes
        var seuilAlerte = appParam.seuilAlerte //seuil alerte fin du jeu en secondes
        var endtime = new Date(Date.parse(new Date()) + (counterTime * 1000));
        var keysQueue = [];
        var minKeyDelay = appParam.minKeyDelay;

        var currentTheme = $routeParams.theme;
        webStorage.set('theme', currentTheme, true);

        var questions = [];
        var numcorrect = 0;
        var timerFinQuestion = null;
        var clockinterval = null;

        function getTimeRemaining() {

          var t = Date.parse(endtime) - Date.parse(new Date());
          var seconds = Math.floor((t / 1000) % 60);
          var minutes = Math.floor((t / 1000 / 60) % 60);
          var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
          var days = Math.floor(t / (1000 * 60 * 60 * 24));

          if (minutes < 0) minutes=0;
          if (seconds < 0) seconds=0;

          return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
          };
        }

        function initializeClock() {

          updateClock();

        }

        function updateClock() {

            var t = getTimeRemaining();

            $scope.minutes = ('0' + t.minutes).slice(-2);
            $scope.seconds = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
              $timeout.cancel(clockinterval);
              gameOver(true);
              return;
              
            }
            else {
                clockinterval = $timeout(updateClock, 1000);
            }

            if (t.total < (seuilAlerte * 1000)) {

              startTimeAlert();

            }

        }

        function startTimeAlert() {

              $('#alert').show();

        }

        function stopTimeAlert() {

              $('#alert').hide();
        }

        function gameOver(timelimit) {

            $('#alert').hide();
            $scope.gameover = true;

            if (timelimit) {

                  $scope.gameoverTimeLimit = true;

            }  
            stopTimeAlert();
            robotUnregisterEvents();
            var commandUrl = appParam.serverBaseUrl + '/robot';
            //STOP ROBOT
            $http.post(commandUrl, {'key': 'S'}).success(function (response, status, headers, config) {
                                                           

            }); 

        }

        function penaliteClock() {
         
            var newtimestamp = endtime.getTime() - (penaliteBadAnswer * 1000);
            endtime.setTime(newtimestamp);
            $('.counter .penalite').show();

            var penaliteTimer = $timeout(penaliteClockEnd, 2000);

        }

        function penaliteClockEnd() {

            $('.counter .penalite').hide();

        }

        function endGame() {

            $scope.gameover = true;
            $scope.gameoverOk = true;

            $timeout.cancel(clockinterval);
            //Temps restant ?
            var tempsFinal = getTimeRemaining();
            webStorage.set('tempsFinal', tempsFinal, true);

            var commandUrl = appParam.serverBaseUrl + '/robot';
            //STOP ROBOT
            $http.post(commandUrl, {'key': 'S'}).success(function (response, status, headers, config) {
                                                           

            });  

            stopTimeAlert();
            robotUnregisterEvents();

        }


        function endGameConfirm() {

            if ($scope.endGamePassword == appParam.confirmEndgamePassword) {

                //REDIRECT SUCCES FIN DU JEU
                $location.path('/endgame');

            }
            else if ($scope.endGamePassword == appParam.cancelEndgamePassword) {

                $location.path('/scores');

            }

        }


        var intro = function () {

                    $scope.countdown = true;
                    var videoelt = $('video.countdown').get(0);

                    //FIN VIDEO INTRO
                    videoelt.onended= function () {

                      $scope.$apply(start);

                    };
                    videoelt.volume = 0.3;
                    videoelt.play();

        }

        var intro2 = function () {

                    $scope.countdown = true;
                    var videoelt = $('video.countdown').get(0);

                    //FIN VIDEO INTRO
                    videoelt.onended= function () {

                      //$scope.$apply();

                    };
                    videoelt.volume = 0.3;
                    videoelt.play();

        }

		    /**
         * init
         * @returns {undefined}
         */
        var start = function () {

     			questions = QuizzService.getQuestions(currentTheme);
          $scope.countdown = false;
     			$scope.totalQuestion = questions.length;
     			$scope.currentQuestion = questions.shift();
     			$scope.numquestion = 1;
     			$scope.quizzTermine = false;
          $scope.penaliteBadAnswer = penaliteBadAnswer;
          $scope.gameOver = false;
          $scope.endGamePassword = '';

     			numcorrect = 0;
    			timerFinQuestion = $timeout(nextQuestion, timePerQuestion * 1000);

          /* COMPTEUR */
          initializeClock();
    			moveProgressBar();
          playAudioQuizz();

        };

        var playAudioQuizz= function () {

           var audioelt = $('audio.audioQuizz').get(0);
           audioelt.volume = 0.2;
           audioelt.play();

        }


        var checkAnswer = function (index) {

           var realindex = index + 1;
           var answer = $scope.currentQuestion.answer;
           // destruction du timer
           $timeout.cancel(timerFinQuestion);


           //BONNE REPONSE
           if (realindex == answer) {

           		numcorrect++;
           		$("div.reponse:eq(" + index + ")").addClass('goodAnswer');        		

           }
           else {

              var answerIndex = answer - 1;
           		$("div.reponse:eq(" + index + ")").addClass('badAnswer');
              $("div.reponse:eq(" + answerIndex + ")").addClass('goodAnswer');
              //PENALITE TIMER
              penaliteClock();

           }

           //DESACTIVATION le changement de la réponse
			     $("div.reponse").css({'cursor' : 'none'});

			     var timer = $timeout(nextQuestion, 500);

        };

        var nextQuestion = function () {


        //QUIZZ TERMINE
        if (questions.length == 0)  {

        	webStorage.set('numcorrect', numcorrect, true);
        	webStorage.set('totalQuestion', $scope.totalQuestion, true);
 				  $scope.numcorrect = numcorrect;
 				  $scope.quizzTermine = true;

          //Commandes robot
          robotRegisterEvents();

   				var ratioMessage = '';
   				//Ratio de bonnes réponses
   				var ratioReponse =  numcorrect / $scope.totalQuestion;


        } else {


        	timerFinQuestion = $timeout(nextQuestion, timePerQuestion * 1000);
          $scope.currentQuestion = questions.shift();
 				  $scope.numquestion = $scope.numquestion + 1;
          $("div.reponse").css({'cursor' : 'pointer'});

 				  moveProgressBar();

 			  }

        };
        

      	// SIGNATURE PROGRESS
  	    var moveProgressBar = function () {

  	        var animationLength = timePerQuestion * 1000;
  	        $('.progress-bar').css({right : 0});
  	        
  	        // on page load, animate percentage bar to data percentage length
  	        // .stop() used to prevent animation queueing
  	        $('.progress-bar').stop().animate({
  	            right: '100%'
  	        }, animationLength);

  	    };

        var robotRegisterEvents = function () {

            $(document).keydown(robotKeyDown);
            $(document).keyup(robotKeyUp);

        };

        var robotUnregisterEvents = function () {

            $(document).unbind('keydown');
            $(document).unbind('keyup');

        };

        var robotKeyDown = function(e) {

            var text = e.type;
            var code = e.which ? e.which : e.keyCode;
            var commandUrl = appParam.serverBaseUrl + '/robot';


            if (appParam.robotKeyMapping[code] !== undefined) {   

                var delay = 0;
                
                //envoi du 1er ordre
                if (typeof keysQueue[code]  === 'undefined') {
                      
                      keysQueue[code] = new Date();
                      delay = minKeyDelay;
                }
                else 
                {
                      var end = new Date();
                      delay = end.getTime() - keysQueue[code].getTime();

                }

                if (delay >= minKeyDelay) 
                {

                    keysQueue[code] = new Date();
                    var mapkey = appParam.robotKeyMapping[code];

                    $http.post(commandUrl, {'key': mapkey}).success(function (response, status, headers, config) {
                                                           

                    });          

                }


            } 

        };



        var robotKeyUp = function (e) {

            var text = e.type;
            var code = e.which ? e.which : e.keyCode;
            var commandUrl = appParam.serverBaseUrl + '/robot';

            //STOP COMMAND
            $http.post(commandUrl, {'key': 'S'}).success(function (response, status, headers,config) {});

            //RESET délais touches
            keysQueue = [];

        };


        $scope.checkAnswer = checkAnswer;
        $scope.endGame = endGame;
        $scope.endGameConfirm = endGameConfirm;     


        /* MAIN */
        intro();

    }

    angular
        .module('neoQCM')
        .controller('EndGameController', EndGameController);
 
    EndGameController.$inject = ['$scope', '$timeout', '$location', '$http', 'CommonService', 'webStorage', 'RegistrationnService', 'appParam'];
    function EndGameController($scope, $timeout, $location, $http, CommonService, webStorage, RegistrationnService, appParam) {
        

        function sendScore() {

                var data = {};
                data.temps = webStorage.get('tempsFinal');
                data.credentials = RegistrationnService.getCredentials();
                data.theme= webStorage.get('theme');

                var promiseReturn = $http.post(appParam.serverBaseUrl  + "/addscore", data);

                promiseReturn.success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    $scope.result = data;       
                    $scope.points = getPoints(data); 
                    outro($scope.result.position);          
                    
                });
                promiseReturn.error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with status
                    // code outside of the [200,300[ interval
                     
                });

        }

        var outro = function (position) {

                    var videoelt = $('video.bg').get(0);

                    if (position > 3) return;

                    if (position == 1)  videoelt.setAttribute('src', 'assets/img/rebel.mp4#t=28');
 
                    //Retour auto aux scores
                    var endinterval = $timeout(function () {

                       $location.path('/scores');

                    }, 105 * 1000);                    


                    videoelt.volume = 0.5;
                    videoelt.play();

        }

        function getPoints(elt) {

            return elt.tempsrestant * appParam.pointsPerSecond;

        };

        sendScore();
        $scope.getPoints = getPoints;

    }
 
})();
