'use strict';

angular.module('webApp')
  .controller('BgCtrl', function ($scope, ChangeBg) {

    $scope.toggleBg = false;

    $scope.$watch(ChangeBg.toggleBg, function () {
        $scope.toggleBg = ChangeBg.toggleBg();
    });

  });