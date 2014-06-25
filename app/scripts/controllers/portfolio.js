'use strict';

angular.module('webApp')
  .controller('PortfolioCtrl', function ($scope, PortfolioRepo) {

    // Hide hover
    $scope.thumbHover = false;

    // Get portfolio data
    $scope.items = PortfolioRepo.getItems();

  });
