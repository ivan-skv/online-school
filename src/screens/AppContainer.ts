import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthNavigator from './Auth';
import MainNavigator from './Main';
import LoadingScreen from './Loading'

const SwitchNavigator = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    Auth: AuthNavigator,
    Main: MainNavigator,
  },
);

export default createAppContainer(SwitchNavigator);
