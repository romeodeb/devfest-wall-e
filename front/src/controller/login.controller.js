/**
 * page de login
 * @returns {undefined}
 */
(function () {
    'use strict';
 
    angular
        .module('neoQCM')
        .controller('LoginController', LoginController);
 
    LoginController.$inject = ['$scope', '$location', 'RegistrationnService', '$http', 'appParam'];
    function LoginController($scope, $location, RegistrationnService, $http, appParam) {
        var vm = this;
 
        vm.login = login;
 
        (function initController() {
            // reset login status
            RegistrationnService.ClearCredentials();
        })();
 
        function login() {

                    RegistrationnService.SetCredentials(vm.username, vm.mail);

                    if (!validateEmail(vm.mail)) {

                             $scope.message = 'Email invalide !';
                             return;
                    }

                    var commandUrl = appParam.serverBaseUrl + '/checkuser';
                    //STOP ROBOT
                    $http.post(commandUrl, {'email': vm.mail}).success(function (response, status, headers, config) {
                                                                   

                           if (response)  {
                                //redirection vers la page theme
                                $location.path('/theme');
                           }
                           else {

                                $scope.message = 'Vous avez déja joué au jeu avec cet email !';

                           }

                    });  

                  

        };

        function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }



    }
 
})();