import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/background.png')} resizeMode="cover" style={styles.backgroundImage} > 

      <View style={styles.logoContainer}>
        <Text> Login to SAIB</Text>
      <Image source={require('./assets/logo.png')} style={styles.logoImage} />
      </View>
     
      </ImageBackground>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer:{
    marginTop: 80,
    flex:1,
    // alignItems:'flex-start',
    justifyContent:'flex-start'
  },
  logoImage: {
    height: 150,
    width:150,
    alignSelf: 'flex-start',
    marginBottom: 20
 
  },
  backgroundImage:{
    flex: 1,  
  },
});
