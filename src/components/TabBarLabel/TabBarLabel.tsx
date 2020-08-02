import React from 'react';
import { Text, TextStyle } from 'react-native';
import theme from '../../theme'
import { IThemeMode } from 'src/theme/interfaces';

interface Props {
  focused: boolean;
  routeName: string;
  mode?: IThemeMode;
}

const TabBarLabel: React.FC<Props> = (props) => {
  const { mode, routeName, focused } = props;
  return (
    <Text
      numberOfLines={1}
      style={{
        ...styles.text,
        color: focused ? theme(mode).colors.white : theme(mode).colors.on.background,
      }}
    >
      {routeName}
    </Text>
  );
}

export default TabBarLabel;

const styles: {
  text: TextStyle;
} = {
  text: {
    textAlign: 'center',
    marginBottom: 10,
  },
};
