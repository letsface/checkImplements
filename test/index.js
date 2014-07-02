var expect = require('chai').expect,
    checkImplements = require('..');

describe('checkimplements', function() {
  it('should say hello', function(done) {
    expect(checkImplements()).to.equal('Hello, world');
    done();
  });
});
