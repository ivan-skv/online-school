import { NavigationScreenOptions, NavigationInjectedProps } from 'react-navigation';
import { StyleSheet } from 'react-native';
import theme from 'src/theme';

const defaultNavigationOptions = (props: NavigationInjectedProps): NavigationScreenOptions => {
  const { navigation } = props;
  const { routeName } = navigation.state;
  return {
    title: getTitle(routeName),
    headerStyle: {
      backgroundColor: theme().colors.background,
      elevation: 0,
      borderBottomColor: theme().colors.on.surface,
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    headerTitleStyle: {
      fontSize: 24,
    },
    headerTintColor: theme().colors.on.background,
  }
};

const getTitle = (routeName: string) => {
  switch (routeName) {
    case 'Login':
      return 'Логин'
    case 'Recovery':
      return 'Восстановление пароля'
    case 'EmailSubmit':
      return 'Электронная почта'
    default:
      return '';
  }
}

export default defaultNavigationOptions;