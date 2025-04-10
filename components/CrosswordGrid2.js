import { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, Button } from 'react-native';
import { styles } from './Style/Style1'

const generateInitialGrid = (crosswordData) => {
  const initialGrid = Array(8).fill(0).map(() => Array(8).fill('X'));
  
  crosswordData.forEach(({ answer, startx, starty, orientation }) => {
    let x = startx - 1;
    let y = starty - 1;

    for (let i = 0; i < answer.length; i++) {
      if (orientation === 'across') {
        initialGrid[y][x + i] = '';
      } else if (orientation === 'down') {
        initialGrid[y + i][x] = '';
      }
    }
  });

  return initialGrid;
};

const generateAnswerGrid = (crosswordData) => {
  const answerGrid = Array(8).fill(0).map(() => Array(8).fill('X'));
  
  crosswordData.forEach(({ answer, startx, starty, orientation }) => {
    let x = startx - 1;
    let y = starty - 1;

    for (let i = 0; i < answer.length; i++) {
      if (orientation === 'across') {
        answerGrid[y][x + i] = answer[i];
      } else if (orientation === 'down') {
        answerGrid[y + i][x] = answer[i];
      }
    }
  });

  return answerGrid;
};

const CrosswordGrid = ({ crosswordData }) => {
  const [grid, setGrid] = useState(generateInitialGrid(crosswordData));

  useEffect(() => {
    setGrid(generateInitialGrid(crosswordData));
  }, [crosswordData]);

  const handleInputChange = (row, col, text) => {
    const newGrid = [...grid];
    newGrid[row][col] = text.toUpperCase();
    setGrid(newGrid);
  };

  const handleVerify = () => {
    const answerGrid = generateAnswerGrid(crosswordData);
    const isCorrect = JSON.stringify(grid) === JSON.stringify(answerGrid);
    if (isCorrect) {
      alert('Congratulations! Your crossword is correct.');
    } else {
      alert('Incorrect. Please try again.');
    }
  };

  const handleReset = () => {
    setGrid(generateInitialGrid(crosswordData));
  };

  const handleSolve = () => {
    const answerGrid = generateAnswerGrid(crosswordData);
    setGrid(answerGrid);
  };

  const renderGrid = () => (
    <View>
      {grid.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) => (
            <View key={colIndex} style={styles.cellContainer}>
              {crosswordData.map((entry) => {
                const { startx, starty, position } = entry;
                if (rowIndex + 1 === starty && colIndex + 1 === startx) {
                  return (
                    <Text key={`digit-${position}`} style={styles.smallDigit}>
                      {position}
                    </Text>
                  );
                }
                return null;
              })}
              <TextInput
                style={[
                  styles.cell,
                  grid[rowIndex][colIndex] === 'X' ? styles.staticCell : null,
                ]}
                value={cell}
                editable={grid[rowIndex][colIndex] !== 'X'}
                onChangeText={(text) =>
                  handleInputChange(rowIndex, colIndex, text)
                }
                maxLength={1}
              />
            </View>
          ))}
        </View>
      ))}
    </View>
  );

  const renderQuestions = () => {
    const questions = { across: [], down: [] };

    crosswordData.forEach(({ hint, orientation, position }) => {
      const questionText = `${position}. ${hint}`;
      questions[orientation].push(
        <Text key={`question-${position}`} style={styles.questionText}>
          {questionText}
        </Text>
      );
    });

    return (
      <View>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Across</Text>
        </View>
        <View style={styles.questionsContainer}>
          {questions.across.map((question, index) => (
            <View key={`across-question-container-${index}`}>{question}</View>
          ))}
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Down</Text>
        </View>
        <View style={styles.questionsContainer}>
          {questions.down.map((question, index) => (
            <View key={`down-question-container-${index}`}>{question}</View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderQuestions()}
      {renderGrid()}
      <View style={styles.buttonContainer}>
        <Button color={'#228B22'} title="Verify" onPress={handleVerify} style={styles.button} />
        <View style={styles.gap} />
        <Button color={'#228B22'} title="Reset" onPress={handleReset} style={styles.button} />
        <View style={styles.gap} />
        <Button color={'#228B22'} title="Solve" onPress={handleSolve} style={styles.button} />
      </View>
    </View>
  );
};


export default CrosswordGrid;
