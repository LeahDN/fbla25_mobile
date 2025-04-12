//Home1.js

import { View, Text, TextInput,  Button, ScrollView,  Image,  StyleSheet,  Pressable,} from 'react-native';
import { styles } from '../Style/Style1';
import { useEffect, useState } from 'react';

export const HomeScreen1 = ({ navigation, route }) => {
  const { username } = route.params;

  const handleSignOut = () => {
    navigation.replace('SignIn');
  };
  const handleProfile = () => {
    navigation.replace('Profile', { username });
  };


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // API URL
  const url ='https://raw.githubusercontent.com/LeahDN/fbla25_mobile/refs/heads/main/json/ancient_civilizations.json';

  // Fetch data from the API
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  return (
    <ScrollView style={styles.detailsContainer}>
          <section style={{ display: 'flex', justifyContent: 'center' }}><div>
      <View style={styles.profileButtonContainer}>
        <Pressable style={styles.signOutButton} onPress={handleProfile}>
          <Text style={styles.signOutButtonText}>Profile</Text>
        </Pressable>
        </View></div><div>
           <View style={styles.signOutButtonContainer}>
                <Pressable style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutButtonText}>Sign Out</Text>
        </Pressable>
      </View></div></section>
      <Text style={styles.welcomeMessage}>Hello, {username}!</Text>
      <Text style={styles.historyTitle}>History Timeline</Text>
      {data.map((era, index) => (
        <View key={index} style={styles.timelineItem}>
          <Image source={{ uri: era.cool_pic }} style={styles.image} />
          <Pressable
            style={styles.erabutton}
            onPress={() => navigation.navigate('Details', { era })}>
            <Text style={styles.erabuttontext} title={era.name}>
              {era.name}
            </Text>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
};
