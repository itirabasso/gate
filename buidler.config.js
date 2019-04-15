require('@nomiclabs/buidler-truffle4')

require('./scripts/cmd')

module.exports = {
  contracts: {
    mainnet: {
      DecentralandInvite: '0xf886313f213c198458eba7ae9329525e64eb763a'
    },
    ropsten: {
      DecentralandInvite: '0x7557dfa02f3bd7d274851e3f627de2ed2ff390e8'
    }
  },
  networks: {
    mainnet: {
      url: `https://mainnet.infura.io/${process.env.INFURA_API_KEY}`,
      mnemonic: process.env.MNEMONIC,
      network_id: 1,
      gas: 70000000
    },
    ropsten: {
      url: `https://ropsten.infura.io/${process.env.INFURA_API_KEY}`,
      mnemonic: process.env.MNEMONIC,
      network_id: 3,
      gas: 30000000
    },
    development: {
      host: 'localhost',
      port: 18545,
      network_id: '*',
      gas: 100000000
    }
  },
  solc: {
    version: '0.4.24',
    evmVersion: 'homestead'
  }
}
