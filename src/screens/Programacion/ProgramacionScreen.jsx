import { useState } from "react";
import {ExplanationComponent,TitleScreenComponent,} from "../../components";
import ExtraNavbarComponents from "../../components/extras/ExtraNavbarComponents";
import programationCheatsheetsData from "../../data/cheatsheets/programationCheatsheetData";
import { progData, prEj1 } from "../../data";

function ProgramacionScreen() {
  const [dataInfo] = useState(progData);
  const [dataExer] = useState(prEj1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = dataInfo.filter((data) =>
    data.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="screen-box">
      <ExtraNavbarComponents
        dataExer={dataExer}
        setSearchTerm={setSearchTerm} 
        searchTerm = {searchTerm}
        typeData="progType" 
        cheatsheetData={programationCheatsheetsData}
      />

      <TitleScreenComponent subject="Programación" />

      <div className="explanation-map-box">
        {filteredData.map((data, index) => (
          <ExplanationComponent
            key={index}
            color={"var(--light-violet)"}
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

export default ProgramacionScreen;
