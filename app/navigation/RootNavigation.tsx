import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import type {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import Development from '../screens/Development';
import {Screens} from './enums';
import type {TBottomTab} from './types';
import DevelopmentIcon from '../res/development';
import AboutIcon from '../res/AboutIcon';
import AboutList from '../screens/AboutList';
import AboutListNavigation from './AboutListNavigation';
import OurSkills from '../screens/OurSkills';

const BottomTab = createBottomTabNavigator<TBottomTab>();

const developmentOptions: BottomTabNavigationOptions = {
  title: 'Разработка',
  tabBarIcon: ({ color, size }) => {
    return (
      <DevelopmentIcon color={color} />
    )
  }
};

const outsourcingOptions: BottomTabNavigationOptions = {
  title: 'Аутсорс',
  tabBarIcon: ({ color }) => {
    return (
      <AboutIcon color={color} />
    )
  }
}

const BottomNavigation = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        options={developmentOptions}
        name={Screens.DEVELOPMENT}
        component={OurSkills}
      />
      <BottomTab.Screen
        name={Screens.ABOUT_LIST}
        component={AboutListNavigation}
        options={outsourcingOptions}
      />
    </BottomTab.Navigator>
  );
};

export default BottomNavigation;
