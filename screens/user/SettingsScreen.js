import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';


const SettingsScreen = props => {
 
  const navigation = useNavigation();
  const size = 20; //button arrow icon size

  return (
    <SafeAreaView style={styles.safeView}>
    <View style={{ padding: 15}}>

    <View style={styles.buttonSpace}>
    <Button 
     type="outline"
     buttonStyle={{ padding: 15, borderRadius: 10, justifyContent: 'space-between', backgroundColor: '#4169e1' }}
     icon={
      <Entypo
        name="chevron-thin-right"
        size={size}
        color="white"
      />
    }
    iconRight
    raised={true}
    title="Profile Settings"
    titleStyle={{ color: '#fff' }}
    onPress={() => {
      navigation.navigate('ProfileSettings'); 
    }}/>
    </View>
    <View style={styles.buttonSpace}>
     <Button 
     type="outline"
     buttonStyle={{ padding: 15, borderRadius: 10, justifyContent: 'space-between', backgroundColor: '#4169e1' }}
     icon={
      <Entypo
        name="chevron-thin-right"
        size={size}
        color="#fff"
      />
    }
    iconRight
    raised={true}
    title="About Gruuvly" 
    titleStyle={{ color: '#fff' }}
     onPress={() => {
      navigation.navigate('AboutScreen'); 
    }}/>
    </View>
     <Button 
     type="outline"
     buttonStyle={{ padding: 15, borderRadius: 10, justifyContent: 'space-between', backgroundColor: '#4169e1' }}
     icon={
      <Entypo
        name="chevron-thin-right"
        size={size}
        color="#fff"
      />
    }
    iconRight
    raised={true}
    title="Terms of Service" 
    titleStyle={{ color: '#fff' }}
    onPress={() => {
      navigation.navigate('TermsOfService'); 
    }}/>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    backgroundColor: '#fff',
    height: '100%'
  },
  screen: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  buttonSpace: {
   paddingBottom: 10
  }
});

export default SettingsScreen;