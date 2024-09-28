import { useState, useMemo } from "react";
import { basesDeDatosTest } from "../data";

export function useBasesDeDatos() {
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
    console.log("Test completed", results);
    console.log("Final score:", score);
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
    const simulacros = Object.keys(basesDeDatosTest);
    const questionsPerSimulacro = basesDeDatosTest[simulacros[0]].length;
    const questionsPerSimulacroInMix = Math.floor(
      questionsPerSimulacro / simulacros.length
    );

    let mixedQuestions = [];

    simulacros.forEach((simulacro) => {
      const shuffled = [...basesDeDatosTest[simulacro]].sort(
        () => 0.5 - Math.random()
      );
      mixedQuestions = [
        ...mixedQuestions,
        ...shuffled.slice(0, questionsPerSimulacroInMix),
      ];
    });

    while (mixedQuestions.length < questionsPerSimulacro) {
      const randomSimulacro =
        simulacros[Math.floor(Math.random() * simulacros.length)];
      const remainingQuestions = basesDeDatosTest[randomSimulacro].filter(
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
    return selectedSimulacro ? basesDeDatosTest[selectedSimulacro] : null;
  }, [selectedSimulacro]);

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
    return [
      ...Object.keys(basesDeDatosTest).map((key) => ({
        id: key,
        name: key.charAt(0).toUpperCase() + key.slice(1),
      })),
      { id: "mixed", name: "Mezcla de todos los simulacros" },
    ];
  };

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
    getSimulacroList,
  };
}
