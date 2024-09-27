import { Route, Routes } from "react-router-dom";
import Error404 from "./screens/error-screen/Error404.jsx";
import { BasesDeDatosScreen,ProgramacionScreen, EntornosDeDesarrolloScreen, LenguajeDeMarcasScreen, SistemasInformáticosScreen} from "./screens";


function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/dbs" element={<BasesDeDatosScreen />} />
        <Route path="/entornos" element={<ProgramacionScreen />} />
        <Route path="/ldm" element={<EntornosDeDesarrolloScreen />} />
        <Route path="/programacion" element={<LenguajeDeMarcasScreen/>} />
        <Route path="/sistemas" element={<SistemasInformáticosScreen />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default Routers;
