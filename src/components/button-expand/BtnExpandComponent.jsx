import { useState } from "react"
import "./btnExpand.css"
import PropTypes from "prop-types"

function BtnExpandComponent({handleExpand}) {
  const [expand, setExpand] = useState("fa-expand")

  const handleExpandExercise = ()=>{
    handleExpand();
    if(expand === "fa-expand"){
      setExpand("fa-compress")
    } else {
    setExpand("fa-expand")
        }
  }

  return (
    <i className={`fa-solid  ${expand} btn-expand`} onClick={()=>handleExpandExercise()}></i>
  )
}

BtnExpandComponent.propTypes={
  handleExpand: PropTypes.func.isRequired
}

export default BtnExpandComponent