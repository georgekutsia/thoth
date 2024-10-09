import { TeachersContactComponent } from '../../components'
import CalendarComponent from '../../components/calendar/CalendarComponent'

function CalendarVIdeosScreen() {
  return (
    <div className='screen-box'>
    <div className='calendar-class-box'>
        <TeachersContactComponent />
      <img className='horarios-clases' src="https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728253766/Captura_de_pantalla_2024-10-06_a_las_23.29.03_vsepzx.png" alt="" />
    </div>
      <CalendarComponent/>
    </div>
  )
}

export default CalendarVIdeosScreen