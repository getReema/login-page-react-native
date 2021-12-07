import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.ImageContainer}>
      <Image source={require('./assets/logo.png')} style={styles.Image} />
      </View>

<Text> Welcome to Saib</Text>

      <View>
      
    </View>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  ImageContainer:{
    //alignSelf:'top',
  },
  Image: {
    height: 100,
    width:100,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20
 
  }
});
