import React from 'react';
import { Auth } from 'aws-amplify';
import { View, SafeAreaView } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';


const ConfirmSignUpScreen = () => {

const [username, setUserName] = React.useState('');

async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(username, code);
    } 
    catch (error) {
        console.log('error confirming sign up', error);
    } return console.log('Confirmed Initial Sign Up!');
}

  return (
    <SafeAreaView>
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
        keyboardType="numeric"
        textContentType="oneTimeCode"
      />
      <Button title="Confirm" onPress={() => confirmSignUp({ code })} />
    </View>
    </SafeAreaView>
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