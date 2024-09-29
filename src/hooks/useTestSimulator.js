import { useState, useMemo } from "react";

/**
 * @typedef {Object} Question
 * @property {string} text - El texto de la pregunta.
 * @property {string[]} options - Las opciones de respuesta.
 * @property {number} correctAnswer - El índice de la respuesta correcta.
 */

/**
 * @typedef {Object} TestResult
 * @property {string} question - El texto de la pregunta.
 * @property {string} userAnswer - La respuesta proporcionada por el usuario.
 * @property {string} correctAnswer - La respuesta correcta.
 * @property {boolean} isCorrect - Indica si la respuesta del usuario es correcta.
 */

/**
 * @typedef {Object} SimulacroOption
 * @property {string} id - Identificador único del simulacro.
 * @property {string} name - Nombre del simulacro.
 */

/**
 * Custom hook para manejar la lógica de un simulador de tests.
 *
 * @param {Object.<string, Question[]>} testData - Objeto con los datos de los tests, donde las claves son los nombres de los simulacros y los valores son arrays de preguntas.
 *
 * @returns {Object} Un objeto con el estado y las funciones para manejar el simulador de tests.
 * @property {boolean} testCompleted - Indica si el test ha sido completado.
 * @property {Object|null} testResults - Resultados del test, incluyendo respuestas y puntuación.
 * @property {string|null} selectedSimulacro - ID del simulacro seleccionado.
 * @property {Question[]|null} currentQuestions - Array de preguntas del simulacro actual.
 * @property {Question|null} currentQuestion - Pregunta actual.
 * @property {number} currentQuestionIndex - Índice de la pregunta actual.
 * @property {number} totalQuestions - Número total de preguntas en el simulacro actual.
 * @property {Function} handleTestComplete - Función para manejar la finalización del test.
 * @property {Function} handleNextQuestion - Función para pasar a la siguiente pregunta.
 * @property {Function} handleRetry - Función para reiniciar el test actual.
 * @property {Function} handleSimulacroSelect - Función para seleccionar un simulacro.
 * @property {Function} handleCloseResults - Función para cerrar los resultados y reiniciar el test.
 * @property {Function} getSimulacroList - Función que devuelve la lista de simulacros disponibles.
 *
 * @example
 * const testData = {
 *   simulacro1: [
 *     { text: "¿Pregunta 1?", options: ["Opción 1", "Opción 2"], correctAnswer: 0 },
 *     { text: "¿Pregunta 2?", options: ["Opción 1", "Opción 2"], correctAnswer: 1 }
 *   ],
 *   simulacro2: [
 *     { text: "¿Pregunta 3?", options: ["Opción 1", "Opción 2"], correctAnswer: 0 }
 *   ]
 * };
 *
 * function TestComponent() {
 *   const {
 *     testCompleted,
 *     currentQuestion,
 *     handleNextQuestion,
 *     handleSimulacroSelect,
 *     getSimulacroList
 *   } = useTestSimulator(testData);
 *
 *   // Usar las funciones y estados retornados para construir la UI del test
 * }
 */
export function useTestSimulator(testData) {
  const [testCompleted, setTestCompleted] = useState(false);
  const [testResults, setTestResults] = useState(null);
  const [selectedSimulacro, setSelectedSimulacro] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleTestComplete = (finalAnswers) => {
    const results = currentQuestions.map((question, index) => ({
      question: question.text,
      userAnswer: question.options[finalAnswers[index]],
      correctAnswer: question.options[question.correctAnswer],
      isCorrect: finalAnswers[index] === question.correctAnswer,
    }));
    const score = finalAnswers.reduce(
      (acc, answer, index) =>
        answer === currentQuestions[index].correctAnswer ? acc + 1 : acc,
      0
    );

    setTestCompleted(true);
    setTestResults({ results, score });
  };

  const resetTest = () => {
    setTestCompleted(false);
    setTestResults(null);
    setSelectedSimulacro(null);
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const handleRetry = () => {
    setTestCompleted(false);
    setTestResults(null);
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const handleSimulacroSelect = (simulacro) => {
    setSelectedSimulacro(simulacro);
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const handleCloseResults = () => {
    resetTest();
  };

  const mixQuestions = () => {
    if (!testData) return [];
    const simulacros = Object.keys(testData);
    const questionsPerSimulacro = testData[simulacros[0]]?.length || 0;
    const questionsPerSimulacroInMix = Math.floor(
      questionsPerSimulacro / simulacros.length
    );

    let mixedQuestions = [];

    simulacros.forEach((simulacro) => {
      const shuffled = [...(testData[simulacro] || [])].sort(() => 0.5 - Math.random());
      mixedQuestions = [
        ...mixedQuestions,
        ...shuffled.slice(0, questionsPerSimulacroInMix),
      ];
    });

    while (mixedQuestions.length < questionsPerSimulacro) {
      const randomSimulacro =
        simulacros[Math.floor(Math.random() * simulacros.length)];
      const remainingQuestions = (testData[randomSimulacro] || []).filter(
        (q) => !mixedQuestions.includes(q)
      );
      if (remainingQuestions.length > 0) {
        mixedQuestions.push(remainingQuestions[0]);
      }
    }

    return mixedQuestions.sort(() => 0.5 - Math.random());
  };

  const currentQuestions = useMemo(() => {
    if (selectedSimulacro === "mixed") {
      return mixQuestions();
    }
    return selectedSimulacro && testData ? testData[selectedSimulacro] : null;
  }, [selectedSimulacro, testData]);

  const currentQuestion = useMemo(() => {
    if (!currentQuestions || currentQuestions.length === 0) return null;
    return currentQuestions[currentQuestionIndex];
  }, [currentQuestions, currentQuestionIndex]);

  const handleNextQuestion = (answerIndex) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleTestComplete(newAnswers);
    }
  };

  const getSimulacroList = () => {
    if (!testData) {
      return []; // Retorna una lista vacía si testData es null o undefined
    }
    return [
      ...Object.keys(testData).map((key) => ({
        id: key,
        name: key.charAt(0).toUpperCase() + key.slice(1),
      })),
      { id: "mixed", name: "Mezcla de todos los simulacros" },
    ];
  };

  // Memoiza la lista de simulacros para evitar recálculos innecesarios
  const simulacroList = useMemo(() => getSimulacroList(), [testData]);

  return {
    testCompleted,
    testResults,
    selectedSimulacro,
    currentQuestions,
    currentQuestion,
    currentQuestionIndex,
    totalQuestions: currentQuestions ? currentQuestions.length : 0,
    handleTestComplete,
    handleNextQuestion,
    handleRetry,
    handleSimulacroSelect,
    handleCloseResults,
    simulacroList,
  };
}