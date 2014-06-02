'use strict';

angular.module('webApp')
  .factory('InstaFeed', function ($http) {

    // Insta API
    return {
      getInstas: function () {
        console.log("getting insta shit");
        var client_id = 'dfebeee8d16840879c66ca9bc298ae3c',
            count = 10,
            url = '/scripts/grams.json';
            // url = 'https://api.instagram.com/v1/users/3/media/recent/?client_id=' + client_id + '&count=' + count;

        var promise = $http({ method: 'GET', url: url }).success(function(data, status, headers, config) {
          return data;
        });
        return promise;
      }
    };
  });
