// App.js
//import React, { useState } from 'react';
//import { View, Text, TextInput,  Button, ScrollView,  Image,  StyleSheet,  Pressable,} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen1 } from './Screen/Home1.js';
import {DetailsScreen} from './Screen/Info1.js';
//import { styles } from './Style/Style1';
import { SignInScreen, SignUpScreen } from './Screen/SignIn1'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen1} options={{ headerShown: false }}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;