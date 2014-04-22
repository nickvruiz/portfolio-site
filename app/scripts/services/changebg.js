'use strict';

angular.module('webApp')
  .factory('ChangeBg', function ($rootScope) {

    var toggleBg = false;

    // Bg API
    return {
      showBlurBg: function () {
        toggleBg = true;
      },
      hideBlurBg: function () {
        toggleBg = false;
      },
      toggleBg: function () {
        return toggleBg;
      },
      showHeaderBg: function () {
        $rootScope.showHeaderBg = true;
      },
      hideHeaderBg: function () {
        $rootScope.showHeaderBg = false;
      }
    };
  });