import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const DirectMessageScreen = props => {
  console.log(props);
  return (
    <View styles={styles.screen}>
    <Text>The Direct Message Screen!</Text>
     <Button title="Back to Settings" onPress={() => {
      const {navigation} = props;
      navigation.openDrawer();
    }}/>
    </View>
  );
};

DirectMessageScreen.navigationOptions = {
  headerTitle: "Direct Messages"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});

export default DirectMessageScreen;