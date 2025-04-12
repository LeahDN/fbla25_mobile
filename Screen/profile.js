//Home1.js

import { View, Text, TextInput,  Button, ScrollView,  Image,  StyleSheet,  Pressable,} from 'react-native';
import { styles } from '../Style/Style1';
import { useEffect, useState } from 'react';

 import {
      FacebookShareButton,
      TwitterShareButton,
      LinkedinShareButton,
      FacebookIcon,
      TwitterIcon,
      LinkedinIcon,
    } from 'react-share';

    const shareUrl = 'https://www.ofsd.k12.mo.us/schools/orchard_farm_high_school';
    const title = 'Check out this page!';


export const Profile = ({ navigation, route }) => {
  const { username } = route.params;

  const handleSignOut = () => {
    navigation.replace('SignIn');
  };

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [thescore, setThescore] = useState(null);
  const [encourage, setEncourage] = useState(null);
  const [race, setRace] = useState(null);
  // API URL
  const url ='https://raw.githubusercontent.com/LeahDN/fbla25_mobile/refs/heads/main/json/User_Data.json';

useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const jsonData = await response.json();
          
            const userScore = jsonData[username]?.score ?? 0;
            setThescore(userScore);

            const getNextObject = (jsonData, currentKey) => {
              const keys = Object.keys(jsonData);
              const currentIndex = keys.indexOf(currentKey);
              if (currentIndex > 1) {
                const nextKey = keys[currentIndex - 1];
                return { key: nextKey, value: jsonData[nextKey] };
              }else if (currentIndex == 1) {
                const nextKey = keys[keys.length - 1];
                return { key: nextKey, value: jsonData[nextKey] };
              }
              return null; // No next object
            };

            const nextObject = getNextObject(jsonData, username);

            console.log(nextObject.key)
            console.log(nextObject.value.score)

            if (userScore > 5) {
              setEncourage(`You are really getting this with a score of ${userScore}`);
            } else if (userScore > 0) {
              setEncourage(`You have ${userScore} points and that is a great start`);
            } else {
              setEncourage('Let’s take a quiz and get started');
            }
            if(userScore > nextObject.value.score ){
              setRace('You are in front of ' + nextObject.key + ' by ' + (userScore -nextObject.value.score) + ' points!' );
             }else if(userScore < nextObject.value.score ){
              setRace('The player ' + nextObject.key + ' is in front of you by ' + (nextObject.value.score - userScore) + ' points!'  );
             }else{
              setRace('You and ' + nextObject.key + ' are tied!'  );
             }
          } catch (e) {
            setError(e);
          } finally {
            setLoading(false);
          }
        }
        fetchData();
      }, []);


      if (loading) {
        return <p>Loading data...</p>;
      }

      if (error) {
        return <p>Error: {error.message}</p>;
      }


  return (
    <ScrollView style={styles.detailsContainer}>
      <View style={styles.signOutButtonContainer}>
        <Pressable style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutButtonText}>Sign Out</Text>
        </Pressable>
      </View>
      <Text style={styles.welcomeMessage}>Hello, {username}!</Text>
      <Text style={styles.welcomeMessage}>{encourage}</Text>
      <Text style={styles.welcomeMessage}>{race}</Text>
      <Text style={styles.welcomeMessage}>Share your success!</Text>
      <div>
        <FacebookShareButton url={shareUrl} quote={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>



    </ScrollView>
  );
};