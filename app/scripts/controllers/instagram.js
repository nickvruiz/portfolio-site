'use strict';

angular.module('webApp')
  .controller('InstagramCtrl', function ($scope, grams, ChangeBg) {

    $scope.thumbHover = true;

    $scope.grams = grams.data;

    // Get insta data
    // if($rootScope.getInstaItems) {
    //     ChangeBg.showBlurBg();
    //     ChangeBg.showHeaderBg();

    //     $scope.items = InstaFeed.getItems();
    //     console.log("got that insta shit");
    // }
  });
