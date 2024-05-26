import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import Navigation from '@/src/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';





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
    color:'#a02c3e'
  },

});

export default HomeScreen;
