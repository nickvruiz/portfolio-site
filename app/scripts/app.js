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
        controller: 'PortfolioCtrl',
        resolve: { // Grab portfolios then load page
          pieces: ['PortfolioRepo', function(PortfolioRepo){
            return PortfolioRepo.getItems();
          }]
        }
      })

      .when('/portfolio/:category/:id', {
        templateUrl: 'views/single.html',
        controller: 'SingleCtrl',
        resolve: { // Grab portfolios then load page
          pieces: ['PortfolioRepo', function(PortfolioRepo){
            return PortfolioRepo.getItems();
          }]
        }
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
        controller: 'InstagramCtrl',
        resolve: { // Grab insta then load page
          grams: ['InstaFeed', function(InstaFeed){
            return InstaFeed.getInstas();
          }]
        }
      })

      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function ($rootScope, $window, $location, $routeParams) {

    // Set global variables
    $rootScope.showHeaderBg = false,
    $rootScope.routeLoading = false,
     $rootScope.hideMainNav = false;

    $rootScope.scrollTop = function () {
      $window.scrollTo(0,0);
    }

    $rootScope.$on('$routeChangeStart',
      function () {
      $rootScope.scrollTop();
      $rootScope.routeLoading = true;
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
