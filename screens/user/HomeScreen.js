import React from 'react';
import { StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/HeaderButton';
import CardComponent from '../../components/CardComponent';


const HomeScreen = props => {
  
  return (
    <CardComponent/>
  );
  
}

HomeScreen.navigationOptions = props => {
  return {
    headerTitle: 'Home',
    headerLeft: (() =>
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Home"
        iconName="ios-menu"
        onPress={() => {
          navData.navigation.alert('Test');
        }}
      />
    </HeaderButtons>
    )
  };  
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});

export default HomeScreen;