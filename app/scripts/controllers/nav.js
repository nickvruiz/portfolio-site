'use strict';

angular.module('webApp')
  .controller('NavCtrl', function ($scope, $rootScope, ChangeBg) {

    $scope.showBg = function () {
        ChangeBg.showBlurBg();
        ChangeBg.showHeaderBg();
    };

    $scope.hideBg = function () {
        ChangeBg.hideBlurBg();
        ChangeBg.hideHeaderBg();
    };

    $scope.loadInsta = function () {
        $rootScope.getInstaItems = true;
    }

  });