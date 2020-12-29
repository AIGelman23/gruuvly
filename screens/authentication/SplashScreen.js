import React from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

const SplashScreen = () => (
 
  <ImageBackground
    source={require("../../assets/splash.png")}
    style={{ width: "100%", height: "100%" }}
  ></ImageBackground>
  
);

export default SplashScreen;