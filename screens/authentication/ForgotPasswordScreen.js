import React, {useState} from 'react';
import { 
  View, 
  SafeAreaView, 
  StyleSheet, 
  ImageBackground,
  Keyboard, 
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';
import { Formik } from 'formik';
import { Text, Button, Input } from 'react-native-elements';
import { forgotPasswordSubmit } from '../../services/authService';
import { FontAwesome } from '@expo/vector-icons'; 

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);


const ForgotPasswordScreen = ({navigation}) => {

const [submitLoading, setSubmitLoading] = React.useState(false);


const postNewPassword = async (values) => {
  const { username, code, new_password} = values; 
  setSubmitLoading(true)
  forgotPasswordSubmit(username, code, new_password)
  .then((r) => {
    console.log(r, "Password Successfuly Reset!");
    navigation.navigate('SignIn');
  })
  .catch((e) => {
    console.log(e);
  })
  .finally(() => setSubmitLoading(false));
};

  return (
    <ImageBackground
    source={require("../../assets/auth/background2.png")}
    style={{ width: "100%", height: "100%" }}
  >
  <SafeAreaView>
  <View style={{ alignItems: 'center', marginVertical: '10%'}}>
  <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Reset Password</Text>
  </View>
  <Formik
        initialValues={{ 
          username: '',
          code: '',
          new_password: '',
         }}
        onSubmit={(values) => postNewPassword(values)}
      >
  {({ handleChange, handleBlur, handleSubmit, values }) => (
  <View>
  <DismissKeyboard>
    <View style={{ justifyContent: 'center', alignItems: 'center'}}>
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
       
        label={<Text style={styles.label}>Code</Text>}
        placeholder="Enter Verification Code"
        value={values.code}
        onChangeText={handleChange('code')}
        onBlur={handleBlur('code')}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="numeric"
        textContentType="oneTimeCode"
        leftIcon={
          <FontAwesome style={styles.loginIcon} name="lock" size={24} color="black" />
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
            label={<Text style={styles.label}>Enter New Password</Text>}
            placeholder="Enter New Password"
            value={values.new_password}
            onChangeText={handleChange('new_password')}
            onBlur={handleBlur('new_password')}
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
            loading={submitLoading}
            disabled={submitLoading}
            type="outline"
            title="Submit"
            onPress={handleSubmit}
          />
     
        <View
        style={{
          flexDirection: 'row',
          marginVertical: 50,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
      <TouchableOpacity
          style={{ marginLeft: 4 }}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={{ color: 'lightblue', fontWeight: 'bold' }}>Back to Sign In</Text>
      </TouchableOpacity>
    
    </View>
    
    </View>
       </ DismissKeyboard>
       </View>
        )}
        </Formik>
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

export default ForgotPasswordScreen;