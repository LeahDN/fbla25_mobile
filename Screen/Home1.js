//Home1.js

import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { styles } from "../Style/Style1";
import { useEffect, useState } from "react";
import BottomNavBar from "../components/BottomNavBar";

export const HomeScreen1 = ({ navigation, route }) => {
  const { username } = route.params;

  const handleSignOut = () => {
    navigation.replace("SignIn");
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // API URL
  const url =
    "https://raw.githubusercontent.com/LeahDN/fbla25_mobile/refs/heads/main/json/ancient_civilizations.json";

  // Fetch data from the API
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={styles.detailsContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.signOutButtonContainer}>
          <Pressable style={styles.signOutButton} onPress={handleSignOut}>
            <Text style={styles.signOutButtonText}>Sign Out</Text>
          </Pressable>
        </View>
        <Text style={styles.welcomeMessage}>Hello, {username}!</Text>
        <Text style={styles.historyTitle}>History Timeline</Text>
        {data.map((era, index) => (
          <View key={index} style={styles.timelineItem}>
            <Image source={{ uri: era.cool_pic }} style={styles.image} />
            <Pressable
              style={styles.erabutton}
              onPress={() => navigation.navigate("Details", { era, username })}
            >
              <Text style={styles.erabuttontext} title={era.name}>
                {era.name}
              </Text>
            </Pressable>
          </View>
        ))}
        <View style={styles.gap2}/>
      </ScrollView>
      <BottomNavBar  navigation={navigation} username={username}/>
    </View>
  );
};
