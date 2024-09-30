
import { ExerciseBtnComponent, ExplanationComponent, FilterComponent } from "../../components"
import ExcersiceComponent from "../../components/exercise/ExcersiceComponent";
import { useState } from "react";
import { empData, empEj1 } from "../../data";

function ItinerarioDeEmpleabilidadScreen() {
  const [dataSistemas, setDataSistemas] = useState(empData);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [dataExerProgramacion, setDataExerProgramacion] = useState(empEj1);
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
    </div>
    {exercise &&
    <div className="exercise-map-box" data-aos="fade-down">
      {dataExerProgramacion.map((sistData, index) => (
        <ExcersiceComponent
          key={index}
          subject={sistData.asignatura}
          exercise={sistData.ejercicio}
          date={sistData.fecha}
          question={sistData.enunciado}
          answer={sistData.respuesta}
          img={sistData.imagen}
          aosDelay={index}
        />
      ))}
    </div>
    }
      <FilterComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      {filteredData.map((sistData, index) => (
        <ExplanationComponent
          key={index}
          color={"var(--light-orange)"}
          titulo={sistData.titulo}
          explicación={sistData.explicación}
          cine={sistData.cine}
          cocina={sistData.cocina}
          deporte={sistData.deporte}
          random={sistData.random}
        />
      ))}
    </div>
  )
}

export default ItinerarioDeEmpleabilidadScreen