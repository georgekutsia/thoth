import React, { useEffect } from "react";
import {
  ExplanationComponent,
  SimulacroSelection,
  TestSection,
  ResultsModal,
} from "../../components";
import { useTestSimulator } from "../../hooks/useTestSimulator";
import { basesDeDatosTest } from "../../data";

function BasesDeDatosScreen() {
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
  } = useTestSimulator(basesDeDatosTest);

  const simulacros = getSimulacroList();

  useEffect(() => {
    if (window.AOS) {
      window.AOS.refreshHard();
    }
  }, [selectedSimulacro, testCompleted]);

  return (
    <div data-aos="fade-in" data-aos-duration="500">
      <ExplanationComponent color={"var(--light-yellow)"} />
      <div className="bases-de-datos-screen">
        {!selectedSimulacro ? (
          <div
            key="simulacro-selection"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <SimulacroSelection
              title="Selecciona un simulacro:"
              options={simulacros}
              onSelect={handleSimulacroSelect}
            />
          </div>
        ) : (
          <div
            key="test-section"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
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
          </div>
        )}
      </div>
      {testCompleted && testResults && (
        <div
          key="results-modal"
          data-aos="fade-in"
          data-aos-duration="500"
        >
          <ResultsModal
            results={testResults.results}
            score={testResults.score}
            totalQuestions={totalQuestions}
            onRetry={handleRetry}
            onClose={handleCloseResults}
            testTitle={
              selectedSimulacro === "mixed"
                ? "Mezcla de simulacros"
                : selectedSimulacro
            }
          />
        </div>
      )}
    </div>
  );
}

export default BasesDeDatosScreen;