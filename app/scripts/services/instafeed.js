'use strict';

angular.module('webApp')
  .factory('InstaFeed', function ($http) {

    // Insta API
    return {
      getItems: function () {
        console.log("getting insta shit");
        $http.get("/scripts/grams.json").success( function (data) {
          return data;
        });
      }
    };
  });
