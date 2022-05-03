import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Screens } from './enums';
import CatalogForm from '../screens/CatalogForm/intex';
import Outsourcing from '../screens/Outsourcing';

const Stack = createStackNavigator()

const AboutListNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={Screens.CATALOG_FORM}
    >
      <Stack.Screen
        name={Screens.CATALOG_FORM}
        component={CatalogForm}
      />
    </Stack.Navigator>
  );
};

export default AboutListNavigation;
