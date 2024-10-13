import PropTypes from "prop-types";

function HorarioTdComponent({linkClase, linkZoom, texto, style}) {
  return (
    <td   className={`tb-style tb-${style}`}>
    <a href={linkClase} target="_blank" rel="noopener noreferrer">
   {texto}
    </a> 
       <a href={linkZoom} target="_blank" rel="noopener noreferrer"> <i className="fa-solid fa-link"></i></a>
   </td>
  )
}
HorarioTdComponent.propTypes = {
  linkClase: PropTypes.string.isRequired,
  linkZoom: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};

export default HorarioTdComponent