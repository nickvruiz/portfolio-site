'use strict';

angular.module('webApp')
  .factory('InstaFeed', function ($q, $timeout, $http) {
    return {
      getInstas: function(){
        // Build url for instagram call
        var client_id = 'dfebeee8d16840879c66ca9bc298ae3c',
            user_id   = '16658532',
            count     = '30',
            url       = 'https://api.instagram.com/v1/users/' + user_id + '/media/recent/?client_id=' + client_id + '&count=' + count + '&callback=JSON_CALLBACK';

        // Get data
        var deferred = $q.defer();

        $timeout(function() { // Wait a sec to resolve
          deferred.resolve($http.jsonp(url));
        }, 1000);
        return deferred.promise;
       }
    }
  });
