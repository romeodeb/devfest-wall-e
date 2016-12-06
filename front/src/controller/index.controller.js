/**
 * page d'index : affichage des scores / bouton "start"
 * @returns {undefined}
 */
(function () {
    'use strict';
 
    angular
        .module('neoQCM')
        .controller('indexController', indexController);
 
    indexController.$inject = ['$location'];
    function indexController($location) {
        var vm = this;
        
    }
 
})();