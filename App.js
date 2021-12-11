import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,ImageBackground, SafeAreaView ,TextInput,Button, TouchableOpacity} from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('./assets/background.png')} resizeMode="cover" style={styles.backgroundImage} blurRadius={10} > 

      <View style={styles.logoContainer}>
       
      <Image source={require('./assets/logo.png')} style={styles.logoImage} />
        <Text style={styles.loginHeader}> Login To Your Account </Text>
     
      </View>
     
     <TextInput placeholder="Enter Email" style={styles.TextInput}></TextInput>
     <TextInput placeholder="Enter Password" style={styles.TextInput}></TextInput>


<TouchableOpacity style={styles.loginButton}
           
        >
            <Text style={styles.loginText}> LOG IN </Text>
        </TouchableOpacity>

      </ImageBackground>
     
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer:{
    marginTop: 10,
    flex:0.6,
    alignItems:'center',
    justifyContent:'center',
  },
  logoImage: {
    height: 150,
    width:150,
    alignSelf: 'center',
    marginBottom: 20,
 
  },
  loginHeader:{
    fontSize:25,
    color:'black',
    fontStyle:'normal',

  },
  backgroundImage:{
    flex: 1,  
  },
  TextInput:{
    backgroundColor:'#FFF',
    height:60,
    width: 380,
    padding:10,
    margin:10,
    borderRadius:20,
    color:'pink',
    alignSelf:'center',

  },
  loginButton:{
    borderRadius: 25,
    backgroundColor:'black',
    fontSize: 20,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    padding: 20,
    margin:20,
  },
  loginText:{
    color:'#FFF',
    fontSize:15
  }
});
