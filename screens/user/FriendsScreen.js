import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const FriendsScreen = props => {
  console.log(props);
  return (
    <View styles={styles.screen}>
    <Text>The Settings Screen!</Text>
     <Button title="Back to Settings" onPress={() => {
      const {navigation} = props;
      navigation.openDrawer();
    }}/>
    </View>
  );
};


FriendsScreen.navigationOptions = {
  headerTitle: "Friends"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});

export default FriendsScreen;