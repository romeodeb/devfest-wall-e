(function () {
    'use strict';

    var app = angular
            .module('neoQCM', ['ngRoute', 'ngCookies', 'webStorageModule', 'cfp.hotkeys'])
            .config(config)
            .run(run);

    config.$inject = ['$routeProvider', '$locationProvider', 'hotkeysProvider'  ];
    function config($routeProvider, $locationProvider, hotkeysProvider) {

        hotkeysProvider.includeCheatSheet = false;
        
        $routeProvider
                .when('/', {
                    controller: 'indexController',
                    templateUrl: 'src/view/index.view.html',
                    controllerAs: 'vm'
                })
                .when('/qcm', {
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
            console.log($location.path());
            var restrictedPage = $.inArray($location.path(), ['/login', '', '/']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

})();

