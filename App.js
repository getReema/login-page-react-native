import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.backgroundImage}
        blurRadius={10}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("./assets/logo.png")}
            style={styles.logoImage}
          />
          <Text style={styles.loginHeader}> Login To Your Account </Text>
        </View>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <>
              <TextInput
                name="email"
                placeholder="Enter your Email Address"
                style={styles.TextInput}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />
              <TextInput
                name="password"
                placeholder="Enter Your Password"
                style={styles.TextInput}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry
              />

              <TouchableOpacity
                onPress={handleSubmit}
                style={styles.loginButton}
              >
                <Text style={styles.loginText}> LOG IN </Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    marginTop: 10,
    flex: 0.6,
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    height: 150,
    width: 150,
    alignSelf: "center",
    marginBottom: 20,
  },
  loginHeader: {
    fontSize: 25,
    color: "black",
    fontStyle: "normal",
  },
  backgroundImage: {
    flex: 1,
  },
  TextInput: {
    backgroundColor: "#FFF",
    height: 60,
    width: 380,
    padding: 10,
    margin: 10,
    borderRadius: 20,
    color: "pink",
    alignSelf: "center",
  },
  loginButton: {
    borderRadius: 25,
    backgroundColor: "black",
    fontSize: 20,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 20,
    margin: 20,
  },
  loginText: {
    color: "#FFF",
    fontSize: 15,
  },
});
