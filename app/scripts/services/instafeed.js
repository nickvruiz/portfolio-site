'use strict';

angular.module('webApp')
  .factory('InstaFeed', function ($http) {

    var instaItems;

    $http.get("/scripts/grams.json").success( function (data) {
      instaItems = data;
    });

    // Insta API
    return {
      getItems: function () {
        return instaItems;
      }
    };
  });
