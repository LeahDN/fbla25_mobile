import { Text, SafeAreaView, StyleSheet, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack'

const HomeScreen = ({ navigation}) => (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go" onPress={() => navigation.navigate("Details")} />
    </View>
);

const DetailScreen = () => (
  <View>
    <Text>Details Screen</Text>
  </View>
);

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name= "Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;