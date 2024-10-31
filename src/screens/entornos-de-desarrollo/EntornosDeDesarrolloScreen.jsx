import { useState } from "react";
import {ExplanationComponent,TitleScreenComponent,} from "../../components";
import ExtraNavbarComponents from "../../components/extras/ExtraNavbarComponents";
import { entData, entEj1 } from "../../data";

function EntornosDeDesarrolloScreen() {
  const [dataInfo] = useState(entData);
  const [dataExer] = useState(entEj1);
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
        typeData="entType" 
      />


      <TitleScreenComponent subject="Entornos de Desarrollo" />

      <div className="explanation-map-box">
        {filteredData.map((data, index) => (
          <ExplanationComponent
            key={index}
            color={"var(--light-red)"}
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

export default EntornosDeDesarrolloScreen;
