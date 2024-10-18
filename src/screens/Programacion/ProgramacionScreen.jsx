import {
  ExerciseBtnComponent,
  ExplanationComponent,
  FilterComponent,
  NotesComponent,
  ProgramacionSliderComponent,
  TeachersContactComponent,
  TitleScreenComponent,
} from "../../components";
import ExcersiceComponent from "../../components/exercise/ExcersiceComponent";
import { progData, prEj1 } from "../../data";
import { useState } from "react";

function ProgramacionScreen() {
  const [dataProgramacion, setdataProgramacion] = useState(progData);
  const [searchTerm, setSearchTerm] = useState("");
  const [dataExerProgramacion, setDataExerProgramacion] = useState(prEj1);
  const [exerIcon, setExerIcon] = useState("fa-folder");
  const [noteIcon, setnoteIcon] = useState("fa-book");
  const [exercise, setExercise] = useState(false);
  const [notes, setNotes] = useState(false);
  const [showInfo, setshowInfo] = useState(false);

  const filteredData = dataProgramacion.filter((sistData) =>
    sistData.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExercise = () => {
    setExercise(!exercise);
    setNotes(false);    // Cerrar apuntes
    setshowInfo(false); // Cerrar información del profesor
    setExerIcon(!exercise ? "fa-folder-open" : "fa-folder"); // Cambiar el icono según el estado
    setnoteIcon("fa-book");  // Restaurar icono de apuntes
  };

  const handleNotes = () => {
    setNotes(!notes);
    setExercise(false); // Cerrar ejercicios
    setshowInfo(false); // Cerrar información del profesor
    setnoteIcon(!notes ? "fa-book-open" : "fa-book"); // Cambiar el icono según el estado
    setExerIcon("fa-folder");  // Restaurar icono de ejercicios
  };

  const handleTeacher = () => {
    setshowInfo(!showInfo);
    setExercise(false); // Cerrar ejercicios
    setNotes(false);    // Cerrar apuntes
    setExerIcon("fa-folder");  // Restaurar icono de ejercicios
    setnoteIcon("fa-book");    // Restaurar icono de apuntes
  };


  return (
    <div className="screen-box">
      <div className="exercise-file-btn" data-aos="fade-in" data-aos-delay="600">
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
        <TeachersContactComponent
          handleTeacher={handleTeacher}
          showInfo={showInfo}
        />
        <FilterComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      {notes && <ProgramacionSliderComponent/>}

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
      <TitleScreenComponent   subject="Programación"/>
      <div className="explanation-map-box">
        {filteredData.map((sistData, index) => (
          <ExplanationComponent
            key={index}
            color={"var(--light-violet)"}
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

export default ProgramacionScreen;
