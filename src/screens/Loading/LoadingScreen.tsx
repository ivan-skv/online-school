import React from 'react'
import { IUserState, IUserRole } from 'src/redux/interfaces';
import { NavigationInjectedProps } from 'react-navigation';
import Loading from 'src/components/Loading';

interface Props extends NavigationInjectedProps {
  user: IUserState;
}

export default class LoadingScreen extends React.Component<Props> {
  componentDidMount() {
    this.tryGoto();
  }

  componentDidUpdate(prevProps: Props) {
    const { user } = this.props;
    if (user.role !== prevProps.user.role || user.isFetching !== prevProps.user.isFetching) {
      this.tryGoto();
    }
  }

  tryGoto = (): void => {
    const { navigation, user } = this.props;
    if (!user.isFetching) {
      if (user.role == '') {
        navigation.navigate('Auth')
      } else {
        this.tryGotoMain();
      }
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

  render(): JSX.Element {
    return <Loading />
  }
}
