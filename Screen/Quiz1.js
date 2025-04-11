//Quiz1.js
import { useState } from 'react';
import { View, Text, TextInput,  Button, ScrollView,  Image,  StyleSheet,  Pressable, TouchableOpacity} from 'react-native';
import { styles } from '../Style/Style1';

export const QuizScreen = ({ route, navigation }) => {

  const { era } = route.params;
  const quizData = era.questions;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false); // Fixed line

  const currentQuestion = quizData[currentQuestionIndex];

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <View style={styles.container}>
      {!quizFinished ? (
        <View>
          <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backButtonText}>Back</Text>
          </Pressable>
          <Text style={styles.quizText2}>{currentQuestion.question}</Text>
          {currentQuestion.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedAnswer === option && (option === currentQuestion.correctAnswer ? styles.correctAnswer : styles.incorrectAnswer),
              ]}
              onPress={() => handleAnswerSelection(option)}
              disabled={selectedAnswer !== null}
            >
              <Text style={styles.optionButtonText}>{option}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleNextQuestion}
            disabled={selectedAnswer === null}
          >
            <Text style={styles.nextButtonText}>
              {currentQuestionIndex === quizData.length - 1 ? 'Finish Quiz' : 'Next Question'}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.resultContainer}>
          <Text style={styles.quizText2}>Your Score: {score} / {quizData.length}</Text>
          <TouchableOpacity style={styles.resetButton} onPress={handleResetQuiz}>
            <Text style={styles.resetButtonText}>Reset Quiz</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default QuizScreen;
