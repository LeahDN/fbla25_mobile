import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles } from '../Style/Style1';

const Stack = createNativeStackNavigator();

// Replace with your GitHub personal access token and repository details
const GITHUB_TOKEN = "My Fabulous Token";
const REPO_OWNER = "LeahDN";
const REPO_NAME = "fbla25_mobile";
const FILE_PATH = "json/User_Data.json"; // File to store user data


const fetchUsersFromGitHub = async () => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      const content = atob(data.content); // Decode base64 content
      return JSON.parse(content);
    } else if (response.status === 404) {
      return {}; // File doesn't exist yet
    } else {
      throw new Error("Failed to fetch users");
    }
  } catch (error) {
    console.error(error);
    return {};
  }
};

const saveUsersToGitHub = async (users) => {
  try {
    const existingFileResponse = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
      }
    );

    let sha = null;
    if (existingFileResponse.ok) {
      const existingFile = await existingFileResponse.json();
      sha = existingFile.sha; // Get the SHA of the existing file
    }

    const response = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "Update user data",
          content: btoa(JSON.stringify(users)), // Encode content in base64
          sha: sha || undefined, // Include SHA if updating an existing file
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to save users: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error saving users to GitHub:",error);
  }
};

export const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSignIn = async () => {
    const users = await fetchUsersFromGitHub();
    if (users[username] && users[username].password === password) {
      navigation.replace("Home", { username });
    } else {
      alert("Invalid username or password");
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
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

export const SignUpScreen = ({ navigation }) => {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const handleSignUp = async () => {
    if (newUsername && newPassword) {
      const users = await fetchUsersFromGitHub();
      if (users[newUsername]) {
        alert("Username already exists");
      } else {
        users[newUsername] = { password: newPassword, score: 0};
        await saveUsersToGitHub(users);
        alert("Account created successfully!");
        navigation.goBack();
      }
    } else {
      alert("Please fill in both fields");
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
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </Pressable>
    </View>
  );
};

/*
const HomeScreen = ({ navigation, route }) => {
  const { username = "Guest" } = route.params || {};

  const handleSignOut = () => {
    navigation.replace("SignIn");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeMessage}>Hello, {username}!</Text>
      <Pressable style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutButtonText}>Sign Out</Text>
      </Pressable>
    </View>
  );
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
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
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
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  signInButton: {
    backgroundColor: "dodgerblue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  signInButtonText: {
    color: "white",
    fontWeight: "bold",
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
  },
  welcomeMessage: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  signOutButton: {
    backgroundColor: "dodgerblue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  signOutButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  backButton: {
    marginTop: 10,
    marginBottom: 16,
    padding: 0,
    borderRadius: 5,
    alignSelf: "Center",
  },
});
*/
//export default App;

