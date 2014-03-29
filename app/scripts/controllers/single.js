'use strict';

angular.module('webApp')
  .controller('SingleCtrl', function ($scope, $routeParams, PortfolioRepo) {

    var id = $routeParams.id;

    $scope.category = $routeParams.category;
    $scope.items = PortfolioRepo.getItems();

    $scope.id   = id;
    $scope.url  = $scope.items[id].url;
    $scope.slug = $scope.items[id].name;
    $scope.desc = $scope.items[id].description;
    $scope.imgs = $scope.items[id].images;

  });
