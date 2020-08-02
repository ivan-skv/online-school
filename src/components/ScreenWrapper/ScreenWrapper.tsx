import React from 'react'
import { SafeAreaView, ViewStyle } from 'react-native'
import { SafeAreaViewProps } from 'react-navigation';

const ScreenWrapper: React.FC<SafeAreaViewProps> = (props) => {
  const { style, ...restProps } = props;
  return <SafeAreaView {...restProps} style={[styles.wrapper, style]} />
}

const styles: {
  wrapper: ViewStyle;
} = {
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(100, 100, 100, 0.2)',
  },
}
export default ScreenWrapper;