import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  SimulacroSelection,
  TestSection,
  ResultsModal,
} from "../../components";
import { useTestSimulator } from "../../hooks/useTestSimulator";
import {
  basesDeDatosTest,
  programacionTest,
  entornosDeDesarrolloTest,
  lenguajesDeMarcasTest,
  sistemasInformaticosTest,
} from "../../data";

const subjectTests = {
  dbs: { name: "Bases de Datos", test: basesDeDatosTest, icon: "database" },
  programacion: { name: "Programación", test: programacionTest, icon: "code" },
  entornos: { name: "Entornos de Desarrollo", test: entornosDeDesarrolloTest, icon: "tools" },
  ldm: { name: "Lenguaje de Marcas", test: lenguajesDeMarcasTest, icon: "laptop-code" },
  sistemas: { name: "Sistemas Informáticos", test: sistemasInformaticosTest, icon: "server" },
};

function ExamenesScreen() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const navigate = useNavigate();

  const {
    selectedSimulacro,
    testCompleted,
    testResults,
    currentQuestion,
    handleNextQuestion,
    handleSimulacroSelect,
    handleRetry,
    handleCloseResults,
    simulacroList,
    currentQuestionIndex,
    totalQuestions,
  } = useTestSimulator(selectedSubject ? subjectTests[selectedSubject].test : null);

  useEffect(() => {
    if (window.AOS) {
      window.AOS.refreshHard();
    }
  }, [selectedSubject, selectedSimulacro, testCompleted]);

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
  };

  const renderSubjectSelection = () => (
    <div
      key="subject-selection"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="100"
      className="subject-selection screen-box" // screen box es la clase que añade los margenes y anchura para no interferir con el navbar
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Selecciona una asignatura</h2>
      <div className="subject-grid">
        {Object.entries(subjectTests).map(([key, { name, icon }], index) => (
          <button
            key={key}
            onClick={() => handleSubjectSelect(key)}
            className={`subject-card ${index > 2 ? 'subject-card-bottom' : ''}`}
          >
            <i className={`fas fa-${icon} subject-icon`}></i>
            <span className="subject-name">{name}</span>
          </button>
        ))}
      </div>
    </div>
  );


  if (!selectedSubject) {
    return renderSubjectSelection();
  }

  return (
    <div data-aos="fade-in" data-aos-duration="500"  className="pt-20 screen-box subject-selection" >
      <h1 className="text-3xl font-bold mb-4">{subjectTests[selectedSubject].name}</h1>
      <button
        onClick={() => setSelectedSubject(null)}
        className="mb-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      >
        Cambiar asignatura
      </button>
      <div className="exam-screen">
        {!selectedSimulacro ? (
          <div
            key="simulacro-selection"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <SimulacroSelection
              title="Selecciona un simulacro:"
              options={simulacroList}
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

export default ExamenesScreen;