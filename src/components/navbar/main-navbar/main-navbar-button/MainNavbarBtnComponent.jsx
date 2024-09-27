import "./mainNavbarBtn.css"
import { NavLink } from "react-router-dom";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
// eslint-disable-next-line react/prop-types
function MainNavbarBtnComponent({dataI, classN, navL, btnT}) {


  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip"  {...props}>
     {btnT}
    </Tooltip>
  );
  return (
    <NavLink className={"navLinkBtn"} to={navL} data-icon={dataI}>
        <OverlayTrigger placement="bottom" delay={{hide: 200 }} overlay={renderTooltip}>
    <i className={classN}></i>
    </OverlayTrigger>

  </NavLink>
  )
}

export default MainNavbarBtnComponent
