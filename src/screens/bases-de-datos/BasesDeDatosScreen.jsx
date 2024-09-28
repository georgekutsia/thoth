import React, { useState, useMemo } from 'react';
import { ExplanationComponent, MultipleChoiceTest } from "../../components"
import { basesDeDatosTest } from '../../data/testData';

function BasesDeDatosScreen() {
  const [testCompleted, setTestCompleted] = useState(false);
  const [testResults, setTestResults] = useState(null);
  const [selectedSimulacro, setSelectedSimulacro] = useState(null);

  const handleTestComplete = (results, score) => {
    setTestCompleted(true);
    setTestResults({ results, score });
    console.log("Test completed", results);
    console.log("Final score:", score);
  };

  const handleRetry = () => {
    setTestCompleted(false);
    setTestResults(null);
    setSelectedSimulacro(null);
  };

  const handleSimulacroSelect = (simulacro) => {
    setSelectedSimulacro(simulacro);
  };

  const mixQuestions = () => {
    const simulacros = Object.keys(basesDeDatosTest);
    const questionsPerSimulacro = basesDeDatosTest[simulacros[0]].length;
    const totalQuestions = questionsPerSimulacro * simulacros.length;
    const questionsPerSimulacroInMix = Math.floor(questionsPerSimulacro / simulacros.length);

    let mixedQuestions = [];

    simulacros.forEach(simulacro => {
      const shuffled = [...basesDeDatosTest[simulacro]].sort(() => 0.5 - Math.random());
      mixedQuestions = [...mixedQuestions, ...shuffled.slice(0, questionsPerSimulacroInMix)];
    });

    // Si debido al redondeo nos faltan preguntas, las añadimos aleatoriamente
    while (mixedQuestions.length < questionsPerSimulacro) {
      const randomSimulacro = simulacros[Math.floor(Math.random() * simulacros.length)];
      const remainingQuestions = basesDeDatosTest[randomSimulacro].filter(q => !mixedQuestions.includes(q));
      if (remainingQuestions.length > 0) {
        mixedQuestions.push(remainingQuestions[0]);
      }
    }

    return mixedQuestions.sort(() => 0.5 - Math.random());
  };

  const currentQuestions = useMemo(() => {
    if (selectedSimulacro === 'mixed') {
      return mixQuestions();
    }
    return selectedSimulacro ? basesDeDatosTest[selectedSimulacro] : null;
  }, [selectedSimulacro]);

  return (
    <>
      <ExplanationComponent color={"var(--light-yellow)"}/>
      <div className="bases-de-datos-screen">
        {!selectedSimulacro ? (
          <div className="simulacro-selection">
            <h2>Selecciona un simulacro:</h2>
            {Object.keys(basesDeDatosTest).map((simulacro) => (
              <button key={simulacro} onClick={() => handleSimulacroSelect(simulacro)}>
                {simulacro.charAt(0).toUpperCase() + simulacro.slice(1)}
              </button>
            ))}
            <button className="mix-button" onClick={() => handleSimulacroSelect('mixed')}>
              Mezcla de todos los simulacros
            </button>
          </div>
        ) : (
          <MultipleChoiceTest 
            questions={currentQuestions} 
            onComplete={handleTestComplete}
          />
        )}
      </div>
      {testCompleted && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Resultados del Test</h2>
            <p>Simulacro: {selectedSimulacro === 'mixed' ? 'Mezcla de todos los simulacros' : selectedSimulacro}</p>
            <p>Puntuación: {testResults.score} de {currentQuestions.length}</p>
            <div className="test-results-modal">
              {testResults.results.map((result, index) => (
                <div key={index} className={`result-item ${result.isCorrect ? 'correct' : 'incorrect'}`}>
                  <h3>Pregunta {index + 1}: {result.question}</h3>
                  <p>Tu respuesta: {result.userAnswer}</p>
                  <p>Respuesta correcta: {result.correctAnswer}</p>
                </div>
              ))}
            </div>
            <div className="modal-footer">
              <button onClick={handleRetry}>Reintentar</button>
              <button onClick={() => setTestCompleted(false)}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BasesDeDatosScreen;