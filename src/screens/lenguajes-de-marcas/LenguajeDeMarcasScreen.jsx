

import { ExplanationComponent } from "../../components"
import data from "../../data/lenguajesData"; // Ajusta la ruta si es necesario
import { useState } from "react";

function LenguajeDeMarcasScreen() {
  const [dataSistemas, setDataSistemas] = useState(data);

  return (
    <div className="screen-box">

      {dataSistemas.map((sistData, index) => (
        <ExplanationComponent
          key={index}
          color={"var(--light-green)"}
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

export default LenguajeDeMarcasScreen