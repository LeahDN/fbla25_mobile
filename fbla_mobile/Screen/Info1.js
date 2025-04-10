//Info1.js
import { View, Text, TextInput,  Button, ScrollView,  Image,  StyleSheet,  Pressable,} from 'react-native';
import { styles } from '../Style/Style1';

export const DetailsScreen = ({ route, navigation }) => {
  const { era } = route.params;

  return (
    <ScrollView style={styles.detailsContainer}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </Pressable>
      <Text style={styles.modalTitle}>{era.title}</Text>
      <Image source={{ uri: era.image }} style={styles.modalImage} />
      <Text style={styles.modalDescription}>{era.description}</Text>
    </ScrollView>
  );
};
