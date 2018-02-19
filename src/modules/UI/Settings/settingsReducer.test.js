// @flow

/* globals describe test expect */

import { initialState, settings as settingsReducer } from './reducer.js'
import { ACCOUNT_INIT_COMPLETE, SET_CONFIRM_PASSWORD_ERROR } from '../../../constants/ActionConstants.js'
import { fakeBitcoinPlugin, fakeEthereumPlugin, fakeAccount } from './fakes/fakes.js'
import { togglePinLoginEnabled, setCustomTokens } from '../Settings/action.js'
import { updateExistingTokenSuccess, deleteCustomTokenSuccess, addNewTokenThenDeleteOldSuccess } from '../Wallets/action.js'
import { setTokenSettings, addNewTokenSuccess } from '../../UI/scenes/AddToken/action.js'

describe('settingsReducer', () => {
  test('initialState', () => {
    const expected = initialState
    const actual = settingsReducer(undefined, {})

    expect(actual).toEqual(expected)
  })

  test('ACCOUNT_INIT_COMPLETE, a.k.a. LOGIN', () => {
    const account = fakeAccount
    const bitcoinPlugin = fakeBitcoinPlugin
    const ethereumPlugin = fakeEthereumPlugin
    const myFirstWallet = account.currencyWallets[account.activeWalletIds[0]]

    const accountInitObject = {
      ...initialState,
      account: account,
      activeWalletIds: account.activeWalletIds,
      archivedWalletIds: account.archivedWalletIds,
      autoLogoutTimeInSeconds: 3600,
      bluetoothMode: false,
      currencyCode: myFirstWallet.currencyInfo.currencyCode,
      currencyPlugins: [
        {
          pluginName: bitcoinPlugin.pluginName,
          plugin: bitcoinPlugin,
          walletTypes: bitcoinPlugin.currencyInfo.walletTypes
        },
        {
          pluginName: ethereumPlugin.pluginName,
          plugin: ethereumPlugin,
          walletTypes: ethereumPlugin.currencyInfo.walletTypes
        }
      ],
      currencyWallets: account.currencyWallets,
      customTokens: '',
      customTokensSettings: [],
      defaultFiat: 'USD',
      denominationKeys: [{ currencyCode: 'BTC', denominationKey: 'bitcoin_denomination' }, { currencyCode: 'BCH', denominationKey: 'ethereum_denomination' }],
      loginStatus: true,
      merchantMode: false,
      otpInfo: {
        enabled: account.otpEnabled,
        otpKey: account.otpKey,
        otpResetPending: false
      },
      otpMode: false,
      pinLoginEnabled: true,
      pinMode: false,
      touchIdInfo: {
        isTouchEnabled: false,
        isTouchSupported: false
      },
      walletId: myFirstWallet.id
    }
    const expected = {
      BCH: { denomination: 'ethereum_denomination' },
      BTC: {
        currencyCode: 'BTC',
        currencyName: 'Bitcoin',
        denomination: 'bitcoin_denomination',
        denominations: [
          { multiplier: '100000000', name: 'BTC', symbol: '₿' },
          { multiplier: '100000', name: 'mBTC', symbol: 'm₿' },
          { multiplier: '100', name: 'bits', symbol: 'ƀ' }
        ],
        symbolImage: 'data:image/png;base64,bitcoinsymbolimage=',
        symbolImageDarkMono: 'data:image/png;base64,bitcoinsymbolimagedarkmono'
      },
      DASH: { denomination: '100000000' },
      ETH: {
        currencyCode: 'ETH',
        currencyName: 'Ethereum',
        denomination: '1000000000000000000',
        denominations: [{ multiplier: '1000000000000000000', name: 'ETH', symbol: 'Ξ' }, { multiplier: '1000000000000000', name: 'mETH', symbol: 'mΞ' }],
        symbolImage: 'data:image/png;base64,ethereumsymbolimage==',
        symbolImageDarkMono: 'data:image/png;base64,etheremsymbolimagedarkmono='
      },
      LTC: { denomination: '100000000' },
      REP: {
        currencyCode: 'REP',
        currencyName: 'Augur',
        denomination: '1000000000000000000',
        denominations: [{ multiplier: '1000000000000000000', name: 'REP' }],
        symbolImage: 'data:image/png;base64,repsymbolimage==',
        symbolImageDarkMono: undefined
      },
      WINGS: {
        currencyCode: 'WINGS',
        currencyName: 'Wings',
        denomination: '1000000000000000000',
        denominations: [{ multiplier: '1000000000000000000', name: 'WINGS' }],
        symbolImage: 'data:image/png;base64,wingssymbolimage',
        symbolImageDarkMono: undefined
      },
      account: null,
      autoLogoutTimeInSeconds: 3600,
      bluetoothMode: false,
      changesLocked: true,
      confirmPasswordError: '',
      customTokens: '',
      defaultFiat: 'USD',
      isOtpEnabled: true,
      isTouchEnabled: false,
      isTouchSupported: false,
      loginStatus: true,
      merchantMode: false,
      otpKey: 'my_otp_key',
      otpMode: false,
      otpResetDate: undefined,
      otpResetPending: false,
      pinLoginEnabled: true,
      pinMode: false,
      plugins: {
        arrayPlugins: [
          {
            currencyInfo: {
              addressExplorer: 'https://insight.bitpay.com/address/%s',
              blockExplorer: 'https://insight.bitpay.com/block/%s',
              currencyCode: 'BTC',
              currencyName: 'Bitcoin',
              defaultSettings: {
                customFeeSettings: ['satPerByte'],
                defaultFee: 1000,
                electrumServers: ['electrums://electrum-bc-az-eusa.airbitz.co:50002', 'electrum://electrumx.westeurope.cloudapp.azure.com:50001'],
                feeInfoServer: 'https://bitcoinfees.21.co/api/v1/fees/list',
                feeUpdateInterval: 60000,
                gapLimit: 10,
                infoServer: 'https://info1.edgesecure.co:8444/v1/electrumServers/BC1',
                maxFee: 1000000,
                network: {
                  addressPrefix: { bech32: 'bc', pubkeyhash: 0, scripthash: 5, witnesspubkeyhash: 6, witnessscripthash: 10 },
                  keyPrefix: { coinType: 0, privkey: 128, xprivkey: 76066276, xprivkey58: 'xprv', xpubkey: 76067358, xpubkey58: 'xpub' },
                  magic: 3652501241,
                  type: 'bitcoin'
                },
                simpleFeeSettings: {
                  highFee: '150',
                  lowFee: '20',
                  standardFeeHigh: '100',
                  standardFeeHighAmount: '8670000',
                  standardFeeLow: '50',
                  standardFeeLowAmount: '173200'
                }
              },
              denominations: [
                { multiplier: '100000000', name: 'BTC', symbol: '₿' },
                { multiplier: '100000', name: 'mBTC', symbol: 'm₿' },
                { multiplier: '100', name: 'bits', symbol: 'ƀ' }
              ],
              metaTokens: [],
              pluginName: 'bitcoin',
              symbolImage: 'data:image/png;base64,bitcoinsymbolimage=',
              symbolImageDarkMono: 'data:image/png;base64,bitcoinsymbolimagedarkmono',
              transactionExplorer: 'https://insight.bitpay.com/tx/%s',
              walletTypes: ['wallet:bitcoin', 'wallet:bitcoin-bip49', 'wallet:bitcoin-bip44']
            },
            pluginName: 'bitcoin'
          },
          {
            currencyInfo: {
              addressExplorer: 'https://etherscan.io/address/%s',
              currencyCode: 'ETH',
              currencyName: 'Ethereum',
              defaultSettings: {
                customFeeSettings: ['gasLimit', 'gasPrice'],
                otherSettings: {
                  blockcypherApiServers: ['https://api.blockcypher.com'],
                  etherscanApiServers: ['https://api.etherscan.io'],
                  iosAllowedTokens: { REP: true, WINGS: true },
                  superethServers: ['https://supereth1.edgesecure.co:8443']
                }
              },
              denominations: [{ multiplier: '1000000000000000000', name: 'ETH', symbol: 'Ξ' }, { multiplier: '1000000000000000', name: 'mETH', symbol: 'mΞ' }],
              metaTokens: [
                {
                  contractAddress: '0xE94327D07Fc17907b4DB788E5aDf2ed424adDff6',
                  currencyCode: 'REP',
                  currencyName: 'Augur',
                  denominations: [{ multiplier: '1000000000000000000', name: 'REP' }],
                  symbolImage: 'data:image/png;base64,repsymbolimage=='
                },
                {
                  contractAddress: '0x667088b212ce3d06a1b553a7221E1fD19000d9aF',
                  currencyCode: 'WINGS',
                  currencyName: 'Wings',
                  denominations: [{ multiplier: '1000000000000000000', name: 'WINGS' }],
                  symbolImage: 'data:image/png;base64,wingssymbolimage'
                }
              ],
              pluginName: 'ethereum',
              symbolImage: 'data:image/png;base64,ethereumsymbolimage==',
              symbolImageDarkMono: 'data:image/png;base64,etheremsymbolimagedarkmono=',
              transactionExplorer: 'https://etherscan.io/tx/%s',
              walletTypes: ['wallet:ethereum']
            },
            pluginName: 'ethereum'
          }
        ],
        bitcoin: {
          currencyInfo: {
            addressExplorer: 'https://insight.bitpay.com/address/%s',
            blockExplorer: 'https://insight.bitpay.com/block/%s',
            currencyCode: 'BTC',
            currencyName: 'Bitcoin',
            defaultSettings: {
              customFeeSettings: ['satPerByte'],
              defaultFee: 1000,
              electrumServers: ['electrums://electrum-bc-az-eusa.airbitz.co:50002', 'electrum://electrumx.westeurope.cloudapp.azure.com:50001'],
              feeInfoServer: 'https://bitcoinfees.21.co/api/v1/fees/list',
              feeUpdateInterval: 60000,
              gapLimit: 10,
              infoServer: 'https://info1.edgesecure.co:8444/v1/electrumServers/BC1',
              maxFee: 1000000,
              network: {
                addressPrefix: { bech32: 'bc', pubkeyhash: 0, scripthash: 5, witnesspubkeyhash: 6, witnessscripthash: 10 },
                keyPrefix: { coinType: 0, privkey: 128, xprivkey: 76066276, xprivkey58: 'xprv', xpubkey: 76067358, xpubkey58: 'xpub' },
                magic: 3652501241,
                type: 'bitcoin'
              },
              simpleFeeSettings: {
                highFee: '150',
                lowFee: '20',
                standardFeeHigh: '100',
                standardFeeHighAmount: '8670000',
                standardFeeLow: '50',
                standardFeeLowAmount: '173200'
              }
            },
            denominations: [
              { multiplier: '100000000', name: 'BTC', symbol: '₿' },
              { multiplier: '100000', name: 'mBTC', symbol: 'm₿' },
              { multiplier: '100', name: 'bits', symbol: 'ƀ' }
            ],
            metaTokens: [],
            pluginName: 'bitcoin',
            symbolImage: 'data:image/png;base64,bitcoinsymbolimage=',
            symbolImageDarkMono: 'data:image/png;base64,bitcoinsymbolimagedarkmono',
            transactionExplorer: 'https://insight.bitpay.com/tx/%s',
            walletTypes: ['wallet:bitcoin', 'wallet:bitcoin-bip49', 'wallet:bitcoin-bip44']
          },
          pluginName: 'bitcoin'
        },
        ethereum: {
          currencyInfo: {
            addressExplorer: 'https://etherscan.io/address/%s',
            currencyCode: 'ETH',
            currencyName: 'Ethereum',
            defaultSettings: {
              customFeeSettings: ['gasLimit', 'gasPrice'],
              otherSettings: {
                blockcypherApiServers: ['https://api.blockcypher.com'],
                etherscanApiServers: ['https://api.etherscan.io'],
                iosAllowedTokens: { REP: true, WINGS: true },
                superethServers: ['https://supereth1.edgesecure.co:8443']
              }
            },
            denominations: [{ multiplier: '1000000000000000000', name: 'ETH', symbol: 'Ξ' }, { multiplier: '1000000000000000', name: 'mETH', symbol: 'mΞ' }],
            metaTokens: [
              {
                contractAddress: '0xE94327D07Fc17907b4DB788E5aDf2ed424adDff6',
                currencyCode: 'REP',
                currencyName: 'Augur',
                denominations: [{ multiplier: '1000000000000000000', name: 'REP' }],
                symbolImage: 'data:image/png;base64,repsymbolimage=='
              },
              {
                contractAddress: '0x667088b212ce3d06a1b553a7221E1fD19000d9aF',
                currencyCode: 'WINGS',
                currencyName: 'Wings',
                denominations: [{ multiplier: '1000000000000000000', name: 'WINGS' }],
                symbolImage: 'data:image/png;base64,wingssymbolimage'
              }
            ],
            pluginName: 'ethereum',
            symbolImage: 'data:image/png;base64,ethereumsymbolimage==',
            symbolImageDarkMono: 'data:image/png;base64,etheremsymbolimagedarkmono=',
            transactionExplorer: 'https://etherscan.io/tx/%s',
            walletTypes: ['wallet:ethereum']
          },
          pluginName: 'ethereum'
        },
        supportedWalletTypes: ['wallet:bitcoin', 'wallet:bitcoin-bip49', 'wallet:bitcoin-bip44', 'wallet:ethereum']
      },
      sendLogsStatus: 'pending'
    }

    const action = {
      type: ACCOUNT_INIT_COMPLETE,
      data: accountInitObject
    }
    const actual = settingsReducer(initialState, action)

    expect(actual).toEqual(expected)
  })

  test('SET_CONFIRM_PASSWORD_ERROR', () => {
    const errorMessage = 'my_error_message'
    const expected = 'my_error_message'
    const action = {
      type: SET_CONFIRM_PASSWORD_ERROR,
      data: {
        confirmPasswordError: errorMessage
      }
    }
    const actual = settingsReducer(initialState, action).confirmPasswordError

    expect(actual).toEqual(expected)
  })

  test('TOGGLE_PIN_LOGIN_ENABLED', () => {
    const expected = true
    const action = togglePinLoginEnabled(true)
    const actual = settingsReducer(initialState, action).pinLoginEnabled

    expect(actual).toEqual(expected)
  })

  test('SET_CUSTOM_TOKENS', () => {
    const tokens = [
      {
        currencyName: 'Bitcoin',
        currencyCode: 'BTC',
        contractAddress: '',
        multiplier: '100000000',
        denomination: '100000000',
        isVisible: true,
        denominations: [{ name: 'Bitcoin', multiplier: '100000000', symbol: 'B' }]
      }
    ]
    const expected = [...tokens]
    const action = setCustomTokens(tokens)
    const actual = settingsReducer(initialState, action).customTokens

    expect(actual).toEqual(expected)
  })

  test('UPDATE_EXISTING_TOKEN_SUCCESS', () => {
    const token = {
      currencyName: 'REP',
      currencyCode: 'REP',
      contractAddress: 'my_rep_address',
      multiplier: '100000000',
      denomination: '100000000',
      isVisible: true,
      denominations: [{ name: 'REP', multiplier: '100000000', symbol: 'R' }]
    }
    const updatedToken = {
      currencyName: 'REP',
      currencyCode: 'REP',
      contractAddress: 'my_rep_address',
      multiplier: '999999999',
      denomination: '999999999',
      isVisible: true,
      denominations: [{ name: 'REP', multiplier: '100000000', symbol: 'R' }]
    }
    const tokens = [token]
    const setupAction = setCustomTokens(tokens)
    const state = settingsReducer(initialState, setupAction)

    const expected = [updatedToken]
    const action = updateExistingTokenSuccess(updatedToken)
    const actual = settingsReducer(state, action).customTokens

    expect(actual).toEqual(expected)
  })

  test('UPDATE_EXISTING_TOKEN_SUCCESS', () => {
    const token = {
      currencyName: 'REP',
      currencyCode: 'REP',
      contractAddress: 'my_rep_address',
      multiplier: '100000000',
      denomination: '100000000',
      isVisible: true,
      denominations: [{ name: 'REP', multiplier: '100000000', symbol: 'R' }]
    }
    const updatedToken = {
      currencyName: 'REP',
      currencyCode: 'REP',
      contractAddress: 'my_rep_address',
      multiplier: '999999999',
      denomination: '999999999',
      isVisible: true,
      denominations: [{ name: 'REP', multiplier: '100000000', symbol: 'R' }]
    }
    const tokens = [token]
    const setupAction = setCustomTokens(tokens)
    const state = settingsReducer(initialState, setupAction)

    const expected = [updatedToken]
    const action = updateExistingTokenSuccess(updatedToken)
    const actual = settingsReducer(state, action)[token.currencyCode]

    expect(actual).toEqual(expected)
  })

  test('OVERWRITE_THEN_DELETE_TOKEN_SUCCESS', () => {})

  test('DELETE_CUSTOM_TOKEN_SUCCESS', () => {
    const currencyCode = 'REP'
    const token = {
      currencyName: currencyCode,
      currencyCode: currencyCode,
      contractAddress: 'my_rep_address',
      multiplier: '100000000',
      denomination: '100000000',
      isVisible: true,
      denominations: [{ name: 'REP', multiplier: '100000000', symbol: 'R' }]
    }
    const tokens = [token]
    const setupAction = setCustomTokens(tokens)
    const state = settingsReducer(initialState, setupAction)

    const expected = false
    const action = deleteCustomTokenSuccess(currencyCode)
    // $FlowExpectedError
    const actual = settingsReducer(state, action)[token.currencyCode].isVisible

    expect(actual).toEqual(expected)
  })

  test('DELETE_CUSTOM_TOKEN_SUCCESS', () => {
    const currencyCode = 'REP'
    const token = {
      currencyName: currencyCode,
      currencyCode: currencyCode,
      contractAddress: 'my_rep_address',
      multiplier: '100000000',
      denomination: '100000000',
      isVisible: true,
      denominations: [{ name: 'REP', multiplier: '100000000', symbol: 'R' }]
    }
    const tokens = [token]
    const setupAction = setCustomTokens(tokens)
    const state = settingsReducer(initialState, setupAction)

    const expected = false
    const action = deleteCustomTokenSuccess(currencyCode)
    // $FlowExpectedError
    const actual = settingsReducer(state, action).customTokens.find(customToken => customToken.currencyCode === token.currencyCode).isVisible

    expect(actual).toEqual(expected)
  })

  test('SET_TOKEN_SETTINGS', () => {
    const currencyCode = 'REP'
    const token = {
      currencyName: currencyCode,
      currencyCode: currencyCode,
      contractAddress: 'my_rep_address',
      multiplier: '100000000',
      denomination: '100000000',
      isVisible: true,
      denominations: [{ name: 'REP', multiplier: '100000000', symbol: 'R' }]
    }

    const expected = token
    const action = setTokenSettings(token)
    const actual = settingsReducer(initialState, action)[currencyCode]

    expect(actual).toEqual(expected)
  })

  test('ADD_NEW_CUSTOM_TOKEN_SUCCESS', () => {
    const walletId = 'my_first_wallet_id'
    const currencyCode = 'REP'
    const enabledTokens = []
    const settings = {}
    const token = {
      currencyName: currencyCode,
      currencyCode: currencyCode,
      contractAddress: 'my_rep_address',
      multiplier: '100000000',
      denomination: '100000000',
      isVisible: true,
      denominations: [{ name: 'REP', multiplier: '100000000', symbol: 'R' }]
    }

    const expected = token
    const action = addNewTokenSuccess(walletId, token, settings, enabledTokens)
    const actual = settingsReducer(initialState, action)[currencyCode]

    expect(actual).toEqual(expected)
  })
})

