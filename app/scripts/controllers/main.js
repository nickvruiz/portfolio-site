'use strict';

angular.module('webApp')
  .controller('MainCtrl', function ($scope, ChangeBg, PortfolioRepo) {

    $scope.$watch(ChangeBg.toggleBg, function () {
        $scope.toggleBg = ChangeBg.toggleBg();
    });

    $scope.items = PortfolioRepo.getItems();

  });
