import { Route, Routes } from "react-router-dom";
import Error404 from "./screens/error-screen/Error404.jsx";
import { BasesDeDatosScreen, ProgramacionScreen, EntornosDeDesarrolloScreen, LenguajeDeMarcasScreen, SistemasInformáticosScreen, ItinerarioDeEmpleabilidadScreen} from "./screens";


function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/dbs" element={<BasesDeDatosScreen />} />
        <Route path="/programacion" element={<ProgramacionScreen />} />
        <Route path="/entornos" element={<EntornosDeDesarrolloScreen />} />
        <Route path="/ldm" element={<LenguajeDeMarcasScreen/>} />
        <Route path="/sistemas" element={<SistemasInformáticosScreen />} />
        <Route path="/empleabilidad" element={<ItinerarioDeEmpleabilidadScreen />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default Routers;
