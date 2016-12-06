/**
 * page d'explication des régles
 * @returns {undefined}
 */
(function () {
    'use strict';

    angular
            .module('neoQCM')
            .controller('RulesController', RulesController);

    RulesController.$inject = ['$location', '$interval'];
    function RulesController($location, $interval) {
        var vm = this;

        vm.timer = 10;

        var inter = $interval(function () {
            vm.timer--;
            if(vm.timer == 0){
                // redirection vers la page du qcm aprés 10 secondes
                 $location.path('/qcm');
            }
        }, 1000);

    }

})();