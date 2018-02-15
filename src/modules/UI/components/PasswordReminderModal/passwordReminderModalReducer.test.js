/* globals test describe expect */

import {
  passwordReminderReducer as uut,
  initialState,
  MAX_NON_PASSWORD_DAYS_LIMIT,
  MAX_NON_PASSWORD_LOGINS_LIMIT,
  NON_PASSWORD_DAYS_GROWTH_RATE,
  NON_PASSWORD_LOGINS_GROWTH_RATE
} from './indexPasswordReminder.js'

describe('PasswordReminder', () => {
  test('initialState', () => {
    const expected = initialState
    const actual = uut(undefined, {})

    expect(actual).toEqual(expected)
  })

  describe('Non-password login', () => {
    describe('Decrement nonPasswordLoginsRemaining', () => {
      test('EDGE LOGIN', () => {
        const expected = initialState.nonPasswordLoginsRemaining - 1
        const action = { type: 'EDGE_LOGIN' }
        const actual = uut(initialState, action).nonPasswordLoginsRemaining

        expect(actual).toEqual(expected)
      })

      test('KEY_LOGIN', () => {
        const expected = initialState.nonPasswordLoginsRemaining - 1
        const action = { type: 'KEY_LOGIN' }
        const actual = uut(initialState, action).nonPasswordLoginsRemaining

        expect(actual).toEqual(expected)
      })

      test('PIN_LOGIN', () => {
        const expected = initialState.nonPasswordLoginsRemaining - 1
        const action = { type: 'PIN_LOGIN' }
        const actual = uut(initialState, action).nonPasswordLoginsRemaining

        expect(actual).toEqual(expected)
      })

      test('RECOVERY_LOGIN', () => {
        const expected = initialState.nonPasswordLoginsRemaining - 1
        const action = { type: 'RECOVERY_LOGIN' }
        const actual = uut(initialState, action).nonPasswordLoginsRemaining

        expect(actual).toEqual(expected)
      })
    })

    describe('Decrement nonPasswordDaysRemaining', () => {
      test('EDGE LOGIN', () => {
        const currentDate = new Date(86400000)
        const expected = initialState.nonPasswordDaysRemaining - 1
        const action = { type: 'EDGE_LOGIN', currentDate }
        const actual = uut(initialState, action).nonPasswordDaysRemaining

        expect(actual).toEqual(expected)
      })
    })
  })

  describe('Password used', () => {
    describe(`* Set needsPasswordCheck -> false,
      * Update nonPasswordLoginsLimit,
      * Update nonPasswordDaysLimit,
      * Set nonPasswordDaysRemaining -> nonPasswordLoginsLimit,
      * Set nonPasswordLoginsRemaining -> nonPasswordDaysLimit,
      * Update lastPasswordUse`, () => {
      test('NEW_ACCOUNT_LOGIN', () => {
        const testDate = new Date()
        const needsPasswordCheck = false
        const lastPasswordUse = testDate

        const nonPasswordDaysLimit = initialState.nonPasswordDaysLimit * NON_PASSWORD_DAYS_GROWTH_RATE
        const nonPasswordLoginsLimit = initialState.nonPasswordLoginsLimit * NON_PASSWORD_LOGINS_GROWTH_RATE

        const nonPasswordDaysRemaining = nonPasswordDaysLimit
        const nonPasswordLoginsRemaining = nonPasswordLoginsLimit

        const expected = {
          ...initialState,
          needsPasswordCheck,
          nonPasswordDaysRemaining,
          nonPasswordLoginsRemaining,
          lastPasswordUse,
          nonPasswordDaysLimit,
          nonPasswordLoginsLimit
        }
        const action = { type: 'NEW_ACCOUNT_LOGIN', lastPasswordUse: testDate } // used to produce deterministic tests
        const actual = uut(initialState, action)

        expect(actual).toEqual(expected)
      })

      test('PASSWORD_LOGIN', () => {
        const testDate = new Date()
        const needsPasswordCheck = false
        const lastPasswordUse = testDate

        const nonPasswordDaysLimit = initialState.nonPasswordDaysLimit * NON_PASSWORD_DAYS_GROWTH_RATE
        const nonPasswordLoginsLimit = initialState.nonPasswordLoginsLimit * NON_PASSWORD_LOGINS_GROWTH_RATE

        const nonPasswordDaysRemaining = nonPasswordDaysLimit
        const nonPasswordLoginsRemaining = nonPasswordLoginsLimit

        const expected = {
          ...initialState,
          needsPasswordCheck,
          nonPasswordDaysRemaining,
          nonPasswordLoginsRemaining,
          lastPasswordUse,
          nonPasswordDaysLimit,
          nonPasswordLoginsLimit
        }
        const action = { type: 'PASSWORD_LOGIN', lastPasswordUse: testDate } // used to produce deterministic tests
        const actual = uut(initialState, action)

        expect(actual).toEqual(expected)
      })

      test('PASSWORD_VERIFIED_UNLOCK_SETTINGS', () => {
        const testDate = new Date()
        const needsPasswordCheck = false
        const lastPasswordUse = testDate

        const nonPasswordDaysLimit = initialState.nonPasswordDaysLimit * NON_PASSWORD_DAYS_GROWTH_RATE
        const nonPasswordLoginsLimit = initialState.nonPasswordLoginsLimit * NON_PASSWORD_LOGINS_GROWTH_RATE

        const nonPasswordDaysRemaining = nonPasswordDaysLimit
        const nonPasswordLoginsRemaining = nonPasswordLoginsLimit

        const expected = {
          ...initialState,
          needsPasswordCheck,
          nonPasswordDaysRemaining,
          nonPasswordLoginsRemaining,
          lastPasswordUse,
          nonPasswordDaysLimit,
          nonPasswordLoginsLimit
        }
        const action = { type: 'PASSWORD_VERIFIED_UNLOCK_SETTINGS', lastPasswordUse: testDate } // used to produce deterministic tests
        const actual = uut(initialState, action)

        expect(actual).toEqual(expected)
      })

      test('PASSWORD_VERIFIED_PASSWORD_REMINDER', () => {
        const testDate = new Date()
        const needsPasswordCheck = false
        const lastPasswordUse = testDate

        const nonPasswordDaysLimit = initialState.nonPasswordDaysLimit * NON_PASSWORD_DAYS_GROWTH_RATE
        const nonPasswordLoginsLimit = initialState.nonPasswordLoginsLimit * NON_PASSWORD_LOGINS_GROWTH_RATE

        const nonPasswordDaysRemaining = nonPasswordDaysLimit
        const nonPasswordLoginsRemaining = nonPasswordLoginsLimit

        const expected = {
          ...initialState,
          needsPasswordCheck,
          nonPasswordDaysRemaining,
          nonPasswordLoginsRemaining,
          lastPasswordUse,
          nonPasswordDaysLimit,
          nonPasswordLoginsLimit
        }
        const action = { type: 'PASSWORD_VERIFIED_PASSWORD_REMINDER', lastPasswordUse: testDate } // used to produce deterministic tests
        const actual = uut(initialState, action)

        expect(actual).toEqual(expected)
      })

      test('PASSWORD_VERIFIED_UNLOCK_SPENDING_LIMITS', () => {
        const testDate = new Date()
        const needsPasswordCheck = false
        const lastPasswordUse = testDate

        const nonPasswordDaysLimit = initialState.nonPasswordDaysLimit * NON_PASSWORD_DAYS_GROWTH_RATE
        const nonPasswordLoginsLimit = initialState.nonPasswordLoginsLimit * NON_PASSWORD_LOGINS_GROWTH_RATE

        const nonPasswordDaysRemaining = nonPasswordDaysLimit
        const nonPasswordLoginsRemaining = nonPasswordLoginsLimit

        const expected = {
          ...initialState,
          needsPasswordCheck,
          nonPasswordDaysRemaining,
          nonPasswordLoginsRemaining,
          lastPasswordUse,
          nonPasswordDaysLimit,
          nonPasswordLoginsLimit
        }
        const action = { type: 'PASSWORD_VERIFIED_UNLOCK_SPENDING_LIMITS', lastPasswordUse: testDate } // used to produce deterministic tests
        const actual = uut(initialState, action)

        expect(actual).toEqual(expected)
      })

      test('PASSWORD_VERIFIED_2FA', () => {
        const testDate = new Date()
        const needsPasswordCheck = false
        const lastPasswordUse = testDate

        const nonPasswordDaysLimit = initialState.nonPasswordDaysLimit * NON_PASSWORD_DAYS_GROWTH_RATE
        const nonPasswordLoginsLimit = initialState.nonPasswordLoginsLimit * NON_PASSWORD_LOGINS_GROWTH_RATE

        const nonPasswordDaysRemaining = nonPasswordDaysLimit
        const nonPasswordLoginsRemaining = nonPasswordLoginsLimit

        const expected = {
          ...initialState,
          needsPasswordCheck,
          nonPasswordDaysRemaining,
          nonPasswordLoginsRemaining,
          lastPasswordUse,
          nonPasswordDaysLimit,
          nonPasswordLoginsLimit
        }
        const action = { type: 'PASSWORD_VERIFIED_2FA', lastPasswordUse: testDate } // used to produce deterministic tests
        const actual = uut(initialState, action)

        expect(actual).toEqual(expected)
      })

      test('PASSWORD_VERIFIED_RECOVERY_QUESTIONS', () => {
        const testDate = new Date()
        const needsPasswordCheck = false
        const lastPasswordUse = testDate

        const nonPasswordDaysLimit = initialState.nonPasswordDaysLimit * NON_PASSWORD_DAYS_GROWTH_RATE
        const nonPasswordLoginsLimit = initialState.nonPasswordLoginsLimit * NON_PASSWORD_LOGINS_GROWTH_RATE

        const nonPasswordDaysRemaining = nonPasswordDaysLimit
        const nonPasswordLoginsRemaining = nonPasswordLoginsLimit

        const expected = {
          ...initialState,
          needsPasswordCheck,
          nonPasswordDaysRemaining,
          nonPasswordLoginsRemaining,
          lastPasswordUse,
          nonPasswordDaysLimit,
          nonPasswordLoginsLimit
        }
        const action = { type: 'PASSWORD_VERIFIED_RECOVERY_QUESTIONS', lastPasswordUse: testDate } // used to produce deterministic tests
        const actual = uut(initialState, action)

        expect(actual).toEqual(expected)
      })
    })

    describe('Respect MAX_NON_PASSWORD_LOGINS_LIMIT', () => {
      test('PASSWORD_LOGIN', () => {
        const previousState = {
          ...initialState,
          nonPasswordLoginsLimit: MAX_NON_PASSWORD_LOGINS_LIMIT
        }
        const expected = MAX_NON_PASSWORD_LOGINS_LIMIT
        const action = { type: 'PASSWORD_LOGIN' }
        const actual = uut(previousState, action).nonPasswordLoginsLimit

        expect(actual).toEqual(expected)
      })
    })

    describe('Respect MAX_NON_PASSWORD_DAYS_LIMIT', () => {
      test('PASSWORD_LOGIN', () => {
        const previousState = {
          ...initialState,
          nonPasswordDaysLimit: MAX_NON_PASSWORD_DAYS_LIMIT
        }
        const expected = MAX_NON_PASSWORD_DAYS_LIMIT
        const action = { type: 'PASSWORD_LOGIN' }
        const actual = uut(previousState, action).nonPasswordDaysLimit

        expect(actual).toEqual(expected)
      })
    })
  })

  describe('Too many', () => {
    test('Days since last password use', () => {
      const nonPasswordDaysLimit = 32
      const lastPasswordUse = new Date(0) // 1970-01-01T00:00:00.000Z
      const currentDate = new Date(86400000 * nonPasswordDaysLimit + 1)
      const previousState = {
        ...initialState,
        lastPasswordUse,
        nonPasswordDaysLimit
      }
      const expected = true
      const action = { type: 'PIN_LOGIN', currentDate }
      const actual = uut(previousState, action).needsPasswordCheck

      expect(actual).toEqual(expected)
    })

    test('Non-password logins', () => {
      const nonPasswordLoginsRemaining = 1
      const previousState = {
        ...initialState,
        nonPasswordLoginsRemaining
      }
      const expected = true
      const action = { type: 'PIN_LOGIN' }
      const actual = uut(previousState, action).needsPasswordCheck

      expect(actual).toEqual(expected)
    })
  })

  describe('Password Reminder skipped', () => {
    describe('PASSWORD_REMINDER_SKIPPED', () => {
      test('Set nonPasswordDaysRemaining +2', () => {
        const action = { type: 'PASSWORD_REMINDER_SKIPPED' }

        const expected = 4
        const actual = uut(initialState, action).nonPasswordDaysRemaining

        expect(actual).toEqual(expected)
      })

      test('Set nonPasswordLoginsRemaining +2', () => {
        const action = { type: 'PASSWORD_REMINDER_SKIPPED' }

        const expected = 4
        const actual = uut(initialState, action).nonPasswordLoginsRemaining

        expect(actual).toEqual(expected)
      })

      test('Set false needsPasswordCheck', () => {
        const action = { type: 'PASSWORD_REMINDER_SKIPPED' }

        const expected = false
        const actual = uut(initialState, action).needsPasswordCheck

        expect(actual).toEqual(expected)
      })
    })
  })
})
