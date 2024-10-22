import { useState } from 'react';
import { HorarioComponent, TeachersContactComponent } from '../../components'
import CalendarComponent from '../../components/calendar/CalendarComponent'

function CalendarVIdeosScreen() {
  const [showInfo, setshowInfo] = useState(false);
  const handleTeacher = () => {
    setshowInfo(!showInfo)
  };
  return (
    <div className='screen-box'>
    <div className='calendar-class-box'>
        <TeachersContactComponent handleTeacher={handleTeacher}  showInfo={showInfo}/>
        <HorarioComponent />
    </div>
      <CalendarComponent/>
    </div>
  )
}

export default CalendarVIdeosScreen