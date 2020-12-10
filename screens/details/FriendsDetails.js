import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const FriendsScreen = props => {
  console.log(props);
  return (
    <View styles={styles.screen}>
    <Text>The Friends Details Screen!</Text>
    </View>
  );
};


FriendsScreen.navigationOptions = {
  headerTitle: "Friends List"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});

export default FriendsScreen;