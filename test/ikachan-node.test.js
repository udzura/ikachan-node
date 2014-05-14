var assert = require('assert')
, Ikachan = require('../lib/ikachan-node');

describe('Setting up Mocha', function(){
  it('should run a simple test', function(done){
    var ikachan = new Ikachan("http://ikachan.example.com:8888");
    assert.equal(ikachan.url, "http://ikachan.example.com:8888");
    done();
  });
});
