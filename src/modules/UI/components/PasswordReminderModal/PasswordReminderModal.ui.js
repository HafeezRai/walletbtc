// @flow

import React, {Component} from 'react'

// import Modal from '../Modal/Modal.ui.js'
import Modal from 'react-native-modal'

import s from '../../../../locales/strings.js'

const PASSWORD_REMINDER_TEXT = s.password_reminder_title

export type Props = {}
export type State = {}
export class PasswordReminderModal extends Component<Props, State> {
  render () {
    return <Modal>
      <Ceiling icon={} onExit={() => {}}>

      <Header>
        <Title><Text>{PASSWORD_REMINDER_TEXT}</Text></Title>
      </Header>

      <Body>

      </Body>

      <Footer>

      </Footer>
    </Modal>
  }
}

const Ceiling = () =>{
  return (
    <View style={styles.ceiling}>

    </View>
  )
}
