import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatScreen = props => {
  console.log(props);
  return (
    <View styles={styles.screen}>
    <Text>The Chat Screen!</Text>
    
    </View>
  );
};

ChatScreen.navigationOptions = {
  headerTitle: "Direct Messages"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});

export default ChatScreen;