import React from 'react';
import { View, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import Navigation from '@/src/navigation/Navigation';



const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    color: '#a02c3e'
  },

});

export default HomeScreen;
