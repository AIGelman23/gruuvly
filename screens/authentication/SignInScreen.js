
import React, { useState } from 'react';
import { useFormik, Formik } from 'formik';
import { View, SafeAreaView, TouchableWithoutFeedback, TouchableOpacity, ImageBackground, StyleSheet, Keyboard } from 'react-native';
import { signIn } from '../../services/authService';
import { useAuthDispatch } from '../../context/authContext';
import { Card, Text, Button, Input, Overlay } from "react-native-elements";
import { FontAwesome } from '@expo/vector-icons'; 


/* Form Validation & Error Messagin */

/*
import * as Yup from "yup";
import {
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput
} from "react-native-formik";
*/

/* Dismiss Keyboard when tapping outside text field */

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);


const SignInScreen = ({ navigation }) => {
  const [username, setUserName] = React.useState('');
  const [code, setCode] = React.useState('');
  const dispatch = useAuthDispatch(); 
  const [signInLoading, setSignInLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  
  const signInUser = async (values) => {
    const { username, password} = values; 
    setSignInLoading(true);
    signIn(username,  password)
      .then((r) => {
        console.log(r);
        dispatch({ type: 'SIGN_IN', token: r.signInUserSession.accessToken.jwtToken });
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => setSignInLoading(false));
  };

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <ImageBackground
    source={require("../../assets/auth/background.png")}
    style={{ width: "100%", height: "100%" }}
  >
    <DismissKeyboard>
    <SafeAreaView style={{ flex: 1, justifyContent: 'center'}}>
      <Formik
        initialValues={{ 
          username: '', }}
        onSubmit={(values) => signInUser(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View  style={{
            justifyContent: 'center',
            alignItems: 'center'}}>
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
              label={<Text style={styles.label}>User Name</Text>}
              placeholder="User Name"
              value={values.username}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              keyboardType="default"
              textContentType="username"
              autoCapitalize="none"
              autoCompleteType="username"
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
                label={<Text style={styles.label}>Password</Text>}
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
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
              loading={signInLoading}
              disabled={signInLoading}
              type="outline"
              title="SIGN IN"
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 18,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{ color: '#CDD2D6', fontWeight: 'bold' }}>Not registered?</Text>
        <TouchableOpacity
          style={{ marginLeft: 4 }}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={{color: 'lightblue', fontWeight: 'bold'}}>Sign up!</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 5,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <TouchableOpacity
          style={{ marginLeft: 4 }}
          onPress={toggleOverlay}
        >
          <Text style={{color: 'lightblue', fontWeight: 'bold'}}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
      </DismissKeyboard>
      
      <Overlay fullScreen={true} overlayStyle={{ backgroundColor: 'black', opacity: 0.8 }}
      isVisible={visible}>
        <View style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: '50%',
          }}>
          <DismissKeyboard>
          <Card containerStyle={{ borderRadius: 9 }}>
              <Card.Title style={{fontSize: 20}}>Forgot Password?</Card.Title>
              <Card.Divider/>
              <Text style={{marginBottom: 5}}>
                Please provide your Gruuvly username below and a verification
                code will be sent to your email address.
              </Text>
              <View style={{flexDirection: 'row'  }}>
              <View style={{flex: 1, width: '50%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold'}}>User Name</Text>
              </View>
              <View style={{width: '70%', justifyContent: 'center', alignItems: 'center'}}>
              <Input
                inputContainerStyle={{
                  borderColor: '#fff',
                  borderRadius: 9,
                  backgroundColor: 'lightgrey',
                  color: 'black',
                  marginTop: 20
                }}
                inputStyle={{color: 'black', padding: 10}}
                value={username}
                onChangeText={setUserName}
                autoCapitalize="none"
                autoCorrect={false}
              />
              </View>
              </View>
             <View style={{flexDirection: 'row'  }}>
              <View style={{flex: 1, width: '50%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold'}}>Enter Code</Text>
              </View>
              <View style={{width: '70%', justifyContent: 'center', alignItems: 'center'}}>
              <Input
                inputContainerStyle={{
                  borderColor: "#fff",
                  borderRadius: 9,
                  backgroundColor: 'lightgrey',
                  color: 'black',
                }}
                inputStyle={{color: 'black', padding: 10}}
                label={<Text style={styles.label}>Code</Text>}
                value={code}
                onChangeText={setCode}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="numeric"
                textContentType="oneTimeCode"
              />
              </View>
              </View>
             <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}> 
             <View>
             <Button
              buttonStyle={{ borderColor: "black", borderWidth: 0.5, marginVertical: 10, backgroundColor: 'navy' }}
              titleStyle={{ color: '#fff' }}
              title="SUBMIT"
              onPress={toggleOverlay}
            />
            </View>
             <View>
             <Button
              buttonStyle={{ borderColor: "black", borderWidth: 0.5, marginVertical: 10, backgroundColor: 'navy' }}
              titleStyle={{ color: '#fff' }}
              title="CANCEL"
              onPress={toggleOverlay}
            />
             </View>
             </View>
          </Card>
          </DismissKeyboard>
          </View>
         
      </Overlay>
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


export default SignInScreen;
