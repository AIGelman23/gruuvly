import React from 'react';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HomeScreen from '../screens/user/HomeScreen';
import HeaderButton from '../components/HeaderButton';

const HomeStackNavigator = createStackNavigator();

const HomeNavigator = props => {

const navigation = useNavigation();

return(
    <HomeStackNavigator.Navigator
    initialRouteName="Home">
    <HomeStackNavigator.Screen 
    name="Home"
    component={HomeScreen}
    options={{
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}
        />
      </HeaderButtons>
    ),
   }}
    />
    </HomeStackNavigator.Navigator>
  );
};

export default HomeNavigator;