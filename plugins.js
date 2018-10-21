const XrpEscrowPlugin = require('ilp-plugin-xrp-escrow');

exports.xrp = {
  Wix: function () {
    return new XrpEscrowPlugin({
      secret: 'sh9P7GGryvcuAzcRLqgSkKQw7xqu2',
      account: 'r9k7quHo74erBuiz5bxg3p8YVv2LsBS46v',
      server: 'wss://s.altnet.rippletest.net:51233',
      prefix: 'test.crypto.xrp.'
    })
  }
}
