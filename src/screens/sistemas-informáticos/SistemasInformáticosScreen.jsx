import React, { useEffect,useEffect } from "react";
import {
  ExplanationComponent,
  SimulacroSelection,
  TestSection,
  ResultsModal,
} from "../../components";
import { useTestSimulator } from "../../hooks/useTestSimulator";
import { sistemasInformaticosTest } from "../../data";

function SistemasInformáticosScreen() {
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
  } = useTestSimulator(sistemasInformaticosTest);

  const simulacros = getSimulacroList();

  useEffect(() => {
    if (window.AOS) {
      window.AOS.refreshHard();
    }
  }, [selectedSimulacro, testCompleted]);

  const [dataSistemas, setDataSistemas] = useState(data);

  return (
    <div data-aos="fade-in" data-aos-duration="500">
      {dataSistemas.map((sistData, index) => (
        <ExplanationComponent
          key={index}
          color={"var(--light-green)"}
          titulo={sistData.titulo}
          explicación={sistData.explicación}
          cine={sistData.cine}
          cocina={sistData.cocina}
          deporte={sistData.deporte}
          random={sistData.random}
        />
      ))}
      <div className="sistemas-informaticos-screen">
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

export default SistemasInformáticosScreen;