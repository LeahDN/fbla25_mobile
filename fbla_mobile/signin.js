// App.js

//Sign in
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Button,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const SignInScreen = ({ navigation }) => {
 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
      navigation.navigate("Home")
  };

return (
    <View style={styles.container}>
      <Text style={styles.centeredTitle}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Pressable style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Enter</Text>
        
      </Pressable>
      <Pressable
                  style={styles.signUpButton}
                  onPress={() => navigation.navigate("SignUp")}> 
                  <Text style={styles.signUpButtonText}>Sign Up </Text>
                  </Pressable>
    </View>
  );
};
const HomeScreen = ({ navigation, route }) => {
  const { username = 'Guest' } = route.params || {};

  const handleSignOut = () => {
    navigation.replace("SignIn");
  };
  
  return (
    <ScrollView style={styles.detailsContainer}>
      <View style={styles.signOutButtonContainer}>
        <Pressable style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutButtonText}>Sign Out</Text>
        </Pressable>
      </View>
      <Text style={styles.welcomeMessage}>Hello, {username}!</Text>
      <Text style={styles.historyTitle}>History Timeline</Text>
    </ScrollView>
  )
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
      
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 50,
        backgroundColor: "#f0f0f0",
    },
    centeredTitle: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 16,
        fontFamily: "Verdana",
        textAlign: "center", // Center the title
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        fontFamily: "Verdana",
    },
    signInButton: {
        backgroundColor: "dodgerblue", // Blue background
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    signInButtonText: {
        color: "white", // White text
        fontWeight: "bold",
        fontFamily: "Verdana",
    },
    signUpButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "gray",
    borderRadius: 5,
    alignItems: "center",
  },
  signUpButtonText: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "Verdana",
  },
  historyTitle: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 16,
        fontFamily: "Verdana", // Change font to Verdana
        color:"#333",
        textAlign: "center",
    },
    welcomeMessage: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
        color: "#333",
        fontFamily: "Verdana",
        textAlign:"center"
    },
     signOutButtonContainer: {
        alignSelf: "flex-end",
        marginTop: 20, 
        marginBottom: 8,
        padding: 10,
        backgroundColor: "dodgerblue",
        borderRadius: 5,
        right: 10,
        bottom:0,
    },
    signOutButtonText: {
      color:"white",
      textWeight:"bold",
      fontFamily:"Verdana"
    },
});


export default App;