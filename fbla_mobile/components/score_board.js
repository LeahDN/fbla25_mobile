import React from 'react';

const api_get_scores = 'YOUR_API_ENDPOINT';
const api_set_scores = 'YOUR_API_ENDPOINT';

class Scoreboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerScore: 0,
      playerHighScore: 0,
      teamScore: 0,
    };
  }

const jeepAutos = resp.filter( (resp) => resp.title.includes("user_name"))
this.setState({
  filteredAutos: jeepAutos
})

  

  fetchHighScores() {
      fetch(api_get_scores)
        .then(resp => resp.json())
        .then(resp =>
            this.setState({
                autos: autoData, 
                isLoading: false,
            })
        )
        .catch(error => this.setState({ error, isLoading: false }));

  }



  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then((json) => setData(json))
      .catch((error)=> console.error(error))
      .finally(() => setLoading(false))
  }, [])


  

  incrementScore = (team) => {
    this.setState((prevState) => ({
      [team === 'A' ? 'teamAScore' : 'teamBScore']: prevState[team === 'A' ? 'teamAScore' : 'teamBScore'] + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>Scoreboard</h2>
        <div>
          <h3>Team A</h3>
          <p>Score: {this.state.teamAScore}</p>
          <button onClick={() => this.incrementScore('A')}>Increment A</button>
        </div>
        <div>
          <h3>Team B</h3>
          <p>Score: {this.state.teamBScore}</ds></p>
          <button onClick={() => this.incrementScore('B')}>Increment B</button>
        </div>
      </div>
    );
  }
}

export default Scoreboard;






import React, { useState, useEffect } from 'react';

function Score_Board() {
  const [current_score, setCurrentScore] = useState(0);
  const [player_highscore, setPlayer_HighScore] = useState(null);
  const [all_highscore, setAll_HighScore] = useState(null);
  const get_scores = 'YOUR_API_ENDPOINT';
  const set_scores = 'YOUR_API_ENDPOINT';

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Could not fetch data:", error);
      }
    };

    fetchData();
  }, [apiUrl]);


const jeepAutos = autos.filter( (auto) => auto.title.includes("Jeep"))
this.setState({
  filteredAutos: jeepAutos
})
  

  // Function to write data to the API
  const writeData = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ value: newValue })
      });
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
        console.log('Success:', result);
        // After writing data, you might want to refresh the data
        const response_get = await fetch(apiUrl);
        const json = await response_get.json();
        setData(json);
        setNewValue('');
    } catch (error) {
        console.error("Could not write data:", error);
    }
  };

    const handleInputChange = (event) => {
        setNewValue(event.target.value);
    };

  if (!data) {
    return <div>Loading data...</div>;
  }

    return (
        <div>
            <h1>Data from API:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>

            <div>
                <input
                    type="text"
                    value={newValue}
                    onChange={handleInputChange}
                    placeholder="Enter new value"
                />
                <button onClick={writeData}>Update Data</button>
            </div>
        </div>
    );
}

export default DataComponent;







import { useState } from 'react';

export default function App() {
  const counter = <Counter />;
  return (
    <div>
      {counter}
      {counter}
    </div>
  );
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}






export default function score_board() {
  const score = <Score />;
  const score_board = <Score_Board />;
  return (
    <div>
      {score_board}
    </div>
  );
}

function Score_Board(){
  const [score, setScore] = useState(0);
  let className = 'score_board';




  return (
    <div
      className={className}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}
  


  fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    userId: 55,
    id: 101,
    title: "Post title",
    body: "Post body",
  }),
})
  .then((response) => response.json())
  .then((responseData) => {
    console.log(JSON.stringify(responseData));
  })
  .done();
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Local files and assets can be imported by dragging and dropping them into the editor
      </Text>
      <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});



