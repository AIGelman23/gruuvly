import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const SettingsScreen = props => {
  console.log(props);
  return (
    <View styles={styles.screen}>
    <Text>The Settings Screen!</Text>
    <Button title="Go To Profile Settings" onPress={() => {
      const {navigation} = props;
      navigation.navigate({
        routeName: 'ProfileSettings'
      }); 
    }}/>
     <Button title="Go To About Screen" onPress={() => {
      const {navigation} = props;
      navigation.navigate({
        routeName: 'AboutScreen'
      }); 
    }}/>
     <Button title="Go To Terms of Service" onPress={() => {
      const {navigation} = props;
      navigation.navigate({
        routeName: 'TermsOfService'
      }); 
    }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});

export default SettingsScreen;