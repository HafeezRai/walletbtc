// @flow

/* globals describe test expect */

import type {AbcCurrencyPlugin} from 'airbitz-core-types'

import {settings, actions} from './indexSettings.js'

describe('settings reducer', () => {
  test('initialState', () => {
    const initialState = {
      autoLogoutMode: { isEnabled: true, seconds: 3600 },
      bluetoothMode: { isEnabled: false },
      currencyInfos: {},
      currencies: {},
      defaultFiat: 'USD',
      loginStatus: false,
      merchantMode: { isEnabled: false },
      otpMode: { isEnabled: false, key: '' },
      pinMode: { isEnabled: false, pin: '' },
      sudoMode: false,
      touchIdMode: { isSupported: true, isEnabled: false },
      walletTypes: []
    }
    const expected = initialState
    const actual = settings(undefined, {})

    expect(actual).toEqual(expected)
  })

  test('load plugins, [bitcoinPlugin, ethereumPlugin]', function () {
    const action = actions.loadCurrencyPlugins([bitcoinPlugin, ethereumPlugin])
    const expected = {
      autoLogoutMode: { isEnabled: true, seconds: 3600 },
      bluetoothMode: { isEnabled: false },
      currencyInfos: {
        bitcoin: bitcoinPlugin.currencyInfo,
        ethereum: ethereumPlugin.currencyInfo
      },
      currencies: {
        BTC: {
          dailySpendingLimit: {isEnabled: true, nativeAmount: '0'},
          transactionSpendingLimit: {isEnabled: true, nativeAmount: '0'},
          denominationKey: null
        },
        ETH: {
          dailySpendingLimit: {isEnabled: true, nativeAmount: '0'},
          transactionSpendingLimit: {isEnabled: true, nativeAmount: '0'},
          denominationKey: null
        }
      },
      defaultFiat: 'USD',
      loginStatus: false,
      merchantMode: { isEnabled: false },
      otpMode: { isEnabled: false, key: '' },
      pinMode: { isEnabled: false, pin: '' },
      sudoMode: false,
      touchIdMode: { isSupported: true, isEnabled: false },
      walletTypes: ['wallet:bitcoin-bip49', 'wallet:bitcoin-bip44', 'wallet:bitcoin', 'wallet:ethereum']
    }
    const actual = settings(undefined, action)

    expect(actual).toEqual(expected)
  })
})

const ethereumPlugin: any = {
  pluginName: 'ethereum',
  currencyInfo: {
    currencyCode: 'ETH',
    currencyName: 'Ethereum',
    pluginName: 'ethereum',
    walletTypes: ['wallet:ethereum'],
    addressExplorer: 'https://etherscan.io/address/%s',
    transactionExplorer: 'https://etherscan.io/tx/%s',
    denominations: [
      {name: 'ETH', multiplier: '1000000000000000000', symbol: 'Ξ'},
      {name: 'mETH', multiplier: '1000000000000000', symbol: 'mΞ'}
    ],
    symbolImage: 'data:image/png;base64',
    symbolImageDarkMono: 'data:image/png;base64',
    metaTokens: [{ currencyCode: 'REP',
      currencyName: 'Augur',
      denominations: [{
        name: 'REP',
        multiplier: '1000000000000000000'
      }],
      contractAddress: '0xE94327D07Fc17907b4DB788E5aDf2ed424adDff6',
      symbolImage: 'data:image/png;base64'
    }, {
      currencyCode: 'WINGS',
      currencyName: 'Wings',
      denominations: [{
        name: 'WINGS',
        multiplier: '1000000000000000000'
      }],
      contractAddress: '0x667088b212ce3d06a1b553a7221E1fD19000d9aF',
      symbolImage: 'data:image/png;base64'
    }]
  }
}

const bitcoinPlugin: any = {
  pluginName: 'bitcoin',
  currencyInfo: {
    currencyCode: 'BTC',
    currencyName: 'Bitcoin',
    pluginName: 'bitcoin',
    denominations: [
      { name: 'BTC', multiplier: '100000000', symbol: '₿' },
      { name: 'mBTC', multiplier: '100000', symbol: 'm₿' },
      { name: 'bits', multiplier: '100', symbol: 'ƀ' }
    ],
    walletTypes: [
      'wallet:bitcoin-bip49',
      'wallet:bitcoin-bip44',
      'wallet:bitcoin'
    ],
    defaultSettings: {
      network: {
        type: 'bitcoin',
        magic: 0xd9b4bef9,
        keyPrefix: {
          privkey: 0x80,
          xpubkey: 0x0488b21e,
          xprivkey: 0x0488ade4,
          xpubkey58: 'xpub',
          xprivkey58: 'xprv',
          coinType: 0
        },
        addressPrefix: {
          pubkeyhash: 0x00,
          scripthash: 0x05,
          witnesspubkeyhash: 0x06,
          witnessscripthash: 0x0a,
          bech32: 'bc'
        }
      },
      gapLimit: 10,
      maxFee: 1000000,
      defaultFee: 1000,
      feeUpdateInterval: 60000,
      feeInfoServer: 'https://bitcoinfees.21.co/api/v1/fees/list',
      infoServer: 'https://info1.edgesecure.co:8444/v1/electrumServers/BC1',
      simpleFeeSettings: {
        highFee: '150',
        lowFee: '20',
        standardFeeLow: '50',
        standardFeeHigh: '100',
        standardFeeLowAmount: '173200',
        standardFeeHighAmount: '8670000'
      },
      electrumServers: [
        'electrums://electrum-bc-az-eusa.airbitz.co:50002',
        'electrum://electrum-bc-az-eusa.airbitz.co:50001'
      ]
    },
    metaTokens: [],
    blockExplorer: 'https://insight.bitpay.com/block/%s',
    addressExplorer: 'https://insight.bitpay.com/address/%s',
    transactionExplorer: 'https://insight.bitpay.com/tx/%s',
    symbolImage:
      'data:image/png;base64',
    symbolImageDarkMono:
      'data:image/png;base64'
  }
}
