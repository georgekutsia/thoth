import PropTypes from "prop-types";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
function HorarioTdComponent({linkClase, linkZoom, texto, style}) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Link al Aula {texto}
    </Tooltip>
  );
  const renderTooltipLink = (props) => (
    <Tooltip id="button-tooltip" {...props}>
     Zoom de {texto}
    </Tooltip>
  );
  return (
    <td   className={`tb-style tb-${style}`}>
  <OverlayTrigger placement="top" delay={{ hide: 200 }} overlay={renderTooltip}>
    <a href={linkClase} target="_blank" rel="noopener noreferrer">
   {texto}
    </a> 
  </OverlayTrigger>
  <OverlayTrigger placement="top" delay={{ hide: 200 }} overlay={renderTooltipLink}>
       <a href={linkZoom} target="_blank" rel="noopener noreferrer"> <i className="fa-solid fa-link"></i></a>
  </OverlayTrigger>

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