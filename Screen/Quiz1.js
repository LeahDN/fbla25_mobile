//Quiz1.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const quizData = [
  {
    question: 'What is A?',
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 'A',
  },
  {
    question: 'What is B?',
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 'B',
  },
  {
    question: 'What is C?',
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 'C',
  },
];

const Quiz = () => {
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
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
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
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.nextButton}
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
          <Text style={styles.resultText}>Your Score: {score} / {quizData.length}</Text>
          <TouchableOpacity style={styles.resetButton} onPress={handleResetQuiz}>
            <Text style={styles.resetButtonText}>Reset Quiz</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  // styles as before...
});

export default Quiz;
