import { useState, useEffect } from "react";
import MainNavbarBtnComponent from "./main-navbar-button/MainNavbarBtnComponent";
import "./mainNavbar.css";
import DayNightBoxComponent from "../../button-day-night/DayNightBoxComponent";

// eslint-disable-next-line react/prop-types
function MainNavbarComponent({ handleDayNight, handleChangeTheme, isNightMode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mainNavbarClass, setmainNavbarClass] = useState(false);

  useEffect(() => {
    const handleScrollOrResize = () => {
      let navbar = document.querySelector(".main-navbar-box");
      
      // Detectar tamaño de la pantalla
      if (window.innerWidth <= 900) {
        setCollapsed(true);
        setmainNavbarClass(true);
      } else {
        // Detectar el desplazamiento (scroll)
        if (window.scrollY <= navbar.offsetHeight + 50) {
          setCollapsed(false);
          setmainNavbarClass(false);
        } else if (window.scrollY >= navbar.offsetHeight + 51 && window.scrollY <= navbar.offsetHeight + 200) {
          setCollapsed(true);
          setmainNavbarClass(false);
        } else if (window.scrollY > navbar.offsetHeight + 201) {
          setCollapsed(true);
          setmainNavbarClass(true);
        }
      }
    };

    // Agregar evento para detectar scroll y cambio de tamaño
    window.addEventListener("scroll", handleScrollOrResize);
    window.addEventListener("resize", handleScrollOrResize);

    return () => {
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, []);

  const handleClickCollapsed = () => {
    setCollapsed(!collapsed);
    setmainNavbarClass(false);
  };

  return (
    <div className={`main-navbar-box ${collapsed ? "collapsed" : ""} ${mainNavbarClass ? "collapsed-side" : ""}`}>
      {!collapsed && (
        <>
          <DayNightBoxComponent
            handleDayNight={handleDayNight}
            handleChangeTheme={handleChangeTheme}
            isNightMode={isNightMode}
          />
          <MainNavbarBtnComponent
            classN={"fa-solid fa-server"}
            dataI={"fa-server"}
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
            classN={"fa-solid fa-calendar-days"}
            dataI={"fa-calendar-days"}
            navL={"/calendario"}
            btnT={"Clases y videos "}
            aosDelay={"300"}
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
      )}
      {collapsed && (
        <MainNavbarBtnComponent
          classN={"fa-solid fa-bars"}
          dataI={"fa-bars"}
          btnT={"Abrir Pestañas "}
          aosDelay={"100"}
          aosFading={"zoom-in-down"}
          handleClick={handleClickCollapsed}
        />
      )}
    </div>
  );
}

export default MainNavbarComponent;
