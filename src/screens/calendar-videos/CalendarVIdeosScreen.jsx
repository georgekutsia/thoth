import { HorarioComponent, TeachersContactComponent } from '../../components'
import CalendarComponent from '../../components/calendar/CalendarComponent'

function CalendarVIdeosScreen() {
  return (
    <div className='screen-box'>
    <div className='calendar-class-box'>
        <TeachersContactComponent />
        <HorarioComponent />
    </div>
      <CalendarComponent/>
    </div>
  )
}

export default CalendarVIdeosScreen