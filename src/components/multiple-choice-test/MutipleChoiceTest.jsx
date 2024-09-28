import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MultipleChoiceTest = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [answers, setAnswers] = useState([]);
  const [testStarted, setTestStarted] = useState(false);

  const handleStartTest = () => {
    setTestStarted(true);
    setCurrentQuestionIndex(0);
  };

  const handleAnswer = (answerIndex) => {
    setAnswers([...answers, answerIndex]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const results = questions.map((question, index) => ({
        question: question.text,
        correctAnswer: question.options[question.correctAnswer],
        userAnswer: question.options[answers[index]],
        isCorrect: answers[index] === question.correctAnswer
      }));
      const score = results.filter(result => result.isCorrect).length;
      onComplete(results, score);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="test-container">
      <AnimatePresence mode="wait">
        {!testStarted ? (
          <motion.div
            key="start-card"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="question-card start-card"
          >
            <h2>Bienvenido al Test</h2>
            <p>Este test consta de {questions.length} preguntas. ¿Estás listo para comenzar?</p>
            <button onClick={handleStartTest} className="start-button">
              Comenzar Test
            </button>
          </motion.div>
        ) : (
          <motion.div
            key={currentQuestionIndex}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="question-card"
          >
            <h2>{currentQuestion.text}</h2>
            <div className="options">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="option-button"
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {testStarted && (
        <div className="progress">
          Pregunta {currentQuestionIndex + 1} de {questions.length}
        </div>
      )}
    </div>
  );
};

export default MultipleChoiceTest;