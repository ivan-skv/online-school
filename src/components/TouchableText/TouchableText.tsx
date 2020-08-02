import React from 'react'
import { Text, TextProps, GestureResponderEvent } from 'react-native'

interface Props extends TextProps {
  activeOpacity?: number;
  duration?: number;
  onLongPress?: (...arg: any[]) => void;
  onPress?: (...args: any[]) => void;
}

interface State {
  opacity: number;
}

export default class TouchableText extends React.PureComponent<Props, State> {
  constructor(props: TextProps) {
    super(props)
    this.state = {
      opacity: 1,
    };
    this.timer = null;
  }

  private timer: any;

  private resetOpacity = (): void => {
    const { duration = 16 } = this.props;
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      const { onPress } = this.props;
      this.setState({ opacity: 1 }, onPress);
    }, duration);
  }

  private onPress = (): void => {
    const { activeOpacity = 0.2 } = this.props;
    this.setState({ opacity: activeOpacity }, this.resetOpacity);
  }

  render() {
    const { style, onPress, ...restProps } = this.props;
    const { opacity } = this.state;
    return (
      <Text
        {...restProps}
        onPress={this.onPress}
        onLongPress={this.props.onLongPress ? this.onPress : undefined}
        style={[style, { opacity }]}
      />
    )
  }
}