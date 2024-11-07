import "./tablaHorario.css";

import { Context } from "../../../shared/context";
import { useContext } from "react";
import HorarioTdComponent from "../horario-td/HorarioTdComponent";

function TablaHorarioComponent() {
  const { isNightMode } = useContext(Context);

  return (
    <table border="1" className={`horarios-table ${isNightMode}`}>
      <thead className="horarios-table-thead">
        <tr className="horarios-table-thead-tr">
          <th></th>
          <th>Lunes</th>
          <th>Martes</th>
          <th>Miércoles</th>
          <th>Jueves</th>
          <th>Viernes</th>
        </tr>
      </thead>
      <tbody className="horarios-table-tbody">
        <tr className="horarios-table-tbody-tr">
          <td>15:00 - 16:00</td>
          <HorarioTdComponent
            linkClase={"https://thepowerfp.alexiaclassroom.com/course/view.php?id=566"}
            linkZoom={"https://meet.google.com/mtz-bpem-hzk?authuser=1"}
            texto={"Base de datos"}
            style="bases"
          />
          <td></td>
          <HorarioTdComponent
            linkClase={"https://thepowerfp.alexiaclassroom.com/course/view.php?id=611"}
            linkZoom={"https://meet.google.com/mfs-gkdg-erw?authuser=1"}
            texto={"Tutoría Entornos"}
            style="entornos"
          />
          <HorarioTdComponent
            linkClase={"https://meet.google.com/xry-vrgr-crr?authuser=1"}
            linkZoom={"https://meet.google.com/xry-vrgr-crr?authuser=1"}
            texto={"Lenguaje de Marcas"}
            style="lenguaje"
          />
          <HorarioTdComponent
            linkClase={"https://thepowerfp.alexiaclassroom.com/course/view.php?id=594"}
            linkZoom={"https://meet.google.com/xni-iwwd-nzw?authuser=1"}
            texto={"Programación"}
            style="programacion"
          />
        </tr>
        <tr className="horarios-table-tbody-tr">
          <td>16:00 - 17:00</td>
          <HorarioTdComponent
            linkClase={"https://thepowerfp.alexiaclassroom.com/course/view.php?id=591"}
            linkZoom={"https://meet.google.com/ofm-jkxg-vdo?authuser=1"}
            texto={"Itinerario Personal I"}
            style="itinerario"
          />
          <td></td>
          <HorarioTdComponent
            linkClase={"https://thepowerfp.alexiaclassroom.com/course/view.php?id=565"}
            linkZoom={"https://meet.google.com/mxn-sgks-gjg?authuser=0"}
            texto={"Tutoría Fundamentos de Bases de Datos"}
            style="fundamentos"
          />
          <HorarioTdComponent
            linkClase={"https://thepowerfp.alexiaclassroom.com/course/view.php?id=567"}
            linkZoom={"https://meet.google.com/yci-ywju-aas?authuser=1"}
            texto={"Sistemas Informáticos"}
            style="sistemas"
          />
          <HorarioTdComponent
            linkClase={"https://thepowerfp.alexiaclassroom.com/course/view.php?id=591"}
            linkZoom={"https://meet.google.com/vvb-smhu-dfi?authuser=1"}
            texto={"Tutoría Itinerario Personal I"}
            style="itinerario"
          />
        </tr>
        <tr className="horarios-table-tbody-tr">
          <td>17:00 - 18:00</td>
          <HorarioTdComponent
            linkClase={"https://thepowerfp.alexiaclassroom.com/course/view.php?id=611"}
            linkZoom={"https://meet.google.com/evj-ijtt-fhb?authuser=1"}
            texto={"Entornos"}
            style="entornos"
          />
          <HorarioTdComponent
            linkClase={"https://thepowerfp.alexiaclassroom.com/course/view.php?id=565"}
            linkZoom={"https://meet.google.com/gye-xmre-xsd?authuser=1"}
            texto={"Fundamentos de Bases de Datos"}
            style="fundamentos"
          />
          <HorarioTdComponent
            linkClase={"https://thepowerfp.alexiaclassroom.com/course/view.php?id=566"}
            linkZoom={"https://meet.google.com/tes-pkvr-rfb?authuser=1"}
            texto={"Tutoría Bases de Datos"}
            style="bases"
          />
          <HorarioTdComponent
            linkClase={"https://thepowerfp.alexiaclassroom.com/course/view.php?id=607"}
            linkZoom={"https://meet.google.com/hro-eeqr-fet?authuser=1"}
            texto={"Tutoría Lenguaje de Marcas"}
            style="lenguaje"
          />
          <HorarioTdComponent
            linkClase={"https://thepowerfp.alexiaclassroom.com/course/view.php?id=567"}
            linkZoom={"https://meet.google.com/dqp-qvxn-cbf?authuser=1"}
            texto={"Tutoría Sistemas Informáticos"}
            style="sistemas"
          />
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
          <HorarioTdComponent
            linkClase={"https://thepowerfp.alexiaclassroom.com/course/view.php?id=594"}
            linkZoom={"https://meet.google.com/dqp-qvxn-cbf?authuser=1"}
            texto={"Tutoría Programación"}
            style="programacion"
          />
        </tr>
        <tr className="horarios-table-tbody-tr">
          <td>20:00 - 21:00</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TablaHorarioComponent;
