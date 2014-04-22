'use strict';

angular.module('webApp')
  .controller('InstagramCtrl', function ($scope, InstaFeed) {

    $scope.thumbHover = true;

    // Get insta data
    $scope.items = function () {
        $scope.showLoader = true;
        return InstaFeed.getItems();
    }

    console.log(typeof $scope.items);

  });
