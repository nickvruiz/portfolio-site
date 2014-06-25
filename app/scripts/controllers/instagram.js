'use strict';

angular.module('webApp')
  .controller('InstagramCtrl', ['$scope', 'grams', function ($scope, grams) {

    $scope.thumbHover = true;
    $scope.grams = grams.data;
  }]);
