var expect = require('chai').expect,
    checkImplements = require('..');

describe('checkimplements', function() {
  it('should export a function', function(done) {
    expect(checkImplements).to.be.a('function');
    done();
  });
});
