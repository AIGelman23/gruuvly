import React from 'react';
import { Platform, StyleSheet, View, SafeAreaView} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/HeaderButton';
import CardComponent from '../../components/CardComponent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DirectMessageScreen from './DirectMessageScreen';
import TimeCapsuleScreen from './TimeCapsuleScreen';
import FriendsScreen from './FriendsScreen';

const HomeScreen = () =>
  {

  return (
    <SafeAreaView style={styles.screen}>
    <CardComponent/>
    </SafeAreaView>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {

  return (
      <Drawer.Navigator 
        initialRouteName="Home">
        <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
        options={navData => {
          return {
          headerTitle: 'Home Screen',
          headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Home"
              iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
              onPress={() => {
                navData.navigation.toggleDrawer();
              }}
            />
           </HeaderButtons> 
          ),}
         }}/>
        
         <Drawer.Screen 
         name="Friends" 
         component={FriendsScreen} 
        />
         <Drawer.Screen 
         name="Time Capsule" 
         component={TimeCapsuleScreen} 
        />
        <Drawer.Screen 
        name="Direct Message" 
        component={DirectMessageScreen} />
      </Drawer.Navigator> 
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
  }
});