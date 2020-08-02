import React from 'react';
import { ViewStyle, Text, View, StyleProp, TextStyle } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation'
import { IUserState, ISchoolInfoState, IUserRole } from 'src/redux/interfaces';
import { userActions } from 'src/redux/user'
import Button from 'src/components/Button';
import Icon from 'src/components/Icon'
import { ScreenWrapper } from 'src/components';
import { EmailInput } from 'src/components/Input';

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
  email?: string;
  emailError?: string;
}

export default class EmailSubmitScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  tryGotoMain = (): void => {
    const { navigation } = this.props;
    if (this.isGuest() || this.hasEmail()) {
      navigation.navigate('Main');
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
    const { email } = this.state;
    if (email) {
      this.props.setUserStudent({ email });
      this.tryGotoMain();
    } else {
      this.setState({ emailError: 'Поле "email" не должно быть пустым' });
    }
  }

  onEmail = (email: string): void => {
    this.setState({ email })
  }

  clearError = (): void => {
    this.setState({ emailError: '' })
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
          <Text style={[styles.form.top.text, { marginBottom: 20 }]}>{'Введите почту для восстановления пароля'}</Text>
          <EmailInput
            containerStyle={{ width: '100%', marginBottom: 25 }}
            onChangeText={this.onEmail}
            onFocus={this.clearError}
            error={this.state.emailError}
          />
          <View style={styles.form.bottom.container}>
            <Button
              title="Войти"
              color="gray"
              style={{ marginRight: 5 }}
              activeOpacity={0.1}
              onPress={this.onEnter}
            />
          </View>
        </View>
        <View style={styles.bottom.container} />
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
    top: {
      text: StyleProp<TextStyle>;
    },
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
    top: {
      text: {},
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
