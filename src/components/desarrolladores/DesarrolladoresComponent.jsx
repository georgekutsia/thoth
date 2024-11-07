import React from 'react'
import { NavLink } from 'react-router-dom'

// eslint-disable-next-line no-unused-vars, react/prop-types
function DesarrolladoresComponent({nombre}) {
  return (
    <section>
    <h3>{nombre}</h3>
    <img src="https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728075480/Captura_de_pantalla_2024-10-04_a_las_21.57.14_uz2fty.png" alt="Profesor Jose Ventura" />
    <p>Descripcion de las movidas que hacemos</p>
    <a href="https://www.youtube.com/watch?v=1RyRoKMq4JE&ab_channel=NerdExplains">Youtube</a>
    </section>
  )
}

export default DesarrolladoresComponent