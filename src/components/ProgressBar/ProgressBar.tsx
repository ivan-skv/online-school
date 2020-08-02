import React from 'react'
import { ProgressBarAndroid, Platform } from 'react-native'
import { BarPropTypes, Bar } from 'react-native-progress'
import theme from 'src/theme'
import { IThemeMode } from 'src/theme/interfaces'

const ProgressBarIOS: React.FC<BarPropTypes> = (props) => (
  <Bar
    {...props}
    indeterminate
    borderWidth={0}
    height={2}
    width={null}
    style={{ flex: 1 }}
    useNativeDriver
  />
)

interface Props extends BarPropTypes {
  mode?: IThemeMode;
}

export default class ProgressBar extends React.PureComponent<Props> {
  render() {
    if (Platform.OS == 'ios') {
      return <ProgressBarIOS
        {...this.props}
        color={theme(this.props.mode).colors.on.primary}
      />
    }
    return <ProgressBarAndroid
      {...this.props}
      color={theme(this.props.mode).colors.on.primary}
      styleAttr="Horizontal"
      style={{ zIndex: 10000, top: -7 }}
    />
  }
}

const ratio = 28 / 70;