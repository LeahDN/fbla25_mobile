//Info1.js

import { View, Text, TextInput,  Button, ScrollView,  Image,  StyleSheet,  Pressable,} from 'react-native';
import { styles } from '../Style/Style1';
import { useEffect, useState } from 'react';

export const DetailsScreen = ({ route, navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { era } = route.params;

  return (
    <ScrollView style={styles.detailsContainer}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </Pressable>
      <Text style={styles.modalTitle}>{era.name}</Text>
      <Image source={{ uri: era.cool_pic }} style={styles.modalImage} />
      <Text style={styles.modalDescription}>{era.info}</Text>
      <Pressable
            style={styles.nextbutton}
            onPress={() => navigation.navigate('Word', { era })}>
            <Text style={styles.erabuttontext} title={'Crossword'}>
              {'Crossword'}
            </Text>
          </Pressable>
      <Pressable
            style={styles.nextbutton}
            onPress={() => navigation.navigate('Quiz', { era })}>
            <Text style={styles.erabuttontext} title={'Quiz'}>
              {'Quiz'}
            </Text>
          </Pressable>
    </ScrollView>
  );
};
