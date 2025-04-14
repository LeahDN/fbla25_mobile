//Info1.js

import { View, Text, TextInput,  Button, ScrollView,  Image,  StyleSheet,  Pressable,} from 'react-native';
import { styles } from '../Style/Style1';
import { useEffect, useState } from 'react';
import {BottomNavBar} from '../components/BottomNavBar'

export const DetailsScreen = ({ route, navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { era } = route.params;

  return (
   <View style={{ flex: 1 }}>
      <ScrollView
        style={styles.detailsContainer}
        contentContainerStyle={{ paddingBottom: 80 }} // Add padding to avoid overlap with BottomNavBar
        showsVerticalScrollIndicator={false}
      >
        <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </Pressable>
        <Text style={styles.modalTitle}>{era.name}</Text>
        <Image source={{ uri: era.cool_pic }} style={styles.modalImage} />
        <Text style={styles.modalDescription}>{era.info}</Text>
        <Pressable
          style={styles.nextbutton}
          onPress={() => navigation.navigate("Word", { era })}
        >
          <Text style={styles.erabuttontext} title={"Crossword"}>
            {"Crossword"}
          </Text>
        </Pressable>
        <Pressable
          style={styles.nextbutton}
          onPress={() => navigation.navigate("Quiz", { era })}
        >
          <Text style={styles.erabuttontext} title={"Quiz"}>
            {"Quiz"}
          </Text>
        </Pressable>
      </ScrollView>
      <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}></View>
        <BottomNavBar navigation={navigation} username={route.params.username} />
      </View>
    
  );
};
   /* <ScrollView style={styles.detailsContainer} showsVerticalScrollIndicator={false}>
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
  return( 
    <View>
    <BottomNavBar navigation={navigation} username={route.params.username} />
    </View>
  );
};
*/
