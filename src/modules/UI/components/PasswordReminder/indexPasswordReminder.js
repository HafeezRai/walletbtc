// @flow

import {
  passwordReminderReducer,
  initialState,
  getCondition,
  MAX_NON_PASSWORD_DAYS_LIMIT,
  MAX_NON_PASSWORD_LOGINS_LIMIT,
  NON_PASSWORD_DAYS_GROWTH_RATE,
  NON_PASSWORD_LOGINS_GROWTH_RATE
} from './passwordReminderReducer.js'

export {
  passwordReminderReducer,
  initialState,
  getCondition,
  MAX_NON_PASSWORD_DAYS_LIMIT,
  MAX_NON_PASSWORD_LOGINS_LIMIT,
  NON_PASSWORD_DAYS_GROWTH_RATE,
  NON_PASSWORD_LOGINS_GROWTH_RATE
}
