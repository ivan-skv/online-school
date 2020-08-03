import React from 'react';
import { NavigationInjectedProps } from 'react-navigation'
import { IUserState } from 'src/redux/interfaces';
import { userActions } from 'src/redux/user'
import { SafeAreaView, ViewStyle, Text, View } from 'react-native';
import { Button, Input } from 'src/components';
import { Footer } from 'src/components/Footer';

interface Props extends NavigationInjectedProps {
  user: IUserState;
  getUserGuest: typeof userActions.setUserGuest;
  getUserStudent: typeof userActions.setUserStudent;
  getUserParent: typeof userActions.setUserParent;
  getUserEmployee: typeof userActions.setUserEmployee;
}

export default class LoginScreen extends React.Component<Props> {
  state = {
    login: '',
    password: '',
  }

  onLoginChange = (value) => {
    this.setState({ login: value });
  }

  onPassChange = (value) => {
    this.setState({ password: value });
  }

  render(): JSX.Element {
    console.log(this.props.navigation.navigate)
    const { navigation } = this.props;
    const { login } = this.state;
    // console.log('navigation: ', navigation);
    return <>
      <SafeAreaView style={styles.container}>
        {/* <Text>Login screen</Text> */}
        <Input 
          placeholder='Логин'
          onChangeText={this.onLoginChange}
          style={{ marginBottom: 37 }}
        />
        <Input 
          placeholder='Пароль'
          onChangeText={this.onPassChange}
          secureTextEntry={true}
          style={{ marginBottom: 37 }}
        />
        <View style={{ flexDirection: 'row' }}>
          <Button
            buttonType='filled'
            onPress={() => {
              console.log('pressed')
              navigation.navigate('Main', { login });
            }}
          >
            <Text>Войти</Text>
          </Button>
          <Button
            buttonType={'transparent'}
            onPress={() => {
              console.log('pressed')
              navigation.navigate('Recovery', { foo: 1 });
            }}
          >
            <Text>Забыли пароль?</Text>
          </Button>
        </View>
        <View style={{ flex: 1 }} />
        <Button
          buttonType={'transparent'}
          onPress={() => {
            console.log('pressed')
          }}
          style={{ flex: 0, marginBottom: 60, alignSelf: 'center' }}
        >
          <Text style={{ textDecorationLine: 'underline' }}>{'Продолжить как гость'}</Text>
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
    marginHorizontal: 30,
  },
};
