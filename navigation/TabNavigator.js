import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../constants/Colors';

import ActivityFeedScreen from '../screens/community/ActivityFeedScreen';
import FilterScreen from '../screens/user/FilterScreen';
import SettingsNavigator from '../navigation/SettingsNavigator';
import HomeNavigator from '../navigation/HomeNavigator';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons'; 



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
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="md-home" size={size} color={color} focused={focused} />
          ),
        }}
        />
        <GruuvlyTabNavigator.Screen 
        name="Activity"
        component={ActivityFeedScreen}
        options={{
          tabBarLabel: 'Activity',
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="activity" size={size} color={color} focused={focused} />
          ),
        }}
        />
        <GruuvlyTabNavigator.Screen 
        name="Search"
        component={FilterScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="md-search" size={size} color={color} focused={focused} />
          ),
        }}
        />
         <GruuvlyTabNavigator.Screen 
        name="Notifications"
        component={ActivityFeedScreen}
        options={{
          tabBarBadge: 0,
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="md-notifications-outline" size={size} color={color} focused={focused} />
          ),
        }}
        />
        <GruuvlyTabNavigator.Screen 
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="md-settings" size={size} color={color} focused={focused} />
          ),
        }}
        />
      </GruuvlyTabNavigator.Navigator>
      
      // activity navigator, search navigator 
      // must all be created through homenavigator
  );
};
