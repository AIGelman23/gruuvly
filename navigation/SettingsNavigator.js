import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/user/SettingsScreen';
import ProfileSettingsScreen from '../screens/user/ProfileSettingsScreen';
import AboutScreen from '../screens/details/AboutScreen';
import TermsOfServiceScreen from '../screens/details/TermsOfServiceScreen';

const SettingsStackNavigator = createStackNavigator();

const SettingsNavigator = () => {
return(
    <SettingsStackNavigator.Navigator
    initialRouteName="Settings">
    <SettingsStackNavigator.Screen 
    name="Settings"
    component={SettingsScreen}
    />
    <SettingsStackNavigator.Screen 
    options={{
      title: "Profile Settings",
      headerTitle: "Profile Settings"
    }}
    name="ProfileSettings" // name links to whatever navigation is called on
    component={ProfileSettingsScreen}
    />
    <SettingsStackNavigator.Screen 
    name="AboutScreen" 
    component={AboutScreen}
    />
    <SettingsStackNavigator.Screen 
    name="TermsOfService" 
    component={TermsOfServiceScreen}
    />
    </SettingsStackNavigator.Navigator>
  );
};

export default SettingsNavigator;