/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {  CheatSheetButtonComponent,  ExerciseButtonComponent,  NotesButtonComponent,  TeachersContactButtonComponent,  FilterComponent,  ProgramacionSliderComponent,  ExerciseComponent,  EntornosSliderComponent,  SistemasSliderComponent,  LenguajesSliderComponent,  EmpleabilidadSliderComponent,  DbsSliderComponent, CheatSheetComponent,
} from "../../components";

function ExtraNavbarComponents({
  dataExer,
  setSearchTerm,
  searchTerm,
  typeData,
  cheatsheetData
}) {
  const [visibleComponent, setVisibleComponent] = useState(null);
  const [exerIcon, setExerIcon] = useState("fa-folder");
  const [noteIcon, setNoteIcon] = useState("fa-book");
  const [cheatIcon, setCheatIcon] = useState("fa-cloud-sun");

  const handleExercise = () => {
    setVisibleComponent(visibleComponent === "exercise" ? null : "exercise");
    setExerIcon(visibleComponent === "exercise" ? "fa-folder" : "fa-folder-open");
    setNoteIcon("fa-book");
    setCheatIcon("fa-cloud-sun");
  };

  const handleNotes = () => {
    setVisibleComponent(visibleComponent === "notes" ? null : "notes");
    setNoteIcon(visibleComponent === "notes" ? "fa-book" : "fa-book-open");
    setExerIcon("fa-folder");
    setCheatIcon("fa-cloud-sun");
  };

  const handleCheat = () => {
    setVisibleComponent(visibleComponent === "cheat" ? null : "cheat");
    setCheatIcon(visibleComponent === "cheat" ? "fa-cloud-sun" : "fa-sun");
    setNoteIcon("fa-book");
    setExerIcon("fa-folder");
  };

  const handleTeacher = () => {
    setVisibleComponent(visibleComponent === "teacher" ? null : "teacher");
    setCheatIcon("fa-cloud-sun");
    setExerIcon("fa-folder");
    setNoteIcon("fa-book");
  };

  return (
    <div className="eextra-nav-icons" data-aos="fade-in" data-aos-delay="600">
      <ExerciseButtonComponent
        icon={`fa-solid ${exerIcon} extra-icons`}
        handle={handleExercise}
        btnT="Ejercicios"
      />
      <NotesButtonComponent
        icon={`fa-solid ${noteIcon} extra-icons`}
        handle={handleNotes}
        btnT="Apuntes"
      />
      <CheatSheetButtonComponent
        icon={`fa-solid ${cheatIcon} extra-icons`}
        handle={handleCheat}
        btnT="Cheat Sheet"
      />
      <TeachersContactButtonComponent
        handleTeacher={handleTeacher}
        showInfo={visibleComponent === "teacher"}
      />
      <FilterComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} filtrar={"Filtrar ..."}/>

      {visibleComponent === "exercise" && (
        <div className="exercise-map-box" data-aos="fade-down">
          {dataExer.map((sistData, index) => (
            <ExerciseComponent
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

      {visibleComponent === "notes" && typeData === "progType"  && <ProgramacionSliderComponent />}
      {visibleComponent === "notes" && typeData === "sisType"  && <SistemasSliderComponent/>}
      {visibleComponent === "notes" && typeData === "langType"  && <LenguajesSliderComponent />}
      {visibleComponent === "notes" && typeData === "entType"  && <EntornosSliderComponent />}
      {visibleComponent === "notes" && typeData === "empType"  && <EmpleabilidadSliderComponent />}
      {visibleComponent === "notes" && typeData === "dbsType"  && <DbsSliderComponent />}

      {visibleComponent === "cheat" && <CheatSheetComponent cheatsheetData={cheatsheetData}/>}
    </div>
  );
}

export default ExtraNavbarComponents;
