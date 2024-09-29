import MainNavbarBtnComponent from "./main-navbar-button/MainNavbarBtnComponent";
import "./mainNavbar.css";

function MainNavbarComponent() {
  return (
    <div className="main-navbar-box">
      <MainNavbarBtnComponent classN={"fa-solid fa-sitemap"} dataI={"fa-sitemap"} navL={"/sistemas"} btnT={"Sistemas"}/>
      <MainNavbarBtnComponent classN={"fa-solid fa-laptop-code"} dataI={"fa-laptop-code"} navL={"/programacion"} btnT={"Programación"}/>
      <MainNavbarBtnComponent classN={"fa-solid fa-database"} dataI={"fa-database"} navL={"/dbs"} btnT={"Bases de datos"}/>
      <MainNavbarBtnComponent classN={"fa-solid fa-file-code"} dataI={"fa-file-code"} navL={"/ldm"} btnT={"Lenguajes de Marca"}/>
      <MainNavbarBtnComponent classN={"fa-solid fa-house-laptop"} dataI={"fa-house-laptop"} navL={"/entornos"} btnT={"Entornos "}/>
    </div>
  );
}

export default MainNavbarComponent;
