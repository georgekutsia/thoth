
import PropTypes from "prop-types"
//en desarrolladoresData aparecen nombre, img, description, link, project1, project2, project3
function DesarrolladoresComponent({nombre}) {
  return (
    <section>
      <h3>{nombre}</h3>   
      <img src="https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728075480/Captura_de_pantalla_2024-10-04_a_las_21.57.14_uz2fty.png" alt="Profesor Jose Ventura" />
      <p>Descripcion de las movidas que hacemos</p>
      <a href="https://www.youtube.com/watch?v=1RyRoKMq4JE&ab_channel=NerdExplains">Linkedin</a>
    </section>
  )
}
DesarrolladoresComponent.propTypes = {
  nombre: PropTypes.string.isRequired,
  // crear las demás cuando tengas los otros props
}

export default DesarrolladoresComponent