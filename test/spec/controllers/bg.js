'use strict';

describe('Controller: BgCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var BgCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BgCtrl = $controller('BgCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
