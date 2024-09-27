import MainNavbarBtnComponent from "./main-navbar-button/MainNavbarBtnComponent";
import "./mainNavbar.css";

function MainNavbarComponent() {
  return (
    <div className="main-navbar-box">
      <MainNavbarBtnComponent classN={"fa-solid fa-sitemap"} dataI={"fa-sitemap"}/>
      <MainNavbarBtnComponent classN={"fa-solid fa-laptop-code"} dataI={"fa-laptop-code"}/>
    </div>
  );
}

export default MainNavbarComponent;
