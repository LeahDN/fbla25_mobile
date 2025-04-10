//SignIn1.js

import { View, Text, TextInput,  Button, ScrollView,  Image,  StyleSheet,  Pressable,} from 'react-native';
import { styles } from '../Style/Style1';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    const storedUsername = await AsyncStorage.getItem('username');
    const storedPassword = await AsyncStorage.getItem('password');
    if (username === storedUsername && password === storedPassword) {
      navigation.replace('Home', { username });
    } else {
      alert('Invalid username or password');
    }
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
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signUpButtonText}>Sign Up </Text>
      </Pressable>
    </View>
  );
};

export const SignUpScreen = ({ navigation }) => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSignUp = async () => {
    if (newUsername && newPassword) {
      await AsyncStorage.setItem('username', newUsername);
      await AsyncStorage.setItem('password', newPassword);
      alert('Account created successfully!');
      navigation.goBack();
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.centeredTitle}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="New Username"
        value={newUsername}
        onChangeText={setNewUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />
      <Pressable style={styles.signInButton} onPress={handleSignUp}>
        <Text style={styles.signInButtonText}>Create Account</Text>
      </Pressable>
    </View>
  );
};
