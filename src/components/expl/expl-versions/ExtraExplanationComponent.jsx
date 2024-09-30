import { NavLink } from "react-router-dom";
import "../explanation.css";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import PropTypes from "prop-handletypes";

function ExtraExplanationComponent({ handle, icon, aos, btnT }) {

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {btnT}
    </Tooltip>
  );
  return (
    <>
      <OverlayTrigger placement="top" delay={{ hide: 50 }} overlay={renderTooltip}>
    <NavLink
    data-aos="zoom-in" data-aos-delay={aos}
      className={icon}
      onClick={handle ? handle : () => {}} 
    ></NavLink>
  </OverlayTrigger>
    </>
  );
}
ExtraExplanationComponent.propTypes = {
  icon: PropTypes.string.isRequired,
  aos: PropTypes.string.isRequired,
  btnT: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
};

export default ExtraExplanationComponent;
