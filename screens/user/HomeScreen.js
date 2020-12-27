import React from 'react';
import { Button, StyleSheet, View, SafeAreaView} from 'react-native';
import CardComponent from '../../components/CardComponent';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import TimeCapsuleScreen from './TimeCapsuleScreen';
import FriendsScreen from './FriendsScreen';
import Colors from '../../constants/Colors';

import { useAuthDispatch } from '../../context/authContext';
import { signOut } from '../../services/authService';

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
  
  const dispatch = useAuthDispatch();

  const handleSignOut = async() => {
    try {
      await signOut();
      dispatch({ type: 'SIGN_OUT' });
    } catch (e) {
      console.log(e);
    }
  };
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
                onPress={handleSignOut}
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