/**
 * page de login
 * @returns {undefined}
 */
(function () {
    'use strict';
 
    angular
        .module('neoQCM')
        .controller('LoginController', LoginController);
 
    LoginController.$inject = ['$location', 'RegistrationnService'];
    function LoginController($location, RegistrationnService) {
        var vm = this;
 
        vm.login = login;
 
        (function initController() {
            // reset login status
            RegistrationnService.ClearCredentials();
        })();
 
        function login() {
                    RegistrationnService.SetCredentials(vm.username, vm.mail);
                    // redirection vers la page theme
                    $location.path('/theme');
        };
    }
 
})();