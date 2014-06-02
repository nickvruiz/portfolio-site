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

      // .when('/contact', {
      //   templateUrl: 'views/contact.html',
      //   controller: 'ContactCtrl'
      // })

      .when('/instagram', {
        templateUrl: 'views/instagram.html',
        controller: 'InstagramCtrl',
        resolve: {
          grams: function(InstaFeed){
            return InstaFeed.getInstas();
          }
        }
      })

      .otherwise({
        redirectTo: '/'
      });

    // Remove # from urls
    $locationProvider.html5Mode(true);
  })
  .run(function ($rootScope, $location, $anchorScroll, $routeParams) {
    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
      $location.hash($routeParams.scrollTo);
      $anchorScroll();
    });

    // Set global variables
    $rootScope.showHeaderBg = $rootScope.hideMainNav = false;
    $rootScope.bgType = 'bg-contact';
  });
