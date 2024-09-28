import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ResultsModal = ({
  results,
  score,
  totalQuestions,
  onRetry,
  onClose,
  testTitle,
}) => {
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2>Resultados del Test</h2>
        {testTitle && <p>Test: {testTitle}</p>}
        <p>
          Puntuación: {score} de {totalQuestions}
        </p>
        <div className="test-results-modal">
          {results.map((result, index) => (
            <motion.div
              key={index}
              className={`result-item ${
                result.isCorrect ? "correct" : "incorrect"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3>
                Pregunta {index + 1}: {result.question}
              </h3>
              <p>Tu respuesta: {result.userAnswer}</p>
              <p>Respuesta correcta: {result.correctAnswer}</p>
            </motion.div>
          ))}
        </div>
        <div className="modal-footer">
          <motion.button
            onClick={onRetry}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reintentar
          </motion.button>
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Cerrar
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

ResultsModal.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      userAnswer: PropTypes.string.isRequired,
      correctAnswer: PropTypes.string.isRequired,
      isCorrect: PropTypes.bool.isRequired,
    })
  ).isRequired,
  score: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  onRetry: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  testTitle: PropTypes.string,
};

export default ResultsModal;
