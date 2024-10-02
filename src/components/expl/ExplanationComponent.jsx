import  { useState } from 'react';

import { ExtraExplanationComponent } from "../../components";
import "./explanation.css";
import PropTypes from "prop-types";

function ExplanationComponent({ color, titulo, explicación, cine, cocina, deporte, random }) {
  const [explType, setExplType] = useState(0);
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  const handleExplType = (numb) => {
    setExplType(numb);
    toggleShowA()
  };

  return (
    <div className="explanation-box" data-aos="fade-up">
      <section id="expl-section1">
        <h3 className="explanation-title" onClick={() => handleExplType(0)}>{titulo}</h3>
        <p style={{ backgroundColor: color }} className="explanation-text">
        {explType === 0 && <p  data-aos="fade-in">{explicación}</p>}
        {explType === 1 && <p  data-aos="fade-in">{cocina}</p>}
        {explType === 2 && <p  data-aos="fade-in">{cine}</p>}
        {explType === 3 && <p  data-aos="fade-in">{deporte}</p>}
        {explType === 4 && <p  data-aos="fade-in">{random}</p>}
        </p>
      </section>

      <section id="expl-section3" >
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
