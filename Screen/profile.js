import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { styles } from "../Style/Style1";

const GITHUB_TOKEN = "My Fabulous Token";
const REPO_OWNER = "LeahDN";
const REPO_NAME = "fbla25_mobile";
const FILE_PATH = "json/User_Data.json";

export const Profile = ({ navigation, route }) => {
  const { username } = route.params;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`,
          {
            headers: {
              Authorization: `Bearer ${GITHUB_TOKEN}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const content = atob(data.content); // Decode base64 content
        const users = JSON.parse(content);

        if (users[username]) {
          setUserData(users[username]);
        } else {
          setError(new Error("User not found"));
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.detailsContainer}>
      <View style={styles.signOutButtonContainer}>
        <Pressable
          style={styles.signOutButton}
          onPress={() => navigation.replace("SignIn")}
        >
          <Text style={styles.signOutButtonText}>Sign Out</Text>
        </Pressable>
      </View>
      <Text style={styles.welcomeMessage}>Hello, {username}!</Text>
      <Text style={styles.welcomeMessage}>
        Your Score: {userData?.score ?? 0}
      </Text>
    </ScrollView>
  );
};
