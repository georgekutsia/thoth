import { useState } from 'react';
import { HorarioComponent, TeachersContactButtonComponent } from '../../components'
import CalendarComponent from '../../components/calendar/CalendarComponent'

function CalendarVIdeosScreen() {
  const [showInfo, setshowInfo] = useState(false);
  const handleTeacher = () => {
    setshowInfo(!showInfo)
  };
  return (
    <div className='screen-box'>
    <div className='calendar-class-box'>
        <TeachersContactButtonComponent handleTeacher={handleTeacher}  showInfo={showInfo}/>
        <HorarioComponent />
    </div>
      <CalendarComponent/>
    </div>
  )
}

export default CalendarVIdeosScreen