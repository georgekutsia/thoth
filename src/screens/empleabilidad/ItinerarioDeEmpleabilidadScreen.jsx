
import { ExplanationComponent, FilterComponent } from "../../components"
import data from "../../data/empleabilidadData"; // Ajusta la ruta si es necesario
import { useState } from "react";

function ItinerarioDeEmpleabilidadScreen() {
  const [dataSistemas, setDataSistemas] = useState(data);
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
          color={"var(--light-orange)"}
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

export default ItinerarioDeEmpleabilidadScreen