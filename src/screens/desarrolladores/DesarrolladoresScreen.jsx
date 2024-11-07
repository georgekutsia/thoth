import { DesarrolladoresComponent } from "../../components"
import BtnPruebaComponent from "../../components/btn-prueba/BtnPruebaComponent"
import "./desarrolladores.css"
function DesarrolladoresScreen() {


  return (
    <div className="screen-box ">
    <h2>Página en desarrollo y práctica... ignorar todo</h2>
    <div className="desarrolladores-box">
      {/* <BtnPruebaComponent textColor={"yellow"}  texto={"Boton 1"}/> */}
      <DesarrolladoresComponent nombre={"jose Ventura david"}/>
      <DesarrolladoresComponent nombre={"Marzagán"}/>
      <DesarrolladoresComponent nombre={"Bulala"}/>
    </div>
    </div>
  )
}

export default DesarrolladoresScreen