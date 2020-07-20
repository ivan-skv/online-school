import transitionConfig from '../transitionConfig';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen'
import RecoveryScreen from './RecoveryScreen';

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Recovery: RecoveryScreen,
  },
  {
    transitionConfig: transitionConfig,
  },
);

export default AuthStack;