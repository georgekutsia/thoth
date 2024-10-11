import "./horario.css"
import "../../components/navbar/main-navbar/mainNavbar.css"
import { useState } from "react"
import TablaHorarioComponent from "./horario-tabla/TablaHorarioComponent"
function HorarioComponent() {
  const [showCalendar, setShowCalendar] = useState(false)
  const handleExpand = () => {
    setShowCalendar(!showCalendar)
  }
  return (
    <div className="horario-box">
      <i className="fa-solid fa-calendar extra-icons" onClick={()=>handleExpand()}></i>
      {showCalendar &&
      <TablaHorarioComponent/>
      }
    </div>
      
  )
}

export default HorarioComponent