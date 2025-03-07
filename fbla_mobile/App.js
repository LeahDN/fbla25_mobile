import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Button, Alert, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import { useRoute } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
  // Declare state variables
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // API URL
  const url ="https://raw.githubusercontent.com/LeahDN/fbla25_mobile/refs/heads/main/fbla_mobile/json/ancient_civilizations.json";

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
              <View style={styles.container2}>
                <View style={styles.appButtonContainer}>
                  <Button
                    title={post.start_year}
                    onPress={() => navigation.navigate("Info", { civilizationKey: post.key })}
                 />
                </View>
              </View>
            <Text style={styles.title}>{post.name}</Text>
          </View>
        ))
      )}
      <View style={styles.appButtonContainer2}>
        <Button title="Profile" onPress={() => navigation.navigate("Details")} />
      </View>
    </View>
  );
};

const InfoScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Use the route hook to access params
  const route = useRoute();
  
  // Get the civilizationKey from the route params
  const { civilizationKey } = route.params || {};

  // API URL
  const url ="https://raw.githubusercontent.com/LeahDN/fbla25_mobile/refs/heads/main/fbla_mobile/json/ancient_civilizations.json";

  // Fetch data from the API
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const era = data.find(
    (post) => post.key === civilizationKey
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        // Only show Mesopotamia data if it's available
        era ? (
          <View>
            <View style={styles.container2}>
            </View>
            <Text style={styles.title}>{era.name}</Text>
            <Text>{era.info}</Text>
            <Image source={{ uri: era.cool_pic }} style={{ width: 100, height: 100 }} />
          </View>
        ) : (
          <Text>No data found for Mesopotamia</Text>
        )
      )}
    </View>
  );
};

const DetailScreen = ({ route }) => {
  //const route = useRoute();
  const pageName = route.params?.pageName;

  <View style={styles.container}>
    <Text>{pageName}</Text>
  </View> 
};

//const Screen1 = HomeScreen

const Stack = createNativeStackNavigator();

const App = () => {
    const [signedIn, setSignedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        // Add your sign-in logic here
        setSignedIn(true);
    };

    const handleSignOut = () => {
        setSignedIn(false);
        setUsername('');
        setPassword('');
    };

    if (!signedIn) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Sign In</Text>
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
                <Button title="Sign In" onPress={handleSignIn} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, {username}!</Text>
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailScreen} />
                <Stack.Screen name="Info" component={InfoScreen} />
              </Stack.Navigator>
            </NavigationContainer>
            <Button title="Sign Out" onPress={handleSignOut} />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 45,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    //marginBottom: 16,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#ded8c5",
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 5,
    width: 80,
    height: 80,
    position: 'left'
  },
  appButtonContainer2: {
    elevation: 8,
    backgroundColor: "#edc540",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 14,
    color: "#000000",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default App;
