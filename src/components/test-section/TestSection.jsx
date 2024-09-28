import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

/**
 * @typedef {Object} Question
 * @property {number} id - El identificador único de la pregunta.
 * @property {string} text - El texto de la pregunta.
 * @property {string[]} options - Las opciones de respuesta para la pregunta.
 * @property {number} correctAnswer - El índice de la respuesta correcta.
 */

/**
 * Componente que representa una sección de preguntas en un test.
 *
 * @component
 * @param {Object} props - Las propiedades del componente.
 * @param {Question} props.question - La pregunta actual a mostrar.
 * @param {Function} props.onAnswer - Función a llamar cuando se selecciona una respuesta.
 * @param {number} props.currentQuestionIndex - El índice de la pregunta actual.
 * @param {number} props.totalQuestions - El número total de preguntas en el test.
 *
 * @returns {React.Element} Un elemento React que representa la sección de preguntas.
 *
 * @example
 * <TestSection
 *   question={{id: 1, text: "¿Cuál es la capital de Francia?", options: ["Londres", "París", "Berlín"], correctAnswer: 1}}
 *   onAnswer={(index) => console.log(`Respuesta seleccionada: ${index}`)}
 *   currentQuestionIndex={0}
 *   totalQuestions={10}
 * />
 */
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
