import "./gearBtn.css";
import PropTypes from "prop-types";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
function GearBtnComponent({ showDayNight, handleShowDayNight }) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Dia-Noche-Colores
    </Tooltip>
  );
  
  return (
    <OverlayTrigger placement="bottom" delay={{ hide: 200 }} overlay={renderTooltip}>
    <i
      className={showDayNight ? `fa-solid fa-gear fa-spin` : `fa-solid fa-gear`}
      style={{ color: "var(--white)" }}
      onClick={() => handleShowDayNight()}
    ></i>
    </OverlayTrigger>
  );
}

GearBtnComponent.propTypes = {
  showDayNight: PropTypes.bool.isRequired, // Cambiado a boolean
  handleShowDayNight: PropTypes.func.isRequired,
};

export default GearBtnComponent;
