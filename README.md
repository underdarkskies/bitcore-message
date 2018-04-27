# Ravencoin Message Verification and Signing for Ravencore




ravencore-message adds support for verifying and signing ravencoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main ravencore repo](https://github.com/underdarkskies/ravencore) for more information.

## Getting Started

```sh
npm install ravencore-message
```

```sh
bower install ravencore-message
```

To sign a message:

```javascript
var ravencore = require('ravencore-lib');
var Message = require('ravencore-message');

var privateKey = ravencore.PrivateKey.fromWIF('5K2DxqJ9kLFL3hF3KEWDftAig3TyAXenDxpr27PaLBieuSFo5PQ');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'RGRsG7UQc3AmvdrhPDngpPjvTNhJQFeHYj';
var signature = 'G5cFMHRysjcxkBJ7mol8l3cjPbFQFQ68fNqTGehTO9/cLNUaflt3gQT//yAUp5fqWF0snDlZYkXJoooazBicRTg=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/underdarkskies/ravencore/blob/master/CONTRIBUTING.md) on the main ravencore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/underdarkskies/ravencore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
