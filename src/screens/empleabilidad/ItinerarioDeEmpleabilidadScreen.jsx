import { useState } from "react";
import {ExplanationComponent,TitleScreenComponent,} from "../../components";
import ExtraNavbarComponents from "../../components/extras/ExtraNavbarComponents";
import { empData, empEj1 } from "../../data";

function ItinerarioDeEmpleabilidadScreen() {
  const [dataInfo] = useState(empData);
  const [dataExer] = useState(empEj1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = dataInfo.filter((data) =>
    data.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="screen-box">
      <ExtraNavbarComponents
        dataExer={dataExer}
        setSearchTerm={setSearchTerm} // Pasar el setter para el término de búsqueda
        searchTerm = {searchTerm}
        typeData="empType" 
      />

      <TitleScreenComponent subject="Itinerario de Empleabilidad" />

      <div className="explanation-map-box">
        {filteredData.map((data, index) => (
          <ExplanationComponent
            key={index}
            color={"var(--light-orange)"}
            titulo={data.titulo}
            explicación={data.explicación}
            cine={data.cine}
            cocina={data.cocina}
            deporte={data.deporte}
            random={data.random}
          />
        ))}
      </div>
    </div>
  );
}

export default ItinerarioDeEmpleabilidadScreen;
