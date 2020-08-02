import React from 'react';
import { ViewStyle, Text, View, StyleProp, TextStyle } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation'
import { IUserState, ISchoolInfoState, IUserRole } from 'src/redux/interfaces';
import { userActions } from 'src/redux/user'
import Button from 'src/components/Button';
import Icon from 'src/components/Icon'
import TouchableText from 'src/components/TouchableText'
import { ScreenWrapper } from 'src/components';
import { PasswordInput, LoginInput } from 'src/components/Input';

interface Props extends NavigationInjectedProps {
  user: IUserState;
  schoolInfo: ISchoolInfoState;
  setUserGuest: typeof userActions.setUserGuest;
  setUserParent: typeof userActions.setUserParent;
  setUserStudent: typeof userActions.setUserStudent;
  setUserEmployee: typeof userActions.setUserEmployee;
  loginUser: typeof userActions.loginUser;
  sendRecoveryEmail: typeof userActions.sendRecoveryEmail;
}

interface State {
  password?: string;
  login?: string;
  loginError?: string;
  passwordError?: string;
}

export default class LoginScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.tryGotoMain();
  }

  componentDidUpdate(prevProps: Props) {
    const { user } = this.props;
    if (user.role !== prevProps.user.role) {
      this.tryGotoMain();
    }
  }

  tryGotoMain = (): void => {
    const { navigation } = this.props;
    if (this.isGuest() || this.hasEmail()) {
      navigation.navigate('Main');
    } else if (this.isAuthorized()) {
      navigation.navigate('EmailSubmit')
    }
  }

  isAuthorized = (): boolean => {
    const { user } = this.props;
    return !user.isFetching && user.role !== '' && user.role !== 'guest';
  }

  isGuest = (): boolean => {
    const { user } = this.props;
    return !user.isFetching && user.role === 'guest';
  }

  hasEmail = (): boolean => {
    const { user } = this.props;
    return this.isAuthorized() && !!user[user.role as Exclude<IUserRole, '' | 'guest'>].email;
  }

  onEnter = (): void => {
    const { login, password } = this.state;
    if (login && password) {
      this.props.setUserStudent({});
      this.tryGotoMain();
      return;
    }
    if (!login) {
      this.setState({ loginError: 'Поле "логин" не должно быть пустым' });
    }
    if (!password) {
      this.setState({ passwordError: 'Поле "пароль" не должно быть пустым' })
    }
  }

  onLogin = (login: string): void => {
    this.setState({ login }, this.clearError)
    console.warn('onLogin: ', login)
  }

  onPassword = (password: string): void => {
    this.setState({ password }, this.clearError)
    console.warn('onPassword: ', password)
  }

  clearError = (): void => {
    this.setState({ loginError: '', passwordError: '' })
  }

  render(): JSX.Element {
    const { navigation, schoolInfo } = this.props;
    const { logo, name } = schoolInfo;
    return (
      <ScreenWrapper style={{ paddingHorizontal: 20 }}>
        <View style={styles.top.container}>
          <Icon uri={logo} style={{ borderRadius: 40, width: 60 }} />
          <Text>{name}</Text>
        </View>
        <View style={styles.form.container}>
          <LoginInput
            containerStyle={{ width: '100%', marginBottom: 25 }}
            onChangeText={this.onLogin}
            onFocus={this.clearError}
            error={this.state.loginError}
          />
          <PasswordInput
            containerStyle={{ width: '100%', marginBottom: 25 }}
            onChangeText={this.onPassword}
            onFocus={this.clearError}
            error={this.state.passwordError}
          />
          <View style={styles.form.bottom.container}>
            <Button
              title="Войти"
              color="gray"
              style={{ marginRight: 5 }}
              activeOpacity={0.1}
              onPress={() => {
                this.onEnter()
                console.warn('onPress Enter')
              }}
              onLongPress={() => {
                console.warn('onLongPress Enter')
              }}
            />
            <TouchableText
              style={styles.form.bottom.text}
              onPress={() => {
                navigation.navigate('Recovery')
              }}
            >
              {'Забыли пароль?'}
            </TouchableText>
          </View>
        </View>
        <View style={styles.bottom.container}>
          <TouchableText
            style={styles.bottom.text}
            onPress={() => this.props.setUserGuest()}
          >
            {'Продолжить как гость'}
          </TouchableText>
        </View>
      </ScreenWrapper>
    );
  }
}

const styles: {
  top: {
    container: StyleProp<ViewStyle>;
  },
  form: {
    container: StyleProp<ViewStyle>;
    bottom: {
      container: StyleProp<ViewStyle>;
      text: StyleProp<TextStyle>;
    },
  },
  bottom: {
    container: StyleProp<ViewStyle>;
    text: TextStyle;
  },

} = {
  top: {
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 0.5,
      width: '100%',
    },
  },
  form: {
    container: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      flex: 1,
    },
    bottom: {
      container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      text: {
        flex: 1,
        flexWrap: 'wrap',
        paddingVertical: 10,
        textAlign: 'right',
      },
    },
  },
  bottom: {
    container: {
      flex: 0.5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      textDecorationLine: 'underline',
      textDecorationStyle: 'solid',
      textAlign: 'center',
      paddingVertical: 10,
    },
  },
};
