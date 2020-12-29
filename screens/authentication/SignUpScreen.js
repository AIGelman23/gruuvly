import React, { useState } from 'react';
import { 
  StyleSheet, 
  TouchableWithoutFeedback,
  TouchableOpacity, 
  Keyboard, 
  ImageBackground, 
  SafeAreaView, 
  View } from 'react-native';
import { signIn, signUp, confirmSignUp, resendConfirmationCode} from '../../services/authService';
import { useAuthDispatch } from '../../context/authContext';
import { Text, Button, Input } from "react-native-elements";
import { FontAwesome, Entypo } from '@expo/vector-icons'; 

const SignUpScreen = ({ navigation }) => {
  const dispatch = useAuthDispatch();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [signed, setSigned] = useState(false);
  const [signUpLoading, setSignUpLoading] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [code, setCode] = useState('');

  
  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  const signUpUser = () => {
    setSignUpLoading(true);
    signUp({
      username, 
      password,
      attributes: { 
      preferred_username: username,
      email, 
      phone_number } 
    })
      .then((data) => {
        console.log(data);
        setSigned(true);
        setSignUpLoading(false);
      })
      .catch((err) => {
        setSignUpLoading(false);
        console.log(err);
      });
  };

  const confirm = () => {
    setVerifyLoading(true);
    confirmSignUp(username, code)
      .then(() => {
        setVerifyLoading(false);
        signIn({
          username, 
          password,
          attributes: { 
          email, 
          phone_number } 
        })
        .then(() =>
          dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' })
        );
      })
      .catch((err) => {
        setVerifyLoading(false);
        console.log(err);
      });
  };

  
  const resend = () => {
  resendConfirmationCode(username)
  .then(() => {
    alert('New Confirmation Code Sent');
  })
  .catch((err) => {
    console.log(err);
  })
  };

  

  return (
    <ImageBackground
    source={require("../../assets/auth/background2.png")}
    style={{ width: "100%", height: "100%" }}
  >
    <DismissKeyboard>
    <SafeAreaView style={{ flex: 1, justifyContent: 'center'}}>
    <View>
      
      {!signed && (
        <View  style={{
      justifyContent: 'center',
        alignItems: 'center'}}
        >
          <Input
           inputContainerStyle={{
            borderColor: "white",
            borderRadius: 9,
            backgroundColor: "white",
            opacity: 0.3,
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
          }}
            placeholder="Preferred User Name"
            value={username}
            onChangeText={(value) => setUserName(value)}
            keyboardType="default"
            textContentType="username"
            autoCapitalize="none"
            leftIcon={
              <FontAwesome style={styles.loginIcon} name="user" size={24} color="black" />
            }
          />
          <Input
          inputContainerStyle={{
            borderColor: "white",
            borderRadius: 9,
            backgroundColor: "white",
            opacity: 0.3,
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
          }}
            placeholder="Email"
            value={email}
            onChangeText={(value) => setEmail(value)}
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            autoCompleteType="email"
            leftIcon={
              <Entypo style={styles.loginIcon} name="mail" size={24} color="black" />
            }
          />
          <Input
          inputContainerStyle={{
            borderColor: "white",
            borderRadius: 9,
            backgroundColor: "white",
            opacity: 0.3,
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
          }}
            placeholder="Phone Number"
            value={phone_number}
            onChangeText={(value) => setPhoneNumber(value)}
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
            leftIcon={
              <FontAwesome style={styles.loginIcon} name="phone" size={24} color="black" />
            }
          />
          <Input
          inputContainerStyle={{
            borderColor: "white",
            borderRadius: 9,
            backgroundColor: "white",
            opacity: 0.3,
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
          }}
            placeholder="Password"
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry
            keyboardType="default"
            textContentType="password"
            autoCapitalize="none"
            autoCompleteType="password"
            leftIcon={
              <FontAwesome style={styles.loginIcon} name="lock" size={24} color="black" />
            }
          />
          <Button
            buttonStyle={{ borderColor: "white", borderWidth: 0.5, marginVertical: 5 }}
            titleStyle={{ color: '#fff' }}
            loading={signUpLoading}
            disabled={signUpLoading}
            type="outline"
            title="SIGN UP"
            onPress={signUpUser}
          />
        </View>
      )}
      {signed && (
         <View  style={{
          justifyContent: 'center',
            alignItems: 'center'}}
            >
          <Input
            inputContainerStyle={{
              borderColor: "white",
              borderRadius: 9,
              backgroundColor: "white",
              opacity: 0.3,
              marginTop: 10,
              marginHorizontal: 150,
              padding: 10
            }}
            placeholder="   Code"
            value={code}
            onChangeText={(value) => setCode(value)}
            keyboardType="number-pad"
            autoCapitalize="none"
          />
          <Button
            buttonStyle={{ borderColor: "white", borderWidth: 0.5, marginVertical: 5 }}
            titleStyle={{ color: '#fff' }}
            loading={verifyLoading}
            disabled={verifyLoading}
            type="outline"
            title="Verify"
            onPress={confirm}
          />
           <Button
            buttonStyle={{ borderColor: "white", borderWidth: 0, marginVertical: 10 }}
            titleStyle={{ color: '#fff' }}
            loading={verifyLoading}
            disabled={verifyLoading}
            type="outline"
            title="Resend Confirmation Code"
            onPress={resend}
          />
        </View>
      )}
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 18,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{ color: '#CDD2D6', fontWeight: 'bold' }}>Already a member?</Text>
        <TouchableOpacity
          style={{ marginLeft: 4 }}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={{ color: 'lightblue', fontWeight: 'bold' }}>Sign in!</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
    </DismissKeyboard>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
  label: {
    color: "white",
    fontSize: 16,
    marginLeft: 20,
  },
  loginIcon: {
    marginLeft: 10,
    paddingRight: 5,
  },
});

export default SignUpScreen;