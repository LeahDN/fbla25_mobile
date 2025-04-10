//Home1.js

import { View, Text, TextInput,  Button, ScrollView,  Image,  StyleSheet,  Pressable,} from 'react-native';
import { styles } from '../Style/Style1';

export const HomeScreen1 = ({ navigation, route }) => {
  const { username } = route.params;

  const handleSignOut = () => {
    navigation.replace('SignIn');
  };

  const eras = [
    {
      title: 'Mesopotamia',
      image:
        'https://img.freepik.com/premium-photo/mesopotamia-civilization_804007-582.jpg?w=2000',
      description: 'Mesopotamia is considered the cradle of civilization.',
    },
    {
      title: 'Ancient Egypt',
      image:
        'https://www.gulla.net/contentassets/9fff228c87f74c33896de28dfd325e6d/pyramids.png',
      description: 'Ancient Egypt is known for its pyramids and pharaohs.',
    },
    {
      title: 'Indus Valley Civilization',
      image: 'https://wallpaperaccess.com/full/8748678.jpg',
      description:
        'The Indus Valley Civilization was one of the earliest urban cultures.',
    },
    {
      title: 'Xia Dynasty',
      image: 'https://www.worldhistory.org/img/c/p/1200x627/4375.jpg',
      description:
        'The Xia Dynasty is the first dynasty in traditional Chinese history.',
    },
    {
      title: 'Minoan',
      image:
        'https://th.bing.com/th/id/R.c96a8465febe8e1d7d7ebb8f24bfe763?rik=tVC3ra%2fIqJ48nw&pid=ImgRaw&r=0',
      description: 'The Minoan civilization flourished on the island of Crete.',
    },
  ];

  return (
    <ScrollView style={styles.detailsContainer}>
      <View style={styles.signOutButtonContainer}>
        <Pressable style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutButtonText}>Sign Out</Text>
        </Pressable>
      </View>
      <Text style={styles.welcomeMessage}>Hello, {username}!</Text>
      <Text style={styles.historyTitle}>History Timeline</Text>
      {eras.map((era, index) => (
        <View key={index} style={styles.timelineItem}>
          <Image source={{ uri: era.image }} style={styles.image} />
          <Pressable
            style={styles.erabutton}
            onPress={() => navigation.navigate('Details', { era })}>
            <Text style={styles.erabuttontext} title={era.title}>
              {era.title}
            </Text>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
};
