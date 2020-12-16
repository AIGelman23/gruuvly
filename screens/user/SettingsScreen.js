import React from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Button } from 'react-native';

const SettingsScreen = props => {
 
  const navigation = useNavigation();

  return (
    <SafeAreaView>
    <View styles={styles.screen}>
    <Text>The Settings Screen!</Text>
    <Button 
    title="Profile Settings" 
    onPress={() => {
      navigation.navigate('ProfileSettings'); 
    }}/>
     <Button title="About Screen" 
     onPress={() => {
      navigation.navigate('AboutScreen'); 
    }}/>
     <Button title="Terms of Service" 
     onPress={() => {
      navigation.navigate('TermsOfService'); 
    }}/>
    </View>
    </SafeAreaView>
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