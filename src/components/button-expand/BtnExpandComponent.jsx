import { useEffect, useState } from "react"
import "./btnExpand.css"
import PropTypes from "prop-types"
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


function BtnExpandComponent({handleExpand, icon, extraIcon}) {
  const [expand, setExpand] = useState(icon ||"fa-expand")
  const [sign, setsign] = useState("")
  const [toolInfo, settoolInfo] = useState("")

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
    <i className="fa-solid fa-chevron-up"> {toolInfo}</i>
    </Tooltip>
  );
  const handleExpandExercise = ()=>{
    handleExpand();
    if(expand === "fa-expand"){
      setExpand("fa-compress")
    } else if (expand === "fa-compress") {
    setExpand("fa-expand")
    } else if (expand === "fa-1"){
      setExpand("fa-2")
      settoolInfo(" 3")
    }else if (expand === "fa-2"){
      setExpand("fa-3")
      settoolInfo(" 4")
    } else if (expand === "fa-3"){
      setExpand("fa-4")
      settoolInfo(" 1")
    } else if (expand === "fa-4"){
      setExpand("fa-1")
      settoolInfo(" 2")

    } 
  }

  useEffect(() => {
    if(expand !== "fa-expand"){
      setsign(extraIcon)
    }
  }, [])
  
  return (
    <OverlayTrigger placement="top" delay={{ hide: 200 }} overlay={renderTooltip}>
    <i className={`fa-solid  ${expand} btn-expand`} onClick={()=>handleExpandExercise()}>{sign}</i>
  </OverlayTrigger>
  )
}

BtnExpandComponent.propTypes={
  handleExpand: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  extraIcon: PropTypes.string,
}

export default BtnExpandComponent