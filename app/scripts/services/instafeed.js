'use strict';

angular.module('webApp')
  .factory('InstaFeed', function ($http) {

    // Insta API
    return {
      getInstas: function () {
        console.log("getting insta shit");
        var client_id = 'dfebeee8d16840879c66ca9bc298ae3c',
            count = 30,
            url = 'https://api.instagram.com/v1/users/3/media/recent/?client_id=' + client_id + '&count=' + count;

        return $http.get(url);
      }
    };
  });
