import { ViewStyle } from "react-native";

export type IThemeMode = 'dark' | 'light';

export interface IThemeCommon {
  tabBar: ViewStyle;
  device: {
    width: number;
    height: number;
  },
}

export interface IThemeColors {
  primary: string;
  secondary: string;
  background: string;
  error: string;
  surface: string;
  primaryDark?: string;
  primaryLight?: string;
  secondaryDark?: string;
  secondaryLight?: string;
  white: string;
  black: string;

  on: Partial<IThemeColors>;
}

export interface ITheme extends IThemeCommon {
  colors: IThemeColors;
}
