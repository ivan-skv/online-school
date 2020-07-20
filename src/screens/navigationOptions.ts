import React from 'react';
import { NavigationScreenOptions } from 'react-navigation';

export const navigationOptions = (
  title: string,
  isTop: boolean,
  isTabs?: boolean,
  rightComponent?: React.ReactElement<any>,
): NavigationScreenOptions => {
  return {
    headerStyle: {
      elevation: 2,
    },
    headerTintColor: 'green',
    headerBackTitle: null,
    headerBackTitleStyle: {
      opacity: 0,
    },
    headerRight: rightComponent,
  };
};

export const navigationOptionsImage = (isTop: boolean): NavigationScreenOptions => {
  return {
    headerStyle: {
      elevation: 0,
    },
    headerTintColor: 'magenta',
    headerBackTitle: null,
    headerBackground: null,
    headerRight: null,
  };
};
