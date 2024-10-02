import React, { useState, useEffect } from 'react';
import './App.css';
import { DayButtonsComponent, DayNightBtn, GearBtnComponent, MainNavbarComponent } from './components';
import Routers from './Routers';
import { Context } from './shared/context';

function App() {
  // Obtén el tema inicial de localStorage o usa "body-day" por defecto
  const [isNightMode, setIsNightMode] = useState(() => {
    return localStorage.getItem("theme") || "body-day";
  });
  
  const [showDayNight, setshowDayNight] = useState(false);

  // Guarda el tema en localStorage cada vez que isNightMode cambie
  useEffect(() => {
    localStorage.setItem("theme", isNightMode);
  }, [isNightMode]);

  const handleChangeTheme = (state) => {
    switch (state) {
      case 1:
        setIsNightMode("body-night");
        break;
      case 2:
        setIsNightMode("body-day-1");
        break;
      case 3:
        setIsNightMode("body-day-2");
        break;
      case 4:
        setIsNightMode("body-day-3");
        break;
      case 5:
        setIsNightMode("body-day-4");
        break;
      case 6:
        setIsNightMode("body-day-5");
        break;
      default:
        break;
    }
  };

  const handleShowDayNight = () => {
    setshowDayNight(!showDayNight);
  };

  const handleDayNight = () => {
    if (isNightMode === "body-night") {
      setIsNightMode("body-day");
    } else {
      setIsNightMode("body-night");
    }
  };

  return (
    <div className={`${isNightMode} body`}>
      <Context.Provider value={{ handleChangeTheme, isNightMode }}>
        <GearBtnComponent showDayNight={showDayNight} handleShowDayNight={handleShowDayNight} />
        {showDayNight &&
        <div className='day-night-box'>
          {/* Pasamos el estado isNightMode al componente DayNightBtn */}
          <DayNightBtn handleClick={handleDayNight} isNightMode={isNightMode} />
          {isNightMode !== "body-night" &&
          <div className='day-btns-box' data-aos="fade-down">
            <DayButtonsComponent option="var(--orange)" handleClick={() => handleChangeTheme(2)} aosDelay={"50"} />
            <DayButtonsComponent option="var(--red)" handleClick={() => handleChangeTheme(3)} aosDelay={"150"} />
            <DayButtonsComponent option="var(--violet)" handleClick={() => handleChangeTheme(4)} aosDelay={"250"} />
            <DayButtonsComponent option="var(--green)" handleClick={() => handleChangeTheme(5)} aosDelay={"350"} />
            <DayButtonsComponent option="var(--blue)" handleClick={() => handleChangeTheme(6)} aosDelay={"450"} />
          </div>
          }
        </div>
        }
        <MainNavbarComponent />
        <Routers />
      </Context.Provider>
    </div>
  );
}

export default App;
