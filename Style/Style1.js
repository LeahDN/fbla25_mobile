import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
  borderRadius
} from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 50,
    backgroundColor: "#f9f5ff",
  },
  detailsContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f5ff",
  },
  centeredTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 16,
    fontFamily: "Verdana",
    textAlign: "center", // Center the title
    color: "#79b4a9",
  },
  historyTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 16,
    fontFamily: "Verdana", // Change font to Verdana
    color: "#333",
    textAlign: "center",
  },
  welcomeMessage: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
    fontFamily: "Verdana",
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    fontFamily: "Verdana",
  },
  timelineItem: {
    marginBottom: 5,
    //backgroundColor:"dodgerblue",
    alignItems: "center",
  },
  image: {
    alignItems: "center",
    width: "50%",
    height: 150,
    marginBottom: 7.5,
    borderTopRightRadius: 2500,
    borderTopLeftRadius: 2500,
    borderBottomLeftRadius: 2500,
    borderBottomRightRadius: 2500,
    },
  signOutButtonContainer: {
    alignSelf: "flex-end",
    marginTop: 20,
    marginBottom: 8,
    padding: 10,
    backgroundColor: "#79b4a9",
    borderRadius: 5,
    right: 10,
    bottom: 0,
  },
  signOutButtonText: {
    color: "white",
    textWeight: "bold",
    fontFamily: "Verdana",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    fontFamily: "Verdana",
  },
  modalImage: {
    width: "100%",
    height: 150,
    marginBottom: 8,
  },
  modalDescription: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
    fontFamily: "Verdana",
  },
  backButton: {
    marginTop: 20,
    marginBottom: 16,
    padding: 10,
    backgroundColor: "#79B4A9",
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  backButton2: {
    marginTop: 0,
    marginBottom: 0,
    padding: 10,
    backgroundColor: "#79B4A9",
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  backButtonText: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "Verdana",
  },
  signInButton: {
    backgroundColor: "#79B4A9", // Blue background
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  signInButtonText: {
    color: "white", // White text
    fontWeight: "bold",
    fontFamily: "Verdana",
    textAlign: "center",
  },
  erabutton: {
    flex: 1,
    backgroundColor: "#79b4a9",
    borderRadius: 5,
    padding: 10,
    marginTop: 0,
    alignItems: "center",
    marginBottom: 2.5,
    width: 150,
  },
  nextbutton: {
    flex: 1,
    backgroundColor: "#79B4A9",
    borderRadius: 5,
    padding: 10,
    marginTop: 0,
    alignItems: "center",
    marginBottom: 2.5,
  },
  erabuttontext: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "Verdana",
  },
  signUpButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "black",
    borderRadius: 5,
    alignItems: "center",
  },
  signUpButtonText: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "Verdana",
  },
  row: {
    flexDirection: "row",
  },
  cellContainer: {
    position: "relative",
  },
  cell: {
    borderWidth: 1,
    margin: 1,
    borderColor: "#79B4A9",
    //backgroundColor: "dodgerblue",
    //#228B22 color for all these originally
    width: 30,
    height: 30,
    textAlign: "center",
  },
  staticCell: {
    borderColor: "transparent",
    color: "transparent",
    backgroundColor: "",
  },
  smallDigit: {
    position: "absolute",
    top: 2,
    left: 2,
    right: 2,
    bottom: 2,
    fontSize: 10,
    fontWeight: "bold",
    color: "black",
    backgroundColor: "transparent",
  },
  questionsContainer: {
    justifyContent: "space-between",
    marginBottom: 10,
    padding: 10,
  },
  questionText: {
    fontSize: 16,
    fontStyle: "italic",
  },
  headingContainer: {
    marginTop: 0,
    marginBottom: 5,
  },
  headingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#79B4A9",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    marginHorizontal: 10,
  },
  button: {
    flex: 1, // Ensure equal width for both buttons
  },
  gap: {
    width: 10, // Adjust the width as needed for the desired gap
  },
  gap2: {
    marginTop: 50,
  },
  
  //Quiz Stufff
  quizText2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Verdana",
  },
  optionButton: {
    backgroundColor: "#79B4A9",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  optionButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Verdana",
  },
  correctAnswer: {
    backgroundColor: "#4CAF50",
    fontFamily: "Verdana",
  },
  incorrectAnswer: {
    backgroundColor: "#F44336",
    fontFamily: "Verdana",
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  resultContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  resetButton: {
    backgroundColor: "#FF9800",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  resetButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Verdana",
  },

  //Bottom Nav Bar
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#79b4a9",
    padding: 20,
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
