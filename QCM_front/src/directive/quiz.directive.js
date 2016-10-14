/**
 * directives gérant les questions du quiz
 * @returns {undefined}
 */
(function () {
    'use strict';

    var app = angular.module('neoQCM');

    app.directive('quiz', ['quizFactory', '$timeout', '$interval', 'webStorage', function (quizFactory, $timeout, $interval, webStorage) {
            return {
                restrict: 'AE',
                scope: {},
                templateUrl: 'src/view/directive/quiz.html',
                link: function (scope, elem, attrs) {

                    var timer;
                    var inter;
                    var countSec;

                    /**
                     * init
                     * @returns {undefined}
                     */
                    scope.start = function () {
                        scope.id = 0;
                        scope.quizOver = false;
                        scope.inProgress = true;
                        scope.length = quizFactory.getLength();
                        scope.correct = 0;
                        webStorage.remove('temps');
                        webStorage.remove('penalite');
                        scope.getQuestion();
                    };

                    /**
                     * 
                     * @returns {undefined}
                     */
                    scope.reset = function () {
                        scope.inProgress = false;
                        scope.score = 0;
                    };

                    /**
                     * 
                     * @returns {undefined}
                     */
                    scope.getQuestion = function () {
                        countSec = 1;
                        $interval.cancel(inter);

                        // compteur pour la progress bar
                        scope.progress = "100";
                        // on diminue la progress bar de 10 toutes les secondes
                        inter = $interval(function () {
                            scope.progress -= 10;
                            //nombre de secondes pour répondre à la question
                            countSec++;
                        }, 1000);
                        // timer de fin de question 
                        timer = $timeout(scope.checkAnswer, 10500);

                        //appel à la factory pour récupérer la question
                        var q = quizFactory.getQuestion(scope.id);
                        if (q) {
                            scope.question = q.question;
                            scope.options = q.options;
                            scope.answer = q.answer;
                            scope.answerMode = true;
                        } else {
                            // si fin du questionnaire on récupére le score pour l'affichage
                            scope.temps = webStorage.get('temps');
                            scope.penalite = webStorage.get('penalite');
                            scope.user = webStorage.get('username');
                            // destruction du timer et de l'interval
                            $timeout.cancel(timer);
                            $interval.cancel(inter);
                            scope.quizOver = true;
                        }

                    };

                    /**
                     * 
                     * @returns {undefined}
                     */
                    scope.checkAnswer = function () {
                        // destruction du timer
                        $timeout.cancel(timer);

                        //si pas de réponse
                        if (!$('input[name=answer]:checked').length) {
                            webStorage.set('penalite', webStorage.get('penalite') + 10, true);
                            scope.correctAns = false;
                            $timeout(scope.nextQuestion, 1000);
                        } else {

                            var ans = $('input[name=answer]:checked').val();
                            // si réponse correct
                            if (ans == scope.options[scope.answer]) {
                                scope.correct++;
                                scope.correctAns = true;
                                webStorage.set('temps', webStorage.get('temps') + countSec, true);
                            } else {
                                // affichage de la mauvaise réponse
                                $('.answers').eq($('input[name=answer]:checked').data('index')).css("background-color", "red");
                                webStorage.set('penalite', webStorage.get('penalite') + 10, true);
                                scope.correctAns = false;
                            }

                        }
                        // affichage de la bonne réponse
                        $('.answers').eq(scope.answer).css("background-color", "green");
                        scope.answerMode = false;
                        timer = $timeout(scope.nextQuestion, 1000);

                    };

                    scope.nextQuestion = function () {
                        $timeout.cancel(timer);
                        scope.id++;
                        scope.getQuestion();
                    };




                    scope.reset();

                    scope.start();
                    
                    /**
                     * Destruction du timer et de l'interval en cas de changement d'url ou de fermeture du browser
                     */
                    scope.$on(
                            "$destroy",
                            function (event) {
                                $timeout.cancel(timer);
                                $interval.cancel(inter);
                            }
                    );
                }
            };
        }]);

    /**
     * Factory gérant la récupération des questions 
     */
    app.factory('quizFactory', function () {

        //TODO: remplacer bouchon par appel au webservice 

        //webStorage.get('themeQCM')

        var questions = [
            {
                question: "Which is the largest country in the world by population?",
                options: ["India", "USA", "China", "Russia"],
                answer: 2
            },
            {
                question: "When did the second world war end?",
                options: ["1945", "1939", "1944", "1942"],
                answer: 0
            },
            {
                question: "Which was the first country to issue paper currency?",
                options: ["USA", "France", "Italy", "China"],
                answer: 3
            },
            {
                question: "Which city hosted the 1996 Summer Olympics?",
                options: ["Atlanta", "Sydney", "Athens", "Beijing"],
                answer: 0
            },
            {
                question: "Who invented telephone?",
                options: ["Albert Einstein", "Alexander Graham Bell", "Isaac Newton", "Marie Curie"],
                answer: 1
            }
        ];

        return {
            getQuestion: function (id) {
                if (id < questions.length) {
                    return questions[id];
                } else {
                    return false;
                }
            },
            getLength: function () {
                return questions.length;
            }
        };
    });

})();