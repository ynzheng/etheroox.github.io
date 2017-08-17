/* eslint-env browser */

module.exports = {
  homeURL: 'http://localhost:8080',
  contractEtheRoox: 'smart_contract/etheroox.sol',
  contractToken: 'smart_contract/token.sol',
  contractReserveToken: 'smart_contract/reservetoken.sol',
  contractEtheRooxAddrs: [
    { addr: '0xbca13cbebff557143e8ad089192380e9c9a58c70', info: 'Deployed 08/10/2017' },
    
  ],
  ethTestnet: 'ropsten',
  ethProvider: 'http://localhost:8545',
  ethGasPrice: 20000000000,
  ethAddr: '0x0000000000000000000000000000000000000000',
  ethAddrPrivateKey: '',
  gasApprove: 250000,
  gasDeposit: 250000,
  gasWithdraw: 250000,
  gasTrade: 250000,
  gasOrder: 250000,
  ordersOnchain: true,
  apiServer: 'http://localhost:3000',
  userCookie: 'EtheRoox',
  eventsCacheCookie: 'EtheRoox_eventsCache',
  deadOrdersCacheCookie: 'EtheRoox_deadOrdersCache',
  ordersCacheCookie: 'EtheRoox_ordersCache',
  etherscanAPIKey: 'SCYVG55I4EYS4JJ82NYMV87MGDGVNNZJ49',
  tokens: [
    { addr: '0x0000000000000000000000000000000000000000', name: 'ETH', decimals: 18 },
    { addr: '0x40aade55175aaeed9c88612c3ed2ff91d8943964', name: '1ST', decimals: 18 },
  ],
  defaultPair: { token: '1ST', base: 'ETH' },
  pairs: [
    { token: '1ST', base: 'ETH' },
  ],
};
