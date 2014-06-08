'use strict';

angular.module('webApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true); // Remove # from urls

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
  })
  .run(function ($rootScope, $location, $anchorScroll, $routeParams) {

    // Set global variables
    $rootScope.showHeaderBg = false,
    $rootScope.routeLoading = false,
     $rootScope.hideMainNav = false;

    function scrollTop(){
      $location.hash($routeParams.scrollTo);
      $anchorScroll();
    }


    $rootScope.$on('$routeChangeStart',
      function () {
      $rootScope.routeLoading = true;
      scrollTop();
    });

    $rootScope.$on('$routeChangeSuccess',
      function () {
      $rootScope.routeLoading = false;
    });

    $rootScope.$on('$routeChangeError',
      function () {
      $location.path('/');
    });
  });
