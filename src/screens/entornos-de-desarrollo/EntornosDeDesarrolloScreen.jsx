import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExplanationComponent,
  SimulacroSelection,
  TestSection,
  ResultsModal,
} from "../../components";
import { useTestSimulator } from "../../hooks/useTestSimulator";
import { entornosDeDesarrolloTest } from "../../data";

function EntornosDeDesarrolloScreen() {
  const {
    selectedSimulacro,
    testCompleted,
    testResults,
    currentQuestion,
    handleNextQuestion,
    handleSimulacroSelect,
    handleRetry,
    handleCloseResults,
    getSimulacroList,
    currentQuestionIndex,
    totalQuestions,
  } = useTestSimulator(entornosDeDesarrolloTest);

  const simulacros = getSimulacroList();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ExplanationComponent color={"var(--light-red)"} />
      <div className="entornos-de-desarrollo-screen">
        <AnimatePresence mode="wait">
          {!selectedSimulacro ? (
            <motion.div
              key="simulacro-selection"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <SimulacroSelection
                title="Selecciona un simulacro:"
                options={simulacros}
                onSelect={handleSimulacroSelect}
              />
            </motion.div>
          ) : (
            <motion.div
              key="test-section"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="test-container"
            >
              <div className="question-card">
                <TestSection
                  question={currentQuestion}
                  onAnswer={handleNextQuestion}
                  currentQuestionIndex={currentQuestionIndex}
                  totalQuestions={totalQuestions}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {testCompleted && testResults && (
          <ResultsModal
            results={testResults.results}
            score={testResults.score}
            totalQuestions={totalQuestions}
            onRetry={handleRetry}
            onClose={handleCloseResults}
            testTitle={
              selectedSimulacro === "mixed"
                ? "Mezcla de todos los simulacros"
                : selectedSimulacro
            }
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default EntornosDeDesarrolloScreen;
