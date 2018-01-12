// @flow
// allowing multiple imports, types vs. regular
// eslint-disable-next-line
import React, {Component} from 'react'
import {
  View
} from 'react-native'
import Row from './Row.ui.js'
// eslint-disable-next-line

type Props = {
  children: Array<any>
}

export default class RadioRows extends Component<Props> {
  render () {
    return (
      <View style={[{height: 200}]}>
        {this.props.children}
      </View>
    )
  }
}
