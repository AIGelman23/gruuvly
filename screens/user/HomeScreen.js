import React from 'react';
// import { useDispatch } from 'react-redux';
import { Button, Platform, StyleSheet, View, SafeAreaView} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/HeaderButton';
import ChatButton from '../../components/ChatButton';
import CardComponent from '../../components/CardComponent';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import ChatScreen from './ChatScreen';
import TimeCapsuleScreen from './TimeCapsuleScreen';
import FriendsScreen from './FriendsScreen';
import Colors from '../../constants/Colors';

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
      initialRouteName="Home"
      drawerContent={props => {
        return (
          <View style={{ flex: 1, paddingTop: 20 }}>
            <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
              <DrawerItemList {...props} />
              <Button
                title="Logout"
                color={Colors.primary}
                onPress={() => {
                  
                  // props.navigation.navigate('Auth');
                }}
              />
            </SafeAreaView>
          </View>
        );
      }}
      drawerContentOptions={{
        activeTintColor: Colors.primary
      }}
    >
        <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
        options={navData => {
          return {}
         }}/>
        
         <Drawer.Screen 
         name="Friends" 
         component={FriendsScreen} 
        />
         <Drawer.Screen 
         name="Time Capsule" 
         component={TimeCapsuleScreen} 
        />
      </Drawer.Navigator> 
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
  }
});