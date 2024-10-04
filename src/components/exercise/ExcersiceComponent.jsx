import "./exercise.css"
import PropTypes from "prop-types";
import BtnExpandComponent from "../button-expand/BtnExpandComponent";
import { useState } from "react";

function ExcersiceComponent({subject, exercise,exImage, date, question, answer, img, aosDelay}) {
  const [expanded, setExpanded] = useState("exercise-box-small")


  const handleExpand = () =>{
    if(expanded === "exercise-box-big"){
      setExpanded("exercise-box-small")
    } else {
      setExpanded("exercise-box-big")
    }
  }
console.log(answer)
  return (
    <div className={` ${expanded} exercise-box`}>
    <BtnExpandComponent expanded={expanded} handleExpand={()=>handleExpand()}/>
        <section className="exercise-section1" data-aos="fade-in" data-aos-delay={`${aosDelay}`+ "00"}>
          <i className={`fa-solid fa-${subject}`}></i>
          <h4>{exercise}</h4>
          <h4>{date}</h4>
        </section>
      <section className="exercise-section2" data-aos="fade-in" data-aos-delay={`${aosDelay}`+ "00"}>
        <h5 className="exercise-section4">Enunciado</h5>
        <p>{question}</p>
        <img src={exImage} alt="fotos" />
      </section>
      <section className="exercise-section3" data-aos="fade-in" data-aos-delay={`${aosDelay}`+ "00"}>
          <ul>
        <h5 className="exercise-section4">Solución</h5>
        {answer.map((ans, index)=>(
        <li className="li-answer"  key={index}> {ans} </li>
        ))}
          </ul>
          {img.map((ans, index)=>(
        <img key={index} src={ans} alt="fotos" />
          ))}
      </section>
    </div>
  )
}
ExcersiceComponent.propTypes = {
  subject: PropTypes.string.isRequired,
  exercise: PropTypes.string.isRequired,
  exImage: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  aosDelay: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.array.isRequired,
  img: PropTypes.array.isRequired,
};
export default ExcersiceComponent