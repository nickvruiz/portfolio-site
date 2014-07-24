'use strict';

angular.module('webApp')
  .controller('SingleCtrl', function ($scope, pieces, $routeParams, PortfolioRepo) {

    $scope.thumbHover = false;

    var id = $routeParams.id; // From url

    // Scope variables from JSON
    $scope.items = pieces.data;

    $scope.id       = id;
    $scope.url      = $scope.items[id].url;
    $scope.slug     = $scope.items[id].name;
    $scope.desc     = $scope.items[id].description;
    $scope.imgs     = $scope.items[id].images;
    $scope.url      = $scope.items[id].url;
    $scope.category = $scope.items[id].category;

    $scope.bar = ($scope.category == 'web' ? true : false);

    // Next & Previous buttons
    function pagination (id, numItems) {
        var last = numItems - 1,
             cur = parseInt(id);

        return {
            next: function () {
                if(cur >= 0 && cur < last) {
                    return cur + 1;
                } else {
                    return 0;
                }
            },
            prev: function () {
                if(cur > 0 && cur <= last) {
                    return cur - 1;
                } else {
                    return last;
                }
            }
        }
    }

    // Init paginate
    var paginate = pagination($routeParams.id, $scope.items.length),
          nextId = paginate.next(),
          prevId = paginate.prev();

    // Next & Prev Id
    $scope.next = nextId;
    $scope.prev = prevId;

    // Set categories based on Next & Prev ID
    $scope.prevCat = pieces.data[prevId].category;
    $scope.nextCat = pieces.data[nextId].category;

  });
