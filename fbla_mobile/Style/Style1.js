import { View, Text, TextInput,  Button, ScrollView,  Image,  StyleSheet,  Pressable,} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 50,
    backgroundColor: '#f0f0f0',
  },
  detailsContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  centeredTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
    fontFamily: 'Verdana',
    textAlign: 'center', // Center the title
  },
  historyTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
    fontFamily: 'Verdana', // Change font to Verdana
    color: '#333',
    textAlign: 'center',
  },
  welcomeMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    fontFamily: 'Verdana',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    fontFamily: 'Verdana',
  },
  timelineItem: {
    marginBottom: 5,
    //backgroundColor:"dodgerblue",
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 7.5,
  },
  signOutButtonContainer: {
    alignSelf: 'flex-end',
    marginTop: 20,
    marginBottom: 8,
    padding: 10,
    backgroundColor: 'dodgerblue',
    borderRadius: 5,
    right: 10,
    bottom: 0,
  },
  signOutButtonText: {
    color: 'white',
    textWeight: 'bold',
    fontFamily: 'Verdana',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    fontFamily: 'Verdana',
  },
  modalImage: {
    width: '100%',
    height: 150,
    marginBottom: 8,
  },
  modalDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'Verdana',
  },
  backButton: {
    marginTop: 20,
    marginBottom: 16,
    padding: 10,
    backgroundColor: 'dodgerblue',
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Verdana',
  },
  signInButton: {
    backgroundColor: 'dodgerblue', // Blue background
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  signInButtonText: {
    color: 'white', // White text
    fontWeight: 'bold',
    fontFamily: 'Verdana',
  },
  erabutton: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    borderRadius: 5,
    padding: 10,
    marginTop: 0,
    alignItems: 'center',
    marginBottom: 2.5,
  },
  erabuttontext: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Verdana',
  },
  signUpButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 5,
    alignItems: 'center',
  },
  signUpButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Verdana',
  },
});