
function Ikachan(ikaUrl) {
  var url  = require('url');
  this.url = url.parse(ikaUrl);
  this.hostname = this.url.hostname;
  this.port     = this.url.port;
  this.protocol = this.url.protocol;
}

Ikachan.prototype.join = function(channel, callback) {
  this.request('/join', {channel: channel}, callback);
};

Ikachan.prototype.notice = function(channel, message, callback) {
  var self = this;
  this.join(channel, function(r, e) {
    if ( e == null )
      self.request('/notice', {channel: channel, message: message}, callback);
  });
};

Ikachan.prototype.privmsg = function(channel, message, callback) {
  var self = this;
  this.join(channel, function(r, e) {
    if ( e == null )
      self.request('/privmsg', {channel: channel, message: message}, callback);
  });
};

Ikachan.prototype.request = function(path, params, callback) {
  var client;
  if (this.protocol === 'https:') {
    client = require('https');
  } else {
    client = require('http');
  }

  var data   = require('querystring').stringify(params);
  var options = {
    hostname: this.hostname,
    port    : parseInt(this.port),
    path    : path,
    method  : 'POST',
    headers : {
      'Content-Type'  : 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(data),
      'Accept'        : '*/*'
    }
  };

  var req = client.request(options, function(res) {
    var responseBody = '';
    res.setEncoding('utf8');

    res.on('data', function(chunk) {
      responseBody += chunk;
    });

    res.on('end', function() {
      callback(responseBody, null);
    });
  }).on('error', function(e) {
    callback(null, e);
  });
  req.write(data);
  req.end();
};

exports = module.exports = Ikachan;
