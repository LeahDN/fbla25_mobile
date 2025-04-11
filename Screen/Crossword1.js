//Crossword1.js
import { View, Text, TextInput,  Button, ScrollView,  Image,  StyleSheet,  Pressable,} from 'react-native';
import { styles } from '../Style/Style1';
import React, { useEffect, useState } from 'react';
import CrosswordGrid from "../components/CrosswordGrid2";

export const CrosswordScreen = ({ route, navigation }) => {
  const { era } = route.params;
  const crosswordData = era.words;

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </Pressable>
      {crosswordData ? (
        <CrosswordGrid crosswordData={crosswordData} />
      ) : (
        <Text>No crossword data available.</Text>
      )}
    </View>
  );
};