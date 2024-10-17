import { useState } from "react";
import {
  ExerciseBtnComponent,
  ExplanationComponent,
  FilterComponent,
  NotesComponent,
  SistemasSliderComponent,
  TeachersContactComponent,
  TitleScreenComponent,
} from "../../components";
import { sisData, sisEj1 } from "../../data";
import ExcersiceComponent from "../../components/exercise/ExcersiceComponent";

function SistemasInformáticosScreen() {
  const [dataSistemas, setDataSistemas] = useState(sisData);
  const [searchTerm, setSearchTerm] = useState("");
  const [dataExerProgramacion, setDataExerProgramacion] = useState(sisEj1);
  const [exerIcon, setExerIcon] = useState("fa-folder");
  const [noteIcon, setnoteIcon] = useState("fa-book");
  const [exercise, setExercise] = useState(false);
  const [notes, setNotes] = useState(false);

  const filteredData = dataSistemas.filter((sistData) =>
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
      {notes && <SistemasSliderComponent/>}
      {exercise && (
        <div className="exercise-map-box" data-aos="fade-down">
          {dataExerProgramacion.map((sistData, index) => (
            <ExcersiceComponent
              key={index}
              subject={sistData.asignatura}
              exercise={sistData.ejercicio}
              exImage={sistData.imagenEj}
              date={sistData.fecha}
              question={sistData.enunciado}
              answer={sistData.respuesta}
              img={sistData.imagenes}
              aosDelay={index}
            />
          ))}
        </div>
      )}
      <TitleScreenComponent   subject="Sistemas Informáticos"/>
      <div className="explanation-map-box">
        {filteredData.map((sistData, index) => (
          <ExplanationComponent
            key={index}
            color={"var(--light-blue)"}
            titulo={sistData.titulo}
            explicación={sistData.explicación}
            cine={sistData.cine}
            cocina={sistData.cocina}
            deporte={sistData.deporte}
            random={sistData.random}
          />
        ))}
      </div>
    </div>
  );
}
export default SistemasInformáticosScreen;
