import React from 'react'
import { TabBarIconProps, TabBarLabelProps, BottomTabNavigatorConfig } from 'react-navigation';
import { BottomTabBar, TabBarIcon, TabBarLabel } from '../components'

const bottomTabNavigatorConfig: BottomTabNavigatorConfig = {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: (props: TabBarIconProps) => {
      const { focused } = props;
      const { routeName } = navigation.state;
      return (
        <TabBarIcon
          focused={focused}
          routeName={routeName}
        />
      );
    },
    tabBarLabel: (props: TabBarLabelProps): any => {
      const { focused } = props;
      const { routeName } = navigation.state;
      return (
        <TabBarLabel
          focused={focused}
          routeName={routeName}
        />
      );
    },
  }),
  backBehavior: 'history',
  tabBarComponent: BottomTabBar,
}

export default bottomTabNavigatorConfig;