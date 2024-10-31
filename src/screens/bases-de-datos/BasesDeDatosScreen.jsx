import { useState } from "react";
import {ExplanationComponent,TitleScreenComponent,} from "../../components";
import ExtraNavbarComponents from "../../components/extras/ExtraNavbarComponents";
import { dbsData, dbsEj1 } from "../../data";

function BasesDeDatosScreen() {
  const [dataInfo] = useState(dbsData);
  const [dataExer] = useState(dbsEj1);
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
        typeData="dbsType" 
      />

    <TitleScreenComponent subject="Bases de Datos"/>
    
      <div  className="explanation-map-box">
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
    </div>
  );
}

export default BasesDeDatosScreen;
