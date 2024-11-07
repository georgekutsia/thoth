import { Route, Routes } from "react-router-dom";
import Error404 from "./screens/error-screen/Error404.jsx";
import { BasesDeDatosScreen, ProgramacionScreen, EntornosDeDesarrolloScreen, LenguajeDeMarcasScreen, SistemasInformáticosScreen, ItinerarioDeEmpleabilidadScreen, ExamenesScreen, WelcomeScreen, CiberseguridadScreen, DesarrolladoresScreen} from "./screens";
import CalendarVIdeosScreen from "./screens/calendar-videos/CalendarVIdeosScreen.jsx";



function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/dbs" element={<BasesDeDatosScreen />} />
        <Route path="/programacion" element={<ProgramacionScreen />} />
        <Route path="/entornos" element={<EntornosDeDesarrolloScreen />} />
        <Route path="/lenguaje" element={<LenguajeDeMarcasScreen/>} />
        <Route path="/sistemas" element={<SistemasInformáticosScreen />} />
        <Route path="/empleabilidad" element={<ItinerarioDeEmpleabilidadScreen />} />
        <Route path="/examenes" element={<ExamenesScreen />} />
        <Route path="/calendario" element={<CalendarVIdeosScreen />} />
        <Route path="/ciberseguridad" element={<CiberseguridadScreen />} />
        <Route path="/desarrolladores" element={<DesarrolladoresScreen/>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default Routers;
