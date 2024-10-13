import "./tablaHorario.css"

import { Context } from "../../../shared/context";
import { useContext } from "react";
import HorarioTdComponent from "../horario-td/HorarioTdComponent";


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
            <HorarioTdComponent linkClase={"https://thepowerfp.alexiaclassroom.com/course/view.php?id=566"} linkZoom={"https://meet.google.com/sfz-afik-hfs"} texto={"Base de datos"} style="bases"/>
            <HorarioTdComponent linkClase={"https://thepowerfp.alexiaclassroom.com/course/view.php?id=566"} linkZoom={"https://meet.google.com/sfz-afik-hfs"} texto={"Base de datos"}/>

            <td></td>
            <td  className="tb-style tb-entornos">
             <a href="https://thepowerfp.alexiaclassroom.com/course/view.php?id=611" target="_blank" rel="noopener noreferrer">

            Tutoría Entornos
             </a> 
                <a href="https://meet.google.com/jdk-bjdk-abg" target="_blank" rel="noopener noreferrer"> <i className="fa-solid fa-link"></i></a>

            </td>
            <td  className="tb-style tb-lenguaje">
             <a href="https://thepowerfp.alexiaclassroom.com/course/view.php?id=607" target="_blank" rel="noopener noreferrer">

            Lenguaje de Marcas
             </a> 
                <a href="https://meet.google.com/hxc-efvc-wjb" target="_blank" rel="noopener noreferrer"> <i className="fa-solid fa-link"></i></a>

            </td>
            <td  className="tb-style tb-programacion">
             <a href="https://thepowerfp.alexiaclassroom.com/course/view.php?id=594" target="_blank" rel="noopener noreferrer">

            Programación
             </a> 
             <a href="https://meet.google.com/jgn-xnpc-dvj" target="_blank" rel="noopener noreferrer"> <i className="fa-solid fa-link"></i></a>

            </td>

        </tr>
        <tr className="horarios-table-tbody-tr"> 

        <td>16:00 - 17:00</td>
            <td className="tb-style tb-itinerario"> 
             <a href="https://thepowerfp.alexiaclassroom.com/course/view.php?id=591" target="_blank" rel="noopener noreferrer">

            Itinerario Personal I
             </a>
                <a href="https://meet.google.com/owd-wkey-uid" target="_blank" rel="noopener noreferrer"> <i className="fa-solid fa-link"></i></a>

            </td>

            <td></td>
            <td className="tb-style tb-fundamentos"> 
             <a href="https://thepowerfp.alexiaclassroom.com/course/view.php?id=565" target="_blank" rel="noopener noreferrer">

            Tutoría Fundamentos de Bases de Datos (MPO)
             </a>
                <a href="https://meet.google.com/xwv-eock-ngs" target="_blank" rel="noopener noreferrer"> <i className="fa-solid fa-link"></i></a>

            </td>
            <td className="tb-style tb-sistemas"> 
             <a href="https://thepowerfp.alexiaclassroom.com/course/view.php?id=567" target="_blank" rel="noopener noreferrer">

            Sistemas Informáticos
             </a>
                <a href="https://meet.google.com/mys-ydbh-onu" target="_blank" rel="noopener noreferrer"> <i className="fa-solid fa-link"></i></a>

            </td>
            <td className="tb-style tb-itinerario"> 
             <a href="https://thepowerfp.alexiaclassroom.com/course/view.php?id=591" target="_blank" rel="noopener noreferrer">

            Tutoría Itinerario Personal I
             </a>
                <a href="https://meet.google.com/jds-eeek-yku" target="_blank" rel="noopener noreferrer"> <i className="fa-solid fa-link"></i></a>

            </td>
        </tr>
        <tr className="horarios-table-tbody-tr"> 

            <td>17:00 - 18:00</td>
            <td className="tb-style tb-entornos">
             <a href="https://thepowerfp.alexiaclassroom.com/course/view.php?id=611" target="_blank" rel="noopener noreferrer">

            Entornos 
             </a> 
                <a href="https://meet.google.com/vqw-itrf-dpo" target="_blank" rel="noopener noreferrer"> <i className="fa-solid fa-link"></i></a>

            </td>
            <td className="tb-style tb-fundamentos">
             <a href="https://thepowerfp.alexiaclassroom.com/course/view.php?id=565" target="_blank" rel="noopener noreferrer">

            Fundaments de Bases de Datos (MPO)
             </a> 
                <a href="https://meet.google.com/jvi-ktrc-wbi" target="_blank" rel="noopener noreferrer"> <i className="fa-solid fa-link"></i></a>

            </td>
            <td   className="tb-style tb-bases">
             <a href="https://thepowerfp.alexiaclassroom.com/course/view.php?id=566" target="_blank" rel="noopener noreferrer">
            Tutoría Bases de Datos
             </a> 
                <a href="https://meet.google.com/him-ktrz-unr" target="_blank" rel="noopener noreferrer"> <i className="fa-solid fa-link"></i></a>

            </td>
            <td  className="tb-style tb-lenguaje">
             <a href="https://thepowerfp.alexiaclassroom.com/course/view.php?id=607" target="_blank" rel="noopener noreferrer">

            Tutoría Lenguaje de Marcas
             </a> 
                <a href="https://meet.google.com/okd-nrtm-hfj" target="_blank" rel="noopener noreferrer"> <i className="fa-solid fa-link"></i></a>

            </td>
            <td className="tb-style tb-sistemas">
             <a href="https://thepowerfp.alexiaclassroom.com/course/view.php?id=567" target="_blank" rel="noopener noreferrer">

            Tutoría Sistemas Informáticos
             </a> 
                <a href="https://meet.google.com/iej-axug-nnr" target="_blank" rel="noopener noreferrer"> <i className="fa-solid fa-link"></i></a>

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
            <a href="https://meet.google.com/xmm-srfc-dxe" target="_blank" rel="noopener noreferrer"> <i className="fa-solid fa-link"></i></a>

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