# ikachan-node

Ikachan wrapper for node.js

[![Build Status](https://secure.travis-ci.org/udzura/ikachan-node.png)](http://travis-ci.org/udzura/ikachan-node)

## Install

```bash
$ npm install ikachan-node
```

## Usage

```javascript
var Ikachan = require('ikachan-node');
var ikachan = new Ikachan('http://irc.example.com:8888/');

ikachan.notcie('#test', 'Build failed!!!!',
  function(response, error) {
    if(error == null) {
      console.log(response); // log response text
    }
  }
);
// Ikachan#privmsg also available
```

## Contributing

Usual GitHub way.

## License

MIT / See LICENSE.txt.

