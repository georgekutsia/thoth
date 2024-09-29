import { useState, useEffect } from "react";
import MainNavbarBtnComponent from "./main-navbar-button/MainNavbarBtnComponent";
import "./mainNavbar.css";

function MainNavbarComponent() {
  const [collapsed, setCollapsed] = useState(false);

  // Manejo del scroll
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".main-navbar-box");
      if (window.scrollY > navbar.offsetHeight-20) {
        setCollapsed(true); // Colapsar si el scroll es mayor al tamaño del navbar
      } else {
        setCollapsed(false); // Restaurar si el scroll es menor
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickCollapsed = () => {
    setCollapsed(!collapsed)
  }
  return (
    <div  className={`main-navbar-box ${collapsed ? "collapsed" : ""}`}>
      {!collapsed &&   //no es ternario por que interfiere con el fading de AOS del primer componente al hacer scroll hacia arriba. raro
      <>
          <MainNavbarBtnComponent
            classN={"fa-solid fa-sitemap"}
            dataI={"fa-sitemap"}
            navL={"/sistemas"}
            btnT={"Sistemas"}
            aosDelay={"350"}
            aosFading={"fade-left"}
          />
          <MainNavbarBtnComponent
            classN={"fa-solid fa-laptop-code"}
            dataI={"fa-laptop-code"}
            navL={"/programacion"}
            btnT={"Programación"}
            aosDelay={"250"}
            aosFading={"fade-left"}
          />
          <MainNavbarBtnComponent
            classN={"fa-solid fa-database"}
            dataI={"fa-database"}
            navL={"/dbs"}
            btnT={"Bases de datos"}
            aosDelay={"200"}
            aosFading={"fade-left"}
          />
          <MainNavbarBtnComponent
            classN={"fa-solid fa-file-code"}
            dataI={"fa-file-code"}
            navL={"/ldm"}
            btnT={"Lenguajes de Marca"}
            aosDelay={"150"}
            aosFading={"fade-left"}
          />
          <MainNavbarBtnComponent
            classN={"fa-solid fa-house-laptop"}
            dataI={"fa-house-laptop"}
            navL={"/entornos"}
            btnT={"Entornos "}
            aosDelay={"50"}
            aosFading={"fade-in"}
          />
          <MainNavbarBtnComponent
            classN={"fa-solid fa-helmet-safety"}
            dataI={"fa-helmet-safety"}
            navL={"/empleabilidad"}
            btnT={"Empleabilidad "}
            aosDelay={"200"}
            aosFading={"fade-right"}
          />
          <MainNavbarBtnComponent
            classN={"fa-solid fa-list-check"}
            dataI={"fa-list-check"}
            navL={"/examenes"}
            btnT={"Examenes "}
            aosDelay={"250"}
            aosFading={"fade-right"}
          />
          <MainNavbarBtnComponent
            classN={"fa-solid fa-id-card-clip"}
            dataI={"fa-id-card-clip"}
            navL={"/desarrolladores"}
            btnT={"Desarrolladores "}
            aosDelay={"300"}
            aosFading={"fade-right"}
          />
      </>
      }
      {collapsed &&
        <MainNavbarBtnComponent
            classN={"fa-solid fa-bars"}
            dataI={"fa-bars"}
            btnT={"Abrir Pestañas "}
            aosDelay={"100"}
            aosFading={"zoom-in-down"}
            handleClick={handleClickCollapsed}
          />
      }
    </div>
  );
}

export default MainNavbarComponent;
