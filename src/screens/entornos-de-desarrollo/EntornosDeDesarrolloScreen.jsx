import { ExerciseBtnComponent, ExplanationComponent, FilterComponent, TeachersContactComponent } from "../../components"
import ExcersiceComponent from "../../components/exercise/ExcersiceComponent";
import {entData,entEj1} from "../../data"; 
import { useState } from "react";

function EntornosDeDesarrolloScreen() {
  const [dataSistemas, setDataSistemas] = useState(entData);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [dataExerProgramacion, setDataExerProgramacion] = useState(entEj1);
  const [exerIcon, setExerIcon] = useState("fa-folder")
const [exercise, setExercise] = useState(false)

  const filteredData = dataSistemas.filter((sistData) =>
    sistData.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExercise = ()=> {
    setExercise(!exercise)
    if(!exercise){
      setExerIcon("fa-folder-open")
    } else {
      setExerIcon("fa-folder")

    }
  }
  return (
    <div className="screen-box">
        <div className="exercise-file-btn" data-aos="fade-in" data-aos-delay="600">
        <ExerciseBtnComponent
          icon={`fa-solid  ${exerIcon} extra-icons`}
          handle={()=>handleExercise()}
          btnT={"Ejercicios"}
        />
        <TeachersContactComponent />

    </div>
    {exercise &&
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
    }
      <FilterComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <div  className="explanation-map-box">

      {filteredData.map((sistData, index) => (
        <ExplanationComponent
          key={index}
          color={"var(--light-red)"}
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
  )
}

export default EntornosDeDesarrolloScreen