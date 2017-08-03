/* eslint-env browser */

module.exports = {
  homeURL: 'http://localhost:8080',
  contractEtheRoox: 'smart_contract/etheroox.sol',
  contractToken: 'smart_contract/token.sol',
  contractReserveToken: 'smart_contract/reservetoken.sol',
  contractEtheRooxAddrs: [
    { addr: '0x92C9e15aBBA664F52af1398e97cd9dC5345FF51C', info: 'Deployed 03/08/2017' },
    
  ],
  ethTestnet: 'rinkeby',
  ethProvider: 'http://localhost:8545',
  ethGasPrice: 20000000000,
  ethAddr: '0x0000000000000000000000000000000000000000',
  ethAddrPrivateKey: '',
  gasApprove: 250000,
  gasDeposit: 250000,
  gasWithdraw: 250000,
  gasTrade: 250000,
  gasOrder: 250000,
  ordersOnchain: false,
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
