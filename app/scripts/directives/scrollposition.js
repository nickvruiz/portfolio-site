'use strict';

angular.module('webApp')
  .directive('scrollPosition', function($window) {
    return {
      restrict: 'A',
      // scope: {
      //   scroll: '=scrollPosition'
      // },
      link: function(scope, element, attrs) {
        var windowEl = angular.element($window);
        var handler = function() {
          scope.scroll = windowEl.scrollTop();
        };
        windowEl.on('scroll', scope.$apply.bind(scope, handler));
        handler();
      }
    };
  });
