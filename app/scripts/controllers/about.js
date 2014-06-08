'use strict';

angular.module('webApp')
  .controller('AboutCtrl', function ($scope) {

    $scope.thumbHover = true;

    $scope.items = [
      {
          "name": "angular",
          "link": "https://angularjs.org/"
      },
      {
          "name": "jquery",
          "link": "http://jquery.com/"
      },
      {
          "name": "sass",
          "link": "http://sass-lang.com/"
      },
      {
          "name": "yeoman",
          "link": "http://yeoman.io/"
      },
      {
          "name": "grunt",
          "link": "http://gruntjs.com/"
      },
      {
          "name": "bower",
          "link": "http://bower.io/"
      },
      {
          "name": "foundation",
          "link": "http://foundation.zurb.com/"
      },
      {
          "name": "bootstrap",
          "link": "http://getbootstrap.com/"
      },
      {
          "name": "laravel",
          "link": "http://laravel.com/"
      },
      {
          "name": "php",
          "link": "http://www.php.net/"
      },
      {
          "name": "wordpress",
          "link": "http://wordpress.org/"
      },
      {
          "name": "git",
          "link": "http://git-scm.com/"
      }
    ];

  });
