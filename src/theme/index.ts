import { ITheme, IThemeMode } from './interfaces'
import light from './light'
import dark from './dark'
import common from './common';

const allThemes: { [x in IThemeMode]: ITheme } = {
  light: {
    ...light,
    ...common,
  },
  dark: {
    ...dark,
    ...common,
  },
};

const theme = (mode: IThemeMode = 'light'): ITheme => allThemes[mode];

export default theme;