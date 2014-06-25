'use strict';

angular.module('webApp')
  .controller('SingleCtrl', function ($scope, $routeParams, PortfolioRepo) {

    $scope.thumbHover = false;

    // Get data
    $scope.items = PortfolioRepo.getItems();

    var id        = $routeParams.id, // From url
        newId     = parseInt(id),
        lastPiece = $scope.items.length - 1;

    // Scope variables from JSON
    $scope.id       = id;
    $scope.url      = $scope.items[id].url;
    $scope.slug     = $scope.items[id].name;
    $scope.desc     = $scope.items[id].description;
    $scope.imgs     = $scope.items[id].images;
    $scope.url      = $scope.items[id].url;
    $scope.category = $scope.items[id].category;

    $scope.bar = ($scope.category == 'web' ? true : false);

    // Paginate - Needs refactoring
    if( id == 0 ) {
        $scope.prev = lastPiece;
        $scope.next = newId + 1;
        $scope.prevCat = $scope.items[lastPiece].category;
        $scope.nextCat = $scope.items[newId + 1].category;
    }
    if( id == lastPiece ) {
        $scope.next = 0;
        $scope.prev = newId - 1;
        $scope.prevCat = $scope.items[newId - 1].category;
        $scope.nextCat = $scope.items[0].category;
    }
    if( id > 0 && id < lastPiece ) {
        $scope.next = newId + 1;
        $scope.prev = newId - 1;
        $scope.prevCat = $scope.items[newId + 1].category;
        $scope.nextCat = $scope.items[newId - 1].category;
    }
  });
