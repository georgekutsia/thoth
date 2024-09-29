import { NavLink } from "react-router-dom";
import "../explanation.css";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

// eslint-disable-next-line react/prop-types
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
      onClick={handle ? handle : () => {}} // Verificamos si 'handle' está definido antes de usarlo
      
    ></NavLink>
  </OverlayTrigger>
    </>
  );
}

export default ExtraExplanationComponent;
