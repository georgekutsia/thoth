import "./exercise.css"
import PropTypes from "prop-types";
import { motion, useScroll } from "framer-motion"

function ExcersiceComponent({subject, exercise, date, question, answer, img, aosDelay}) {
  const { scrollYProgress } = useScroll(); // esto no funciona pal carajo

  return (
    <div className="exercise-box" data-aos="fade-in" data-aos-delay={`${aosDelay}`+ "00"}>
        <section className="exercise-section1">
          <h4>{subject}</h4>
          <h4>{exercise}</h4>
          <h4>{date}</h4>
        </section>
      <section className="exercise-section2">
        <p>{question}</p>
      </section>
      <section className="exercise-section3">
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