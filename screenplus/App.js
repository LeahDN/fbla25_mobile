import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = ({ navigation }) => {
  // Declare state variables
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // API URL
  const url = "https://raw.githubusercontent.com/LeahDN/fbla25_mobile/refs/heads/json_files/fbla_mobile/json/ancient_civilizations.json";

  // Fetch data from the API
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        data.map((post, index) => (
          <View key={index}>
            <Button
              onPress={() => Alert.alert('Congrats, you can press a button')}
              title={post.start_year}
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
            <Text style={styles.title}>{post.name}</Text>
            <Text>{post.info}</Text>
          </View>
        ))
      )}
      <View style={styles.appButtonContainer}>
        <Button title="sup" onPress={() => navigation.navigate("Details")} />
      </View>
    </View>
  );
};

const DetailScreen = () => (
  <View style={styles.container}>
    <Text>Details Screen</Text>
  </View>
);

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default App;
