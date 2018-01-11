import * as actions from './action.js'
import * as ADD_TOKEN_ACTION from '../scenes/AddToken/action.js'
import * as WALLET_ACTION from '../Wallets/action'
import {
  SYNCED_ACCOUNT_DEFAULTS,
  LOCAL_ACCOUNT_DEFAULTS,
  CORE_DEFAULTS
} from '../../Core/Account/settings.js'
import _ from 'lodash'
import {reduce} from 'ramda'
import {combineReducers} from 'redux'

const DEFAULT_SETTINGS = {
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

const autoLogoutMode = (state = DEFAULT_SETTINGS.autoLogoutMode, action) => {
  switch (action.type) {
    case actions.SET_AUTO_LOGOUT_MODE: {
      return action.data.autoLogoutMode
    }

    default:
      return state
  }
}

const bluetoothMode = (state = DEFAULT_SETTINGS.bluetoothMode, action) => {
  switch (action.type) {
    case actions.SET_BLUETOOTH_MODE: {
      return action.data.bluetoothMode
    }

    default:
      return state
  }
}

const defaultFiat = (state = DEFAULT_SETTINGS.defaultFiat, action) => {
  switch (action.type) {
    case actions.SET_DEFAULT_FIAT: {
      return action.data.defaultFiat
    }

    default:
      return state
  }
}

const loginStatus = (state = false, action) => {
  switch (action.type) {
    case actions.SET_LOGIN_STATUS: {
      return action.data.loginStatus
    }

    default:
      return state
  }
}

const merchantMode = (state = DEFAULT_SETTINGS.merchantMode, action) => {
  switch (action.type) {
    case actions.SET_MERCHANT_MODE: {
      return action.data.merchantMode
    }

    default:
      return state
  }
}

const otpMode = (state = DEFAULT_SETTINGS.otpMode, action) => {
  switch (action.type) {
    case actions.SET_OTP_MODE: {
      return action.data.otpMode
    }

    default:
      return state
  }
}

const pinMode = (state = DEFAULT_SETTINGS.pinMode, action) => {
  switch (action.type) {
    case actions.SET_PIN_MODE: {
      return action.data.pinMode
    }

    default:
      return state
  }
}

const sudoMode = (state = DEFAULT_SETTINGS.sudoMode, action) => {
  switch (action.type) {
    case actions.SET_SUDO_MODE: {
      return action.data
    }

    default:
      return state
  }
}

const touchIdMode = (state = DEFAULT_SETTINGS.touchIdMode, action) => {
  switch (action.type) {
    case actions.SET_TOUCH_ID_MODE: {
      return action.data.touchIdMode
    }

    default:
      return state
  }
}

const walletTypes = (state = [], action) => {
  switch (action.type) {
    case actions.LOAD_CURRENCY_PLUGINS: {
      const walletTypes = reduce((walletTypes, plugin) => [
        ...walletTypes,
        ...plugin.currencyInfo.walletTypes
      ], state, action.data.currencyPlugins)

      return walletTypes
    }

    default:
      return state
  }
}

const currencyInfos = (state = DEFAULT_SETTINGS.currencyInfos, action) => {
  switch (action.type) {
    case actions.LOAD_CURRENCY_PLUGINS: {
      const currencyInfos = reduce((infos, plugin) => ({
        ...infos,
        [plugin.currencyInfo.pluginName]: plugin.currencyInfo
      }), state, action.data.currencyPlugins)

      return currencyInfos
    }

    default:
      return state
  }
}

const currencies = (state = {}, action) => {
  switch (action.type) {
    case actions.LOAD_CURRENCY_PLUGINS: {
      const settings = reduce((settings, plugin) => ({
        ...settings,
        [plugin.currencyInfo.currencyCode]: currencySettings(state[plugin.currencyInfo.currencyCode], action)
        // uncomment to enable currency settings for tokens
        // ...reduce((tokens, token) => ({
        //   [metaToken.currencyInfo.currencyCode]: currencySettings(state[metaToken.currencyInfo.currencyCode], action)
        // }), {}, plugin.metaTokens)
      }), state, action.data.currencyPlugins)

      return settings
    }

    case actions.SET_TRANSACTION_SPENDING_LIMIT:
    case actions.SET_DAILY_SPENDING_LIMIT:
    case actions.SET_DENOMINATION_KEY: {
      return {
        ...state,
        [action.data.currencyCode]: currencySettings(state[action.data.currencyCode], action)
      }
    }

    default:
      return state
  }
}

const dailySpendingLimit = (state = {isEnabled: true, nativeAmount: '0'}, action) => {
  switch (action.type) {
    case actions.SET_DAILY_SPENDING_LIMIT: {
      return {
        isEnabled: action.data.isEnabled,
        nativeAmount: action.data.nativeAmount
      }
    }

    default:
      return state
  }
}

const transactionSpendingLimit = (state = {isEnabled: true, nativeAmount: '0'}, action) => {
  switch (action.type) {
    case actions.SET_TRANSACTION_SPENDING_LIMIT: {
      return {
        isEnabled: action.data.isEnabled,
        nativeAmount: action.data.nativeAmount
      }
    }

    default:
      return state
  }
}

const denominationKey = (state = null, action) => {
  switch (action.type) {
    case actions.SET_DISPLAY_DENOMINATION: {
      return action.data.denomination.multiplier
    }

    // case actions.LOAD_CURRENCY_PLUGINS: {
    //   return DEFAULT_SETTINGS.denominationKeys[action.data.]
    // }

    default:
      return state
  }
}

const currencySettings = combineReducers({
  dailySpendingLimit,
  transactionSpendingLimit,
  denominationKey
})

export const settings = combineReducers({
  autoLogoutMode,
  bluetoothMode,
  currencyInfos,
  currencies,
  defaultFiat,
  loginStatus,
  merchantMode,
  otpMode,
  pinMode,
  sudoMode,
  touchIdMode,
  walletTypes
})

//
// // export const supportedWalletTypes = ()
//
// export const currencySettings = ({
//   [currencyCode]: {
//     denominationKey,
//     spendingLimits,
//   }
// })
//
// const plugins = (state = {}, action) => {
//   switch (action.type) {
//     case actions.ADD_CURRENCY_PLUGINS: {
//       return reduce((plugins, plugin) => ({
//         ...plugins,
//         [plugin.name]: plugin}), action.data.currencyPlugins
//       }, state, action.data.currencyPlugins)
//     }
//
//     default:
//       return state
//   }
// }
//
// const pluginList = (state = [], action) => {
//   switch (action.type) {
//     case actions.ADD_CURRENCY_PLUGINS: {
//       return [
//         ...state,
//         action.data.currencyPlugins
//       ]
//     }
//
//     default:
//       return state
//   }
// }
//
//
// const currencies = (state = {}, action) => {
//   switch (action.type) {
//     case actions.LOAD_CURRENCY_PLUGINS: {
//       const settings = reduce((settings, plugin) => ({
//         ...settings,
//         ...plugin.currencyCode: currencySettings(action),
//         ...plugin.metaTokens
//       }), state, action.data.currencyPlugins)
//
//       return settings
//     }
//
//     case actions.UPDATE_TRANSACTION_SPENDING_LIMIT:
//     case actions.UPDATE_DAILY_SPENDING_LIMIT:
//     case actions.UPDATE_DENOMINATION_KEY: {
//       ...state,
//       [action.data.currencyCode]: currencySettings(state[currencyCode], action)
//     }
//
//     default:
//       return state
//   }
// }
//
// const currencySettings = combineReducers({
//   dailySpendingLimit,
//   transactionSpendingLimit,
//   denominationKey
// })
//
// case actions.ADD_CURRENCY_PLUGIN: {
//   const {plugins} = state
//   const {supportedWalletTypes} = plugins
//   const {arrayPlugins} = plugins
//   const {pluginName, plugin, walletTypes} = data
//   const currencyInfo = plugin.currencyInfo
//   // Build up object with all the information for the parent currency, accesible by the currencyCode
//   const defaultParentCurrencyInfo = state[currencyInfo.currencyCode]
//   const parentCurrencyInfo = {
//     [currencyInfo.currencyCode]: {
//       ...defaultParentCurrencyInfo,
//       currencyName: currencyInfo.currencyName,
//       currencyCode: currencyInfo.currencyCode,
//       denominations: currencyInfo.denominations,
//       symbolImage: currencyInfo.symbolImage,
//       symbolImageDarkMono: currencyInfo.symbolImageDarkMono
//     }
//   }
//
//   // Build up object with all the information for each metatoken, accessible by the token currencyCode
//   const metatokenCurrencyInfos = currencyInfo.metaTokens.reduce((acc, metatoken) => {
//     const defaultMetatokenInfo = state[metatoken.currencyCode]
//     return {
//       ...acc,
//       [metatoken.currencyCode]: {
//         ...defaultMetatokenInfo,
//         currencyName: metatoken.currencyName,
//         currencyCode: metatoken.currencyCode,
//         denominations: metatoken.denominations,
//         symbolImage: metatoken.symbolImage,
//         symbolImageDarkMono: metatoken.symbolImageDarkMono
//       }
//     }
//   }, {})
//
//   // Build up object with all the currency information for each currency supported by the plugin, accessible by the currencyCode
//   const currencyInfos = {
//     ...parentCurrencyInfo,
//     ...metatokenCurrencyInfos
//   }
//
//   return {
//     ...state,
//     ...currencyInfos,
//     plugins: {
//       ...plugins,
//       [pluginName]: plugin,
//       arrayPlugins: [
//         ...arrayPlugins,
//         plugin
//       ],
//       supportedWalletTypes: [
//         ...supportedWalletTypes,
//         ...walletTypes
//       ]
//     }
//   }
// }
