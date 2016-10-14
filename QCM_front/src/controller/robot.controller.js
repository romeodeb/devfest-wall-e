/**
 * page de commande du robot
 * @returns {undefined}
 */
(function () {
    'use strict';

    angular
            .module('neoQCM')
            .controller('RobotController', RobotController);

    RobotController.$inject = ['$location', '$http', 'hotkeys', '$interval'];
    function RobotController($location, $http, hotkeys, $interval) {
        var vm = this;

        /**
         * Destruction et création des listeners des touches du clavier afin de limiter le nombre de 
         * requete envoyé au serveur et rendre le robot plus facile à piloter
         * @type type
         */
        var inter = $interval(function () {
            
            hotkeys.del('z');
            hotkeys.del('q');
            hotkeys.del('s');
            hotkeys.del('d');

            hotkeys.add({
                combo: 'z',
                description: 'This one goes to 11',
                callback: function () {
                    $http.post("/QCM/web/index.php/robot", {'key': 'A'}).success(function (response, status, headers, config) {
                        hotkeys.del('z');
                    });
                }
            });

            hotkeys.add({
                combo: 'q',
                description: 'This one goes to 11',
                callback: function () {
                    $http.post("/QCM/web/index.php/robot", {'key': 'G'}).success(function (response, status, headers, config) {
                        hotkeys.del('q');
                    });
                }
            });

            hotkeys.add({
                combo: 's',
                description: 'This one goes to 11',
                callback: function () {
                    $http.post("/QCM/web/index.php/robot", {'key': 'R'}).success(function (response, status, headers, config) {
                        hotkeys.del('s');
                    });
                }
            });

            hotkeys.add({
                combo: 'd',
                description: 'This one goes to 11',
                callback: function () {
                    $http.post("/QCM/web/index.php/robot", {'key': 'D'}).success(function (response, status, headers, config) {
                        hotkeys.del('d');
                    });
                }
            });

        }, 550);


    }

})();
