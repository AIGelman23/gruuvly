import React from 'react';
import { useNavigation, StackActions, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HomeScreen from '../screens/user/HomeScreen';
import HeaderButton from '../components/HeaderButton';
import ChatBubble from '../components/ChatButton';
import ChatScreen from '../screens/user/ChatScreen';
import BackButton from '../components/BackButton';

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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={ChatBubble}>
        <Item
          title="Chat"
          iconName={Platform.OS === 'android' ? 'md-chatbubbles' : 'chat-bubble'}
          onPress={() => {
            navigation.navigate('ChatScreen', {screen: 'ChatScreen'});
          }}
        />
      </HeaderButtons>
    ),
   }}
    />
     <HomeStackNavigator.Screen 
    name="ChatScreen" 
    component={ChatScreen}
    options={{
      headerTitle: "Chat Screen",
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
    </HomeStackNavigator.Navigator>
  );
};

export default HomeNavigator;