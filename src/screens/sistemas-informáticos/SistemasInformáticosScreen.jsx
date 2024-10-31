import { useState } from "react";
import {
  ExplanationComponent,
  TitleScreenComponent,
} from "../../components";
import { sisData, sisEj1 } from "../../data";
import ExtraNavbarComponents from "../../components/extras/ExtraNavbarComponents";

function SistemasInformáticosScreen() {
  const [dataInfo] = useState(sisData);
  const [dataExer] = useState(sisEj1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = dataInfo.filter((data) =>
    data.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="screen-box">
      <ExtraNavbarComponents
        dataExerProgramacion={dataExer}
        setSearchTerm={setSearchTerm} // Pasar el setter para el término de búsqueda
        searchTerm = {searchTerm}
        typeData={"sisType"}
      />
      <TitleScreenComponent subject="Sistemas Informáticos" />

      <div className="explanation-map-box">
        {filteredData.map((sistData, index) => (
          <ExplanationComponent
            key={index}
            color={"var(--light-blue)"}
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

export default SistemasInformáticosScreen;
