'use strict';

describe('Service: ChangeBg', function () {

  // load the service's module
  beforeEach(module('webApp'));

  // instantiate service
  var ChangeBg;
  beforeEach(inject(function (_ChangeBg_) {
    ChangeBg = _ChangeBg_;
  }));

  it('should do something', function () {
    expect(!!ChangeBg).toBe(true);
  });

});
