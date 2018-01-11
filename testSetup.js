jest.mock('mobx-react/native', () => require('mobx-react/custom')) // eslint-disable-line no-undef
jest.mock('Linking', () => { // eslint-disable-line no-undef
  return {
    addEventListener: jest.fn(), // eslint-disable-line no-undef
    removeEventListener: jest.fn(), // eslint-disable-line no-undef
    openURL: jest.fn(), // eslint-disable-line no-undef
    canOpenURL: jest.fn(), // eslint-disable-line no-undef
    getInitialURL: jest.fn() // eslint-disable-line no-undef
  }
})
