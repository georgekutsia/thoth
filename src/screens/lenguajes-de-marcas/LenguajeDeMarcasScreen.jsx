import {
  ExerciseBtnComponent,
  ExplanationComponent,
  FilterComponent,
  LenguajesSliderComponent,
  NotesComponent,
  TeachersContactComponent,
  TitleScreenComponent,
} from "../../components";
import ExcersiceComponent from "../../components/exercise/ExcersiceComponent";
import { ldmData, langEj1 } from "../../data";
import { useState } from "react";

function LenguajeDeMarcasScreen() {
  const [dataLenguajes, setdataLenguajes] = useState(ldmData);
  const [searchTerm, setSearchTerm] = useState("");
  const [dataEx, setdataEx] = useState(langEj1);
  const [exerIcon, setExerIcon] = useState("fa-folder");
  const [noteIcon, setnoteIcon] = useState("fa-book");
  const [exercise, setExercise] = useState(false);
  const [notes, setNotes] = useState(false);

  const filteredData = dataLenguajes.filter((sistData) =>
    sistData.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExercise = () => {
    setExercise(!exercise);
    if (!exercise) {
      setExerIcon("fa-folder-open");
    setNotes(false);
    } else {
      setExerIcon("fa-folder");
    }
  };
  const handleNotes = () => {
    setNotes(!notes);
    if (!notes) {
    setnoteIcon("fa-book-open");
    setExercise(false);
    } else {
      setnoteIcon("fa-book");
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
                <NotesComponent
          icon={`fa-solid  ${noteIcon} extra-icons`}
          handle={() => handleNotes()}
          btnT={"Apuntes"}
        />
        <TeachersContactComponent />
      <FilterComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      </div>
      {notes && <LenguajesSliderComponent/>}

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
      <TitleScreenComponent  subject="Lenguaje de Marcas"/>

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
