# Getting started

DoTA 2 server-side client for ILP running on Heroku. This repository contains all the Heroku code. If you want to experiment with our code, you could just download the zip!

# Dependencies
The following libraries need to be installed.
* Node installed - v7+
* NPM installed - v8.10.0+

# Instructions
1. Download the zip from our GitHub and unzip the contents.
2. Change your working directory to the new folder and run the following command to install all dependencies.
`npm install`
3. To create a new ripple test net account, check the instructions in plugins.js. **Make sure to edit the account credentials!**
4. Finally, to try out the server, run index.js.
`node index.js`
5. You have a server running waiting for payments on the Interledger Protocol!!! Head over to <a href=https://github.com/abhaysarda/pay2play-client>pay2play-client</a> to download the client code. **Be sure to edit the account you will be paying in the PayWixAtSignUp.js file.**
6. Once you have both the repositories set up in your local machine, open two terminal windows and cd into the pay2play folder in one window and the pay2play-client folder in the other one.
7. Start your server by running the command.
`node index.js`
8. In the other window, send some money to this account by running the client side code.
`node PayWixAtSignUp.js`
9. You just sent a payment through the Interledger Network!!


## Known Bugs

An error might occur while running the PayWixAtSignUp script.
` 2. Making payment to test.crypto.xrp.r9k7quHo74erBuiz5bxg3p8YVv2LsBS46v
no such schema </tag>`.

Ensure that you ran the `npm install --save jsonschema@1.2.2` command.

## License
All files in this repo are under the MIT license. Feel free to reuse them in your projects!
