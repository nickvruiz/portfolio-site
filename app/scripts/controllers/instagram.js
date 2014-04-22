'use strict';

angular.module('webApp')
  .controller('InstagramCtrl', function ($scope, $rootScope, InstaFeed, ChangeBg) {

    $scope.thumbHover = true;

    // Get insta data
    if($rootScope.getInstaItems) {
        ChangeBg.showBlurBg();
        ChangeBg.showHeaderBg();

        $scope.items = InstaFeed.getItems();
        console.log("got that insta shit");
    }
  });
