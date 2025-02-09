
import React,{useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';

export default function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const url = "https://raw.githubusercontent.com/LeahDN/fbla25_mobile/refs/heads/json_files/fbla_mobile/json/ancient_civilizations.json";

  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then((json) => setData(json))
      .catch((error)=> console.error(error))
      .finally(() => setLoading(false))
  }, [])


  return (
    <View style={styles.container}>
      {
        loading ? (<Text>Loading...</Text>) : (
          data.map((post) => {
            return (
              <View>
                <Button
                  onPress={() => Alert.alert('Congrats you can press a button')}
                  title={post.start_year}                  
                  color="#841584"
                  accessibilityLabel="Learn more about this purple button"
                />
                <Text style={styles.title}>{post.name}</Text>
                <Text>{post.info}</Text>
                
            </View>
            )
          })
        )
      } 
          <View style={styles.appButtonContainer}>
    {
      <Button title="sup" />
    }
    </View>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

const AppButton = ({ onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);
