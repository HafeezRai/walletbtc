// @flow

import React, {Component} from 'react'
import {PasswordRecoveryScreen} from 'airbitz-core-js-ui'
import type {AbcContext, AbcAccount} from 'airbitz-core-types'

export type Props = {
  onComplete: Function,
  onCancel: Function,
  account: AbcAccount,
  context: AbcContext
}

export default class PasswordRecovery extends Component<Props> {
  render () {
    return (
      <PasswordRecoveryScreen
        account={this.props.account}
        context={this.props.context}
        onComplete={this.props.onComplete}
        onCancel={this.props.onComplete}
      />
    )
  }
}
