/**
 * service gérant le login d'un utilisateur
 * @returns {undefined}
 */
(function () {
    'use strict';

    angular
            .module('neoQCM')
            .factory('CommonService', CommonService);

    CommonService.$inject = ['$http', '$cookieStore', '$rootScope', 'webStorage'];
   
    function CommonService($http, $cookieStore, $rootScope, webStorage) {

            /* LOCAL DATA !! */
            var quizzTheme = _quizzTheme;


            function getTime(placeItem) {

                return placeItem.temps;
            
            };

            function getPoints(placeItem) {

                return placeItem.points;
            
            };


            function getThemes() {
                

                return quizzTheme;


            };


            return {

                getTime : getTime,
                getPoints : getPoints,
                getThemes : getThemes

            };


    };

        /**
     * Factory gérant la récupération des questions 
     */
    angular
            .module('neoQCM')
            .factory('QuizzService', function (filterFilter, $filter, appParam) {

            /* LOCAL DATA !! */
            var quizzData = _quizzData;
            var nbQuestion = appParam.nbQuestion;

            // -> Fisher–Yates shuffle algorithm
            var shuffleArray = function(array) {
                  var m = array.length, t, i;

                  // While there remain elements to shuffle
                  while (m) {
                    // Pick a remaining element…
                    i = Math.floor(Math.random() * m--);

                    // And swap it with the current element.
                    t = array[m];
                    array[m] = array[i];
                    array[i] = t;
                  }

                  return array;
            }

            var getQuestions = function (theme) {
                    
                        var que = filterFilter(quizzData, { theme : theme });

                        //On mélange les questions !!!
                        que = shuffleArray(que);

                        //Nombre questions cible
                        que = $filter('limitTo')(que, nbQuestion);

                        return que;
            };

            return {

                getQuestions: getQuestions

            };
    });

})();