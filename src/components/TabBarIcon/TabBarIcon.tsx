import React from 'react';
import { View, Image, ImageStyle, ImageSourcePropType } from 'react-native';
import theme from '../../theme'
import { IThemeMode } from 'src/theme/interfaces';

interface Props {
  focused: boolean;
  routeName: string;
  mode?: IThemeMode;
}

const TabBarIcon: React.FC<Props> = (props) => {
  const { mode } = props;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme(mode).colors.background,
      }}
    >
      <Image
        source={getIconSource(props)}
        style={styles.icon}
      />
    </View>
  );
}

const getIconSource = (props: Props): ImageSourcePropType => {
  return { uri: undefined };
}

export default TabBarIcon;

const styles: {
  icon: ImageStyle;
} = {
  icon: {
    width: 30,
    height: 30,
  },
};
