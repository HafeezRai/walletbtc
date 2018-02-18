// @flow

import type {EdgeDenomination} from 'edge-login'

type CurrencyCode = string
export type CurrencySettingsState = {
  [CurrencyCode]: {
    denominations: {[key: string]: EdgeDenomination},
    displayDenominationKey: string, // overkill? confusing?
    displayDenomination: EdgeDenomination, // keto-derived
    exchangeDenomination: EdgeDenomination, // keto-derived
    spendingLimits: {
      daily: {
        isEnabled: boolean,
        nativeAmount: string
      },
      transaction: {
        isEnabled: boolean,
        nativeAmount: string
      }
    }
  }
}

export const initialState = {}
export const CurrencySettingsReducer = (state: CurrencySettingsState = initialState, action: Action) => {
  return state
}

Constants.ACCOUNT_INIT_COMPLETE
ACTION.SET_DENOMINATION_KEY
ACTION.UPDATE_SETTINGS
ACTION.LOAD_SETTINGS
ACTION.ADD_CURRENCY_PLUGIN
