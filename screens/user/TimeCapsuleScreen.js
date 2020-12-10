import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TimeCapsuleScreen = props => {
  console.log(props);
  return (
    <View styles={styles.screen}>
    <Text>The Time Capsule Screen!</Text>
     <Button title="Back to Settings" onPress={() => {
      const {navigation} = props;
      navigation.openDrawer();
    }}/>
    </View>
  );
};


TimeCapsuleScreen.navigationOptions = {
  headerTitle: "Time Capsule"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});

export default TimeCapsuleScreen;