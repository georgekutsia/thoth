const data = [
  {
    titulo: 'Disco Duro',
    explicación:
      'El disco duro es el dispositivo de almacenamiento de datos de un ordenador, donde se guardan archivos, programas y el sistema operativo.',
    cine: 'El disco duro es como la sala de proyección en un cine, donde se almacenan todas las películas que se van a mostrar.',
    cocina:
      'El disco duro es como la despensa de una cocina, donde guardas todos los ingredientes necesarios para hacer diferentes platos.',
    deporte:
      'El disco duro es como la banca de un equipo, donde se almacenan los jugadores suplentes esperando su momento para entrar en el partido.',
    random:
      'El disco duro es como una biblioteca gigante, llena de libros y archivos que puedes consultar en cualquier momento.',
    link: '',
    link2: ''
  },
  {
    titulo: 'Memoria RAM',
    explicación:
      'La memoria RAM es un tipo de almacenamiento temporal de un ordenador, que se utiliza para guardar los datos que se están usando en ese momento.',
    cine: 'La RAM es como el guion en las manos del director, que está disponible en todo momento mientras se rueda la película.',
    cocina:
      'La RAM es como la mesa de trabajo en la cocina, donde tienes los ingredientes listos para preparar la comida.',
    deporte:
      'La RAM es como los jugadores que están en el campo, activos y participando en el partido en tiempo real.',
    random:
      'La RAM es como una pizarra blanca que se usa para escribir temporalmente algo y luego borrarlo cuando ya no es necesario.',
    link: '',
    link2: ''
  },
  {
    titulo: 'CPU',
    explicación:
      'La CPU, o Unidad Central de Procesamiento, es el cerebro del ordenador, encargado de ejecutar las instrucciones y procesar los datos.',
    cine: 'La CPU es como el director de cine, que se asegura de que todos sigan el guion y las escenas se rueden correctamente.',
    cocina:
      'La CPU es como el chef, que organiza todo el trabajo en la cocina y asegura que cada plato salga bien.',
    deporte:
      'La CPU es como el entrenador, que da las instrucciones a los jugadores y organiza la estrategia del equipo.',
    random:
      'La CPU es como el maestro de ceremonias en un espectáculo, que coordina todo lo que sucede sobre el escenario.',
    link: '',
    link2: ''
  },
  {
    titulo: 'Hardware',
    explicación:
      'Es la parte física de un sistema informático, incluyendo componentes como la CPU, RAM y almacenamiento.',
    cocina:
      'El hardware es como los utensilios y electrodomésticos en una cocina.',
    deporte:
      'El equipamiento utilizado por los jugadores en un partido es comparable al hardware.',
    random:
      'El hardware puede clasificarse en componentes internos y periféricos.',
    link: 'https://example.com/hardware',
    link2: 'https://example.com/cocina/hardware'
  },
  {
    titulo: 'Software',
    explicación:
      'Son las instrucciones y programas que controlan el hardware y realizan tareas específicas.',
    cocina:
      'El software es como las recetas que guían el uso de los utensilios en la cocina.',
    deporte:
      'Las estrategias de un entrenador son como el software para el equipo.',
    random:
      'El software se clasifica en sistemas operativos, aplicaciones y utilidades.',
    link: 'https://example.com/software',
    link2: 'https://example.com/cocina/software'
  },
  {
    titulo: 'Firmware',
    explicación:
      'Es un software especializado integrado en hardware que controla funciones específicas.',
    cocina:
      'El firmware es como las instrucciones preprogramadas de un horno inteligente.',
    deporte: 'Un marcador electrónico con reglas predefinidas usa firmware.',
    random:
      'El firmware se encuentra en dispositivos como impresoras, routers y cámaras.',
    link: 'https://example.com/firmware',
    link2: 'https://example.com/cocina/firmware'
  },
  {
    titulo: 'Sistema de Archivos',
    explicación:
      'Es la forma en que un sistema operativo organiza y almacena archivos en un dispositivo.',
    cocina:
      'Un sistema de archivos es como las estanterías de una despensa, organizando ingredientes.',
    deporte:
      'Organizar datos de jugadores y partidos en carpetas es como un sistema de archivos.',
    random: 'Los sistemas de archivos comunes incluyen FAT32, NTFS y ext4.',
    link: 'https://example.com/sistema-archivos',
    link2: 'https://example.com/cocina/sistema-archivos'
  },
  {
    titulo: 'Controlador de Dispositivo',
    explicación:
      'Es un software que permite que el sistema operativo se comunique con el hardware.',
    cocina:
      'Un controlador es como un manual de instrucciones para usar un electrodoméstico en la cocina.',
    deporte:
      'El uso de dispositivos portátiles para rastrear datos de jugadores necesita controladores.',
    random:
      'Los controladores deben ser compatibles con el sistema operativo y el hardware específico.',
    link: 'https://example.com/controladores',
    link2: 'https://example.com/cocina/controladores'
  },
  {
    titulo: 'Puertos de Comunicación',
    explicación:
      'Son interfaces físicas o virtuales para transferir datos entre dispositivos.',
    cocina:
      'Los puertos de comunicación son como las tuberías que transportan agua y gas en la cocina.',
    deporte:
      'Conectar cámaras y micrófonos en un estadio utiliza puertos de comunicación.',
    random: 'Los puertos más comunes incluyen USB, HDMI y Ethernet.',
    link: 'https://example.com/puertos',
    link2: 'https://example.com/cocina/puertos'
  },
  {
    titulo: 'Bit y Byte',
    explicación:
      'Un bit es la unidad más pequeña de datos, mientras que un byte equivale a 8 bits.',
    cocina: 'Un bit es como un grano de arroz; un byte es un puñado de arroz.',
    deporte:
      'Un bit es como un pase, y un byte representa una jugada completa.',
    random: 'Un kilobyte (KB) equivale a 1024 bytes en computación.',
    link: 'https://example.com/bit-byte',
    link2: 'https://example.com/cocina/bit-byte'
  },
  {
    titulo: 'Procesador Multinúcleo',
    explicación:
      'Es un procesador con varios núcleos que ejecutan tareas de manera simultánea.',
    cocina:
      'Un procesador multinúcleo es como un equipo de chefs que trabajan en paralelo.',
    deporte:
      'Un equipo con jugadores especializados que trabajan juntos representa un procesador multinúcleo.',
    random:
      'Los procesadores multinúcleo mejoran el rendimiento en tareas multitarea.',
    link: 'https://example.com/multinucleo',
    link2: 'https://example.com/cocina/multinucleo'
  },
  {
    titulo: 'Virtualización',
    explicación:
      'Es la creación de versiones virtuales de recursos físicos, como servidores o sistemas operativos.',
    cocina:
      'La virtualización es como tener recetas genéricas adaptadas a diferentes cocinas.',
    deporte:
      'Un simulador de partidos es un ejemplo de virtualización en deportes.',
    random: 'Las herramientas de virtualización incluyen VMware y VirtualBox.',
    link: 'https://example.com/virtualizacion',
    link2: 'https://example.com/cocina/virtualizacion'
  },
  {
    titulo: 'Firmware UEFI',
    explicación:
      'Es una interfaz moderna que reemplaza al BIOS y mejora las capacidades de arranque.',
    cocina:
      'El UEFI es como un manual actualizado que ofrece más opciones para cocinar.',
    deporte:
      'Una nueva herramienta de análisis que reemplaza a sistemas tradicionales es como UEFI.',
    random:
      'UEFI permite el arranque seguro y es compatible con discos grandes.',
    link: 'https://example.com/uefi',
    link2: 'https://example.com/cocina/uefi'
  },
  {
    titulo: 'Overhead de Procesamiento',
    explicación:
      'Es la carga adicional en recursos que surge al gestionar tareas o procesos.',
    cocina:
      'El overhead es como el tiempo extra necesario para limpiar después de cocinar.',
    deporte:
      'El tiempo para reorganizar tácticas en medio de un partido representa overhead.',
    random:
      'Reducir el overhead mejora la eficiencia en sistemas computacionales.',
    link: 'https://example.com/overhead',
    link2: 'https://example.com/cocina/overhead'
  },
  {
    titulo: 'Balanceo de Carga',
    explicación:
      'Es la distribución del tráfico o tareas entre múltiples recursos para optimizar el rendimiento.',
    cocina:
      'Asignar tareas equitativamente entre varios chefs es como el balanceo de carga.',
    deporte:
      'Distribuir el esfuerzo entre los jugadores durante un partido es similar al balanceo de carga.',
    random:
      'Los balanceadores de carga son comunes en servidores web para manejar alto tráfico.',
    link: 'https://example.com/balanceo-carga',
    link2: 'https://example.com/cocina/balanceo-carga'
  },
  {
    titulo: 'QoS (Calidad de Servicio)',
    explicación:
      'Es una técnica para gestionar el tráfico de red y garantizar prioridades específicas.',
    cocina:
      'Priorizar los platos que deben servirse primero es como manejar QoS.',
    deporte:
      'Decidir qué jugadores entran en juego según la situación es un ejemplo de QoS.',
    random:
      'QoS es esencial en aplicaciones sensibles al tiempo como VoIP y streaming.',
    link: 'https://example.com/qos',
    link2: 'https://example.com/cocina/qos'
  },
  {
    titulo: 'Cluster',
    explicación:
      'Es un conjunto de computadoras que trabajan juntas como un solo sistema.',
    cocina:
      'Un equipo de chefs trabajando coordinadamente para preparar un banquete es como un cluster.',
    deporte:
      'Un grupo de jugadores actuando como unidad táctica es similar a un cluster.',
    random:
      'Los clusters son comunes en computación de alto rendimiento y big data.',
    link: 'https://example.com/cluster',
    link2: 'https://example.com/cocina/cluster'
  },
  {
    titulo: 'Medidas de Rendimiento',
    explicación:
      'Son métricas que evalúan la eficiencia y capacidad de un sistema.',
    cocina:
      'Medir el tiempo que tarda un chef en preparar un plato es una medida de rendimiento.',
    deporte:
      'El tiempo de reacción de un portero en detener goles es una métrica de rendimiento.',
    random:
      'Las medidas comunes incluyen throughput, latencia y tiempo de respuesta.',
    link: 'https://example.com/rendimiento',
    link2: 'https://example.com/cocina/rendimiento'
  },
  {
    titulo: 'Latencia',
    explicación:
      'Es el tiempo que tarda un sistema en responder a una solicitud.',
    cocina:
      'El tiempo desde que se da una orden hasta que el chef comienza a cocinar es latencia.',
    deporte:
      'El tiempo de reacción de un jugador ante un pase es comparable a la latencia.',
    random: 'Reducir la latencia es crítico en aplicaciones en tiempo real.',
    link: 'https://example.com/latencia',
    link2: 'https://example.com/cocina/latencia'
  },
  {
    titulo: 'Disco NAS',
    explicación:
      'Es un dispositivo de almacenamiento conectado a la red que permite compartir datos entre varios usuarios.',
    cocina:
      'Un disco NAS es como una despensa central que abastece a varias estaciones de cocina.',
    deporte:
      'Un sistema de datos compartidos en un centro de entrenamiento es como un NAS.',
    random:
      'Los discos NAS son ideales para entornos de oficina y hogares conectados.',
    link: 'https://example.com/nas',
    link2: 'https://example.com/cocina/nas'
  },
  {
    titulo: 'Logs del Sistema',
    explicación:
      'Son registros que documentan eventos y actividades en un sistema informático.',
    cocina:
      'Registrar los platos preparados y servidos en una libreta es como usar logs.',
    deporte:
      'Registrar las faltas y goles de un partido es un ejemplo de logs.',
    random: 'Los logs son útiles para depuración y análisis de problemas.',
    link: 'https://example.com/logs',
    link2: 'https://example.com/cocina/logs'
  },
  {
    titulo: 'Impresora',
    explicación:
      'La impresora es un dispositivo que convierte los documentos digitales en físicos, imprimiendo en papel lo que está en el ordenador.',
    cine: 'La impresora es como la sala de montaje, donde las escenas filmadas se convierten en la versión final de la película.',
    cocina:
      'La impresora es como el horno, que convierte los ingredientes crudos en un plato terminado y listo para comer.',
    deporte:
      'La impresora es como el marcador electrónico en un estadio, mostrando en pantalla lo que está ocurriendo en el partido.',
    random:
      'La impresora es como una fotocopiadora de la mente, plasmando en papel las ideas y pensamientos que tienes en la cabeza.',
    link: '',
    link2: ''
  },
  {
    titulo: 'Teclado',
    explicación:
      'El teclado es un dispositivo de entrada que permite al usuario escribir y dar órdenes al ordenador.',
    cine: 'El teclado es como la máquina de escribir de un guionista, donde se crea la historia que luego se convertirá en película.',
    cocina:
      'El teclado es como el cuchillo de un chef, que se usa para preparar todos los ingredientes antes de cocinar.',
    deporte:
      'El teclado es como los zapatos de los jugadores, la herramienta principal para moverse y controlar el juego.',
    random:
      'El teclado es como un piano, donde cada tecla puede producir una nota diferente que compone una melodía completa.',
    link: '',
    link2: ''
  },
  {
    titulo: 'Tarjeta de Red',
    explicación:
      'La tarjeta de red permite que un ordenador se conecte a internet o a otras redes de ordenadores.',
    cine: 'La tarjeta de red es como el proyector que conecta la película con la pantalla, haciendo que todo el mundo pueda verla.',
    cocina:
      'La tarjeta de red es como el camarero que conecta la cocina con los comensales, trayendo la comida a la mesa.',
    deporte:
      'La tarjeta de red es como el árbitro, que conecta las reglas del juego con la acción en el campo.',
    random:
      'La tarjeta de red es como un puente, conectando dos islas para que las personas puedan ir de un lado a otro.',
    link: '',
    link2: ''
  },
  {
    titulo: 'Tarjeta gráfica',
    explicación:
      'La tarjeta gráfica es el componente que se encarga de procesar y mostrar imágenes en la pantalla del ordenador.',
    cine: 'La tarjeta gráfica es como el equipo de efectos especiales, encargado de crear las imágenes más espectaculares para la película.',
    cocina:
      'La tarjeta gráfica es como el plato de presentación final, donde todo el trabajo de cocina se muestra en su mejor aspecto.',
    deporte:
      'La tarjeta gráfica es como las cámaras de televisión, que capturan y transmiten las mejores imágenes del partido.',
    random:
      'La tarjeta gráfica es como un pintor que convierte una idea en una obra de arte visual.',
    link: '',
    link2: ''
  },
  {
    titulo: 'Escáner',
    explicación:
      'El escáner es un dispositivo que convierte documentos físicos en formato digital para ser usados o guardados en el ordenador.',
    cine: 'El escáner es como un restaurador de películas antiguas, que digitaliza los rollos de película para preservarlos.',
    cocina:
      'El escáner es como una batidora, que convierte los ingredientes sólidos en algo más fluido y fácil de procesar.',
    deporte:
      'El escáner es como una cámara lenta, que convierte un momento del partido en una secuencia detallada para su análisis.',
    random:
      'El escáner es como un filtro de Instagram, que convierte una imagen ordinaria en algo que puedes compartir digitalmente.',
    link: '',
    link2: ''
  },
  {
    titulo: 'Pantalla',
    explicación:
      'La pantalla es el dispositivo de salida principal de un ordenador, donde se muestran las imágenes, textos y videos.',
    cine: 'La pantalla es como la gran pantalla del cine, donde se proyecta la película para que el público la disfrute.',
    cocina:
      'La pantalla es como el plato final, donde todo lo que has cocinado se muestra para que lo vean y lo disfruten.',
    deporte:
      'La pantalla es como el marcador del estadio, donde todos pueden ver los resultados y lo que está sucediendo en el partido.',
    random:
      'La pantalla es como una ventana mágica, que te permite ver otros mundos y realidades desde tu lugar.',
    link: '',
    link2: ''
  },
  {
    titulo: 'Fuente de alimentación',
    explicación:
      'La fuente de alimentación es el componente del ordenador que suministra energía eléctrica a todos los demás componentes.',
    cine: 'La fuente de alimentación es como el generador de un set de filmación, que proporciona electricidad para las cámaras, luces y equipo.',
    cocina:
      'La fuente de alimentación es como el gas o la electricidad que alimenta los fogones, sin ella, no se podría cocinar nada.',
    deporte:
      'La fuente de alimentación es como la condición física de un atleta, la energía que mantiene todo en funcionamiento durante el partido.',
    random:
      'La fuente de alimentación es como el corazón, que bombea sangre (energía) a todas las partes del cuerpo.',
    link: '',
    link2: ''
  },
  {
    titulo: 'Ratón',
    explicación:
      'El ratón es un dispositivo de entrada que permite al usuario interactuar con el ordenador moviendo un cursor en la pantalla.',
    cine: 'El ratón es como una cámara que sigue la acción en la película, moviéndose de una escena a otra con precisión.',
    cocina:
      'El ratón es como una espátula, que te permite mover los ingredientes o alimentos en la sartén con precisión y control.',
    deporte:
      'El ratón es como el balón en un partido, controlado por el jugador que lo dirige a donde quiere que vaya.',
    random:
      'El ratón es como una varita mágica, que te permite apuntar y hacer que las cosas sucedan con solo un toque.',
    link: '',
    link2: ''
  },
  {
    titulo: 'Placa base',
    explicación:
      'La placa base es el componente central de un ordenador donde se conectan y comunican todos los demás componentes.',
    cine: 'La placa base es como el set de filmación, donde todo el equipo y los actores se reúnen para trabajar juntos en la película.',
    cocina:
      'La placa base es como la cocina en sí misma, donde todo el equipamiento está conectado y en funcionamiento para hacer las comidas.',
    deporte:
      'La placa base es como el campo de juego, donde todos los jugadores y componentes interactúan y se organizan para el partido.',
    random:
      'La placa base es como una estación central de trenes, donde todo está interconectado y las líneas van hacia diferentes destinos.',
    link: '',
    link2: ''
  },
  {
    titulo: 'Conectores IDE',
    explicación:
      'Los conectores IDE son un tipo de interfaz que permite conectar discos duros y unidades ópticas a la placa base del ordenador.',
    cine: 'Los conectores IDE son como las bobinas de cinta que conectan la película al proyector, asegurando que la película pueda reproducirse.',
    cocina:
      'Los conectores IDE son como las tuberías de gas en una cocina, que conectan los fogones con la fuente de energía.',
    deporte:
      'Los conectores IDE son como las zapatillas de un corredor, que lo conectan directamente con el suelo para poder moverse rápidamente.',
    random:
      'Los conectores IDE son como una antigua carretera, que aunque ha sido reemplazada por nuevas rutas, sigue funcionando para conectar dos lugares.',
    link: '',
    link2: ''
  },
  {
    titulo: 'Algoritmo de Compresión',
    explicación:
      'Es un proceso para reducir el tamaño de archivos y datos sin perder información relevante.',
    cine: "En 'The Imitation Game', los algoritmos se usan para optimizar la decodificación de mensajes, algo similar a la compresión de datos.",
    cocina:
      'Reducir una receta larga a pasos clave es como un algoritmo de compresión.',
    deporte:
      'Resumir estadísticas de un torneo en una tabla pequeña representa compresión.',
    random: 'Ejemplos de algoritmos de compresión incluyen ZIP y GZIP.',
    link: 'https://example.com/compresion',
    link2: 'https://example.com/cocina/compresion'
  },
  {
    titulo: 'IP (Protocolo de Internet)',
    explicación:
      'Es un protocolo que identifica y localiza dispositivos en una red para permitir la comunicación entre ellos.',
    cine: "En 'The Net', las direcciones IP se utilizan para rastrear ubicaciones clave.",
    cocina:
      'Asignar un nombre único a cada estación en una cocina grande es como usar direcciones IP.',
    deporte:
      'Asignar números únicos a jugadores en un equipo cumple una función similar a las IP.',
    random:
      'Las direcciones IP pueden ser IPv4 o IPv6, siendo esta última la más moderna.',
    link: 'https://example.com/ip',
    link2: 'https://example.com/cocina/ip'
  },
  {
    titulo: 'MAC (Dirección de Control de Acceso)',
    explicación:
      'Es una dirección única asignada a una interfaz de red para identificar dispositivos en una red local.',
    cine: "En 'The Matrix', las direcciones MAC podrían identificar nodos específicos dentro de la simulación.",
    cocina:
      'Un código único asignado a cada utensilio en una cocina es similar a una dirección MAC.',
    deporte:
      'Las etiquetas únicas en el equipamiento de un jugador cumplen una función como la MAC.',
    random:
      'Las direcciones MAC se usan principalmente en redes LAN y son únicas para cada dispositivo.',
    link: 'https://example.com/mac',
    link2: 'https://example.com/cocina/mac'
  },
  {
    titulo: 'Switch de Red',
    explicación:
      'Es un dispositivo que conecta múltiples dispositivos en una red y gestiona el tráfico de datos entre ellos.',
    cine: "En 'Tron', un switch podría conectar diferentes zonas del mundo digital.",
    cocina:
      'Un chef que organiza los pedidos y los distribuye a los cocineros es como un switch de red.',
    deporte:
      'Un entrenador que distribuye instrucciones específicas a jugadores en diferentes posiciones es similar a un switch.',
    random:
      'Los switches modernos permiten configuraciones avanzadas como VLANs.',
    link: 'https://example.com/switch-red',
    link2: 'https://example.com/cocina/switch-red'
  },
  {
    titulo: 'Router',
    explicación:
      'Es un dispositivo que conecta diferentes redes y enruta datos entre ellas.',
    cine: "En 'Wreck-It Ralph', los routers actúan como caminos que conectan distintos juegos.",
    cocina:
      'Un router es como un chef que coordina diferentes estaciones de cocina para que trabajen en armonía.',
    deporte:
      'Un coordinador de logística que conecta equipos de diferentes sedes actúa como un router.',
    random:
      'Un router también puede incluir funciones de firewall para proteger la red.',
    link: 'https://example.com/router',
    link2: 'https://example.com/cocina/router'
  },
  {
    titulo: 'Procesador de Gráficos (GPU)',
    explicación:
      'Es un componente especializado para procesar gráficos y realizar cálculos paralelos intensivos.',
    cine: "En 'Avatar', las GPUs fueron fundamentales para generar los complejos entornos y personajes en CGI.",
    cocina:
      'Un procesador gráfico es como un chef experto en decorar platos visualmente atractivos.',
    deporte:
      'Un analista que procesa datos de video para analizar jugadas es comparable a una GPU.',
    random:
      'Las GPUs se usan ampliamente en videojuegos, diseño gráfico y aprendizaje automático.',
    link: 'https://example.com/gpu',
    link2: 'https://example.com/cocina/gpu'
  },
  {
    titulo: 'RAID',
    explicación:
      'Es una tecnología que combina múltiples discos duros para mejorar el rendimiento y la redundancia.',
    cine: "En 'Mr. Robot', se utilizan sistemas RAID para asegurar la redundancia de datos críticos.",
    cocina:
      'Organizar ingredientes en diferentes despensas para asegurar redundancia es como usar RAID.',
    deporte:
      'Distribuir responsabilidades clave entre varios jugadores asegura redundancia, como RAID.',
    random: 'Los niveles comunes de RAID incluyen RAID 0, RAID 1 y RAID 5.',
    link: 'https://example.com/raid',
    link2: 'https://example.com/cocina/raid'
  },
  {
    titulo: 'Kernel',
    explicación:
      'Es el núcleo del sistema operativo que gestiona las interacciones entre el hardware y el software.',
    cine: "En 'The Matrix', el kernel podría representar la base sobre la cual se ejecuta la simulación.",
    cocina:
      'El kernel es como el chef principal que coordina todas las actividades en una cocina.',
    deporte:
      'Un capitán que gestiona el equilibrio entre ofensiva y defensa es como un kernel.',
    random: 'El kernel puede ser monolítico o microkernel, según su diseño.',
    link: 'https://example.com/kernel',
    link2: 'https://example.com/cocina/kernel'
  },
  {
    titulo: 'Ping',
    explicación:
      'Es una utilidad de red que mide el tiempo de respuesta entre un dispositivo y un servidor.',
    cine: "En 'WarGames', un ping podría ser usado para medir la latencia entre sistemas militares.",
    cocina:
      'Verificar si un horno está caliente antes de usarlo es como hacer un ping.',
    deporte:
      'Un árbitro que verifica si ambos equipos están listos para comenzar un partido representa un ping.',
    random: 'Ping utiliza el protocolo ICMP para enviar y recibir paquetes.',
    link: 'https://example.com/ping',
    link2: 'https://example.com/cocina/ping'
  },
  {
    titulo: 'SSD (Unidad de Estado Sólido)',
    explicación:
      'Es un dispositivo de almacenamiento que utiliza memoria flash para mejorar la velocidad y fiabilidad.',
    cine: "En 'Blade Runner 2049', los datos cruciales almacenados en dispositivos avanzados podrían estar en SSDs.",
    cocina:
      'Un SSD es como un chef que trabaja más rápido al tener todo preorganizado.',
    deporte:
      'Un jugador que responde instantáneamente a las jugadas es comparable a un SSD.',
    random:
      'Los SSDs son más rápidos que los discos duros tradicionales pero también más costosos.',
    link: 'https://example.com/ssd',
    link2: 'https://example.com/cocina/ssd'
  },
  {
    titulo: 'Hosting',
    explicación:
      'Es el servicio que permite que un sitio web sea accesible desde Internet.',
    cine: "En 'The Social Network', el hosting sería crítico para mantener en línea la plataforma de Facebook.",
    cocina:
      'Un hosting es como un restaurante que aloja a los comensales y les sirve comida.',
    deporte:
      'Un estadio que alberga eventos deportivos representa el concepto de hosting.',
    random:
      'Los servicios de hosting incluyen opciones compartidas, dedicadas y en la nube.',
    link: 'https://example.com/hosting',
    link2: 'https://example.com/cocina/hosting'
  },
  {
    titulo: 'Overclocking',
    explicación:
      'Es la práctica de aumentar la velocidad de un procesador más allá de sus especificaciones de fábrica.',
    cine: "En 'Iron Man', la tecnología avanzada de su traje podría interpretarse como un ejemplo de overclocking extremo.",
    cocina:
      'Cocinar a una temperatura más alta para acelerar el proceso es como el overclocking.',
    deporte:
      'Un atleta que entrena más allá de sus límites normales representa el overclocking.',
    random:
      'El overclocking puede causar sobrecalentamiento si no se controla adecuadamente.',
    link: 'https://example.com/overclocking',
    link2: 'https://example.com/cocina/overclocking'
  },
  {
    titulo: 'SMTP (Protocolo de Transferencia de Correo)',
    explicación:
      'Es un protocolo para enviar correos electrónicos desde un cliente a un servidor.',
    cine: "En 'You've Got Mail', SMTP es el protocolo que permite el envío de los correos entre los protagonistas.",
    cocina: 'Enviar una receta por correo electrónico utiliza SMTP.',
    deporte:
      'Un entrenador que envía estrategias por correo electrónico a sus jugadores usa SMTP.',
    random:
      'SMTP funciona en el puerto 25, aunque el 587 es más común para conexiones seguras.',
    link: 'https://example.com/smtp',
    link2: 'https://example.com/cocina/smtp'
  },
  {
    titulo: 'DHCP (Protocolo de Configuración Dinámica de Host)',
    explicación:
      'Es un protocolo que asigna automáticamente direcciones IP a los dispositivos en una red.',
    cine: "En 'The Net', el DHCP podría haber sido utilizado para asignar direcciones dinámicas a los hackers.",
    cocina:
      'Asignar estaciones de trabajo a los chefs al llegar a la cocina es como usar DHCP.',
    deporte:
      'Distribuir posiciones iniciales a los jugadores al comienzo del partido es similar al DHCP.',
    random:
      'El DHCP simplifica la gestión de redes grandes al evitar configuraciones manuales.',
    link: 'https://example.com/dhcp',
    link2: 'https://example.com/cocina/dhcp'
  },
  {
    titulo: 'Ethernet',
    explicación:
      'Es una tecnología estándar para conectar dispositivos en una red local mediante cables.',
    cine: "En 'Hackers', Ethernet sería fundamental para las conexiones rápidas entre dispositivos.",
    cocina:
      'Un Ethernet es como una tubería que conecta estaciones en una cocina para compartir recursos.',
    deporte:
      'Conectar dispositivos de análisis en tiempo real durante un partido utiliza Ethernet.',
    random:
      'Ethernet puede alcanzar velocidades de hasta 100 Gbps en redes modernas.',
    link: 'https://example.com/ethernet',
    link2: 'https://example.com/cocina/ethernet'
  },
  {
    titulo: 'Procesador de Textos',
    explicación:
      'Es un software utilizado para escribir, editar y formatear documentos de texto.',
    cine: "En 'Misery', el protagonista utiliza un procesador de textos para escribir sus novelas mientras está atrapado.",
    cocina:
      'Un recetario digital donde se editan y organizan recetas es como un procesador de textos.',
    deporte:
      'Crear un programa de entrenamiento escrito para un equipo es un ejemplo de uso de un procesador de textos.',
    random:
      'Microsoft Word y Google Docs son ejemplos populares de procesadores de textos.',
    link: 'https://example.com/procesador-textos',
    link2: 'https://example.com/cocina/procesador-textos'
  },
  {
    titulo: 'Firewall',
    explicación:
      'Es un sistema de seguridad que supervisa y controla el tráfico de red para proteger los sistemas.',
    cine: "En 'Tron: Legacy', los firewalls son representados como barreras dentro del mundo digital.",
    cocina:
      'Un firewall es como un filtro que revisa los ingredientes antes de que entren a la cocina.',
    deporte:
      'Un portero que bloquea intentos de gol es comparable a un firewall.',
    random: 'Los firewalls pueden ser basados en hardware o software.',
    link: 'https://example.com/firewall',
    link2: 'https://example.com/cocina/firewall'
  },
  {
    titulo: 'Almacenamiento en la Nube',
    explicación:
      'Es un modelo de almacenamiento donde los datos se guardan en servidores remotos accesibles por Internet.',
    cine: "En 'Cloud Atlas', la nube podría simbolizar cómo las vidas y datos están conectados a través del tiempo.",
    cocina:
      'Guardar recetas en una aplicación móvil es como usar almacenamiento en la nube.',
    deporte:
      'Registrar datos de rendimiento de jugadores en una base de datos en línea es un ejemplo de la nube.',
    random:
      'Servicios como Google Drive y Dropbox son ejemplos de almacenamiento en la nube.',
    link: 'https://example.com/nube',
    link2: 'https://example.com/cocina/nube'
  },
  {
    titulo: 'Backup (Copia de Seguridad)',
    explicación:
      'Es una copia de datos que se almacena en un lugar seguro para prevenir la pérdida de información.',
    cine: "En 'Blade Runner 2049', las copias de seguridad son esenciales para preservar los recuerdos.",
    cocina:
      'Guardar una copia de una receta importante en papel es como hacer un backup.',
    deporte:
      'Registrar los resultados de partidos en una hoja extra es comparable a un backup.',
    random:
      'Las copias de seguridad pueden ser incrementales, completas o diferenciales.',
    link: 'https://example.com/backup',
    link2: 'https://example.com/cocina/backup'
  },
  {
    titulo: 'DNS (Sistema de Nombres de Dominio)',
    explicación:
      'Es un sistema que traduce nombres de dominio en direcciones IP comprensibles por las computadoras.',
    cine: "En 'The Social Network', un DNS sería clave para dirigir tráfico hacia la plataforma web.",
    cocina:
      'El DNS es como un recetario que asocia nombres de platos con sus instrucciones de preparación.',
    deporte:
      'Asociar un jugador con su número de dorsal es como el trabajo del DNS.',
    random: 'El DNS actúa como una agenda telefónica para Internet.',
    link: 'https://example.com/dns',
    link2: 'https://example.com/cocina/dns'
  },
  {
    titulo: 'Red LAN',
    explicación:
      'Es una red de área local que conecta dispositivos en un espacio limitado, como una oficina.',
    cine: "En 'Hackers', una red LAN permite la comunicación interna entre los sistemas del edificio.",
    cocina:
      'Conectar todos los electrodomésticos inteligentes en una cocina es similar a una red LAN.',
    deporte:
      'Un sistema de comunicación entre entrenadores y jugadores en un estadio es como una red LAN.',
    random: 'Las redes LAN suelen utilizar cables Ethernet o tecnología Wi-Fi.',
    link: 'https://example.com/lan',
    link2: 'https://example.com/cocina/lan'
  },
  {
    titulo: 'Servidor',
    explicación:
      'Es un sistema que proporciona servicios o recursos a otros dispositivos llamados clientes.',
    cine: "En 'Terminator 2', Skynet actúa como un servidor que controla toda la red global.",
    cocina:
      'Un chef que prepara y sirve platos a los comensales es como un servidor.',
    deporte:
      'Un entrenador que distribuye estrategias a los jugadores actúa como un servidor.',
    random:
      'Un servidor puede ser físico o virtual y puede albergar múltiples servicios.',
    link: 'https://example.com/servidor',
    link2: 'https://example.com/cocina/servidor'
  },
  {
    titulo: 'Cliente',
    explicación:
      'Es un dispositivo o aplicación que solicita servicios o recursos a un servidor.',
    cine: "En 'WALL-E', los humanos en la nave espacial pueden considerarse clientes que reciben servicios del sistema central.",
    cocina:
      'Un comensal que solicita un plato al chef es como un cliente en informática.',
    deporte:
      'Un jugador que recibe instrucciones del entrenador actúa como cliente.',
    random:
      'Los clientes pueden ser ligeros o pesados, dependiendo de su funcionalidad.',
    link: 'https://example.com/cliente',
    link2: 'https://example.com/cocina/cliente'
  },
  {
    titulo: 'Protocolo HTTP',
    explicación:
      'Es un protocolo de comunicación que permite la transferencia de datos en la web.',
    cine: "En 'The Matrix', HTTP podría representar las reglas de comunicación dentro del sistema.",
    cocina:
      'Un menú estándar que todos los chefs siguen para preparar un plato es como HTTP.',
    deporte:
      'Un árbitro que usa reglas comunes en un partido es comparable a un protocolo HTTP.',
    random: 'HTTP/2 y HTTP/3 son versiones modernas con mayor eficiencia.',
    link: 'https://example.com/http',
    link2: 'https://example.com/cocina/http'
  },
  {
    titulo: 'FTP (Protocolo de Transferencia de Archivos)',
    explicación:
      'Es un protocolo para transferir archivos entre un cliente y un servidor.',
    cine: "En 'WarGames', un sistema FTP podría haberse utilizado para descargar datos clasificados.",
    cocina: 'Enviar recetas entre chefs en un restaurante es como usar FTP.',
    deporte:
      'Compartir datos de jugadores entre entrenadores por una red es similar a FTP.',
    random:
      'FTP puede usar conexiones activas o pasivas para transferir archivos.',
    link: 'https://example.com/ftp',
    link2: 'https://example.com/cocina/ftp'
  },
  {
    titulo: 'BIOS (Sistema Básico de Entrada/Salida)',
    explicación:
      'Es un software integrado en la placa base que inicializa el hardware del sistema y arranca el sistema operativo.',
    cine: "En 'Her', el arranque inicial de los sistemas inteligentes podría compararse con la función del BIOS.",
    cocina:
      'El BIOS es como un chef que prepara la cocina antes de comenzar a cocinar.',
    deporte:
      'En un partido, el árbitro verifica que el campo esté listo antes de iniciar el juego, similar a la función del BIOS.',
    random:
      'El BIOS se reemplaza frecuentemente por UEFI en sistemas modernos.',
    link: 'https://example.com/bios',
    link2: 'https://example.com/cocina/bios'
  },
  {
    titulo: 'Cache',
    explicación:
      'Es una memoria de alta velocidad que almacena datos frecuentes para acceso rápido.',
    cine: "En 'The Matrix', los agentes podrían usar un sistema de caché para acceder rápidamente a información sobre Neo.",
    cocina:
      'Tener ingredientes clave como sal y especias a mano en la cocina es como una caché.',
    deporte:
      'En un partido, tener balones listos cerca del campo representa la función de la caché.',
    random:
      'El cache en la CPU mejora significativamente el rendimiento al reducir la latencia.',
    link: 'https://example.com/cache',
    link2: 'https://example.com/cocina/cache'
  },
  {
    titulo: 'Memoria Virtual',
    explicación:
      'Es una técnica que utiliza parte del almacenamiento del disco duro para simular memoria RAM adicional.',
    cine: "En 'Transcendence', la memoria virtual podría ser utilizada para almacenar las enormes cantidades de datos de la IA.",
    cocina:
      'Usar una despensa adicional cuando la cocina no tiene suficiente espacio es como la memoria virtual.',
    deporte:
      'Cuando un equipo agota sus jugadores titulares, recurre a suplentes, como la memoria virtual.',
    random:
      'La memoria virtual puede reducir el rendimiento si se utiliza en exceso.',
    link: 'https://example.com/memoria-virtual',
    link2: 'https://example.com/cocina/memoria-virtual'
  },
  {
    titulo: 'Kernel',
    explicación:
      'Es el núcleo del sistema operativo que gestiona las interacciones entre el hardware y el software.',
    cine: "En 'Ex Machina', el kernel podría representar la programación central de la inteligencia artificial.",
    cocina:
      'El kernel es como el chef principal que coordina todas las actividades en una cocina.',
    deporte:
      'Un capitán que gestiona el equilibrio entre ofensiva y defensa es como un kernel.',
    random: 'El kernel puede ser monolítico o microkernel, según su diseño.',
    link: 'https://example.com/kernel',
    link2: 'https://example.com/cocina/kernel'
  },
  {
    titulo: 'Ping',
    explicación:
      'Es una utilidad de red que mide el tiempo de respuesta entre un dispositivo y un servidor.',
    cine: "En 'Ready Player One', un ping bajo sería crucial para jugar sin retrasos en el OASIS.",
    cocina:
      'Verificar si un horno está caliente antes de usarlo es como hacer un ping.',
    deporte:
      'Un árbitro que verifica si ambos equipos están listos para comenzar un partido representa un ping.',
    random: 'Ping utiliza el protocolo ICMP para enviar y recibir paquetes.',
    link: 'https://example.com/ping',
    link2: 'https://example.com/cocina/ping'
  },
  {
    titulo: 'SSD (Unidad de Estado Sólido)',
    explicación:
      'Es un dispositivo de almacenamiento que utiliza memoria flash para mejorar la velocidad y fiabilidad.',
    cine: "En 'Minority Report', los sistemas rápidos de almacenamiento de datos en tiempo real podrían estar basados en SSDs.",
    cocina:
      'Un SSD es como un chef que trabaja más rápido al tener todo preorganizado.',
    deporte:
      'Un jugador que responde instantáneamente a las jugadas es comparable a un SSD.',
    random:
      'Los SSDs son más rápidos que los discos duros tradicionales pero también más costosos.',
    link: 'https://example.com/ssd',
    link2: 'https://example.com/cocina/ssd'
  },
  {
    titulo: 'Hosting',
    explicación:
      'Es el servicio que permite que un sitio web sea accesible desde Internet.',
    cine: "En 'The Social Network', el hosting habría sido crucial para lanzar y escalar la plataforma de Facebook.",
    cocina:
      'Un hosting es como un restaurante que aloja a los comensales y les sirve comida.',
    deporte:
      'Un estadio que alberga eventos deportivos representa el concepto de hosting.',
    random:
      'Los servicios de hosting incluyen opciones compartidas, dedicadas y en la nube.',
    link: 'https://example.com/hosting',
    link2: 'https://example.com/cocina/hosting'
  },
  {
    titulo: 'Overclocking',
    explicación:
      'Es la práctica de aumentar la velocidad de un procesador más allá de sus especificaciones de fábrica.',
    cine: "En 'Limitless', el protagonista experimenta un overclocking mental al consumir la droga NZT.",
    cocina:
      'Cocinar a una temperatura más alta para acelerar el proceso es como el overclocking.',
    deporte:
      'Un atleta que entrena más allá de sus límites normales representa el overclocking.',
    random:
      'El overclocking puede causar sobrecalentamiento si no se controla adecuadamente.',
    link: 'https://example.com/overclocking',
    link2: 'https://example.com/cocina/overclocking'
  },
  {
    titulo: 'SMTP (Protocolo de Transferencia de Correo)',
    explicación:
      'Es un protocolo para enviar correos electrónicos desde un cliente a un servidor.',
    cine: "En 'You've Got Mail', los intercambios de correos electrónicos entre los personajes habrían usado SMTP.",
    cocina: 'Enviar una receta por correo electrónico utiliza SMTP.',
    deporte:
      'Un entrenador que envía estrategias por correo electrónico a sus jugadores usa SMTP.',
    random:
      'SMTP funciona en el puerto 25, aunque el 587 es más común para conexiones seguras.',
    link: 'https://example.com/smtp',
    link2: 'https://example.com/cocina/smtp'
  },
  {
    titulo: 'DHCP (Protocolo de Configuración Dinámica de Host)',
    explicación:
      'Es un protocolo que asigna automáticamente direcciones IP a los dispositivos en una red.',
    cine: "En 'Hackers', DHCP sería clave para gestionar múltiples conexiones en una red comprometida.",
    cocina:
      'Asignar estaciones de trabajo a los chefs al llegar a la cocina es como usar DHCP.',
    deporte:
      'Distribuir posiciones iniciales a los jugadores al comienzo del partido es similar al DHCP.',
    random:
      'El DHCP simplifica la gestión de redes grandes al evitar configuraciones manuales.',
    link: 'https://example.com/dhcp',
    link2: 'https://example.com/cocina/dhcp'
  },
  {
    titulo: 'Ethernet',
    explicación:
      'Es una tecnología estándar para conectar dispositivos en una red local mediante cables.',
    cine: "En 'The Net', Ethernet habría sido crucial para las conexiones de las computadoras locales.",
    cocina:
      'Un Ethernet es como una tubería que conecta estaciones en una cocina para compartir recursos.',
    deporte:
      'Conectar dispositivos de análisis en tiempo real durante un partido utiliza Ethernet.',
    random:
      'Ethernet puede alcanzar velocidades de hasta 100 Gbps en redes modernas.',
    link: 'https://example.com/ethernet',
    link2: 'https://example.com/cocina/ethernet'
  },
  {
    titulo: 'Router',
    explicación:
      'Es un dispositivo que conecta diferentes redes y enruta datos entre ellas.',
    cine: "En 'Blackhat', un router podría ser utilizado para enrutar tráfico malicioso en una red comprometida.",
    cocina:
      'Un router es como un chef que coordina diferentes estaciones de cocina para que trabajen en armonía.',
    deporte:
      'Un coordinador de logística que conecta equipos de diferentes sedes actúa como un router.',
    random:
      'Un router también puede incluir funciones de firewall para proteger la red.',
    link: 'https://example.com/router',
    link2: 'https://example.com/cocina/router'
  },
  {
    titulo: 'RAID',
    explicación:
      'Es una tecnología que combina múltiples discos duros para mejorar el rendimiento y la redundancia.',
    cine: "En 'Tron: Legacy', los datos distribuidos en múltiples servidores podrían asemejarse a un RAID.",
    cocina:
      'Organizar ingredientes en diferentes despensas para asegurar redundancia es como usar RAID.',
    deporte:
      'Distribuir responsabilidades clave entre varios jugadores asegura redundancia, como RAID.',
    random: 'Los niveles comunes de RAID incluyen RAID 0, RAID 1 y RAID 5.',
    link: 'https://example.com/raid',
    link2: 'https://example.com/cocina/raid'
  },
  {
    titulo: 'MAC (Dirección de Control de Acceso)',
    explicación:
      'Es una dirección única asignada a una interfaz de red para identificar dispositivos en una red local.',
    cine: "En 'Snowden', las direcciones MAC habrían sido utilizadas para rastrear dispositivos.",
    cocina:
      'Un código único asignado a cada utensilio en una cocina es similar a una dirección MAC.',
    deporte:
      'Las etiquetas únicas en el equipamiento de un jugador cumplen una función como la MAC.',
    random:
      'Las direcciones MAC se usan principalmente en redes LAN y son únicas para cada dispositivo.',
    link: 'https://example.com/mac',
    link2: 'https://example.com/cocina/mac'
  },
  {
    titulo: 'IP (Protocolo de Internet)',
    explicación:
      'Es un protocolo que identifica y localiza dispositivos en una red para permitir la comunicación entre ellos.',
    cine: "En 'Eagle Eye', las direcciones IP son clave para rastrear a los personajes.",
    cocina:
      'Asignar un nombre único a cada estación en una cocina grande es como usar direcciones IP.',
    deporte:
      'Asignar números únicos a jugadores en un equipo cumple una función similar a las IP.',
    random:
      'Las direcciones IP pueden ser IPv4 o IPv6, siendo esta última la más moderna.',
    link: 'https://example.com/ip',
    link2: 'https://example.com/cocina/ip'
  },
  {
    titulo: 'Switch de Red',
    explicación:
      'Es un dispositivo que conecta múltiples dispositivos en una red y gestiona el tráfico de datos entre ellos.',
    cine: "En 'WarGames', un switch de red podría haber gestionado las conexiones internas del sistema militar.",
    cocina:
      'Un chef que organiza los pedidos y los distribuye a los cocineros es como un switch de red.',
    deporte:
      'Un entrenador que distribuye instrucciones específicas a jugadores en diferentes posiciones es similar a un switch.',
    random:
      'Los switches modernos permiten configuraciones avanzadas como VLANs.',
    link: 'https://example.com/switch-red',
    link2: 'https://example.com/cocina/switch-red'
  },
  {
    titulo: 'GPU (Procesador de Gráficos)',
    explicación:
      'Es un componente especializado para procesar gráficos y realizar cálculos paralelos intensivos.',
    cine: "En 'Avatar', las GPUs habrían sido esenciales para renderizar los complejos efectos visuales.",
    cocina:
      'Un procesador gráfico es como un chef experto en decorar platos visualmente atractivos.',
    deporte:
      'Un analista que procesa datos de video para analizar jugadas es comparable a una GPU.',
    random:
      'Las GPUs se usan ampliamente en videojuegos, diseño gráfico y aprendizaje automático.',
    link: 'https://example.com/gpu',
    link2: 'https://example.com/cocina/gpu'
  },
  {
    titulo: 'Kernel',
    explicación:
      'Es el núcleo del sistema operativo que gestiona las interacciones entre el hardware y el software.',
    cine: "En 'Her', el kernel podría representar el núcleo operativo del sistema de inteligencia artificial de Samantha.",
    cocina:
      'El kernel es como el chef principal que coordina todas las actividades en una cocina.',
    deporte:
      'Un capitán que gestiona el equilibrio entre ofensiva y defensa es como un kernel.',
    random: 'El kernel puede ser monolítico o microkernel, según su diseño.',
    link: 'https://example.com/kernel',
    link2: 'https://example.com/cocina/kernel'
  },
  {
    titulo: 'Ping',
    explicación:
      'Es una utilidad de red que mide el tiempo de respuesta entre un dispositivo y un servidor.',
    cine: "En 'Hackers', un ping rápido sería crucial para acceder a un sistema comprometido antes de ser detectado.",
    cocina:
      'Verificar si un horno está caliente antes de usarlo es como hacer un ping.',
    deporte:
      'Un árbitro que verifica si ambos equipos están listos para comenzar un partido representa un ping.',
    random: 'Ping utiliza el protocolo ICMP para enviar y recibir paquetes.',
    link: 'https://example.com/ping',
    link2: 'https://example.com/cocina/ping'
  }
]

export default data
