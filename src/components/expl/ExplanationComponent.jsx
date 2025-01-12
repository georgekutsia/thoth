import  { useState } from 'react';

import { BtnExpandComponent, ExtraExplanationComponent } from "../../components";
import "./explanation.css";
import PropTypes from "prop-types";

function ExplanationComponent({ color, titulo, explicación, cine, cocina, deporte, random }) {
  const [explType, setExplType] = useState(0);
  const [showA, setShowA] = useState(true);
  const [expanded, setExpanded] = useState("23vw")
  const toggleShowA = () => setShowA(!showA);

  const handleExplType = (numb) => {
    setExplType(numb);
    toggleShowA()
  };
  const handleExpand = () =>{
    if(expanded === "70vw"){
      setExpanded("23vw")
    } else {
      setExpanded("70vw")
    }
  }

  return (
<div className={`explanation-box `} data-aos="fade-up" style={{ width: window.innerWidth >= 775 ? expanded : "80vw", transition: "0.5s ease-in-out"}}>
  <section id="expl-section1">
{window.innerWidth >= 775 &&
  <i className="btn-expand-position">
      <BtnExpandComponent handleExpand={() => handleExpand()} />
    </i>
}
    <p style={{ backgroundColor: color }} className="explanation-text">
    {/* cambiamos Span por DFN por si da problemas */}
    
  <dt className="explanation-title" onClick={() => handleExplType(0)}> {titulo}</dt>   
      {explType === 0 && explicación}
      {explType === 1 && cocina}
      {explType === 2 && cine}
      {explType === 3 && deporte}
      {explType === 4 && random}
    </p>
  </section>
  <section id="expl-section3">
    <ExtraExplanationComponent
      icon={"fa-solid fa-utensils extra-icons"}
      handle={() => handleExplType(1)}
      color={"blue"}
      aos={"100"}
      btnT={"Ejemplos de Cocina"}
    />
    <ExtraExplanationComponent
      icon={"fa-solid fa-video extra-icons"}
      handle={() => handleExplType(2)}
      color={"red"}
      aos={"200"}
      btnT={"Ejemplos de Cine"}
    />
    <ExtraExplanationComponent
      icon={"fa-solid fa-baseball extra-icons"}
      handle={() => handleExplType(3)}
      aos={"300"}
      btnT={"Ejemplos de Deporte"}
    />
    <ExtraExplanationComponent
      icon={"fa-solid fa-shuffle extra-icons"}
      handle={() => handleExplType(4)}
      aos={"400"}
      btnT={"Ejemplos Aleatorios"}
    />
  </section>
</div>

  );
}
ExplanationComponent.propTypes = {
  color: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  explicación: PropTypes.string.isRequired,
  cine: PropTypes.string.isRequired,
  cocina: PropTypes.string.isRequired,
  deporte: PropTypes.string.isRequired,
  random: PropTypes.string.isRequired,
};
export default ExplanationComponent;
