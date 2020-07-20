import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthStack,
    Main: MainStack,
  },
);

export default createAppContainer(SwitchNavigator);
