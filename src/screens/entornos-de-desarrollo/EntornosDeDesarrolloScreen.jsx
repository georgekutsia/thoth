import { ExplanationComponent } from "../../components"
import {entData} from "../../data"; 
import { useState } from "react";

function EntornosDeDesarrolloScreen() {
  const [dataSistemas, setDataSistemas] = useState(entData);

  return (
    <>
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
    </>
  )
}

export default EntornosDeDesarrolloScreen