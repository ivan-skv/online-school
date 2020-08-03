import React from 'react'
import { TextInput, TextInputProps } from 'react-native'

export interface Props extends TextInputProps { }

export default class Input extends React.PureComponent<Props> {
  render() {
    return <TextInput
    {...this.props}
    style={[{ paddingLeft: 25, backgroundColor: '#C4C4C4' }, this.props.style]}
    />
  }
}