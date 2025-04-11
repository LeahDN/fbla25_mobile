// App.js
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const url =
  "https://raw.githubusercontent.com/LeahDN/fbla25_mobile/Random_things/fbla_mobile/json/ancient_civilizations.json";

const HomeScreen = ({ navigation }) => {
  const [eras, setEras] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from GitHub when the component mounts
  React.useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => setEras(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView style={styles.detailsContainer}>
      <View style={styles.signOutButtonContainer}>
        <Pressable
          style={styles.signOutButton}
          onPress={() => console.log("Sign Out Pressed")}
        >
          <Text style={styles.signOutButtonText}>Sign Out</Text>
        </Pressable>
      </View>
      <Text style={styles.welcomeMessage}>Hello User!</Text>
      <Text style={styles.historyTitle}>History Timeline</Text>
      {loading ? (
        <Text style={styles.welcomeMessage}>Loading...</Text>
      ) : (
        eras.map((era, index) => (
          <View key={index} style={styles.timelineItem}>
            <Image source={{ uri: era.cool_pic }} style={styles.image} />
            <Pressable
              onPress={() => navigation.navigate("Details", { era })}
              style={styles.erabutton}
            >
              <Text style={styles.erabuttontext}>{era.name}</Text>
            </Pressable>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const DetailsScreen = ({ route, navigation }) => {
  const { era } = route.params;

  return (
    <ScrollView style={styles.detailsContainer}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </Pressable>
      <Text style={styles.modalTitle}>{era.name}</Text>
      <Image source={{ uri: era.cool_pic }} style={styles.modalImage} />
      <Text style={styles.modalDescription}>{era.info}</Text>
    </ScrollView>
  );
};


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f0f0",
  },

  historyTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 16,
    fontFamily: "Verdana", // Change font to Verdana
    color: "#333",
    textAlign: "center",
  },
  welcomeMessage: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
    fontFamily: "Verdana",
    textAlign: "center",
  },
  timelineItem: {
    marginBottom: 5,
    //backgroundColor:"dodgerblue",
  },
  image: {
    width: "100%",
    height: 150,
    marginBottom: 7.5,
  },
  signOutButtonContainer: {
    alignSelf: "flex-end",
    marginTop: 20,
    marginBottom: 8,
    padding: 10,
    backgroundColor: "dodgerblue",
    borderRadius: 5,
    right: 10,
    bottom: 0,
  },
  signOutButtonText: {
    color: "white",
    textWeight: "bold",
    fontFamily: "Verdana",
  },
  erabutton: {
    flex: 1,
    backgroundColor: "dodgerblue",
    borderRadius: 5,
    padding: 10,
    marginTop: 0,
    alignItems: "center",
    marginBottom: 2.5,
  },
  erabuttontext: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "Verdana",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    fontFamily: 'Verdana',
  },
    modalImage: {
        width: "100%",
        height: 150,
        marginBottom: 8,
    },
    modalDescription: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 16,
        fontFamily: "Verdana",
    },
    backButton: {
       marginTop:20,
        marginBottom: 16,
        padding: 10,
        backgroundColor: "dodgerblue",
        borderRadius: 5,
        alignSelf: "flex-start",
    },
    backButtonText: {
        color: "white",
        fontWeight: "bold",
        fontFamily: "Verdana",
    },
});

export default App;
