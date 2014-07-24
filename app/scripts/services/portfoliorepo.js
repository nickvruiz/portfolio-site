'use strict';

angular.module('webApp')
  .factory('PortfolioRepo', function ($q, $timeout, $http) {
    return {
      getItems: function(){
        var url = '/scripts/portfolio.json';

        // Get data
        var deferred = $q.defer();

        $timeout(function() { // Wait a sec to resolve

          // console.log($http.get(url));

          deferred.resolve($http.get(url));
        }, 1000);
        return deferred.promise;
      }
    };
  });
