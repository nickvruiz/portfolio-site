'use strict';

describe('Service: instaFeed', function () {

  // load the service's module
  beforeEach(module('webApp'));

  // instantiate service
  var instaFeed;
  beforeEach(inject(function (_instaFeed_) {
    instaFeed = _instaFeed_;
  }));

  it('should do something', function () {
    expect(!!instaFeed).toBe(true);
  });

});
