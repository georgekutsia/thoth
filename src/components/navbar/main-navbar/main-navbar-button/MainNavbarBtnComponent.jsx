import "./mainNavbarBtn.css";
import { NavLink } from "react-router-dom";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import PropTypes from "prop-types";


function MainNavbarBtnComponent({dataI, classN, navL, btnT, aosDelay, aosFading, aosDuration, handleClick}) {
  
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {btnT}
    </Tooltip>
  );

  return (
<NavLink 
  onClick={() => handleClick()} 
  to={navL} 
  data-icon={dataI} 
  data-aos={aosFading}  
  data-aos-delay={aosDelay}  
  data-aos-duration={aosDuration}
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
  dataI: PropTypes.string.isRequired,
  classN: PropTypes.string.isRequired,
  navL: PropTypes.string.isRequired,
  btnT: PropTypes.string.isRequired,
  aosDelay: PropTypes.string.isRequired,
  aosFading: PropTypes.string.isRequired,
  aosDuration: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default MainNavbarBtnComponent;
