'use strict';

angular.module('webApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.bricks = [
        { src: 0 },
        { src: 1 },
        { src: 2 },
        { src: 3 },
        { src: 4 },
        { src: 5 }
    ];

    $scope.message = 'This is the about page!!!!';
  });
