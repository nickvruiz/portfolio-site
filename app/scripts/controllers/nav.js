'use strict';

angular.module('webApp')
  .controller('NavCtrl', function ($scope, ChangeBg) {

    $scope.showBg = function () {
        ChangeBg.showBlurBg();
        ChangeBg.showHeaderBg();
    };

    $scope.hideBg = function () {
        ChangeBg.hideBlurBg();
        ChangeBg.hideHeaderBg();
    };

  });