'use strict';

angular.module('webApp')
  .factory('ChangeBg', function () {

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
      }
    };
  });