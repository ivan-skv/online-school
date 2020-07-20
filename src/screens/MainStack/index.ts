import transitionConfig from '../transitionConfig';
import { createStackNavigator } from 'react-navigation';
import PersonalAccountScreen from './PersonalAccountScreen'

const MainStack = createStackNavigator(
  {
    PersonalAccount: PersonalAccountScreen,
  },
  {
    transitionConfig: transitionConfig,
  },
);

export default MainStack;