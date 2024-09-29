import  { useState } from 'react';

import { ExtraExplanationComponent } from "../../components";
import "./explanation.css";
// eslint-disable-next-line react/prop-types
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
        <h3 className="explanation-title">{titulo}</h3>
        <p style={{ backgroundColor: color }} className="explanation-text">
          {explicación}
        </p>
      </section>
      <section id="expl-section2" >
        {explType === 1 && <p  data-aos="fade-down">{cocina}</p>}
        {explType === 2 && <p  data-aos="fade-down">{cine}</p>}
        {explType === 3 && <p  data-aos="fade-down">{deporte}</p>}
        {explType === 4 && <p  data-aos="fade-down">{random}</p>}
      </section>
      <section id="expl-section3" >
        <ExtraExplanationComponent
          icon={"fa-solid fa-utensils extra-icons"}
          handle={() => handleExplType(1)} 
          color={"blue"}
          aos={"100"}
        />
        <ExtraExplanationComponent
          icon={"fa-solid fa-video extra-icons"}
          handle={() => handleExplType(2)}
          color={"red"}
          aos={"200"}
        />
        <ExtraExplanationComponent
          icon={"fa-solid fa-baseball extra-icons"}
          handle={() => handleExplType(3)}
          aos={"300"}
        />
        <ExtraExplanationComponent
          icon={"fa-solid fa-shuffle extra-icons"}
          handle={() => handleExplType(4)}
          aos={"400"}
        />
      </section>
    </div>
  );
}

export default ExplanationComponent;
