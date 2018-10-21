const http = require('http')
const url = require('url')
const crypto = require('crypto')
const plugin = require('./plugins.js').xrp.Wix()


const cost = 1000

function base64url (buf) {
  return buf.toString('base64')
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

    console.log(` 1. Connecting to an account to accept payments...`)


    plugin.connect().then(function () {
      // Get ledger and account information from the plugin
      const ledgerInfo = plugin.getInfo()
      const account = plugin.getAccount()

      console.log(`    - Connected to ledger: ${ledgerInfo.prefix}`)
      console.log(`    -- Account: ${account}`)
      console.log(`    -- Currency: ${ledgerInfo.currencyCode}`)
      console.log(`    -- CurrencyScale: ${ledgerInfo.currencyScale}`)

      // Convert our cost (1000) into the right format given the ledger scale
      const normalizedCost = cost / Math.pow(10, parseInt(ledgerInfo.currencyScale))

      console.log(`    - Charging ${normalizedCost} ${ledgerInfo.currencyCode}`)

    });


      // Handle incoming payments
    plugin.on('incoming_prepare', function (transfer) {
      if (parseInt(transfer.amount) < 4000000) {
        // Transfer amount is incorrect
        console.log(`    - Payment received for the wrong amount ` +
                                          `(${transfer.amount})... Rejected`)

        const normalizedAmount = transfer.amount /
                              Math.pow(10, parseInt(ledgerInfo.currencyScale))

        plugin.rejectIncomingTransfer(transfer.id, {
          code: 'F04',
          name: 'Insufficient Destination Amount',
          message: `Please send at least 10 ${ledgerInfo.currencyCode},` +
                    `you sent ${normalizedAmount}`,
          triggered_by: plugin.getAccount(),
          triggered_at: new Date().toISOString(),
          forwarded_by: [],
          additional_info: {}
        })
      } else {

        console.log(`Payment complete! ${transfer.from} bid ${transfer.amount}`);
      }
    })


//wixSetUp().then(console.log)

//module.exports = wixSetUp;
