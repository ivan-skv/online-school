import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

export interface Props extends TouchableOpacityProps { }

export default class Button extends React.PureComponent<Props> {
  render() {
    const { buttonType = 'filled' } = this.props;
    return <TouchableOpacity
      {...this.props}
      hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
      style={[buttonType === 'filled' ? styles.filled : styles.transparent, this.props.style]}
    >
      {this.props.children}
    </TouchableOpacity>
  }
}

const styles = {
  filled: {
    backgroundColor: '#C4C4C4',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  transparent: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    margin: 10,
    flex: 1
  }
}