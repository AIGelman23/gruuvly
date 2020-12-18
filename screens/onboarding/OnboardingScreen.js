import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
  return(
    <Onboarding 
    pages={[
      {
      backgroundColor: '#fff', 
      image: <Image source={require('../../assets/onboarding/app-tour-1.png')} />,
      title: 'Onboarding 1',
      subtitle: 'Done with React Native Onboard Swiper'
      },
      {
      backgroundColor: '#fff', 
      image: <Image source={require('../../assets/onboarding/app-tour-2.png')} />,
      title: 'Onboarding 2',
      subtitle: 'Done with React Native Onboard Swiper'
      },
      {
        backgroundColor: '#fff', 
        image: <Image source={require('../../assets/onboarding/app-tour-3.png')} />,
        title: 'Onboarding 3',
        subtitle: 'Done with React Native Onboard Swiper'
        },
    ]}
    />
  )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});