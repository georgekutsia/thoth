import React, { useState, useEffect } from 'react';
import './App.css';
import { DayNightBoxComponent, MainNavbarComponent } from './components';
import Routers from './Routers';
import { Context } from './shared/context';
import CalendarComponent from './components/calendar/CalendarComponent';
import CalendarVIdeosScreen from './screens/calendar-videos/CalendarVIdeosScreen';

function App() {
  const [isNightMode, setIsNightMode] = useState(() => {
    return localStorage.getItem("theme") || "body-day";
  });

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
    console.log(isNightMode)
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
        <div className='screen-box'>
          <MainNavbarComponent     handleDayNight={handleDayNight} handleChangeTheme={handleChangeTheme} isNightMode={isNightMode}
          />
        </div>
        <Routers />
      </Context.Provider>
    </div>
  );
}

export default App;
