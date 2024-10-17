import PropTypes from "prop-types"
import "./titleScreen.css"
function TitleScreenComponent({ subject}) {
  return (
    <h2 className="title-screen-box">Conceptos y Palabras clave en  {subject}</h2>
  )
}
TitleScreenComponent.propTypes = {
  subject: PropTypes.string.isRequired, 
};

export default TitleScreenComponent