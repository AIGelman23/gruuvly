import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ActivityFeedScreen = () => {
  return (
    <View styles={styles.screen}>
    <Text>The Activity Feed Screen!</Text>
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

export default ActivityFeedScreen;