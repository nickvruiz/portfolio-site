'use strict';

angular.module('webApp')
  .controller('SingleCtrl', function ($scope, $routeParams, PortfolioRepo) {

    // Our current portfolio piece id
    var id = $routeParams.id;

    // Hide hover effect on portfolio items
    $scope.thumbHover = true;

    // Grab JSON data
    $scope.items = PortfolioRepo.getItems();

    // Create scope variables from JSON
    $scope.id   = id;
    $scope.url  = $scope.items[id].url;
    $scope.slug = $scope.items[id].name;
    $scope.desc = $scope.items[id].description;
    $scope.imgs = $scope.items[id].images;
    $scope.url  = $scope.items[id].url;

    // Create scope variable from Route Params category
    $scope.category = $routeParams.category;

    // Only show browser bar on web category images
    $scope.bar = ($routeParams.category == 'web' ? true : false);

  });
