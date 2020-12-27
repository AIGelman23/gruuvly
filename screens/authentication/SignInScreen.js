
import React, { useState } from 'react';
import { View, SafeAreaView, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { signIn } from '../../services/authService';
import { useAuthDispatch } from '../../context/authContext';
import { Text, Button, Input } from "react-native-elements";
import { FontAwesome } from '@expo/vector-icons'; 


const SignInScreen = ({ navigation }) => {
  const dispatch = useAuthDispatch(); 
  const [signInLoading, setSignInLoading] = useState(false);
  
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


  return (
    <ImageBackground
    source={require("../../assets/auth/background.png")}
    style={{ width: "100%", height: "100%" }}
  >
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
      
      </SafeAreaView>
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
