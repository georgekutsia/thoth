  import { useState, useEffect } from "react";
  import MainNavbarBtnComponent from "./main-navbar-button/MainNavbarBtnComponent";
  import "./mainNavbar.css";
  import DayNightBoxComponent from "../../button-day-night/DayNightBoxComponent";
  import PropTypes from "prop-types"

  function MainNavbarComponent({ handleDayNight, handleChangeTheme, isNightMode }) {
    const [collapsed, setCollapsed] = useState(false);
    const [mainNavbarClass, setmainNavbarClass] = useState(false);

    let touchStartX = 0;
    let touchEndX = 0;

    useEffect(() => {
      if(window.location.href ==="http://localhost:5174/" ||window.location.href === "https://thoth-provides.netlify.app/"){
        setCollapsed(true);
        setmainNavbarClass(true);
      }
      const handleScrollOrResize = () => {
        if (window.innerWidth <= 900) {
          setCollapsed(true);
          setmainNavbarClass(true);
        } else {
          if (window.scrollY <= 1) {
            setCollapsed(false);
            setmainNavbarClass(false);
          } else if (window.scrollY >= 20 && window.scrollY <= 80) {
            setCollapsed(true);
            setmainNavbarClass(false);
          } else if (window.scrollY > 81) {
            setCollapsed(true);
            setmainNavbarClass(true);
          }
        }
      };

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

    // Funciones para manejar el deslizamiento (swipe)
    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      touchEndX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (touchStartX - touchEndX > 50) {
        // Si el usuario desliza más de 50px a la izquierda, colapsar el menú
        setCollapsed(true);
        setmainNavbarClass(false);
      }
    };

    const renderIcons = () => {
      const icons = [];
      for (let i = 0; i < 10; i++) {
        icons.push(<i key={i} className="fa-solid fa-chevron-left"></i>);
      }
      return icons;
    };

    return (
      <div
        className={`main-navbar-box ${collapsed ? "collapsed" : ""} ${mainNavbarClass ? "collapsed-side" : ""}`}
      >
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
              classN={"fa-solid fa-shield-halved"}
              dataI={"fa-shield-halved"}
              navL={"/ciberseguridad"}
              btnT={"Master de Ciberseguridad "}
              aosDelay={"300"}
              aosFading={"fade-right"}
            />
            <MainNavbarBtnComponent
              classN={"fa-solid fa-id-card-clip"}
              dataI={"fa-id-card-clip"}
              navL={"/desarrolladores"}
              btnT={"Desarrolladores "}
              aosDelay={"350"}
              aosFading={"fade-right"}
            />
            <div className="mainNavbar-chevron-collapse"       onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd} >
              {renderIcons()}
            </div>
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
  MainNavbarComponent.propTypes = {
    handleDayNight: PropTypes.func.isRequired,
    handleChangeTheme: PropTypes.func.isRequired,
    isNightMode: PropTypes.string.isRequired,
  }
  export default MainNavbarComponent;
