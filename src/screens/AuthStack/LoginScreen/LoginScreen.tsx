import React from 'react';
import { NavigationInjectedProps } from 'react-navigation'
import { IUserState } from 'src/redux/interfaces';
import { userActions } from 'src/redux/user'
import { SafeAreaView, ViewStyle, Text } from 'react-native';
import { Button } from 'src/components';

interface Props extends NavigationInjectedProps {
  user: IUserState;
  getUserGuest: typeof userActions.setUserGuest;
  getUserStudent: typeof userActions.setUserStudent;
  getUserParent: typeof userActions.setUserParent;
  getUserEmployee: typeof userActions.setUserEmployee;
}

export default class LoginScreen extends React.Component<Props> {
  render(): JSX.Element {
    const { navigation } = this.props;
    console.log('navigation: ', navigation);
    return <>
      <SafeAreaView style={styles.container}>
        <Text>Login screen</Text>
        <Button
          onPress={() => {
            console.log('pressed')
            navigation.navigate('Recovery', { foo: 1 });
          }}
        >
          <Text>{'Забыли пароль'}</Text>
        </Button>
      </SafeAreaView>
    </>;
  }
}

const styles: {
  container: ViewStyle;
} = {
  container: {
    flex: 1,
  },
};
