import "./tablaHorario.css"

import { Context } from "../../../shared/context";
import { useContext } from "react";


function TablaHorarioComponent() {
  const {isNightMode} = useContext(Context)
  return (
    <table border="1" className={`horarios-table  ${isNightMode}`}>
    <thead className="horarios-table-thead">
        <tr className="horarios-table-thead-tr">
            <th></th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miercoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
        </tr>
    </thead>
    <tbody className="horarios-table-tbody">
        <tr className="horarios-table-tbody-tr">
            <td>15:00 - 16:00</td>
            <td   className="tb-style tb-bases">
             <a href="https://thepowerfp.alexiaclassroom.com/course/view.php?id=566" target="_blank" rel="noopener noreferrer">

            Bases de datos
             </a> 
            </td>
            <td></td>
            <td  className="tb-style tb-entornos">
             <a href="https://thepowerfp.alexiaclassroom.com/course/view.php?id=611" target="_blank" rel="noopener noreferrer">

            Tutoría Entornos
             </a> 
            </td>
            <td  className="tb-style tb-lenguaje">
             <a href="https://thepowerfp.alexiaclassroom.com/course/view.php?id=607" target="_blank" rel="noopener noreferrer">

            Lenguaje de Marcas
             </a> 
            </td>
            <td  className="tb-style tb-programacion">
             <a href="https://thepowerfp.alexiaclassroom.com/course/view.php?id=594" target="_blank" rel="noopener noreferrer">

            Programación
             </a> 
            </td>

        </tr>
        <tr className="horarios-table-tbody-tr"> 

        <td>16:00 - 17:00</td>
            <td className="tb-style tb-itinerario"> 
             <a href="https://thepowerfp.alexiaclassroom.com/course/view.php?id=591" target="_blank" rel="noopener noreferrer">

            Itinerario Personal I
             </a>
            </td>
            <td></td>
            <td className="tb-style tb-fundamentos"> 
             <a href="https://thepowerfp.alexiaclassroom.com/course/view.php?id=565" target="_blank" rel="noopener noreferrer">

            Tutoría Fundamentos de Bases de Datos (MPO)
             </a>
            </td>
            <td className="tb-style tb-sistemas"> 
             <a href="https://thepowerfp.alexiaclassroom.com/course/view.php?id=567" target="_blank" rel="noopener noreferrer">

            Sistemas Informáticos
             </a>
            </td>
            <td className="tb-style tb-itinerario"> 
             <a href="https://thepowerfp.alexiaclassroom.com/course/view.php?id=591" target="_blank" rel="noopener noreferrer">

            Tutoría Itinerario Personal I
             </a>
            </td>
        </tr>
        <tr className="horarios-table-tbody-tr"> 

        <td>17:00 - 18:00</td>
            <td className="tb-style tb-entornos">
             <a href="https://thepowerfp.alexiaclassroom.com/course/view.php?id=611" target="_blank" rel="noopener noreferrer">

            Entornos 
             </a> 
            </td>
            <td className="tb-style tb-fundamentos">
             <a href="https://thepowerfp.alexiaclassroom.com/course/view.php?id=565" target="_blank" rel="noopener noreferrer">

            Fundaments de Bases de Datos (MP0)
             </a> 
            </td>
            <td   className="tb-style tb-bases">
             <a href="https://thepowerfp.alexiaclassroom.com/course/view.php?id=566" target="_blank" rel="noopener noreferrer">
            Tutoría Bases de Datos
             </a> 
            </td>
            <td  className="tb-style tb-lenguaje">
             <a href="https://thepowerfp.alexiaclassroom.com/course/view.php?id=607" target="_blank" rel="noopener noreferrer">

            Tutoría Lenguaje de Marcas
             </a> 
            </td>
            <td className="tb-style tb-sistemas">
             <a href="https://thepowerfp.alexiaclassroom.com/course/view.php?id=567" target="_blank" rel="noopener noreferrer">

            Tutoría Sistemas Informáticos
             </a> 
            </td>
        </tr>
        <tr className="horarios-table-tbody-tr">
        <td>18:00 - 19:00</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr className="horarios-table-tbody-tr">
        <td>19:00 - 20:00</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td   className="tb-style tb-programacion">
        <a href="https://thepowerfp.alexiaclassroom.com/course/view.php?id=594" target="_blank" rel="noopener noreferrer">
        Tutoría Programación
        </a>
        </td>
        </tr>
        <tr className="horarios-table-tbody-tr">
        <td>20:00 - 21:00</td>

        </tr>
    </tbody>
</table>
  )
}

export default TablaHorarioComponent