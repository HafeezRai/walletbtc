// @flow

// FAKE BITCOIN PLUGIN

export const fakeBitcoinPlugin = {
  currencyInfo: {
    // Basic currency information:
    currencyCode: 'BTC',
    currencyName: 'Bitcoin',
    pluginName: 'bitcoin',
    denominations: [
      { name: 'BTC', multiplier: '100000000', symbol: '₿' },
      { name: 'mBTC', multiplier: '100000', symbol: 'm₿' },
      { name: 'bits', multiplier: '100', symbol: 'ƀ' }
    ],
    walletTypes: ['wallet:bitcoin', 'wallet:bitcoin-bip49', 'wallet:bitcoin-bip44'],

    // Configuration options:
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
      customFeeSettings: ['satPerByte'],
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
        'electrum://electrum-bc-az-eusa.airbitz.co:50001',
        'electrum://electrum.hsmiths.com:8080',
        'electrums://E-X.not.fyi:50002',
        'electrums://node.arihanc.com:50002',
        'electrum://node.arihanc.com:50001',
        'electrums://electrum.petrkr.net:50002',
        'electrum://electrum.petrkr.net:50001',
        'electrums://electrum2.everynothing.net:50002',
        'electrum://electrum2.everynothing.net:50001',
        'electrums://lith.strangled.net:50002',
        'electrums://s4.noip.pl:50104',
        'electrum://currentlane.lovebitco.in:50001',
        'electrums://electrum.hsmiths.com:50002',
        'electrum://electrum.hsmiths.com:50001',
        'electrums://electrumx.westeurope.cloudapp.azure.com:50002',
        'electrum://electrumx.westeurope.cloudapp.azure.com:50001'
      ]
    },
    metaTokens: [],

    // Explorers:
    blockExplorer: 'https://insight.bitpay.com/block/%s',
    addressExplorer: 'https://insight.bitpay.com/address/%s',
    transactionExplorer: 'https://insight.bitpay.com/tx/%s',

    // Images:
    symbolImage:
      'data:image/png;base64,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',
    symbolImageDarkMono:
      'data:image/png;base64,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'
  }
}

// FAKE ETHEREUM PLUGIN

