'use strict';

angular.module('webApp')
  .controller('PortfolioCtrl', function ($scope, PortfolioRepo) {

    $scope.thumbHover = true;

    // Get portfolio data
    $scope.items = PortfolioRepo.getItems();

  });
