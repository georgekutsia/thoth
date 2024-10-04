import { ButtonToolbar } from "react-bootstrap";
import { ExerciseBtnComponent, ExplanationComponent, FilterComponent } from "../../components"
import ExcersiceComponent from "../../components/exercise/ExcersiceComponent";
import {ldmData, langEj1} from "../../data"; 
import { useState } from "react";

function LenguajeDeMarcasScreen() {
  const [dataSistemas, setDataSistemas] = useState(ldmData);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [dataExerProgramacion, setDataExerProgramacion] = useState(langEj1);
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
      {filteredData.map((sistData, index) => (
        <ExplanationComponent
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
  )
}

export default LenguajeDeMarcasScreen