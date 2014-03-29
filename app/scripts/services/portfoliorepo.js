'use strict';

angular.module('webApp')
  .factory('PortfolioRepo', function ($http) {

    var portfolioItems;

    $http.get("/scripts/portfolio.json").success( function (data) {
      portfolioItems = data;
    });

    return {
      getItems: function () {
        return portfolioItems;
      }
    };
  });
