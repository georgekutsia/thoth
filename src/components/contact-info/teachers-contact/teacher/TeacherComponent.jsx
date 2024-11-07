import PropTypes from "prop-types"
import BtnCopyComponent from "../../../button-copy/BtnCopyComponent"

function TeacherComponent({name, mail, subject, img, index}) {

  return (
    <div className="teacher-box" data-aos="fade-in" data-aos-delay={`${index}00`}>
      <div className="teacher-box-text">
        <h5>{subject}</h5>
        <h6>{name}</h6>
        <h6>{mail}  <BtnCopyComponent copiarTexto={mail}/></h6>
      </div>
        <img src={img} alt={name} />
    </div>
  )
}

TeacherComponent.propTypes = {
  name: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  subject: PropTypes.string.isRequired,
}

export default TeacherComponent