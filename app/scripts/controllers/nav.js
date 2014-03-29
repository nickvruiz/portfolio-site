'use strict';

angular.module('webApp')
  .controller('NavCtrl', function ($scope, ChangeBg) {

    $scope.showBg = function () {
        ChangeBg.showBlurBg();
        // console.log("poop");
    };

    $scope.hideBg = function () {
        ChangeBg.hideBlurBg();
    };
  });