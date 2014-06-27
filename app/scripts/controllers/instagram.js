'use strict';

angular.module('webApp')
  .controller('InstagramCtrl', function ($scope, grams, InstaFeed) {

    $scope.thumbHover = true;
    $scope.grams = grams.data.data;

  });
