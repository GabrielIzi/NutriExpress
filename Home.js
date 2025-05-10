import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity, 
  Linking,
} from 'react-native';

const Home = () => {


  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/LogoNutriExpress.png')} 
        style={{ width: 200, height: 200 }} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001B3D',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;