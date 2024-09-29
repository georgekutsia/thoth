import { useState } from "react";
import { ExplanationComponent } from "../../components";
import data from "../../data/sistemasData"; // Ajusta la ruta si es necesario

function SistemasInformáticosScreen() {
  const [dataSistemas, setDataSistemas] = useState(data);

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
  );
}

export default SistemasInformáticosScreen;
