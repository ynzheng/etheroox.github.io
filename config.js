/* eslint-env browser */

module.exports = {
  homeURL: 'http://etheroox.com',
  contractEtheRoox: 'smart_contract/etheroox.sol',
  contractToken: 'smart_contract/token.sol',
  contractReserveToken: 'smart_contract/reservetoken.sol',
  contractEtheRooxAddrs: [
    { addr: '0xBca13CbEBFF557143E8Ad089192380E9C9A58c70', info: 'Deployed 08/10/2017' },
  ],
  ethTestnet: false,
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
  apiServer: 'http://etheroox.com',
  userCookie: 'EtheRoox',
  eventsCacheCookie: 'EtheRoox_eventsCache',
  deadOrdersCacheCookie: 'EtheRoox_deadOrdersCache',
  ordersCacheCookie: 'EtheRoox_ordersCache',
  etherscanAPIKey: 'SCYVG55I4EYS4JJ82NYMV87MGDGVNNZJ49',
  tokens: [
    { addr: '0x0000000000000000000000000000000000000000', name: 'ETH', decimals: 18 },
    { addr: '0xd0d6d6c5fe4a677d343cc433536bb717bae167dd', name: 'ADT', decimals: 9 },
    { addr: '0x4470bb87d77b963a013db939be332f927f2b992e', name: 'ADX', decimals: 4 },
    { addr: '0x960b236a07cf122663c4303350609a66a7b288c0', name: 'ANT', decimals: 18 },
    { addr: '0xac709fcb44a43c35f0da4e3163b117a17f3770f5', name: 'ARC', decimals: 18 },
    { addr: '0xaf30d2a7e90d7dc361c8c4585e9bb7d2f6f15bc7', name: '1ST', decimals: 18 },
    { addr: '0x0d8775f648430679a709e98d2b0cb6250d2887ef', name: 'BAT', decimals: 18 },
    { addr: '0xff3519eeeea3e76f1f699ccce5e23ee0bdda41ac', name: 'BCAP', decimals: 0 },
    { addr: '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c', name: 'BNT', decimals: 18 },
    { addr: '0x12fef5e57bf45873cd9b62e9dbd7bfb99e32d73e', name: 'CFI', decimals: 18 },
    { addr: '0x41e5560054824ea6b0732e656e3ad64e20e94e45', name: 'CVC', decimals: 8 },
    { addr: '0xe0b7927c4af23765cb51314a0e0521a9645f0e2a', name: 'DGD', decimals: 9 },
    { addr: '0x2e071d2966aa7d8decb1005885ba1977d6038a65', name: 'DICE', decimals: 16 },
    { addr: '0xce5c603c78d047ef43032e96b5b785324f753a4f', name: 'E4ROW', decimals: 2 },
    { addr: '0x08711d3b02c8758f2fb3ab4e80228418a7f8e39c', name: 'EDG', decimals: 0 },
    { addr: '0xb802b24e0637c2b87d2e8b7784c055bbe921011a', name: 'EMV', decimals: 2 },
    { addr: '0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0', name: 'EOS', decimals: 18 },
    { addr: '0x4fe6ea636abe664e0268af373a10ca3621a0b95b', name: 'ETB', decimals: 12 },
    { addr: '0xc63e7b1dece63a77ed7e4aeef5efb3b05c81438d', name: 'FUCK', decimals: 4 },
    { addr: '0x419d0d8bdd9af5e606ae2232ed285aff190e711b', name: 'FUN', decimals: 8 },
    { addr: '0x6810e776880c02933d47db1b9fc05908e5386b96', name: 'GNO', decimals: 18 },
    { addr: '0xae616e72d3d89e847f74e8ace41ca68bbf56af79', name: 'GOOD', decimals: 6 },
    { addr: '0xf7b098298f7c69fc14610bf71d5e02c60792894c', name: 'GUP', decimals: 3 },
    { addr: '0xcbcc0f036ed4788f63fc0fee32873d6a7487b908', name: 'HMQ', decimals: 8 },
    { addr: '0x888666ca69e0f178ded6d75b5726cee99a87d698', name: 'ICN', decimals: 18 },
    { addr: '0x5a84969bb663fb64f6d015dcf9f622aedc796750', name: 'ICE', decimals: 18 },
    { addr: '0xe2e6d4be086c6938b53b22144855eef674281639', name: 'LNK', decimals: 18 },
    { addr: '0xfa05a73ffe78ef8f1a739473e462c54bae6567d9', name: 'LUN', decimals: 18 },
    { addr: '0x93e682107d1e9defb0b5ee701c71707a4b2e46bc', name: 'MCAP', decimals: 8 },
    { addr: '0x386467f1f3ddbe832448650418311a479eecfc57', name: 'MBRS', decimals: 0 },
    { addr: '0xc66ea802717bfb9833400264dd12c2bceaa34a6d', name: 'MKR', decimals: 18 },
    { addr: '0xbeb9ef514a379b997e0798fdcc901ee474b6d9a1', name: 'MLN', decimals: 18 },
    { addr: '0xcfb98637bcae43c13323eaa1731ced2b716962fd', name: 'NET', decimals: 18 },
    { addr: '0x814964b1bceaf24e26296d031eadf134a2ca4105', name: 'NEWB', decimals: 0 },
    { addr: '0x1776e1f26f98b1a5df9cd347953a26dd3cb46671', name: 'NMR', decimals: 18 },
    { addr: '0x45e42d659d9f9466cd5df622506033145a9b89bc', name: 'NXC', decimals: 3 },
    { addr: '0xd26114cd6ee289accf82350c8d8487fedb8a0c07', name: 'OMG', decimals: 18 },
    { addr: '0xb97048628db6b661d4c2aa833e95dbe1a905b280', name: 'PAY', decimals: 18 },
    { addr: '0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a', name: 'PPT', decimals: 8 },
    { addr: '0xd8912c10681d8b21fd3742244f44658dba12264e', name: 'PLU', decimals: 18 },
    { addr: '0x8ae4bf2c33a8e667de34b54938b0ccd03eb8cc06', name: 'PTOY', decimals: 8 },	
    { addr: '0x697beac28B09E122C4332D163985e8a73121b97F', name: 'QRL', decimals: 8 },
    { addr: '0x48c80f1f4d53d5951e5d5438b54cba84f29f32a5', name: 'REP', decimals: 18 },
    { addr: '0x607f4c5bb672230e8672085532f7e901544a7375', name: 'RLC', decimals: 9 },
    { addr: '0x4993CB95c7443bdC06155c5f5688Be9D8f6999a5', name: 'ROUND', decimals: 18 },
    { addr: '0x2bdc0d42996017fce214b21607a515da41a9e0c5', name: 'SKIN', decimals: 6 },
    { addr: '0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009', name: 'SNGLS', decimals: 0 },
    { addr: '0x744d70fdbe2ba4cf95131626614a1763df805b9e', name: 'SNT', decimals: 18 },
    { addr: '0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac', name: 'STORJ', decimals: 8 },
    { addr: '0xb9e7f8568e08d5659f5d29c4997173d84cdf2607', name: 'SWT', decimals: 18 },
    { addr: '0xe7775a6e9bcf904eb39da2b68c5efb4f9360e08c', name: 'TAAS', decimals: 6 },
    { addr: '0x6531f133e6deebe7f2dce5a0441aa7ef330b4e53', name: 'TIME', decimals: 8 },
    { addr: '0xaaaf91d9b90df800df4f55c205fd6989c977e73a', name: 'TKN', decimals: 8 },
    { addr: '0xcb94be6f13a1182e4a4b6140cb7bf2025d28e41b', name: 'TRST', decimals: 6 },
    { addr: '0x8f3470a7388c05ee4e7af3d01d8c722b0ff52374', name: 'VERI', decimals: 18 },
    { addr: '0x5c543e7ae0a1104f78406c340e9c64fd9fce5170', name: 'VSL', decimals: 18 },
    { addr: '0x667088b212ce3d06a1b553a7221e1fd19000d9af', name: 'WINGS', decimals: 18 },
    { addr: '0x4df812f6064def1e5e029f1ca858777cc98d2d81', name: 'XAUR', decimals: 8 },
    { addr: '0xb24754be79281553dc1adc160ddf5cd9b74361a4', name: 'XRL', decimals: 9 },
    { addr: '0x949bed886c739f1a3273629b3320db0c5024c719', name: 'AMIS', decimals: 9 }

  ],
  defaultPair: { token: 'ANT', base: 'ETH' },
  pairs: [
    { token: 'ADT', base: 'ETH' },
    { token: 'ADX', base: 'ETH' },
    { token: 'ANT', base: 'ETH' },
    { token: 'ARC', base: 'ETH' },
    { token: '1ST', base: 'ETH' },
    { token: 'BAT', base: 'ETH' },
    { token: 'BCAP', base: 'ETH' },
    { token: 'BNT', base: 'ETH' },
    { token: 'CFI', base: 'ETH' },
    { token: 'CVC', base: 'ETH' },
    { token: 'DGD', base: 'ETH' },
    { token: 'DICE', base: 'ETH' },
    { token: 'E4ROW', base: 'ETH' },
    { token: 'EDG', base: 'ETH' },
    { token: 'EMV', base: 'ETH' },
    { token: 'EOS', base: 'ETH' },
    { token: 'ETB', base: 'ETH' },
    { token: 'FUCK', base: 'ETH' },
    { token: 'FUN', base: 'ETH' },
    { token: 'GNO', base: 'ETH' },
    { token: 'GOOD', base: 'ETH' },
    { token: 'GUP', base: 'ETH' },
    { token: 'HMQ', base: 'ETH' },
    { token: 'ICN', base: 'ETH' },
    { token: 'ICE', base: 'ETH' },
    { token: 'LNK', base: 'ETH' },
    { token: 'LUN', base: 'ETH' },
    { token: 'MCAP', base: 'ETH' },
    { token: 'MBRS', base: 'ETH' },
    { token: 'MKR', base: 'ETH' },
    { token: 'MLN', base: 'ETH' },
    { token: 'NET', base: 'ETH' },
    { token: 'NEWB', base: 'ETH' },
    { token: 'NMR', base: 'ETH' },
    { token: 'NXC', base: 'ETH' },
    { token: 'OMG', base: 'ETH' },
    { token: 'PAY', base: 'ETH' },
    { token: 'PPT', base: 'ETH' },
    { token: 'PLU', base: 'ETH' },
    { token: 'PTOY', base: 'ETH' },
    { token: 'QRL', base: 'ETH' },
    { token: 'REP', base: 'ETH' },
    { token: 'RLC', base: 'ETH' },
    { token: 'ROUND', base: 'ETH' },
    { token: 'SKIN', base: 'ETH' },
    { token: 'SNGLS', base: 'ETH' },
    { token: 'SNT', base: 'ETH' },
    { token: 'STORJ', base: 'ETH' },
    { token: 'SWT', base: 'ETH' },
    { token: 'TAAS', base: 'ETH' },
    { token: 'TIME', base: 'ETH' },
    { token: 'TKN', base: 'ETH' },
    { token: 'TRST', base: 'ETH' },
    { token: 'VERI', base: 'ETH' },
    { token: 'VSL', base: 'ETH' },
    { token: 'WINGS', base: 'ETH' },
    { token: 'XAUR', base: 'ETH' },
    { token: 'XRL', base: 'ETH' },
    { token: 'AMIS', base: 'ETH' },
  ],
};
