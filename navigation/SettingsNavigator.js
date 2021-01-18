import React from 'react';
import { useNavigation, StackActions } from '@react-navigation/native';
import EditButton from '../components/EditButton';
import BackButton from '../components/BackButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/user/SettingsScreen';
import ProfileSettingsScreen from '../screens/user/ProfileSettingsScreen';
import EditProfileScreen from '../screens/user/EditProfileScreen';
import AboutScreen from '../screens/details/AboutScreen';
import TermsOfServiceScreen from '../screens/details/TermsOfServiceScreen';

const SettingsStackNavigator = createStackNavigator();

const SettingsNavigator = () => {
  
const navigation = useNavigation();

return(
    <SettingsStackNavigator.Navigator
    initialRouteName="Settings">
    <SettingsStackNavigator.Screen 
    name="Settings"
    component={SettingsScreen}
    />
    <SettingsStackNavigator.Screen 
    options={{
      headerTitle: "Profile Settings",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={BackButton}>
        <Item
         onPress={() => {
          navigation.dispatch(StackActions.pop());
        }}
          />
        </HeaderButtons> 
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={EditButton}>
        <Item
          title="EditProfile"
          onPress={() => {
            navigation.navigate('EditProfileScreen', {screen: 'EditProfileScreen'})
          }}
          />
        </HeaderButtons> 
      ),
    }}
    name="ProfileSettings" // name links to whatever navigation is called on
    component={ProfileSettingsScreen}
    />
     
    <SettingsStackNavigator.Screen 
    name="AboutScreen" 
    component={AboutScreen}
    options={{
      headerTitle: "About Gruuvly"
    }}
    />
    <SettingsStackNavigator.Screen 
    name="EditProfileScreen" 
    component={EditProfileScreen}
    options={{
      headerTitle: "Edit Profile",
      headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={BackButton}>
          <Item
           onPress={() => {
            navigation.dispatch(StackActions.pop());
          }}
            />
          </HeaderButtons> 
        ),
    }}
    />
    <SettingsStackNavigator.Screen 
    name="TermsOfService" 
    component={TermsOfServiceScreen}
    options={{
      headerTitle: "Terms of Service"
    }}
    />
    </SettingsStackNavigator.Navigator>
  );
};

export default SettingsNavigator;

