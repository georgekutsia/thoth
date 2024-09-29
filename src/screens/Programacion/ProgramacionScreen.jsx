import { ExplanationComponent, FilterComponent } from "../../components"
import {progData} from "../../data"; 
import { useState } from "react";

function ProgramacionScreen() {
  const [dataSistemas, setDataSistemas] = useState(progData);
  const [searchTerm, setSearchTerm] = useState(""); 

  const filteredData = dataSistemas.filter((sistData) =>
    sistData.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="screen-box">
      <FilterComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
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