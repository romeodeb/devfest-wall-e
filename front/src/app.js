(function () {
    'use strict';

    var app = angular
            .module('neoQCM', ['ngRoute', 'ngCookies', 'webStorageModule', 'cfp.hotkeys', 'angular.filter'])
            .config(config)
            .run(run);

    app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });        

    /* ----------  CONFIG  -------------- */

    app.constant('appParam', {
        serverBaseUrl: '/devfest-wall-e/server/web/index.php',     
        videoStreamUrl : 'http://192.168.1.100:8081',
        pointsPerSecond : '100',
        confirmEndgamePassword : 'ninjago',
        cancelEndgamePassword :  'ninjadontgo', 
        timePerQuestion : 12, //en secondes
        penaliteBadAnswer : 15, //en secondes
        counterTime : 180, //Temps decompte en secondes
        seuilAlerte : 30, //seuil alerte fin du jeu en secondes
        nbQuestion : 10,
        robotKeyMapping : { '38' : 'F' , '40' : 'B' , '37' : 'L', '39' : 'R'},
        minKeyDelay : 1000
    });

    config.$inject = ['$routeProvider', '$locationProvider', 'hotkeysProvider'];
    function config($routeProvider, $locationProvider, hotkeysProvider) {

        hotkeysProvider.includeCheatSheet = false;
        
        $routeProvider
                .when('/', {
                    controller: 'ScoreController',
                    templateUrl: 'src/view/score.view.html',
                })
                .when('/quizz/:theme', {
                    controller: 'QCMController',
                    templateUrl: 'src/view/qcm.view.html',
                    controllerAs: 'vm'
                })
                .when('/theme', {
                    controller: 'ThemeController',
                    templateUrl: 'src/view/theme.view.html',
                    controllerAs: 'vm'
                })
                .when('/rules', {
                    controller: 'RulesController',
                    templateUrl: 'src/view/rules.view.html',
                    controllerAs: 'vm'
                })
                .when('/robot', {
                    controller: 'RobotController',
                    templateUrl: 'src/view/robot.view.html',
                    controllerAs: 'vm'
                })
                .when('/login', {
                    controller: 'LoginController',
                    templateUrl: 'src/view/login.view.html',
                    controllerAs: 'vm'
                })
                 .when('/scores', {
                    controller: 'ScoreController',
                    templateUrl: 'src/view/score.view.html',
                    controllerAs: 'vm'
                })
                .when('/endgame', {
                    controller: 'EndGameController',
                    templateUrl: 'src/view/endgame.view.html',
                })

                .otherwise({redirectTo: '/login'});
    }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page

            /*
            var restrictedPage = $.inArray($location.path(), ['/login', '', '/']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }*/

        });
    }

})();

