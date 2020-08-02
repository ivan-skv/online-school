import React from 'react'
import { SafeAreaView } from 'react-native'
import { CircleSnail, CircleSnailPropTypes } from 'react-native-progress'
import theme from 'src/theme'

export default class Loading extends React.Component<CircleSnailPropTypes> {
  render() {
    const { style, ...restProps } = this.props;
    return <SafeAreaView style={[{ flex: 0, justifyContent: 'center', alignItems: 'center' }, style]}>
      <CircleSnail
        {...restProps}
        size={100}
        thickness={5}
        indeterminate
        color={theme().colors.on.primary}
        duration={800}
        spinDuration={2000}
        borderWidth={0}
        direction="clockwise"
      />
    </SafeAreaView>
  }
}
