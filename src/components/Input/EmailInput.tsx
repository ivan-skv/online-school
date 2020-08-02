import React from 'react'
import Input, { InputProps } from './Input'

export default class EmailInput extends React.PureComponent<InputProps> {
  render() {
    return <Input
      {...this.props}
      label='Email'
      keyboardType="email-address"
    />;
  }
}