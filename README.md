# ikachan-node

Ikachan wrapper for node.js

[![wercker status](https://app.wercker.com/status/f5123cfde60c79027bfbc216d9629368/m "wercker status")](https://app.wercker.com/project/bykey/f5123cfde60c79027bfbc216d9629368)

## Install

```bash
$ npm install ikachan-node
```

## Usage

```javascript
var Ikachan = require('ikachan-node');
var ikachan = new Ikachan('http://irc.example.com:8888/');

ikachan.notice('#test', 'Build failed!!!!',
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

