/**
 * page de choix du théme
 * @returns {undefined}
 */
(function () {
    'use strict';

    angular
            .module('neoQCM')
            .controller('ThemeController', ThemeController);

    ThemeController.$inject = ['$location','webStorage'];
    function ThemeController($location, webStorage) {
        var vm = this;

        vm.saveTheme = saveTheme;

        function saveTheme(theme) {
            // on sauvegarde le théme en webstorage
            webStorage.set("theme", theme, true);
            $location.path('/rules');
        }
    }

})();