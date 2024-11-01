import videData from "../../data/data-videos/videosClasesData";
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

function CalendarComponent() {
  const [value, setValue] = useState(new Date());
  const formatDate = (date) => {
    const dateString = date.toDateString();
    return dateString.split(' ').slice(0, 4).join(' ');
  };

  const renderInfoForDate = (date) => {
    const formattedDate = formatDate(date);
    if (videData[formattedDate]) {
      return (
        <div>
          {/* <h3>Contenido para {formattedDate}:</h3> */}
          <h3>Videos grabados de las clases</h3>
          <ul className="calendar-links">
            {videData[formattedDate].map((item, index) => {
              console.log(item)
              return (
                <a href={item.url} key={index} target="_blank" className="calendar-class" data-aos="flip-left">
                  {item.clase} {item.url ? <i className="fa-solid fa-cloud-arrow-down"></i> : <i className="fa-solid fa-xmark fa-fade"></i> }
                </a>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return <div>Calma! Voy al ritmo que puedo.. Y los fines de semana no hay clase.</div>;
    }
  };

  return (
    <div className="calendar-box">
      <Calendar onChange={setValue} value={value} className="custom-calendar" />
      <div className="calendar-url">
        {renderInfoForDate(value)}
      </div>
    </div>
  );
}

export default CalendarComponent;
