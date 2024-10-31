import { useState } from "react";
import {ExplanationComponent,TitleScreenComponent,} from "../../components";
import ExtraNavbarComponents from "../../components/extras/ExtraNavbarComponents";
import { ldmData, langEj1 } from "../../data";

function LenguajeDeMarcasScreen() {
  const [dataInfo] = useState(ldmData);
  const [dataExer] = useState(langEj1);
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
        typeData="langType" 
      />

      <TitleScreenComponent subject="Lenguaje de Marcas" />

      <div className="explanation-map-box">
        {filteredData.map((data, index) => (
          <ExplanationComponent
            key={index}
            color={"var(--light-green)"}
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

export default LenguajeDeMarcasScreen;
