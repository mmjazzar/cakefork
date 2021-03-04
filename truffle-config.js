const HDWalletProvider = require('truffle-hdwallet-provider')
module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
   testnet: {
    provider: () => new HDWalletProvider(`0xb27eb9992934ad1374af950f10c96d45354da9a6036661e979001837e80863c5`, `https://data-seed-prebsc-1-s1.binance.org:8545`),
    network_id: 97,
    confirmations: 10,
    timeoutBlocks: 200000000000000000000000000000000,
    skipDryRun: true
  },
  //  development: {
  //    host: "127.0.0.1",
  //    port: 7545,
  //    network_id: "*"
  //  },
  test: {
     host: "127.0.0.1",
     port: 8545,
     network_id: "*"
  }
  },
  //
  compilers: {
    solc: {
      version: "0.6.12"
    }
  }
};
