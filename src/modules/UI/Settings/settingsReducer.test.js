// @flow

/* globals describe test expect */

import { initialState, settings as settingsReducer } from './reducer.js'
import { ACCOUNT_INIT_COMPLETE } from '../../../constants/ActionConstants.js'
import {fakeBitcoinPlugin, fakeEthereumPlugin, fakeAccount} from './fakes/fakes.js'

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
      account: account,
      touchIdInfo: {
        isTouchEnabled: true,
        isTouchSupported: true
      },
      loginStatus: true,
      walletId: myFirstWallet.id,
      currencyCode: myFirstWallet.currencyInfo.currencyCode,
      currencyPlugins: [
        {
          pluginName: bitcoinPlugin.pluginName,
          plugin: bitcoinPlugin,
          walletTypes: bitcoinPlugin.walletTypes
        },
        {
          pluginName: ethereumPlugin.pluginName,
          plugin: ethereumPlugin,
          walletTypes: ethereumPlugin.walletTypes
        }
      ],
      otpInfo: {
        enabled: account.otpEnabled,
        otpKey: account.otpKey,
        otpResetPending: false
      },
      autoLogoutTimeInSeconds: 3600,
      bluetoothMode: '',
      pinLoginEnabled: false,
      pinMode: false,
      otpMode: false,
      customTokens: '',
      defaultFiat: '',
      merchantMode: '',
      denominationKeys: [
        { currencyCode: 'BTC', denominationKey: 'bitcoin_denomination' },
        { currencyCode: 'BCH', denominationKey: 'ethereum_denomination' }
      ],
      customTokensSettings: [],
      activeWalletIds: account.activeWalletIds,
      archivedWalletIds: account.archivedWalletIds,
      currencyWallets: account.currencyWallets
    }
    const expected = {}
    const action = {
      type: ACCOUNT_INIT_COMPLETE,
      data: accountInitObject
    }
    const actual = settingsReducer(initialState, action)

    expect(actual).toEqual(expected)
  })
})

//
// Constants.ACCOUNT_INIT_COMPLETE
// Constants.SET_CONFIRM_PASSWORD_ERROR
// ACTION.SET_LOGIN_STATUS
// ACTION.TOGGLE_PIN_LOGIN_ENABLED
// ACTION.SET_CUSTOM_TOKENS
// WALLET_ACTION.UPDATE_EXISTING_TOKEN_SUCCESS
// WALLET_ACTION.OVERWRITE_THEN_DELETE_TOKEN_SUCCESS
// WALLET_ACTION.DELETE_CUSTOM_TOKEN_SUCCESS
// ADD_TOKEN_ACTION.SET_TOKEN_SETTINGS
// ADD_TOKEN_ACTION.ADD_NEW_CUSTOM_TOKEN_SUCCESS
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
