// @flow

import * as CORE_SELECTORS from '../../../Core/selectors.js'
import * as UI_SELECTORS from '../../../UI/selectors.js'
import * as WALLET_API from '../../../Core/Wallets/api.js'
import type { AbcReceiveAddress } from 'airbitz-core-types'
import type {Dispatch, GetState} from '../../../ReduxTypes'

export const UPDATE_RECEIVE_ADDRESS = 'UPDATE_RECEIVE_ADDRESS'
export const UPDATE_RECEIVE_ADDRESS_START = 'UPDATE_RECEIVE_ADDRESS_START'
export const UPDATE_RECEIVE_ADDRESS_SUCCESS = 'UPDATE_RECEIVE_ADDRESS_SUCCESS'
export const UPDATE_RECEIVE_ADDRESS_ERROR = 'UPDATE_RECEIVE_ADDRESS_ERROR'
export const SAVE_RECEIVE_ADDRESS = 'SAVE_RECEIVE_ADDRESS'
export const UPDATE_INPUT_CURRENCY_SELECTED = 'UPDATE_INPUT_CURRENCY_SELECTED'

export const updateReceiveAddress = (walletId: string, currencyCode: string) => (dispatch: Dispatch, getState: GetState) => {
  const state = getState()
  const wallet = CORE_SELECTORS.getWallet(state, walletId)

  const onSuccess = (receiveAddress: AbcReceiveAddress) => {
    dispatch(updateReceiveAddressSuccess(receiveAddress))
  }
  const onError = (error: Error) => {
    // console.log('Core Error', error)
    dispatch(updateReceiveAddressError(error))
  }

  WALLET_API.getReceiveAddress(wallet, currencyCode)
    .then(onSuccess)
    .catch(onError)
}

export const updateInputCurrencySelected = (inputCurrencySelected: string) => ({
  type: UPDATE_INPUT_CURRENCY_SELECTED,
  data: {inputCurrencySelected}
})

export const saveReceiveAddress = (receiveAddress: AbcReceiveAddress) => (dispatch: Dispatch, getState: GetState) => {
  const state = getState()
  const selectedWalletId = UI_SELECTORS.getSelectedWalletId(state)
  const wallet = CORE_SELECTORS.getWallet(state, selectedWalletId)

  const onSuccess = () => {
    dispatch(updateReceiveAddress(selectedWalletId, wallet.currencyCode))
  }
  const onError = (error) => {
    console.log('Core Error', error)
  }

  wallet.saveReceiveAddress(receiveAddress)
    .then(onSuccess)
    .catch(onError)
}

export const updateReceiveAddressSuccess = (receiveAddress: AbcReceiveAddress) => ({
  type: UPDATE_RECEIVE_ADDRESS_SUCCESS,
  data: {receiveAddress}
})

export const updateReceiveAddressError = (error: Error) => ({
  type: UPDATE_RECEIVE_ADDRESS_ERROR,
  data: {error}
})

export const UPDATE_METADATA = 'UPDATE_METADATA'
