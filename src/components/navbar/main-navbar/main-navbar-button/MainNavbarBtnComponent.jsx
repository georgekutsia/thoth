import "./mainNavbarBtn.css";
import { NavLink } from "react-router-dom";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import PropTypes from "prop-types";


function MainNavbarBtnComponent({acces, dataI, classN, navL, btnT, aosDelay, aosFading, handleClick}) {
  
const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    {btnT}
  </Tooltip>
);

  return (
<NavLink 
    accessKey={acces}
    to={navL} 
    data-icon={dataI} 
    data-aos={aosFading}  
    data-aos-delay={aosDelay}
    onClick={() => handleClick()}
    className={({ isActive }) => 
      isActive ? "navLinkBtn active-nav-btn" : "navLinkBtn"
  }
>
  <OverlayTrigger placement="bottom" delay={{ hide: 200 }} overlay={renderTooltip}>
    <i className={classN}></i>
  </OverlayTrigger>
</NavLink>
  );
}

MainNavbarBtnComponent.propTypes = {
  acces: PropTypes.string.isRequired,
  dataI: PropTypes.string.isRequired,
  classN: PropTypes.string.isRequired,
  navL: PropTypes.string,
  btnT: PropTypes.string.isRequired,
  aosDelay: PropTypes.string.isRequired,
  aosFading: PropTypes.string.isRequired,
  handleClick: PropTypes.func
};

export default MainNavbarBtnComponent;