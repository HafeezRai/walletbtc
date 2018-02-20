// @flow

import type { Action } from '../../../ReduxTypes'
import { daysBetween } from '../../../utils.js'
import { ACCOUNT_INIT_COMPLETE } from '../../../../constants/indexConstants.js'

import { SET_SETTINGS_LOCK } from '../../Settings/action.js'

export const INITIAL_NON_PASSWORD_DAYS_LIMIT = 2
export const INITIAL_NON_PASSWORD_LOGINS_LIMIT = 2

export const MAX_NON_PASSWORD_DAYS_LIMIT = 64 // max number of consecutive non password days
export const MAX_NON_PASSWORD_LOGINS_LIMIT = 128 // max number of consecutive non password logins

export const INITIAL_NON_PASSWORD_DAYS_REMAINING = 2
export const INITIAL_NON_PASSWORD_LOGINS_REMAINING = 2

export const NON_PASSWORD_DAYS_GROWTH_RATE = 2
export const NON_PASSWORD_LOGINS_GROWTH_RATE = 2
export const PASSWORD_RECOVERY_MULTIPLIER = 2

export const NON_PASSWORD_DAYS_POSTPONEMENT = 2
export const NON_PASSWORD_LOGINS_POSTPONMENT = 2

export const initialState = {
  needsPasswordCheck: null,
  lastPasswordUse: new Date(0),
  nonPasswordDaysRemaining: INITIAL_NON_PASSWORD_DAYS_REMAINING,
  nonPasswordLoginsRemaining: INITIAL_NON_PASSWORD_LOGINS_REMAINING,
  nonPasswordDaysLimit: INITIAL_NON_PASSWORD_DAYS_LIMIT,
  nonPasswordLoginsLimit: INITIAL_NON_PASSWORD_LOGINS_LIMIT
}

export type PasswordReminderState = {
  needsPasswordCheck: boolean | null,
  lastPasswordUse: Date,
  nonPasswordDaysRemaining: number,
  nonPasswordLoginsRemaining: number,
  nonPasswordDaysLimit: number,
  nonPasswordLoginsLimit: number
}

export const passwordReminderReducer = (state: PasswordReminderState = initialState, action: Action) => {
  const condition = getCondition(action)

  switch (condition) {
    case 'NEW_ACCOUNT': {
      return {
        ...state,
        needsPasswordCheck: false,
        lastPasswordUse: action.lastPasswordUse || new Date() // action.lastPasswordUse is used to produce deterministic tests
      }
    }

    case 'PASSWORD_USED': {
      return {
        needsPasswordCheck: false,
        lastPasswordUse: action.lastPasswordUse || new Date(), // action.lastPasswordUse is used to produce deterministic tests
        nonPasswordDaysRemaining: state.nonPasswordDaysLimit * NON_PASSWORD_DAYS_GROWTH_RATE,
        nonPasswordLoginsRemaining: state.nonPasswordLoginsLimit * NON_PASSWORD_LOGINS_GROWTH_RATE,
        nonPasswordDaysLimit: Math.min(state.nonPasswordDaysLimit * NON_PASSWORD_DAYS_GROWTH_RATE, MAX_NON_PASSWORD_DAYS_LIMIT),
        nonPasswordLoginsLimit: Math.min(state.nonPasswordLoginsLimit * NON_PASSWORD_LOGINS_GROWTH_RATE, MAX_NON_PASSWORD_LOGINS_LIMIT)
      }
    }

    case 'NON_PASSWORD_LOGIN': {
      // save to local settings? do this in <PasswordReminderModal />
      const nonPasswordLoginsRemaining = state.nonPasswordLoginsRemaining - 1
      // $FlowFixMe
      const nonPasswordDaysRemaining = state.nonPasswordDaysLimit - daysBetween(state.lastPasswordUse, action.lastPasswordUse || new Date()) // action.lastPasswordUse is used to make deterministic tests
      const needsPasswordCheck = nonPasswordLoginsRemaining <= 0 || nonPasswordDaysRemaining <= 0

      return {
        ...state,
        nonPasswordLoginsRemaining,
        nonPasswordDaysRemaining,
        needsPasswordCheck
      }
    }

    case 'PASSWORD_REMINDER_SKIPPED': {
      return {
        ...state,
        needsPasswordCheck: false,
        nonPasswordDaysRemaining: state.nonPasswordDaysRemaining + NON_PASSWORD_DAYS_POSTPONEMENT,
        nonPasswordLoginsRemaining: state.nonPasswordLoginsRemaining + NON_PASSWORD_LOGINS_POSTPONMENT
      }
    }

    default:
      return state
  }
}

export const getCondition = (action: Action) => {
  // $FlowFixMe
  if ((action.type === 'LOGIN' || action.type === ACCOUNT_INIT_COMPLETE) && action.data.account.newAccount) {
    return 'NEW_ACCOUNT'
  }
  // $FlowFixMe
  if ((action.type === 'LOGIN' || action.type === ACCOUNT_INIT_COMPLETE) && action.data.account.passwordLogin) {
    return 'PASSWORD_USED'
  }
  if (action.type === SET_SETTINGS_LOCK && action.data === false) {
    return 'PASSWORD_USED'
  }

  // $FlowFixMe
  if ((action.type === 'LOGIN' || action.type === ACCOUNT_INIT_COMPLETE) && !(action.data.account.passwordLogin || action.data.account.newAccount)) {
    return 'NON_PASSWORD_LOGIN'
  }

  if (action.type === 'PASSWORD_REMINDER_SKIPPED') {
    return 'PASSWORD_REMINDER_SKIPPED'
  }

  return 'default'
}
