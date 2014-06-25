'use strict';

angular.module('webApp')
  .controller('InstagramCtrl', ['grams', 'InstaFeed', function ($scope, grams, InstaFeed) {

    $scope.thumbHover = true;
    $scope.grams = grams.data;
  }]);
