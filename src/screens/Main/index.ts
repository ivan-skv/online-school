import React from 'react'
import { createBottomTabNavigator } from 'react-navigation';
import bottomTabNavigatorConfig from '../bottomTabNavigatorConfig';
import PersonalAccount from './PersonalAccount'
import Timetable from './Timetable'
import SchoolEntering from './SchoolEntering'
import News from './News'
import Courses from './Courses'
import Catalog from './Catalog'
import Canteen from './Canteen'
import AboutSchool from './AboutSchool'

const MainNavigator = createBottomTabNavigator(
  {
    PersonalAccount,
    News,
    Timetable,
    Catalog,
    Canteen,

    SchoolEntering,
    AboutSchool,
    Courses,
  },
  {
    ...bottomTabNavigatorConfig,
  }
);

export default MainNavigator;