import { ExplanationComponent } from "../../components"
import {progData} from "../../data"; 
import { useState } from "react";

function ProgramacionScreen() {
  const [dataSistemas, setDataSistemas] = useState(progData);

  return (
    <div className="screen-box">

      {dataSistemas.map((sistData, index) => (
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
  )
}

export default ProgramacionScreen