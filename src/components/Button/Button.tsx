import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

export interface Props extends TouchableOpacityProps { }

export default class Button extends React.PureComponent<Props> {
  render() {
    return <TouchableOpacity
      {...this.props}
      hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
      style={{ padding: 10, backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
    >
      {this.props.children}
    </TouchableOpacity>
  }
}