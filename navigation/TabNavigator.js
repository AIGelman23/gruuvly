import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Colors from '../constants/Colors';
import HomeScreen from '../screens/user/HomeScreen';
import ActivityFeedScreen from '../screens/community/ActivityFeedScreen';
import FilterScreen from '../screens/user/FilterScreen';
import SettingsNavigator from '../navigation/SettingsNavigator';


const GruuvlyTabNavigator = createBottomTabNavigator();

export const TabNavigator = () => {
  return(
      <GruuvlyTabNavigator.Navigator>
        <GruuvlyTabNavigator.Screen 
         name="Home"
         component={HomeScreen}
         tabBarOptions={{
          activeTintColor: Colors.accentColor,
          inactiveTintColor: 'gray',
          indicatorStyle: {
            borderWidth: 10,
            backgroundColor: Colors.accentColor
          },
          showLabel: false, 
          showIcon: true
        }}
        />
        <GruuvlyTabNavigator.Screen 
        name="Activity"
        component={ActivityFeedScreen}
        tabBarOptions={{
          activeTintColor: Colors.accentColor,
          inactiveTintColor: 'gray',
          indicatorStyle: {
            borderWidth: 10,
            backgroundColor: Colors.accentColor
          },
          showLabel: false, 
          showIcon: true
        }}
        />
        <GruuvlyTabNavigator.Screen 
        name="Search"
        component={FilterScreen}
        tabBarOptions={{
          activeTintColor: Colors.accentColor,
          inactiveTintColor: 'gray',
          indicatorStyle: {
            borderWidth: 20,
            backgroundColor: Colors.accentColor
          },
          showLabel: false, 
          showIcon: true
        }}
        />
        <GruuvlyTabNavigator.Screen 
        name="Settings"
        component={SettingsNavigator}
        tabBarOptions={{
          activeTintColor: Colors.accentColor,
          inactiveTintColor: 'gray',
          indicatorStyle: {
            borderWidth: 10,
            backgroundColor: Colors.accentColor
          },
          showLabel: false, 
          showIcon: true
        }}
        />
      </GruuvlyTabNavigator.Navigator>
  );
};

