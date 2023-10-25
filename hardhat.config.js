require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "3eHXh2byYuCGtwphlF_n8xVKhDw1KJKe";

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const MANTLETEST_PRIVATE_KEY = "a4b648aa2c9ba1369817ca16cd6eaaead9c2afb17360dbbca2e24b839d080703";

module.exports = {
  solidity: "0.8.19",
  networks: {
    mantletest: {
      chainId: 5001,
      url: 'https://rpc.testnet.mantle.xyz',
      accounts: [
        'a4b648aa2c9ba1369817ca16cd6eaaead9c2afb17360dbbca2e24b839d080703',
      ],
    }
  }
};
