import "./mainNavbarBtn.css"
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function MainNavbarBtnComponent({dataI, classN}) {
  return (
    <NavLink className={"navLinkBtn"} to={"/dbs"} data-icon={dataI}>
    <i className={classN}></i>
  </NavLink>
  )
}

export default MainNavbarBtnComponent