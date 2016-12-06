/**
 * page de choix du théme
 * @returns {undefined}
 */
(function () {
    'use strict';

    angular
            .module('neoQCM')
            .controller('ThemeController', ThemeController);

    ThemeController.$inject = ['$scope', 'CommonService'];
    function ThemeController($scope, CommonService) {


        $scope.themes = CommonService.getThemes();

    }

})();