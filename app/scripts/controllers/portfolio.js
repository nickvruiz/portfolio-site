'use strict';

angular.module('webApp')
  .controller('PortfolioCtrl', function ($scope, pieces, PortfolioRepo) {

    $scope.thumbHover = false;
    $scope.items = pieces.data;

  });
