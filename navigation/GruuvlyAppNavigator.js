import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from '../navigation/TabNavigator';


const GruuvlyAppNavigator = props => {
  return (
  <NavigationContainer>
   <TabNavigator/>
   
  </NavigationContainer>
  );
}

export default GruuvlyAppNavigator;
