
import { useState } from "react"
import "./teachersContact.css"
import TeacherComponent from "./teacher/TeacherComponent"
import {teachersData} from "../../../data"
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


function TeachersContactComponent() {
  const [showInfo, setshowInfo] = useState("")
  const [teacherData, setteacherData] = useState(teachersData)

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Profesorado
    </Tooltip>
  );
  return (
    <>
      <OverlayTrigger placement="top" delay={{ hide: 50 }} overlay={renderTooltip}>
      <i className="fa-solid fa-address-book extra-icons" onClick={()=>setshowInfo(!showInfo)}></i>
      </OverlayTrigger>

      <div className="teachers-big-box">
      {showInfo &&
      teacherData.map((teacher, index)=>(
      <TeacherComponent key={index} name={teacher.name} mail={teacher.email} subject={teacher.subject} img={teacher.img} index={index} />
      ))}
      </div>
      
    </>
  )
}

export default TeachersContactComponent