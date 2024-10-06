
import { useState } from "react"
import "./teachersContact.css"
import TeacherComponent from "./teacher/TeacherComponent"
import {teachersData} from "../../../data"

function TeachersContactComponent() {
  const [showInfo, setshowInfo] = useState("")
  const [teacherData, setteacherData] = useState(teachersData)


  return (
    <>
      <i className="fa-solid fa-address-book extra-icons" onClick={()=>setshowInfo(!showInfo)}></i>
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