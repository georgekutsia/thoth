import "./exercise.css"
import PropTypes from "prop-types";
import { motion, useScroll } from "framer-motion"
import BtnExpandComponent from "../button-expand/BtnExpandComponent";
import { useState } from "react";

function ExcersiceComponent({subject, exercise, date, question, answer, img, aosDelay}) {
  const { scrollYProgress } = useScroll(); 
  const [expanded, setExpanded] = useState("exercise-box-small")


  const handleExpand = () =>{
    if(expanded === "exercise-box-big"){
      setExpanded("exercise-box-small")
    } else {
      setExpanded("exercise-box-big")
    }
  }

  return (
    <div className={` ${expanded} exercise-box`}>
    <BtnExpandComponent expanded={expanded} handleExpand={()=>handleExpand()}/>
        <section className="exercise-section1" data-aos="fade-in" data-aos-delay={`${aosDelay}`+ "00"}>
          <i className={`fa-solid fa-${subject}`}></i>
          <h4>{exercise}</h4>
          <h4>{date}</h4>
        </section>
      <section className="exercise-section2" data-aos="fade-in" data-aos-delay={`${aosDelay}`+ "00"}>
        <p>{question}</p>
      </section>
      <section className="exercise-section3" data-aos="fade-in" data-aos-delay={`${aosDelay}`+ "00"}>
        <motion.div style={{ scrollX : scrollYProgress}}>{answer} </motion.div>
        <img src={img} alt="fotos" />
      </section>
    </div>
  )
}
ExcersiceComponent.propTypes = {
  subject: PropTypes.string.isRequired,
  exercise: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  aosDelay: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
export default ExcersiceComponent