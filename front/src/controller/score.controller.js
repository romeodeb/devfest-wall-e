(function () {
    'use strict';
 
    angular
        .module('neoQCM')
        .controller('ScoreController', ScoreController);
 
    ScoreController.$inject = ['$scope', '$location', '$http', 'CommonService', 'appParam'];
    function ScoreController($scope, $location, $http, CommonService, appParam) {
        

        $http({
          method: 'GET',
          url: appParam.serverBaseUrl + '/scores'
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available

            $scope.scores = response.data;

          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });


        $scope.getPoints = function (elt) {

            return elt.tempsrestant * appParam.pointsPerSecond;

        }


    }
 
})();