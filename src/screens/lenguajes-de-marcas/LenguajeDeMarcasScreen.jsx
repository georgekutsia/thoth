import {
  ExerciseBtnComponent,
  ExplanationComponent,
  FilterComponent,
  TeachersContactComponent,
} from "../../components";
import ExcersiceComponent from "../../components/exercise/ExcersiceComponent";
import { ldmData, langEj1 } from "../../data";
import { useState } from "react";

function LenguajeDeMarcasScreen() {
  const [dataLenguajes, setdataLenguajes] = useState(ldmData);
  const [searchTerm, setSearchTerm] = useState("");
  const [dataEx, setdataEx] = useState(langEj1);
  const [exerIcon, setExerIcon] = useState("fa-folder");
  const [exercise, setExercise] = useState(false);
  const filteredData = dataLenguajes.filter((sistData) =>
    sistData.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExercise = () => {
    setExercise(!exercise);
    if (!exercise) {
      setExerIcon("fa-folder-open");
    } else {
      setExerIcon("fa-folder");
    }
  };
  return (
    <div className="screen-box">
      <div
        className="exercise-file-btn"
        data-aos="fade-in"
        data-aos-delay="600"
      >
        <ExerciseBtnComponent
          icon={`fa-solid  ${exerIcon} extra-icons`}
          handle={() => handleExercise()}
          btnT={"Ejercicios"}
        />
        <TeachersContactComponent />
      </div>
      {exercise && (
        <div className="exercise-map-box" data-aos="fade-down">
          {dataEx.map((data, index) => (
            <ExcersiceComponent
              key={index}
              subject={data.asignatura}
              exercise={data.ejercicio}
              exImage={data.imagenEj}
              date={data.fecha}
              question={data.enunciado}
              answer={data.respuesta}
              img={data.imagenes}
              aosDelay={index}
            />
          ))}
        </div>
      )}
      <FilterComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="explanation-map-box">
        {filteredData.map((data, index) => (
          <ExplanationComponent
            key={index}
            color={"var(--light-green)"}
            titulo={data.titulo}
            explicación={data.explicación}
            cine={data.cine}
            cocina={data.cocina}
            deporte={data.deporte}
            random={data.random}
          />
        ))}
      </div>
    </div>
  );
}

export default LenguajeDeMarcasScreen;