const otherSettings = {
  etherscanApiServers: ['https://api.etherscan.io'],
  blockcypherApiServers: ['https://api.blockcypher.com'],
  superethServers: ['https://supereth1.edgesecure.co:8443'],
  iosAllowedTokens: { REP: true, WINGS: true }
}
const defaultSettings = {
  customFeeSettings: ['gasLimit', 'gasPrice'],
  otherSettings
}
export const fakeEthereumPlugin = {
  currencyInfo: {
    currencyCode: 'ETH',
    currencyName: 'Ethereum',
    pluginName: 'ethereum',
    walletTypes: ['wallet:ethereum'],

    defaultSettings,

    addressExplorer: 'https://etherscan.io/address/%s',
    transactionExplorer: 'https://etherscan.io/tx/%s',

    denominations: [
      // An array of Objects of the possible denominations for this currency
      {
        name: 'ETH',
        multiplier: '1000000000000000000',
        symbol: 'Ξ'
      },
      {
        name: 'mETH',
        multiplier: '1000000000000000',
        symbol: 'mΞ'
      }
    ],
    symbolImage:
      'data:image/png;base64,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', // Base64 encoded png image of the currency symbol (optional)
    symbolImageDarkMono:
      'data:image/png;base64,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', // Base64 encoded png image of the currency symbol (optional)
    metaTokens: [
      // Array of objects describing the supported metatokens
      {
        currencyCode: 'REP',
        currencyName: 'Augur',
        denominations: [
          {
            name: 'REP',
            multiplier: '1000000000000000000'
          }
        ],
        contractAddress: '0xE94327D07Fc17907b4DB788E5aDf2ed424adDff6',
        symbolImage:
          'data:image/png;base64,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'
      },
      {
        currencyCode: 'WINGS',
        currencyName: 'Wings',
        denominations: [
          {
            name: 'WINGS',
            multiplier: '1000000000000000000'
          }
        ],
        contractAddress: '0x667088b212ce3d06a1b553a7221E1fD19000d9aF',
        symbolImage:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABGdBTUEAALGPC/xhBQAABQlJREFUaAXtmluIVlUUx/2mplSsJLFyLJ3UefCS0YhiIdJE0IgJiYLoS/bik1qgZj5Y0EMPUYIgBGFCPSgRDRWERBEGEkaKCN7wgoKaeXe85CV1+v1lH9mdOec7+5zv7PN5PmbBn7Mva629/vt29rn069cnfT3QUD1Q6enpeQZGr4IO8BC4aNAduqo8KLtYqVSuki+dVIKIIf4A6elgLpgNhoFqcotKdcC9TohJx9VfotNuV2vAR909wrZzyDeRfwmI/BzwNPAhl3Ea7pDVdMROH405+YS8pv1U8Ak4AnxLl1NgGZUiR7iaL9hOoj4Y+bZquhnr7mA3nlHen9HenxnkJ4IPwV6Qp2zwF3VOnmE7DqwGu3JgfhMfvvaNnBhbbgi2DawC20FWWWO5LE8Sts+C5WAbuANc5QqKj9fCFPuxtdjXbEsAc13ZGr0PsjaK/WJwAfS3ffTapVEYgoJ6phncANfjruyk/1LnLPh+FOXzQIccFzmH0gja+cdFOdChnVWkPzL5BdhvCup6EVYFBjp46JajW9ALQIFGSQ+FsR1CXVSHraP8uShnMWXvEPDamLpexcT+MYUrrIqfsO8M8pGEg0pdDfkxJNuByA8GtchkjOXHVY6hOJqgq84mE+dn6C4KOdbxVbPkL5UnEraNcSr9USAY+SybSgv2r9t+HdILCfjLOD3iepC6r8D8GJ2V2Gvk0xG2nRnyrZSJvEZfa99FtH4XAtd1LJ/7gE5fWkL/E+LQpvQNqNaJe7EdL8NUIyyDOKHhkdQF5IfG6ZnymVyHJ+iEq2cT9Hd2IW0OIv8D6LDLY9KTsd+eG2G7EQLRM3ZA/km7zqS1hrWW08gfBDw1MKANLafNYEpQlnBdh/0SL4TthglMI/kKmGaVP0H6DSvvmuwg6C34fAqDn8EEV0P0dItr0e3HqxDgCRrQtLPlDJmbdoFj+j3ItqK7FSSR1e1Px1O1L9EeM9M7YbUE6W4up5U2os3nZJBJcX0N3W1gtIPNPtpdht4IoDX+OZil7bwoOUhDmsqBqOe10aWVqD0h1gek9Xy9RWB2NBUywiYaEbbl7kHALvCdFvl6EtaZ+ppvkmH/hRGmd8/S+IVQAIWPcmGEDdHwtA520FA/+MvWm3DDj/CB0NhdIn8lVOY1W+gIs47/jiBY6LQulLAZurqu4/uBsEbdh0QeXetNWM/E9kNFHsR342QOy2d9lLN6ED5OIDpwNIMZQGfdPEQb4gLwPGS78nCYmw/OtCvBKZCH6CvFF6DI5wL3viCwYeAoqFVu4WAjGODeesGaBNcKDoFa5DbGXeCxgsNP1xwBjgXHQVYR0c0g6X1ZusB8aBNkOzgDsoi+R/0KhvuILXefBDoNdIO0IqK/g1G5B+XLIcF2gqsgjYjoDjDOV1xe/BKwvhTeAK6i28v3QK93yyUE/RbQbcNFpLcBtJaLpYmWwN8GmpZJol1X99G2UhJV0AT/fhJL6tUZ34K733rKTPZTB7I/otNeWpJmVJsgsT6B7C/Uv1hqooZsM0S+rkJ2K3Uvl56oITsAMpqiUfInhZ0NQdSQfQRCv0Uw1U9pWb4K3r99A6EhQCNoy34y84D3z6+F9gyEWsAeEMhhEm+CNL8vFBpz5sYgpT/qRFByDCwCek3TeAIx/Th6ApwES8HDjcfSMILcJKA1+i4YWHaiVV98QXAiBPUaVX/AXC472cT4Idy4UzeRfZ9COXvgP5RIs+wwWppJAAAAAElFTkSuQmCC'
      }
    ]
  }
}

export const fakeAccount = {
  activeWalletIds: [
    'my_first_wallet_id',
    'my_second_wallet_id'
  ],
  archivedWalletIds: [
    'my_first_archived_wallet_id',
    'my_second_archived_wallet_id'
  ],
  currencyWallets: {
    'my_first_wallet_id': {
      id: 'my_first_wallet_id',
      currencyCode: 'BTC',
      currencyInfo: fakeBitcoinPlugin.currencyInfos
    },
    'my_second_wallet_id': {
      id: 'my_second_wallet_id',
      currencyCode: 'BTC',
      currencyInfo: fakeBitcoinPlugin.currencyInfos
    },
    'my_first_archived_wallet_id': {
      id: 'my_first_archived_wallet_id',
      currencyCode: 'BTC',
      currencyInfo: fakeBitcoinPlugin.currencyInfos
    },
    'my_second_archived_wallet_id': {
      id: 'my_second_archived_wallet_id',
      currencyCode: 'BTC',
      currencyInfo: fakeBitcoinPlugin.currencyInfos
    }
  },
  enabled: true,
  otpKey: 'my_otp_key'
}
