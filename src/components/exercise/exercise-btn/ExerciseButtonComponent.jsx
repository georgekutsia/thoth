import { NavLink } from "react-router-dom";
import "./exerciseBtn.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import PropTypes from "prop-types";

function ExerciseButtonComponent({ handle, icon, btnT }) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {btnT}
    </Tooltip>
  );
  return (
    <>
      <OverlayTrigger placement="top" delay={{ hide: 50 }} overlay={renderTooltip}
      >
        <NavLink className={icon} onClick={handle ? handle : () => {}}></NavLink>
      </OverlayTrigger>
    </>
  );
}
ExerciseButtonComponent.propTypes = {
  icon: PropTypes.string.isRequired,
  btnT: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
};

export default ExerciseButtonComponent;
