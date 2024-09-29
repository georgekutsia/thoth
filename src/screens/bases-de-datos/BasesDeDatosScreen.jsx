import { ExplanationComponent } from "../../components"
import {dbsData} from "../../data";
import { useState } from "react";

function BasesDeDatosScreen() {
  const [dataSistemas, setDataSistemas] = useState(dbsData);

  return (
    <>
      {dataSistemas.map((sistData, index) => (
        <ExplanationComponent
          key={index}
          color={"var(--light-yellow)"}
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

export default BasesDeDatosScreen