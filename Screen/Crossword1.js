//Crossword1.js
import { View, Text, TextInput,  Button, ScrollView,  Image,  StyleSheet,  Pressable,} from 'react-native';
import { styles } from '../Style/Style1';
import React, { useEffect, useState } from 'react';
import CrosswordGrid from "../components/CrosswordGrid2";
import BottomNavBar from '../components/BottomNavBar';

export const CrosswordScreen = ({ route, navigation }) => {
  const { era } = route.params;
  const crosswordData = era.words;

  return (
    <View style={{flex:1}}>
      <ScrollView 
        style={styles.detailsContainer}
        contentContainerStyle={{ paddingBottom: 80 }} // Add padding to     avoid overlap with BottomNavBar
        showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton2}>
        <Text style={styles.backButtonText}>Back</Text>
      </Pressable>
      {crosswordData ? (
        <CrosswordGrid crosswordData={crosswordData} />
      ) : (
        <Text>No crossword data available.</Text>
      )}
    </View>
  </ScrollView>
  <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}></View>
        <BottomNavBar navigation={navigation} username={route.params.username} />
      </View>
  );

};
