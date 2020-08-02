import React from 'react'
import { View } from 'react-native'
import Input, { InputProps } from './Input'

export default class LoginInput extends React.PureComponent<InputProps> {
  render() {
    return (
      <Input
        {...this.props}
        label='Логин'
        keyboardType="default"
      />
    )
  }
}