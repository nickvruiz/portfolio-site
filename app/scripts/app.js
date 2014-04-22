'use strict';

angular.module('webApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'ui.bootstrap',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
        // templateUrl: 'views/about.html',
        // controller: 'AboutCtrl'
      })

      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl'
      })

      .when('/portfolio/:category/:id', {
        templateUrl: 'views/single.html',
        controller: 'SingleCtrl'
      })

      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })

      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })

      .when('/instagram', {
        templateUrl: 'views/instagram.html',
        controller: 'InstagramCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });

    // Remove # from urls
    $locationProvider.html5Mode(true);
  })
  .run(function ($rootScope, $location) {
    $rootScope.$on("$locationChangeStart", function (event, next, current) {
      $rootScope.path = $location.path();
      // console.log($rootScope.path);
    });

     $rootScope.showHeaderBg = false;
  });
