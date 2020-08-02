import React, { useState, useMemo, useContext } from 'react'
import {
  TouchableOpacity, TouchableOpacityProps, /* Button as RNButton, */ Text, TextStyle, StyleSheet, ViewStyle,
} from 'react-native'
import theme from 'src/theme';
import { IThemeMode } from 'src/theme/interfaces';

export interface Props extends TouchableOpacityProps {
  title?: string;
  titleStyle?: TextStyle;
  mode?: IThemeMode;
  color?: string;
}

const Button: React.FC<Props> = (props) => {
  const { title, titleStyle, children, mode, style, color, ...restProps } = props;
  return <TouchableOpacity
    {...restProps}
    hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
    style={[
      styles.button,
      {
        backgroundColor: color ? color : theme(mode).colors.surface,
      },
      style,
    ]}
  >
    {title ? (
      <Text
        style={[
          styles.title,
          {
            color: theme(mode).colors.on.surface,
          },
          titleStyle,
        ]}
      >
        {title}
      </Text>
    ) : children}
  </TouchableOpacity>
}

export default Button

const styles: {
  button: ViewStyle;
  title: TextStyle;
} = {
  button: {
    padding: 10,
    borderRadius: 20,
    minWidth: '70%',
  },
  title: {
    textAlign: 'center',
  },
}