var assert = require('assert')
, Ikachan = require('../lib/ikachan-node');

describe('Setting up Mocha', function(){
  it('should run a simple test', function(done){
    var ikachan = new Ikachan("http://ikachan.example.com:8888");
    assert.equal(ikachan.hostname, "ikachan.example.com");
    assert.equal(ikachan.port,     "8888");
    assert.equal(ikachan.protocol, "http:");
    done();
  });
});
