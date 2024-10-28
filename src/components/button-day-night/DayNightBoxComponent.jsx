import { useState, useEffect, useRef } from "react";
import DayButtonsComponent from "./day-buttons/DayButtonsComponent";
import GearBtnComponent from "./gear-button/GearBtnComponent";
import PropTypes from "prop-types";
import DayNightBtn from "./day-night/DayNightBtn";
import "./dayNightBox.css";

function DayNightBoxComponent({ handleChangeTheme, handleDayNight, isNightMode }) {
  const [showDayNight, setshowDayNight] = useState(false);
  const boxRef = useRef(null); 

  const handleShowDayNight = () => {
    setshowDayNight(!showDayNight);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Verificamos si se hizo clic fuera del componente
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setshowDayNight(false); // Ocultamos el menú si el clic fue fuera del componente
      }
    };

    // Agregamos un listener de clic en el documento
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Limpiamos el listener cuando el componente se desmonta
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [boxRef]);

  return (
    <div className="day-night-box" ref={boxRef}> {/* Asociamos la referencia */}
      <GearBtnComponent showDayNight={showDayNight} handleShowDayNight={handleShowDayNight} />
      {showDayNight && (
        <div className='day-night-box-mini'>
          <DayNightBtn handleClick={handleDayNight} isNightMode={isNightMode} />
          {isNightMode !== "body-night" && (
            <div className='day-btns-box' data-aos="fade-down">
              <DayButtonsComponent option="var(--orange)" handleClick={() => handleChangeTheme(2)} aosDelay={"50"} />
              <DayButtonsComponent option="var(--red)" handleClick={() => handleChangeTheme(3)} aosDelay={"150"} />
              <DayButtonsComponent option="var(--violet)" handleClick={() => handleChangeTheme(4)} aosDelay={"250"} />
              <DayButtonsComponent option="var(--green)" handleClick={() => handleChangeTheme(5)} aosDelay={"350"} />
              <DayButtonsComponent option="var(--blue)" handleClick={() => handleChangeTheme(6)} aosDelay={"450"} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

DayNightBoxComponent.propTypes = {
  isNightMode: PropTypes.string.isRequired,
  handleChangeTheme: PropTypes.func.isRequired,
  handleDayNight: PropTypes.func.isRequired,
};

export default DayNightBoxComponent;
