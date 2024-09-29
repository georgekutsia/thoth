import { ExplanationComponent, FilterComponent } from "../../components"
import {ldmData} from "../../data"; 
import { useState } from "react";

function LenguajeDeMarcasScreen() {
  const [dataSistemas, setDataSistemas] = useState(ldmData);
  const [searchTerm, setSearchTerm] = useState(""); 

  const filteredData = dataSistemas.filter((sistData) =>
    sistData.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="screen-box">
      <FilterComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      {filteredData.map((sistData, index) => (
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