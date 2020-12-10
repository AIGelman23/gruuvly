import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TermsOfServiceScreen = props => {
  return (
    <View styles={styles.screen}>
    <Text>The Terms of Service Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});

export default TermsOfServiceScreen;