test('ADD_NEW_TOKEN_THEN_DELETE_OLD_SUCCESS', () => {
  const walletId = 'my_first_wallet_id'
  const currencyCode = 'REP'
  const token = {
    currencyName: currencyCode,
    currencyCode: currencyCode,
    contractAddress: 'my_rep_address',
    multiplier: '100000000',
    denomination: '100000000',
    isVisible: true,
    denominations: [{ name: 'REP', multiplier: '100000000', symbol: 'R' }]
  }
  const syncedSettings = {
    customTokens: [
      {'REP': {}}
    ]
  }
  const enabledTokens = [token]

  const expected = token
  const action = addNewTokenThenDeleteOldSuccess({
    walletId,
    tokenObj: token,
    setSettings: syncedSettings,
    enableTokensOnWallet: enabledTokens
  })
  const actual = settingsReducer(initialState, action)[currencyCode]

  expect(actual).toEqual(expected)
})

// NEEDS MORE INFORMATION
// ACTION.SET_LOGIN_STATUS
// • is this used anywhere in the app?
// • does the middleware still use this?
// • does this setting change when loggins out?
// WALLET_ACTION.OVERWRITE_THEN_DELETE_TOKEN_SUCCESS

// TODO:
// WALLET_ACTION.ADD_NEW_TOKEN_THEN_DELETE_OLD_SUCCESS
// ACTION.SET_DENOMINATION_KEY
// ACTION.UPDATE_SETTINGS
// ACTION.LOAD_SETTINGS
// ACTION.SET_PIN_MODE
// ACTION.SET_OTP_MODE
// ACTION.SET_AUTO_LOGOUT_TIME
// ACTION.SET_DEFAULT_FIAT
// ACTION.SET_MERCHANT_MODE
// ACTION.SET_BLUETOOTH_MODE
// ACTION.SET_BITCOIN_OVERRIDE_SERVER
// ACTION.SET_SETTINGS_LOCK
// ACTION.OTP_SETTINGS
// ACTION.TOUCH_ID_SETTINGS
// ACTION.CHANGE_TOUCH_ID_SETTINGS
// ACTION.ADD_CURRENCY_PLUGIN

// DONE:
// Constants.ACCOUNT_INIT_COMPLETE
// Constants.SET_CONFIRM_PASSWORD_ERROR
// ACTION.TOGGLE_PIN_LOGIN_ENABLED
// ACTION.SET_CUSTOM_TOKENS
// WALLET_ACTION.UPDATE_EXISTING_TOKEN_SUCCESS
// WALLET_ACTION.DELETE_CUSTOM_TOKEN_SUCCESS
// ADD_TOKEN_ACTION.SET_TOKEN_SETTINGS
// ADD_TOKEN_ACTION.ADD_NEW_CUSTOM_TOKEN_SUCCESS
