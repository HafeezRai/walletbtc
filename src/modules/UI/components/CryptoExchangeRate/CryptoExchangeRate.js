// @flow

import React, {Component} from 'react'
import {View, Text} from 'react-native'

type Props = {
  exchangeRate: string,
  genericError: string,
  insufficient: boolean,
  style: any
}
type State = {}
export default class CryptoExchageRate extends Component<Props, State> {
  render () {
    const {
      container,
      containerError,
      text,
      textError
    } = this.props.style
    return (
      <View style={[container, (this.props.insufficient || this.props.genericError) && containerError]}>
          <Text style={[text,this.props.insufficient && textError ]}>{this.props.exchangeRate}</Text>
      </View>
    )
  }
}
