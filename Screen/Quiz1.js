// Quiz1.js
import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import { styles } from "../Style/Style1";

export const QuizScreen = ({ route, navigation }) => {
  const { era } = route.params;
  const quizData = era.questions;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  const currentQuestion = quizData[currentQuestionIndex];

  const handleAnswerSelection = (answer) => {
    if (selectedAnswer === null) {
      // Prevent changing the answer
      setSelectedAnswer(answer);
      setShowNextButton(true);
    }
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    setShowNextButton(false);

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
    setShowNextButton(false);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {!quizFinished ? (
          <View>
            {/* Back Button */}
            <Pressable
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <Text style={styles.backButtonText}>Back</Text>
            </Pressable>

            {/* Question Text */}
            <Text style={styles.quizText2}>{currentQuestion.question}</Text>

            {/* Options */}
            {currentQuestion.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  selectedAnswer === option &&
                    (option === currentQuestion.correctAnswer
                      ? styles.correctAnswer
                      : styles.incorrectAnswer),
                  selectedAnswer !== null && selectedAnswer !== option
                    ? styles.disabledOption // Add a disabled style
                    : null,
                ]}
                onPress={() => handleAnswerSelection(option)}
                disabled={selectedAnswer !== null} // Disable all options after selection
              >
                <Text style={styles.optionButtonText}>{option}</Text>
              </TouchableOpacity>
            ))}

            {/* Next Button */}
            {showNextButton && (
              <TouchableOpacity
                style={styles.backButton}
                onPress={handleNextQuestion}
              >
                <Text style={styles.nextButtonText}>
                  {currentQuestionIndex === quizData.length - 1
                    ? "Finish Quiz"
                    : "Next Question"}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        ) : (
          <View style={styles.resultContainer}>
            {/* Quiz Results */}
            <Text style={styles.quizText2}>
              Your Score: {score} / {quizData.length}
            </Text>

            {/* Reset Button */}
            <TouchableOpacity
              style={styles.resetButton}
              onPress={handleResetQuiz}
            >
              <Text style={styles.resetButtonText}>Reset Quiz</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

//export default QuizScreen;
