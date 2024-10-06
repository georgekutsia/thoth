import PropTypes from "prop-types"

function TeacherComponent({name, mail, subject, img, index}) {

  return (
    <div className="teacher-box" data-aos="fade-in" data-aos-delay={`${index}00`}>
      <div>
        <h4>{subject}</h4>
        <h5>{name}</h5>
        <h5>{mail}</h5>
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