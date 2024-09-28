import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const TestSection = ({
  question,
  onAnswer,
  currentQuestionIndex,
  totalQuestions,
}) => {
  if (!question) {
    return <div>No hay preguntas disponibles.</div>;
  }

  return (
    <div className="test-section">
      <h2>
        Pregunta {currentQuestionIndex + 1} de {totalQuestions}
      </h2>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <p>{question.text || "Texto de la pregunta no disponible"}</p>
          <div className="options">
            {question.options && question.options.length > 0 ? (
              question.options.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => onAnswer(index)}
                  className="option-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {option}
                </motion.button>
              ))
            ) : (
              <p>No hay opciones disponibles</p>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

TestSection.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    correctAnswer: PropTypes.number,
  }),
  onAnswer: PropTypes.func.isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
};

export default TestSection;
