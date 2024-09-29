import { ExplanationComponent, FilterComponent } from "../../components"
import {entData} from "../../data"; 
import { useState } from "react";

function EntornosDeDesarrolloScreen() {
  const [dataSistemas, setDataSistemas] = useState(entData);
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