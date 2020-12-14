import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import GruuvlyAppNavigator from './navigation/GruuvlyAppNavigator';
// import { TabNavigator } from './navigation/TabNavigator';


export default function App() {
  return (
    
      <GruuvlyAppNavigator />
     
  );
}


