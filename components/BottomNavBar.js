import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../Style/Style1"; // Adjust the import path as necessary
import {username} from "../Screen/Home1"

export const BottomNavBar = ({ navigation, username }) => {
  //const navigation = useNavigation();
  //const { username } = route.params;

  return (
    <View style={styles.navBar}>
      {/* Sign In Button */}
      <Pressable
        style={styles.navButton}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={styles.navButtonText}>Sign Out</Text>
      </Pressable>

      {/* Home Button */}
      <Pressable
        style={styles.navButton}
        onPress={() => navigation.replace("Home", {username})}
      >
        <Text style={styles.navButtonText}>Home</Text>
      </Pressable>

      {/* Profile Button */}
      <Pressable
        style={styles.navButton}
        onPress={() => navigation.replace("Profile", {username})}
      >
        <Text style={styles.navButtonText}>Profile</Text>
      </Pressable>
    </View>
  );
};

/*const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "dodgerblue",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  navButton: {
    flex: 1,
    alignItems: "center",
  },
  navButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
*/
export default BottomNavBar;
