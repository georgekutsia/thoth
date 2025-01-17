// data.js

const data = [
  
    {
      "titulo": "Contrato Laboral",
      "explicación": "Es un acuerdo entre el empleado y el empleador que establece las condiciones laborales, derechos y obligaciones de ambas partes.",
      "cocina": "Un contrato entre un chef y el restaurante define sus horarios y responsabilidades.",
      "deporte": "Un jugador profesional firma un contrato con su club para garantizar su salario y condiciones de trabajo.",
      "cine": "En 'El Diablo Viste a la Moda', Andy firma un contrato con Runway que establece sus deberes y expectativas como asistente de Miranda Priestly.",
      "random": "Existen diferentes tipos de contratos laborales en España, como indefinidos, temporales y de formación.",
      "link": "https://example.com/contrato-laboral",
      "link2": "https://example.com/cocina/contrato-laboral"
    },
    {
      "titulo": "Salario Mínimo Interprofesional (SMI)",
      "explicación": "Es el salario mínimo que debe recibir un trabajador por su jornada laboral, establecido anualmente por el gobierno.",
      "cocina": "Un ayudante de cocina tiene derecho a recibir al menos el SMI, independientemente de su puesto.",
      "deporte": "Los trabajadores del mantenimiento de estadios también están protegidos por el SMI.",
      "cine": "En 'Parásitos', la familia Kim trabaja por sueldos bajos, pero luchan por mejorar sus condiciones laborales.",
      "random": "En 2023, el SMI en España se situó en 1.080 euros al mes en 14 pagas.",
      "link": "https://example.com/smi",
      "link2": "https://example.com/cocina/smi"
    },
    {
      "titulo": "Prevención de Riesgos Laborales (PRL)",
      "explicación": "Es un conjunto de medidas y normas para garantizar la seguridad y salud de los trabajadores en su puesto de trabajo.",
      "cocina": "Un restaurante debe proporcionar guantes térmicos para evitar quemaduras en la cocina.",
      "deporte": "Un equipo deportivo debe garantizar condiciones seguras en el campo de entrenamiento.",
      "cine": "En 'Titanic', la falta de medidas de seguridad en la tripulación y los botes salvavidas resultó en una gran tragedia.",
      "random": "La Ley de Prevención de Riesgos Laborales en España se aprobó en 1995.",
      "link": "https://example.com/prl",
      "link2": "https://example.com/cocina/prl"
    },
    {
      "titulo": "Accidente Laboral",
      "explicación": "Es cualquier lesión o daño sufrido por el trabajador como consecuencia de su trabajo.",
      "cocina": "Cortarse mientras se trocean verduras es considerado un accidente laboral.",
      "deporte": "Una lesión durante un entrenamiento oficial se clasifica como accidente laboral.",
      "cine": "En 'Whiplash', Andrew sufre un accidente de tráfico pero intenta seguir tocando la batería pese a su condición.",
      "random": "Los accidentes laborales deben ser comunicados a la mutua o seguridad social.",
      "link": "https://example.com/accidente-laboral",
      "link2": "https://example.com/cocina/accidente-laboral"
    },
    {
      "titulo": "Mutua",
      "explicación": "Es una entidad colaboradora de la Seguridad Social encargada de gestionar contingencias comunes y laborales.",
      "cocina": "Un chef lesionado consulta con la mutua de su empresa para recibir atención médica.",
      "deporte": "Un jugador profesional cuenta con una mutua que gestiona sus accidentes deportivos.",
      "cine": "En 'The Wrestler', el protagonista sufre problemas de salud, pero al ser un trabajador autónomo, no tiene mutua que le cubra.",
      "random": "Las mutuas también ofrecen formación sobre prevención de riesgos laborales.",
      "link": "https://example.com/mutua",
      "link2": "https://example.com/cocina/mutua"
    },
    {
      "titulo": "Despido Improcedente",
      "explicación": "Es el despido que no se ajusta a la normativa laboral o carece de justificación legal.",
      "cocina": "Un ayudante de cocina despedido sin aviso ni motivo podría reclamar un despido improcedente.",
      "deporte": "Un entrenador despedido sin razones justificadas puede acudir a los tribunales laborales.",
      "cine": "En 'Jerry Maguire', el protagonista es despedido por expresar su opinión sobre la industria deportiva.",
      "random": "El trabajador tiene derecho a una indemnización si el despido es declarado improcedente.",
      "link": "https://example.com/despido-improcedente",
      "link2": "https://example.com/cocina/despido-improcedente"
    },
    {
      "titulo": "Convenio Colectivo",
      "explicación": "Es un acuerdo entre trabajadores y empleadores que regula las condiciones laborales de un sector o empresa.",
      "cocina": "El convenio colectivo de la hostelería regula los horarios y salarios de los chefs.",
      "deporte": "El convenio colectivo del fútbol profesional establece los derechos de los jugadores.",
      "cine": "En 'Hairspray', Tracy lucha por la igualdad de derechos laborales y representación en la televisión.",
      "random": "Cada provincia puede tener convenios colectivos diferentes para un mismo sector.",
      "link": "https://example.com/convenio-colectivo",
      "link2": "https://example.com/cocina/convenio-colectivo"
    },
    {
      "titulo": "Vacaciones",
      "explicación": "Son un derecho laboral que permite al trabajador descansar durante un período remunerado.",
      "cocina": "Un chef tiene derecho a un mínimo de 30 días naturales de vacaciones al año.",
      "deporte": "Los jugadores profesionales también disfrutan de períodos de descanso pactados con su club.",
      "cine": "En 'Vacaciones', la familia Griswold planea un viaje caótico debido a sus días libres.",
      "random": "Las vacaciones no pueden ser sustituidas por una compensación económica, salvo en casos de finalización de contrato.",
      "link": "https://example.com/vacaciones",
      "link2": "https://example.com/cocina/vacaciones"
    },
    {
      "titulo": "Permiso Retribuido",
      "explicación": "Es un permiso laboral remunerado para atender situaciones personales o familiares.",
      "cocina": "Un chef puede solicitar un permiso retribuido para asistir a un examen oficial.",
      "deporte": "Un jugador podría pedir un permiso retribuido para asistir al nacimiento de su hijo.",
      "cine": "En 'El Lobo de Wall Street', Jordan Belfort otorga permisos a sus empleados para asuntos personales como parte de su estrategia motivacional.",
      "random": "Los permisos retribuidos están regulados por el Estatuto de los Trabajadores.",
      "link": "https://example.com/permiso-retribuido",
      "link2": "https://example.com/cocina/permiso-retribuido"
    },
    {
      "titulo": "Horas Extraordinarias",
      "explicación": "Son las horas trabajadas que exceden la jornada laboral establecida en el contrato.",
      "cocina": "Un chef que trabaja más allá de su turno para atender un evento realiza horas extraordinarias.",
      "deporte": "Un árbitro que permanece más tiempo debido a una prórroga también realiza horas extraordinarias.",
      "cine": "En 'El Diablo Viste a la Moda', Andy trabaja horas extraordinarias para cumplir con las exigencias de Miranda Priestly.",
      "random": "Las horas extras deben ser compensadas económicamente o con tiempo de descanso.",
      "link": "https://example.com/horas-extraordinarias",
      "link2": "https://example.com/cocina/horas-extraordinarias"
    },
    {
      "titulo": "Jornada Laboral",
      "explicación": "Es el tiempo que un trabajador debe dedicar a su actividad laboral según lo pactado en su contrato.",
      "cocina": "Un chef tiene una jornada laboral de 40 horas semanales, según lo estipulado.",
      "deporte": "Un entrenador de fútbol tiene una jornada adaptada a las necesidades del equipo.",
      "cine": "En 'El Método', los candidatos a un puesto laboral deben soportar una jornada de entrevistas intensas para conseguir el trabajo.",
      "random": "La jornada laboral máxima en España es de 40 horas semanales, salvo excepciones.",
      "link": "https://example.com/jornada-laboral",
      "link2": "https://example.com/cocina/jornada-laboral"
    },
    {
      "titulo": "Baja Laboral",
      "explicación": "Es la situación en la que un trabajador no puede desempeñar sus funciones debido a una enfermedad o accidente.",
      "cocina": "Un chef con una lesión en la mano puede solicitar una baja laboral hasta recuperarse.",
      "deporte": "Un jugador lesionado durante un partido se encuentra en situación de baja laboral.",
      "cine": "En 'Breaking Bad', Walter White solicita una baja médica tras ser diagnosticado con cáncer.",
      "random": "La baja puede ser por contingencias comunes (enfermedad) o profesionales (accidente laboral).",
      "link": "https://example.com/baja-laboral",
      "link2": "https://example.com/cocina/baja-laboral"
    },
    {
      "titulo": "Trabajo a Tiempo Parcial",
      "explicación": "Es una modalidad contractual en la que el trabajador realiza menos horas que la jornada completa.",
      "cocina": "Un camarero que trabaja 20 horas semanales está en un contrato a tiempo parcial.",
      "deporte": "Un fisioterapeuta que atiende solo a ciertos jugadores del equipo tiene un contrato parcial.",
      "cine": "En 'La La Land', Mia trabaja a tiempo parcial en una cafetería mientras persigue su carrera como actriz.",
      "random": "El contrato a tiempo parcial debe especificar el número de horas trabajadas.",
      "link": "https://example.com/tiempo-parcial",
      "link2": "https://example.com/cocina/tiempo-parcial"
    },
    {
      "titulo": "Despido Colectivo",
      "explicación": "Es el despido simultáneo de varios trabajadores, generalmente por causas económicas, técnicas o de producción.",
      "cocina": "El cierre de un restaurante que lleva al despido de todo su personal es un ejemplo de despido colectivo.",
      "deporte": "Si un club reduce el personal administrativo, puede realizar un despido colectivo.",
      "cine": "En 'Up in the Air', Ryan Bingham trabaja despidiendo empleados debido a despidos colectivos masivos.",
      "random": "Los despidos colectivos están regulados por el Estatuto de los Trabajadores.",
      "link": "https://example.com/despido-colectivo",
      "link2": "https://example.com/cocina/despido-colectivo"
    },
    {
      "titulo": "Contrato de Prácticas",
      "explicación": "Es un tipo de contrato para trabajadores que han terminado sus estudios y buscan experiencia profesional.",
      "cocina": "Un joven chef puede trabajar bajo un contrato de prácticas para mejorar sus habilidades.",
      "deporte": "Un entrenador recién graduado puede trabajar en un equipo juvenil bajo este tipo de contrato.",
      "cine": "En 'El Becario', Robert De Niro interpreta a un pasante senior que trabaja bajo un contrato de prácticas en una empresa de moda.",
      "random": "Los contratos de prácticas tienen una duración máxima de dos años.",
      "link": "https://example.com/contrato-practicas",
      "link2": "https://example.com/cocina/contrato-practicas"
    },
    {
      "titulo": "Derecho a la Formación",
      "explicación": "Es el derecho de los trabajadores a recibir formación adecuada para mejorar sus competencias profesionales.",
      "cocina": "Un restaurante puede organizar cursos para que sus chefs aprendan nuevas técnicas culinarias.",
      "deporte": "Un club deportivo ofrece talleres para que los entrenadores mejoren sus estrategias.",
      "cine": "En 'Good Will Hunting', el protagonista es incentivado a recibir formación para aprovechar su talento matemático.",
      "random": "El Estatuto de los Trabajadores establece la formación continua como un derecho.",
      "link": "https://example.com/derecho-formacion",
      "link2": "https://example.com/cocina/derecho-formacion"
    },
    {
      "titulo": "Subcontratación",
      "explicación": "Es la práctica en la que una empresa contrata a otra para realizar ciertas tareas o servicios.",
      "cocina": "Un restaurante subcontrata a una empresa para la limpieza diaria de su local.",
      "deporte": "Un club subcontrata a una empresa de catering para eventos deportivos.",
      "cine": "En 'El Señor de los Anillos', Weta Digital fue subcontratada para crear los efectos visuales de la trilogía.",
      "random": "La subcontratación puede abarcar servicios como seguridad, limpieza o tecnología.",
      "link": "https://example.com/subcontratacion",
      "link2": "https://example.com/cocina/subcontratacion"
    },
    {
      "titulo": "Inspección de Trabajo",
      "explicación": "Es un organismo que supervisa el cumplimiento de las normas laborales en las empresas.",
      "cocina": "La Inspección de Trabajo puede revisar si un restaurante cumple con las normas de PRL.",
      "deporte": "Un estadio debe estar preparado para recibir inspecciones sobre la seguridad de los trabajadores.",
      "cine": "En 'Erin Brockovich', la protagonista investiga a una empresa por malas condiciones laborales y sanitarias.",
      "random": "Las sanciones por incumplimientos detectados en una inspección pueden ser económicas o administrativas.",
      "link": "https://example.com/inspeccion-trabajo",
      "link2": "https://example.com/cocina/inspeccion-trabajo"
    },
    {
      "titulo": "Seguridad Social",
      "explicación": "Es un sistema público que garantiza prestaciones económicas y servicios a los trabajadores y sus familias.",
      "cocina": "Un chef tiene derecho a prestaciones por incapacidad temporal a través de la Seguridad Social.",
      "deporte": "Un jugador lesionado puede recibir asistencia médica gracias a la Seguridad Social.",
      "cine": "En 'Sicko' de Michael Moore, se compara la Seguridad Social en distintos países y sus efectos en los trabajadores.",
      "random": "El sistema de Seguridad Social en España es obligatorio para todos los trabajadores.",
      "link": "https://example.com/seguridad-social",
      "link2": "https://example.com/cocina/seguridad-social"
    },
    {
      "titulo": "Convenios de Empresa",
      "explicación": "Son acuerdos que regulan las condiciones laborales en una empresa específica.",
      "cocina": "Un restaurante puede tener un convenio que establezca horarios específicos para sus empleados.",
      "deporte": "Un club puede definir salarios y beneficios adicionales para su personal a través de un convenio.",
      "cine": "En 'El Método', los candidatos compiten en un proceso de selección basado en reglas empresariales extremas.",
      "random": "Los convenios de empresa tienen prevalencia sobre los convenios sectoriales en ciertos aspectos.",
      "link": "https://example.com/convenios-empresa",
      "link2": "https://example.com/cocina/convenios-empresa"
    },
    {
      "titulo": "Estrategia de Igualdad",
      "explicación": "Conjunto de medidas para garantizar la igualdad de oportunidades entre hombres y mujeres en el ámbito laboral.",
      "cocina": "Un restaurante debe garantizar igualdad salarial entre chefs hombres y mujeres.",
      "deporte": "Un club deportivo implementa medidas para promover la participación de mujeres en puestos directivos.",
      "cine": "En 'Figuras Ocultas', se retrata la lucha de tres mujeres afroamericanas por la igualdad en la NASA.",
      "random": "Las empresas con más de 50 empleados están obligadas a tener un plan de igualdad.",
      "link": "https://example.com/igualdad-laboral",
      "link2": "https://example.com/cocina/igualdad-laboral"
    },
    {
      "titulo": "Contratación Temporal",
      "explicación": "Es un contrato con una duración limitada, generalmente para tareas específicas o de temporada.",
      "cocina": "Un camarero puede ser contratado temporalmente durante la temporada alta.",
      "deporte": "Un entrenador auxiliar puede ser contratado por unos meses durante una competición específica.",
      "cine": "En 'El Becario', Robert De Niro trabaja temporalmente como pasante en una empresa de moda.",
      "random": "Los contratos temporales no pueden superar los 24 meses dentro de un período de 30 meses.",
      "link": "https://example.com/contratacion-temporal",
      "link2": "https://example.com/cocina/contratacion-temporal"
    },
    {
      "titulo": "Contrato Fijo Discontinuo",
      "explicación": "Es un contrato indefinido para trabajos de temporada o intermitentes.",
      "cocina": "Un chef contratado solo durante eventos especiales del restaurante tiene un contrato fijo discontinuo.",
      "deporte": "Un árbitro que solo trabaja en ciertos torneos utiliza este tipo de contrato.",
      "cine": "En 'Birdman', los actores de Broadway trabajan solo en determinadas temporadas.",
      "random": "El contrato fijo discontinuo está regulado en el artículo 16 del Estatuto de los Trabajadores.",
      "link": "https://example.com/fijo-discontinuo",
      "link2": "https://example.com/cocina/fijo-discontinuo"
    },
    {
      "titulo": "Negociación Colectiva",
      "explicación": "Es el proceso mediante el cual trabajadores y empleadores acuerdan las condiciones laborales.",
      "cocina": "Los empleados de un restaurante negocian colectivamente mejoras salariales con su empleador.",
      "deporte": "Jugadores y clubes negocian colectivamente para definir horarios y beneficios.",
      "cine": "En 'Sully', los sindicatos de pilotos negocian mejoras en los protocolos de seguridad aérea.",
      "random": "La negociación colectiva puede incluir sindicatos como representantes de los trabajadores.",
      "link": "https://example.com/negociacion-colectiva",
      "link2": "https://example.com/cocina/negociacion-colectiva"
    },
    {
      "titulo": "Prevención de Acoso Laboral",
      "explicación": "Es el conjunto de medidas para evitar y gestionar casos de acoso en el entorno laboral.",
      "cocina": "Un restaurante debe implementar un protocolo para evitar conductas de acoso entre empleados.",
      "deporte": "Un club debe proteger a sus jugadores y personal de conductas inapropiadas dentro del equipo.",
      "cine": "En 'Bombshell', se muestra el caso real de acoso laboral en la cadena de noticias Fox News.",
      "random": "El acoso laboral puede ser psicológico, físico o sexual.",
      "link": "https://example.com/acoso-laboral",
      "link2": "https://example.com/cocina/acoso-laboral"
    },
    {
      "titulo": "Formación en PRL",
      "explicación": "Es una capacitación obligatoria para trabajadores sobre medidas de prevención de riesgos laborales.",
      "cocina": "Los chefs reciben formación sobre cómo evitar quemaduras y cortes.",
      "deporte": "Los entrenadores reciben formación en primeros auxilios y gestión de emergencias.",
      "cine": "En 'Jurassic Park', los empleados del parque no reciben formación en seguridad, lo que provoca el caos.",
      "random": "La formación en PRL debe ser específica para cada puesto de trabajo.",
      "link": "https://example.com/formacion-prl",
      "link2": "https://example.com/cocina/formacion-prl"
    },
    {
      "titulo": "Derecho de Huelga",
      "explicación": "Es el derecho de los trabajadores a suspender su actividad laboral para reivindicar mejoras laborales.",
      "cocina": "El personal de un restaurante puede ejercer su derecho a huelga por mejoras salariales.",
      "deporte": "Los trabajadores de un estadio pueden convocar una huelga para exigir mejores condiciones laborales.",
      "cine": "En 'Sucedió en Manhattan', los empleados del hotel organizan una protesta por mejores condiciones laborales.",
      "random": "El derecho de huelga está garantizado por la Constitución Española.",
      "link": "https://example.com/derecho-huelga",
      "link2": "https://example.com/cocina/derecho-huelga"
    },
    {
      "titulo": "Protección de Datos Laborales",
      "explicación": "Es la obligación de las empresas de proteger la información personal de sus empleados.",
      "cocina": "Un restaurante no puede compartir datos personales de sus chefs sin autorización.",
      "deporte": "Un club debe proteger los datos médicos de sus jugadores.",
      "cine": "En 'Snowden', se muestra cómo la filtración de datos privados puede afectar a empleados y empresas.",
      "random": "El Reglamento General de Protección de Datos (GDPR) regula esta obligación en España.",
      "link": "https://example.com/proteccion-datos",
      "link2": "https://example.com/cocina/proteccion-datos"
    },
    {
      "titulo": "Incapacidad Permanente",
      "explicación": "Es una situación en la que un trabajador no puede realizar su actividad laboral por motivos de salud.",
      "cocina": "Un chef con una lesión grave en la mano podría solicitar una incapacidad permanente.",
      "deporte": "Un jugador que sufre una lesión irreversible podría recibir esta consideración.",
      "cine": "En 'Million Dollar Baby', la protagonista queda incapacitada tras un accidente en el ring y no puede volver a trabajar.",
      "random": "La incapacidad permanente puede ser parcial, total, absoluta o de gran invalidez.",
      "link": "https://example.com/incapacidad-permanente",
      "link2": "https://example.com/cocina/incapacidad-permanente"
    },
    {
      "titulo": "Teletrabajo",
      "explicación": "Es una modalidad laboral en la que los empleados desempeñan sus tareas fuera de la oficina, utilizando herramientas tecnológicas.",
      "cocina": "Un nutricionista que trabaja desde casa planificando menús realiza teletrabajo.",
      "deporte": "Un analista de datos deportivos que trabaja remotamente para un equipo practica teletrabajo.",
      "cine": "En 'Her', el protagonista trabaja desde casa respondiendo cartas de clientes.",
      "random": "El teletrabajo en España está regulado por el Real Decreto-ley 28/2020.",
      "link": "https://example.com/teletrabajo",
      "link2": "https://example.com/cocina/teletrabajo"
    },
    {
      "titulo": "Horas Complementarias",
      "explicación": "Son horas adicionales a las pactadas en contratos a tiempo parcial, remuneradas según lo estipulado.",
      "cocina": "Un camarero a tiempo parcial que cubre un evento especial realiza horas complementarias.",
      "deporte": "Un preparador físico que realiza sesiones extra con ciertos jugadores podría registrar horas complementarias.",
      "cine": "En 'El Diablo Viste a la Moda', Andy trabaja más allá de su horario regular, acumulando horas complementarias.",
      "random": "Las horas complementarias deben estar pactadas por contrato.",
      "link": "https://example.com/horas-complementarias",
      "link2": "https://example.com/cocina/horas-complementarias"
    },
    {
      "titulo": "Conciliación Familiar",
      "explicación": "Es el derecho de los trabajadores a equilibrar su vida personal, familiar y laboral.",
      "cocina": "Un chef puede solicitar horarios flexibles para atender a sus hijos.",
      "deporte": "Un jugador profesional podría pedir permisos especiales para eventos familiares.",
      "cine": "En 'Mrs. Doubtfire', el protagonista lucha por equilibrar su trabajo con la crianza de sus hijos.",
      "random": "La Ley de Igualdad fomenta medidas de conciliación laboral en las empresas.",
      "link": "https://example.com/conciliacion",
      "link2": "https://example.com/cocina/conciliacion"
    },
    {
      "titulo": "Registro de Jornada",
      "explicación": "Es la obligación de las empresas de registrar las horas trabajadas por sus empleados.",
      "cocina": "En un restaurante, los chefs deben fichar al inicio y final de su turno.",
      "deporte": "Un club deportivo debe registrar el tiempo de los entrenadores y personal auxiliar.",
      "cine": "En 'El Método', los candidatos son monitoreados para controlar su tiempo dentro del proceso de selección.",
      "random": "El registro de jornada es obligatorio desde 2019 en España.",
      "link": "https://example.com/registro-jornada",
      "link2": "https://example.com/cocina/registro-jornada"
    },
    {
      "titulo": "Formación Dual",
      "explicación": "Es un sistema de formación que combina aprendizaje teórico con prácticas en empresas.",
      "cocina": "Un estudiante de hostelería realiza formación dual trabajando en un restaurante.",
      "deporte": "Un fisioterapeuta en formación dual alterna entre teoría y prácticas en un club deportivo.",
      "cine": "En 'El Indomable Will Hunting', el protagonista combina trabajo con formación autodidacta en matemáticas.",
      "random": "La formación dual está regulada por el sistema de formación profesional en España.",
      "link": "https://example.com/formacion-dual",
      "link2": "https://example.com/cocina/formacion-dual"
    },
    {
      "titulo": "Permiso de Lactancia",
      "explicación": "Es un derecho laboral que permite a los trabajadores con hijos menores de 9 meses ausentarse del trabajo por cuidado del bebé.",
      "cocina": "Una chef madre puede disfrutar de descansos para lactancia durante su turno.",
      "deporte": "Una fisioterapeuta madre en un club deportivo puede hacer uso de este permiso.",
      "cine": "En 'Tully', se muestra cómo una madre debe equilibrar el trabajo y la lactancia de su bebé.",
      "random": "El permiso de lactancia puede acumularse en días completos.",
      "link": "https://example.com/permiso-lactancia",
      "link2": "https://example.com/cocina/permiso-lactancia"
    },
    {
      "titulo": "EPI (Equipo de Protección Individual)",
      "explicación": "Es el equipo proporcionado por la empresa para proteger a los trabajadores de riesgos específicos.",
      "cocina": "Los chefs utilizan guantes, gorros y delantales como EPI.",
      "deporte": "Los jugadores de hockey usan cascos y protectores como EPI.",
      "cine": "En 'Cazafantasmas', el equipo usa trajes especiales para evitar contaminación por ectoplasma.",
      "random": "El uso de EPIs es obligatorio según la Ley de PRL.",
      "link": "https://example.com/epi",
      "link2": "https://example.com/cocina/epi"
    },
    {
      "titulo": "Permiso por Matrimonio",
      "explicación": "Es un permiso retribuido que permite a los trabajadores ausentarse por su boda.",
      "cocina": "Un chef puede solicitar días libres por matrimonio.",
      "deporte": "Un preparador físico puede pedir este permiso si contrae matrimonio.",
      "cine": "En 'The Office', Jim y Pam toman días libres tras su boda en las Cataratas del Niágara.",
      "random": "El permiso por matrimonio en España es de 15 días naturales.",
      "link": "https://example.com/permiso-matrimonio",
      "link2": "https://example.com/cocina/permiso-matrimonio"
    },
    {
      "titulo": "Prestación por Desempleo",
      "explicación": "Es un beneficio económico que se otorga a los trabajadores que han perdido su empleo de forma involuntaria.",
      "cocina": "Un camarero despedido de un restaurante puede solicitar esta prestación.",
      "deporte": "Un entrenador que pierde su puesto también tiene derecho a paro si cumple los requisitos.",
      "cine": "En 'En busca de la felicidad', el protagonista lucha por encontrar un empleo tras perder su trabajo.",
      "random": "La duración de la prestación depende del tiempo cotizado.",
      "link": "https://example.com/desempleo",
      "link2": "https://example.com/cocina/desempleo"
    },
    {
      "titulo": "Huelga General",
      "explicación": "Es una huelga convocada para reivindicaciones generales de derechos laborales.",
      "cocina": "Un cierre general de restaurantes durante una huelga es parte de este derecho.",
      "deporte": "El personal técnico de estadios podría unirse a una huelga general.",
      "cine": "En 'Pride', los mineros en huelga reciben el apoyo inesperado de un grupo de activistas.",
      "random": "La huelga general requiere convocatoria formal por los sindicatos.",
      "link": "https://example.com/huelga-general",
      "link2": "https://example.com/cocina/huelga-general"
    },
    {
      "titulo": "Convenio Sectorial",
      "explicación": "Es un acuerdo que regula las condiciones laborales de un sector específico.",
      "cocina": "El convenio de la hostelería regula las condiciones laborales de los restaurantes.",
      "deporte": "El convenio de los trabajadores del deporte regula derechos de entrenadores y preparadores.",
      "cine": "En 'Hairspray', se aborda la lucha por mejores condiciones y equidad en la industria del entretenimiento.",
      "random": "Los convenios sectoriales tienen prevalencia si no hay uno de empresa.",
      "link": "https://example.com/convenio-sectorial",
      "link2": "https://example.com/cocina/convenio-sectorial"
    },
    {
      "titulo": "Permiso por Fallecimiento",
      "explicación": "Es un permiso retribuido que permite a los trabajadores ausentarse por la muerte de un familiar cercano.",
      "cocina": "Un chef puede solicitar este permiso tras el fallecimiento de un familiar directo.",
      "deporte": "Un jugador profesional podría ausentarse temporalmente por este motivo.",
      "cine": "En 'Manchester by the Sea', el protagonista se toma un tiempo tras la muerte de su hermano para encargarse de asuntos familiares.",
      "random": "El permiso suele ser de 2 a 4 días dependiendo de la distancia y la relación familiar.",
      "link": "https://example.com/permiso-fallecimiento",
      "link2": "https://example.com/cocina/permiso-fallecimiento"
    },
    {
      "titulo": "Contrato de Formación y Aprendizaje",
      "explicación": "Es un contrato dirigido a jóvenes que combina trabajo remunerado con formación profesional.",
      "cocina": "Un aprendiz en una cocina puede trabajar bajo este tipo de contrato.",
      "deporte": "Un preparador físico en formación podría tener este contrato mientras aprende en un club.",
      "cine": "En 'El Aprendiz', el protagonista aprende y trabaja en una prestigiosa empresa financiera.",
      "random": "Este contrato está diseñado para personas menores de 30 años sin cualificación profesional.",
      "link": "https://example.com/contrato-formacion",
      "link2": "https://example.com/cocina/contrato-formacion"
    },
    {
      "titulo": "Reestructuración Empresarial",
      "explicación": "Es el proceso en el que una empresa modifica su estructura organizativa por razones económicas o estratégicas.",
      "cocina": "Un grupo de restaurantes que reorganiza su plantilla tras la pandemia es un ejemplo de reestructuración.",
      "deporte": "Un club deportivo que reduce su personal técnico está realizando una reestructuración.",
      "cine": "En 'Up in the Air', el protagonista se encarga de despedir empleados debido a una reestructuración empresarial.",
      "random": "La reestructuración empresarial puede implicar despidos colectivos o reubicación de trabajadores.",
      "link": "https://example.com/reestructuracion",
      "link2": "https://example.com/cocina/reestructuracion"
    },
    {
      "titulo": "Plan de Pensiones",
      "explicación": "Es un sistema de ahorro complementario para la jubilación, ofrecido por las empresas a sus trabajadores.",
      "cocina": "Un restaurante grande puede ofrecer un plan de pensiones a sus chefs como beneficio adicional.",
      "deporte": "Un club deportivo puede incluir planes de pensiones para jugadores al final de su carrera.",
      "cine": "En 'El Método', los ejecutivos compiten por un puesto de trabajo con beneficios como planes de pensiones.",
      "random": "Los planes de pensiones son voluntarios y gestionados por entidades financieras.",
      "link": "https://example.com/plan-pensiones",
      "link2": "https://example.com/cocina/plan-pensiones"
    },
    {
      "titulo": "Prestación por Maternidad y Paternidad",
      "explicación": "Es un subsidio que compensa la pérdida de ingresos por el nacimiento o adopción de un hijo.",
      "cocina": "Una chef madre puede recibir esta prestación durante su permiso de maternidad.",
      "deporte": "Un entrenador que adopta un hijo puede solicitar esta prestación.",
      "cine": "En 'Un Sueño Posible', la familia adopta a un joven y ajusta sus vidas y trabajos para cuidarlo.",
      "random": "En España, ambos progenitores tienen derecho a permisos remunerados tras el nacimiento o adopción.",
      "link": "https://example.com/prestacion-maternidad",
      "link2": "https://example.com/cocina/prestacion-maternidad"
    },
    {
      "titulo": "Protocolo de Actuación ante Emergencias",
      "explicación": "Son medidas definidas para gestionar situaciones de emergencia en el lugar de trabajo.",
      "cocina": "Un restaurante debe tener un protocolo para evacuaciones en caso de incendio.",
      "deporte": "Un estadio debe seguir un protocolo en caso de emergencias como incendios o disturbios.",
      "cine": "En 'Titanic', la falta de un protocolo adecuado de evacuación contribuyó al desastre.",
      "random": "Los protocolos de emergencia deben ser claros y comunicados a todos los empleados.",
      "link": "https://example.com/protocolo-emergencias",
      "link2": "https://example.com/cocina/protocolo-emergencias"
    },
  {
    titulo: 'Reconocimiento Médico Laboral',
    explicación:
      'Es una evaluación médica obligatoria para garantizar que el trabajador está apto para su puesto.',
    cocina:
      'Los chefs deben realizar reconocimientos médicos para garantizar la manipulación segura de alimentos.',
    deporte:
      'Los jugadores profesionales pasan exámenes médicos regulares para asegurar su aptitud.',
    cine: 'Los técnicos de rodaje que trabajan en altura deben realizar un reconocimiento médico específico.',
    random:
      'Los reconocimientos médicos laborales son gratuitos para los trabajadores y obligatorios en ciertos casos.',
    link: 'https://example.com/reconocimiento-medico',
    link2: 'https://example.com/cocina/reconocimiento-medico'
  },
  {
    titulo: 'Convenio de Hostelería',
    explicación:
      'Es un acuerdo colectivo que regula las condiciones laborales en el sector de la hostelería.',
    cocina:
      'Establece salarios mínimos, horarios y descansos para chefs y camareros.',
    deporte:
      'Aplica también en eventos deportivos que contratan servicios de catering.',
    cine: 'Los servicios de catering en rodajes pueden regirse por este convenio.',
    random: 'El convenio puede variar entre provincias y regiones.',
    link: 'https://example.com/convenio-hosteleria',
    link2: 'https://example.com/cocina/convenio-hosteleria'
  },
  {
    titulo: 'Medidas Disciplinarias',
    explicación:
      'Son acciones tomadas por una empresa contra un trabajador por incumplimientos o faltas graves.',
    cocina:
      'Un chef que incumple normas de seguridad puede recibir una amonestación.',
    deporte:
      'Un jugador que no respeta las reglas del equipo puede ser sancionado.',
    cine: 'Un asistente de dirección que incumple protocolos de rodaje puede recibir una advertencia formal.',
    random:
      'Las medidas disciplinarias deben estar justificadas y documentadas.',
    link: 'https://example.com/medidas-disciplinarias',
    link2: 'https://example.com/cocina/medidas-disciplinarias'
  },
  {
    titulo: 'Plan de Prevención',
    explicación:
      'Es un documento que detalla las medidas de seguridad y salud que debe implementar una empresa.',
    cocina:
      'Un restaurante debe tener un plan de prevención que incluya manejo de cuchillos y equipos calientes.',
    deporte:
      'Un estadio debe tener medidas de prevención para evitar accidentes en el campo.',
    cine: 'Una productora debe elaborar un plan de prevención para garantizar la seguridad durante el rodaje.',
    random:
      'El plan de prevención es obligatorio para todas las empresas, independientemente de su tamaño.',
    link: 'https://example.com/plan-prevencion',
    link2: 'https://example.com/cocina/plan-prevencion'
  },
  {
    titulo: 'Subsidio por Incapacidad Temporal',
    explicación:
      'Es una prestación económica para trabajadores que no pueden realizar su trabajo temporalmente por enfermedad o accidente.',
    cocina:
      'Un chef con una lesión puede solicitar este subsidio mientras se recupera.',
    deporte:
      'Un jugador lesionado puede recibir esta prestación hasta volver a entrenar.',
    cine: 'Un operador de cámara lesionado durante el rodaje puede solicitar el subsidio mientras está de baja.',
    random:
      'El subsidio cubre un porcentaje del salario, según el tiempo de baja.',
    link: 'https://example.com/subsidio-incapacidad',
    link2: 'https://example.com/cocina/subsidio-incapacidad'
  },
  {
    titulo: 'Estatuto de los Trabajadores',
    explicación:
      'Es la normativa principal que regula los derechos y deberes de los trabajadores en España.',
    cocina: 'Los derechos de los chefs están protegidos bajo este estatuto.',
    deporte:
      'El personal técnico de clubes deportivos también está regulado por el estatuto.',
    cine: 'El personal técnico y artístico de los rodajes está amparado por el Estatuto de los Trabajadores.',
    random:
      'El Estatuto de los Trabajadores fue aprobado en 1980 y ha sido actualizado varias veces.',
    link: 'https://example.com/estatuto-trabajadores',
    link2: 'https://example.com/cocina/estatuto-trabajadores'
  },
  {
    titulo: 'Igualdad Retributiva',
    explicación:
      'Es el principio de que trabajadores que realizan el mismo trabajo deben recibir el mismo salario, sin importar su género.',
    cocina:
      'Un chef mujer debe recibir el mismo salario que un hombre en el mismo puesto.',
    deporte:
      'Una entrenadora debe ser retribuida igual que sus colegas masculinos por el mismo trabajo.',
    cine: 'Una directora debe recibir el mismo salario que un director para proyectos equivalentes.',
    random: 'La Ley de Igualdad en España refuerza este principio.',
    link: 'https://example.com/igualdad-retributiva',
    link2: 'https://example.com/cocina/igualdad-retributiva'
  },
  {
    titulo: 'Prevención de Riesgos Psicosociales',
    explicación:
      'Son medidas para evitar factores de estrés o conflictos en el lugar de trabajo.',
    cocina:
      'Evitar jornadas excesivas para chefs es parte de la prevención de riesgos psicosociales.',
    deporte:
      'Un equipo debe gestionar adecuadamente las expectativas para evitar presión excesiva sobre sus jugadores.',
    cine: 'Un productor debe implementar medidas para evitar estrés excesivo en el equipo técnico durante un rodaje.',
    random:
      'La prevención de riesgos psicosociales incluye evaluar el ambiente laboral.',
    link: 'https://example.com/riesgos-psicosociales',
    link2: 'https://example.com/cocina/riesgos-psicosociales'
  },
  {
    titulo: 'Evaluación de Desempeño',
    explicación:
      'Es el proceso de medir el rendimiento y la productividad de un trabajador.',
    cocina:
      'Los chefs son evaluados por la calidad de los platos y el tiempo de preparación.',
    deporte:
      'Los entrenadores evalúan a los jugadores según su desempeño en el campo.',
    cine: 'Un director de producción evalúa el rendimiento del equipo técnico durante un proyecto.',
    random:
      'La evaluación de desempeño puede influir en aumentos salariales o promociones.',
    link: 'https://example.com/evaluacion-desempeno',
    link2: 'https://example.com/cocina/evaluacion-desempeno'
  }
]

export default data
