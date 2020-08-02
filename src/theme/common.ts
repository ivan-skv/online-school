import { IThemeCommon } from "./interfaces"
import { Dimensions } from 'react-native'

const wnd = Dimensions.get('window')

const common: IThemeCommon = {
  tabBar: {
    height: 50,
  },
  device: {
    width: wnd.width < wnd.height ? wnd.width : wnd.height,
    height: wnd.height > wnd.width ? wnd.height : wnd.width,
  },
}

export default common;