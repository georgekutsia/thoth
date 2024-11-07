import { DesarrolladoresComponent } from "../../components"
import BtnPruebaComponent from "../../components/btn-prueba/BtnPruebaComponent"
import "./desarrolladores.css"
function DesarrolladoresScreen() {


  return (
    <div className="screen-box desarrolladores-box">
      {/* <BtnPruebaComponent textColor={"yellow"}  texto={"Boton 1"}/> */}
      <DesarrolladoresComponent nombre={"jose Ventura david"}/>
      <DesarrolladoresComponent nombre={"Marzagán"}/>
      <DesarrolladoresComponent nombre={"Bulala"}/>
    </div>
  )
}

export default DesarrolladoresScreen