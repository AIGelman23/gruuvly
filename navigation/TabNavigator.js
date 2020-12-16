import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../constants/Colors';

import ActivityFeedScreen from '../screens/community/ActivityFeedScreen';
import FilterScreen from '../screens/user/FilterScreen';
import SettingsNavigator from '../navigation/SettingsNavigator';
import HomeNavigator from '../navigation/HomeNavigator';
import { Ionicons, Feather } from '@expo/vector-icons'; 



const GruuvlyTabNavigator = createBottomTabNavigator();

export const TabNavigator = () => {  
  return(
      <GruuvlyTabNavigator.Navigator
      initialRouteName = 'Home'
      tabBarOptions = {{
        showLabel: false,
        activeTintColor: Colors.accentColor,
        inactiveTintColor: 'gray',
        indicatorStyle: {
          borderWidth: 10,
          backgroundColor: Colors.accentColor,
        },
      }}
     
      >
        <GruuvlyTabNavigator.Screen 
         name="Home"
         component={HomeNavigator}
         options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-home" size={size} color={color} />
          ),
        }}
        />
        <GruuvlyTabNavigator.Screen 
        name="Activity"
        component={ActivityFeedScreen}
        options={{
          tabBarLabel: 'Activity',
          tabBarIcon: ({ color, size }) => (
            <Feather name="activity" size={size} color={color} />
          ),
        }}
        />
        <GruuvlyTabNavigator.Screen 
        name="Search"
        component={FilterScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-search" size={size} color={color} />
          ),
        }}
        />
        <GruuvlyTabNavigator.Screen 
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-settings" size={size} color={color} />
          ),
        }}
        />
      </GruuvlyTabNavigator.Navigator>
  );
};
