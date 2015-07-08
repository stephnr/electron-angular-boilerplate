'use strict';

jest.dontMock('../dist/js/sample.js');

describe('My Sample JS', function() {
  var SampleApp = require('../dist/js/sample');

  it('should exist', function() {
    expect(SampleApp).toBeDefined();
    console.log(SampleApp);
  });
});
