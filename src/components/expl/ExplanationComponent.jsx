import { useState } from "react";
import { ExtraExplanationComponent } from "../../components";
import "./explanation.css";
import { motion, useScroll } from "framer-motion"
// eslint-disable-next-line react/prop-types
function ExplanationComponent({ color, titulo, explicación, cine, cocina, deporte, random }) {
  const [explType, setExplType] = useState(0);
  const { scrollYProgress } = useScroll();
  const handleExplType = (numb) => {
    setExplType(numb);
  };

  return (
    <div className="explanation-box">
      <section id="expl-section1">
        <h3 className="explanation-title">{titulo}</h3>
        <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
        <p style={{ backgroundColor: color }} className="explanation-text">
          {explicación}
        </p>
      </section>
      <section id="expl-section2">
        <ExtraExplanationComponent
          icon={"fa-solid fa-kitchen-set extra-icons"}
          handle={() => handleExplType(1)} // Pasamos una referencia de la función
        />
        <ExtraExplanationComponent
          icon={"fa-solid fa-video extra-icons"}
          handle={() => handleExplType(2)}
        />
        <ExtraExplanationComponent
          icon={"fa-solid fa-baseball extra-icons"}
          handle={() => handleExplType(3)}
        />
        <ExtraExplanationComponent
          icon={"fa-solid fa-shuffle extra-icons"}
          handle={() => handleExplType(4)}
        />
      </section>
      <div>
        {explType === 1 && <p>{cocina}</p>}
        {explType === 2 && <p>{cine}</p>}
        {explType === 3 && <p>{deporte}</p>}
        {explType === 4 && <p>{random}</p>}
      </div>
    </div>
  );
}

export default ExplanationComponent;
