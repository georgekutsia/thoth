import { DesarrolladoresComponent } from "../../components"
import "./desarrolladores.css"
function DesarrolladoresScreen() {

  return (
    <div className="screen-box ">
    <p>Página en desarrollo y práctica... ignorar todo</p>
    <div className="desarrolladores-box">
      {/* <BtnPruebaComponent textColor={"yellow"}  texto={"Boton 1"}/> */}
      <DesarrolladoresComponent nombre={"jose Ventura david"}/>
    </div>
    </div>
  )
}

export default DesarrolladoresScreen