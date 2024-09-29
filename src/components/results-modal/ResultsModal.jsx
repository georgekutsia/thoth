import React, { useEffect } from "react";
import PropTypes from "prop-types";

/**
 * @typedef {Object} TestResult
 * @property {string} question - El texto de la pregunta.
 * @property {string} userAnswer - La respuesta proporcionada por el usuario.
 * @property {string} correctAnswer - La respuesta correcta a la pregunta.
 * @property {boolean} isCorrect - Indica si la respuesta del usuario es correcta.
 */

/**
 * Componente que muestra un modal con los resultados de un test.
 *
 * @component
 * @param {Object} props - Las propiedades del componente.
 * @param {TestResult[]} props.results - Array con los resultados de cada pregunta del test.
 * @param {number} props.score - La puntuación total obtenida en el test.
 * @param {number} props.totalQuestions - El número total de preguntas en el test.
 * @param {Function} props.onRetry - Función a llamar cuando se quiere intentar el test de nuevo.
 * @param {Function} props.onClose - Función a llamar para cerrar el modal de resultados.
 * @param {string} [props.testTitle] - El título del test (opcional).
 *
 * @returns {React.Element} Un elemento React que representa el modal de resultados.
 */
const ResultsModal = ({
  results,
  score,
  totalQuestions,
  onRetry,
  onClose,
  testTitle,
}) => {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  return (
    <div className="modal-overlay" data-aos="fade-in" data-aos-duration="300">
      <div 
        className="modal-content"
        data-aos="zoom-in"
        data-aos-duration="300"
        data-aos-delay="150"
      >
        <h2>Resultados del Test</h2>
        {testTitle && <p>Test: {testTitle}</p>}
        <p>
          Puntuación: {score} de {totalQuestions}
        </p>
        <div className="test-results-modal">
          {results.map((result, index) => (
            <div
              key={index}
              className={`result-item ${
                result.isCorrect ? "correct" : "incorrect"
              }`}
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-delay={100 + index * 50}
            >
              <h3>
                Pregunta {index + 1}: {result.question}
              </h3>
              <p>Tu respuesta: {result.userAnswer}</p>
              <p>Respuesta correcta: {result.correctAnswer}</p>
            </div>
          ))}
        </div>
        <div className="modal-footer">
          <button
            onClick={onRetry}
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="200"
          >
            Reintentar
          </button>
          <button
            onClick={onClose}
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="250"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
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