import { ExplanationComponent, FilterComponent } from "../../components";
import ExcersiceComponent from "../../components/exercise/ExcersiceComponent";
import { dbsData } from "../../data";
import { useState } from "react";

function BasesDeDatosScreen() {
  const [dataSistemas] = useState(dbsData);
  const [searchTerm, setSearchTerm] = useState(""); 

  const filteredData = dataSistemas.filter((sistData) =>
    sistData.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="screen-box">
      <FilterComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <ExcersiceComponent></ExcersiceComponent>
      {filteredData.map((sistData, index) => (
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
    </div>
  );
}

export default BasesDeDatosScreen;
