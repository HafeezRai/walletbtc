// @flow

import {connect} from 'react-redux'
import * as CORE_SELECTORS from '../../../Core/selectors.js'
import {Actions} from 'react-native-router-flux'
import PasswordRecoveryComponent from './PasswordRecoveryComponent.ui'
import * as Constants from '../../../../constants/indexConstants'
import type {AbcContext, AbcAccount} from 'airbitz-core-types'
import type {State} from '../../../ReduxTypes'

export type StateProps = {
  context: AbcContext,
  account: AbcAccount
}

export type DispatchProps = {
  onComplete: () => void
}

export const mapStateToProps = (state: State): StateProps => ({
  context: CORE_SELECTORS.getContext(state),
  account: CORE_SELECTORS.getAccount(state)
})

export const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onComplete: () => Actions[Constants.SETTINGS_OVERVIEW]()
})

export default connect(mapStateToProps, mapDispatchToProps)(PasswordRecoveryComponent)
