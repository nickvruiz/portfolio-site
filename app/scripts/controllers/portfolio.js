'use strict';

angular.module('webApp')
  .controller('PortfolioCtrl', function ($scope, $routeParams, PortfolioRepo) {

    $scope.thumbHover = true;
    // $scope.category = $routeParams.category;

    // if($routeParams.category == 'web') {
    //     $scope.description = 'Learn by doing. A collection of professional and personal development.';
    // } else if($routeParams.category == 'photo') {
    //     $scope.description = 'Concepts, photo manipulation and more.';
    // } else if($routeParams.category == 'video') {
    //     $scope.description = 'Motion graphics, video production and editing techniques.';
    // }

    $scope.items = PortfolioRepo.getItems();

  });
