import transitionConfig from '../transitionConfig';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen'
import RecoveryScreen from './RecoveryScreen';
import defaultNavigationOptions from '../defaultNavigationOptions';
import EmailSubmitScreen from './EmailSubmitScreen';

const AuthNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Recovery: RecoveryScreen,
    EmailSubmit: EmailSubmitScreen,
  },
  {
    transitionConfig: transitionConfig,
    defaultNavigationOptions: defaultNavigationOptions,
  },
);

export default AuthNavigator;