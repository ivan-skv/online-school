import React from 'react'
import Input, { InputProps } from './Input'

export default class PasswordInput extends React.PureComponent<InputProps> {
  render() {
    return <Input
      {...this.props}
      label='Пароль'
      secureTextEntry
    />;
  }
}