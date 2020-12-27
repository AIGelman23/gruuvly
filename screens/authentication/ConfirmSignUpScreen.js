import React from 'react';
import { Auth } from 'aws-amplify';
import { View, StyleSheet, TextInput } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { AsyncStorage } from '@react-native-community/async-storage';


const ConfirmSignUpScreen = () => {

  const [username, setUserName] = React.useState('');
  const [code, setCode] = React.useState('');

async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(username, code);
    } 
    catch (error) {
        console.log('error confirming sign up', error);
    } return console.log('Confirmed Initial Sign Up!');
}

  return (
    <View style={styles.container}>
        <Input
        inputContainerStyle={{
          borderColor: "black",
          borderRadius: 9,
          backgroundColor: null,
          color: 'black',
          opacity: 0.3,
          marginTop: 10,
          marginLeft: 20,
          marginRight: 20,
        }}
        inputStyle={{color: 'black'}}
        label={<Text style={styles.label}>User Name</Text>}
        value={username}
        onChangeText={setUserName}
        autoCapitalize="none"
        autoCorrect={false}
      />
        <Input
        inputContainerStyle={{
          borderColor: "black",
          borderRadius: 9,
          backgroundColor: null,
          color: 'black',
          opacity: 0.3,
          marginTop: 10,
          marginLeft: 20,
          marginRight: 20,
        }}
        inputStyle={{color: 'black'}}
        label={<Text style={styles.label}>Code</Text>}
        value={code}
        onChangeText={setCode}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Button title="Confirm" onPress={() => confirmSignUp({ code })} />
    </View>
  );

};

ConfirmSignUpScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: null,
    height: null,
  },
});

export default ConfirmSignUpScreen;