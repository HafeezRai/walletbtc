// @flow

import type { Action } from '../../../ReduxTypes'

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

const MILLISECONDS_PER_DAY = 86400000
const daysBetween = (a, b: any) => {
  const millisecondsBetween = b - a
  const daysBetween = millisecondsBetween / MILLISECONDS_PER_DAY
  return daysBetween
}

export const initialState = {
  needsPasswordCheck: true,
  lastPasswordUse: new Date(0),
  nonPasswordDaysRemaining: INITIAL_NON_PASSWORD_DAYS_REMAINING,
  nonPasswordLoginsRemaining: INITIAL_NON_PASSWORD_LOGINS_REMAINING,
  nonPasswordDaysLimit: INITIAL_NON_PASSWORD_DAYS_LIMIT,
  nonPasswordLoginsLimit: INITIAL_NON_PASSWORD_LOGINS_LIMIT
}

export type PasswordReminderState = {
  needsPasswordCheck: boolean,
  lastPasswordUse: Date,
  nonPasswordDaysRemaining: number,
  nonPasswordLoginsRemaining: number,
  nonPasswordDaysLimit: number,
  nonPasswordLoginsLimit: number
}

export const passwordReminderReducer = (state: PasswordReminderState = initialState, action: Action) => {
  switch (action.type) {
    case 'NEW_ACCOUNT_LOGIN':
    case 'PASSWORD_LOGIN':
    case 'PASSWORD_VERIFIED_UNLOCK_SETTINGS':
    case 'PASSWORD_VERIFIED_PASSWORD_REMINDER':
    case 'PASSWORD_VERIFIED_UNLOCK_SPENDING_LIMITS':
    case 'PASSWORD_VERIFIED_2FA':
    case 'PASSWORD_VERIFIED_RECOVERY_QUESTIONS': {
      return {
        needsPasswordCheck: false,
        lastPasswordUse: action.lastPasswordUse || new Date(), // action.lastPasswordUse is used to produce deterministic tests
        nonPasswordDaysRemaining: state.nonPasswordDaysLimit * NON_PASSWORD_DAYS_GROWTH_RATE,
        nonPasswordLoginsRemaining: state.nonPasswordLoginsLimit * NON_PASSWORD_LOGINS_GROWTH_RATE,
        nonPasswordDaysLimit: Math.min(state.nonPasswordDaysLimit * NON_PASSWORD_DAYS_GROWTH_RATE, MAX_NON_PASSWORD_DAYS_LIMIT),
        nonPasswordLoginsLimit: Math.min(state.nonPasswordLoginsLimit * NON_PASSWORD_LOGINS_GROWTH_RATE, MAX_NON_PASSWORD_LOGINS_LIMIT)
      }
    }

    case 'EDGE_LOGIN':
    case 'KEY_LOGIN':
    case 'PIN_LOGIN':
    case 'RECOVERY_LOGIN': {
      // save to local settings? do this in <PasswordReminderModal />
      const nonPasswordLoginsRemaining = state.nonPasswordLoginsRemaining - 1
      const nonPasswordDaysRemaining = state.nonPasswordDaysLimit - daysBetween(state.lastPasswordUse, action.currentDate || new Date()) // action.currentDate is used to make deterministic tests
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
