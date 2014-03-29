'use strict';

angular.module('webApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  // 'wu.masonry',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

      .when('/portfolio/:category', {
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

      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })

      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
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
      console.log($rootScope.path);
    });
  });
