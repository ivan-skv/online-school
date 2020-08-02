import React from 'react';
import { View, TouchableWithoutFeedback, ViewPropTypes, TouchableWithoutFeedbackProps } from 'react-native'
import { BottomTabBar, BottomTabBarProps } from 'react-navigation';
import theme from '../../theme'
import { IThemeMode } from 'src/theme/interfaces';
import { IUserState, IUserRole } from 'src/redux/interfaces';

interface IRoute {
  key: string;
  routeName: string;
}

export interface _BottomTabBarProps extends BottomTabBarProps {
  getButtonComponent?: (props: { route: IRoute }) => React.FC;
}

const _BottomTabBar: React.FC<_BottomTabBarProps> = props => <BottomTabBar {...props} />

export interface TabBarComponentProps extends _BottomTabBarProps {
  mode?: IThemeMode;
  user: IUserState;
}

export type BottomTabBarNames = 'PersonalAccount' | 'News' | 'Timetable' | 'Catalog' | 'Canteen' | 'SchoolEntering' | 'AboutSchool' | 'Courses';

export const bottomTabs: { [x in IUserRole]: BottomTabBarNames[] } = {
  guest: ['SchoolEntering', 'AboutSchool', 'Courses'],
  employee: ['PersonalAccount', 'News', 'Timetable', 'Catalog', 'Canteen'],
  student: ['PersonalAccount', 'News', 'Timetable', 'Catalog', 'Canteen'],
  parent: ['PersonalAccount', 'News', 'Timetable', 'Catalog', 'Canteen'],
}


const HiddenView: React.FC = () => <View style={{ display: 'none' }} />

const TouchableWithoutFeedbackWrapper: React.FC<TouchableWithoutFeedbackProps> = (props) => {
  const {
    onPress,
    onLongPress,
    testID,
    accessibilityLabel,
    ...restProps
  } = props;
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onLongPress={onLongPress}
      testID={testID}
      hitSlop={{
        left: 15,
        right: 15,
        top: 5,
        bottom: 5,
      }}
      accessibilityLabel={accessibilityLabel}
    >
      <View {...props} />
    </TouchableWithoutFeedback>
  )
}


const TabBarComponent: React.FC<TabBarComponentProps> = (props) => {
  const {
    activeBackgroundColor,
    inactiveBackgroundColor,
    mode,
    user,
    ...restProps
  } = props;
  return (
    <_BottomTabBar
      {...restProps}
      getButtonComponent={({ route }) => {
        if (!user.role || bottomTabs[user.role].indexOf(route.key as BottomTabBarNames) === -1) {
          return HiddenView;
        }
        return TouchableWithoutFeedbackWrapper;
      }}
      activeBackgroundColor={theme(mode).colors.black}
      inactiveBackgroundColor={theme(mode).colors.background}
      style={{
        height: theme(mode).tabBar.height,
        backgroundColor: theme(mode).colors.background,
      }}
    />
  );
}

export default TabBarComponent;
