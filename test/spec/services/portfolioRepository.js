'use strict';

describe('Service: portfolioRepository', function () {

  // load the service's module
  beforeEach(module('webApp'));

  // instantiate service
  var portfolioRepository;
  beforeEach(inject(function (_portfolioRepository_) {
    portfolioRepository = _portfolioRepository_;
  }));

  it('should do something', function () {
    expect(!!portfolioRepository).toBe(true);
  });

});
