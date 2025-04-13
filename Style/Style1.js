import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 50,
    backgroundColor: "#f0f0f0",
  },
  detailsContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  centeredTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 16,
    fontFamily: "Verdana",
    textAlign: "center", // Center the title
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
  },
  image: {
    width: "100%",
    height: 150,
    marginBottom: 7.5,
  },
  signOutButtonContainer: {
    alignSelf: "flex-end",
    marginTop: 20,
    marginBottom: 8,
    padding: 10,
    backgroundColor: "dodgerblue",
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
    backgroundColor: "dodgerblue",
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  backButton2: {
    marginTop: 0,
    marginBottom: 16,
    padding: 10,
    backgroundColor: "dodgerblue",
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  backButtonText: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "Verdana",
  },
  signInButton: {
    backgroundColor: "dodgerblue", // Blue background
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  signInButtonText: {
    color: "white", // White text
    fontWeight: "bold",
    fontFamily: "Verdana",
  },
  erabutton: {
    flex: 1,
    backgroundColor: "dodgerblue",
    borderRadius: 5,
    padding: 10,
    marginTop: 0,
    alignItems: "center",
    marginBottom: 2.5,
  },
  nextbutton: {
    flex: 1,
    backgroundColor: "dodgerblue",
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
    backgroundColor: "gray",
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
    borderColor: "dodgerblue",
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
    color: "dodgerblue",
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
    backgroundColor: "#2196F3",
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
});
