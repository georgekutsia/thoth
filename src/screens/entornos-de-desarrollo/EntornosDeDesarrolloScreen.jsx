import { ExplanationComponent } from "../../components"
import {entData} from "../../data"; 
import { useState } from "react";

function EntornosDeDesarrolloScreen() {
  const [dataSistemas, setDataSistemas] = useState(entData);

  return (
    <div className="screen-box">

      {dataSistemas.map((sistData, index) => (
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
  )
}

export default EntornosDeDesarrolloScreen