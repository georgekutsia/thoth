const data = [
  {
    titulo: 'Paradigma de Programación',
    explicación:
      'Un paradigma de programación es un enfoque o estilo de programación. Algunos ejemplos son la programación orientada a objetos, la programación funcional y la programación imperativa.',
    cine: "En 'The Social Network', los diferentes enfoques de programación utilizados para crear Facebook reflejan la evolución de los paradigmas en la informática.",
    cocina:
      'Cocinar de diferentes maneras, como asar, hervir o freír, es similar a seguir distintos paradigmas en la programación: diferentes enfoques para lograr el mismo objetivo.',
    deporte:
      'En deportes, diferentes estrategias tácticas son como paradigmas, cada una con su propio enfoque para lograr la victoria.',
    random:
      'La programación funcional se basa en la idea de funciones matemáticas y evita el estado mutable.',
    link: 'https://example.com/paradigmas-programacion',
    link2: 'https://example.com/cocina/paradigmas-cocina'
  },
  {
    titulo: 'API',
    explicación:
      'Una API (Interfaz de Programación de Aplicaciones) es un conjunto de reglas que permiten a un software interactuar con otro. Las APIs son fundamentales para el desarrollo de aplicaciones modernas, como las redes sociales o los servicios web.',
    cine: "En películas como 'Iron Man', el traje de Tony Stark se conecta a diferentes sistemas mediante APIs invisibles, intercambiando información en tiempo real.",
    cocina:
      'Una API en la cocina sería como una receta compartida entre chefs: un conjunto de instrucciones estándar que todos entienden y pueden seguir.',
    deporte:
      'Las APIs permiten a las aplicaciones deportivas conectarse con bases de datos para mostrar estadísticas en tiempo real durante un partido.',
    random:
      'El uso de APIs ha revolucionado la integración de servicios como el clima, mapas y redes sociales en aplicaciones móviles.',
    link: 'https://example.com/apis',
    link2: 'https://example.com/cocina/recetas-apis'
  },
  {
    titulo: 'Framework',
    explicación:
      'Un framework es una estructura predefinida que facilita el desarrollo de software, proporcionando herramientas y bibliotecas comunes. Ejemplos populares incluyen Django para Python o React para JavaScript.',
    cine: "El uso de frameworks en la creación de efectos visuales para películas como 'Avatar' permitió la creación rápida de entornos virtuales complejos.",
    cocina:
      'Un framework es como una receta predefinida donde ya tienes ciertos ingredientes listos, lo que facilita la creación del platillo.',
    deporte:
      'En el deporte, un framework sería como una estrategia o táctica predefinida que los equipos pueden usar y adaptar en el campo.',
    random:
      "El uso de frameworks permite a los desarrolladores evitar 'reinventar la rueda', haciendo que el desarrollo sea más rápido y eficiente.",
    link: 'https://example.com/frameworks',
    link2: 'https://example.com/cocina/framework-cocina'
  },
  {
    titulo: 'Depuración',
    explicación:
      'La depuración es el proceso de identificar y corregir errores en el código de un programa. Es una parte fundamental del ciclo de desarrollo de software.',
    cine: "En películas como 'Hackers', los personajes pasan tiempo depurando códigos para eliminar errores antes de ejecutar sus planes.",
    cocina:
      'En cocina, depurar es como corregir un error en una receta cuando algo no sale bien, como ajustar la cantidad de ingredientes.',
    deporte:
      'Depurar en deporte es como revisar una jugada en cámara lenta para corregir errores y mejorar el rendimiento del equipo.',
    random:
      "El término 'bug' (error) en programación se originó cuando un insecto real causó un fallo en una computadora en 1947.",
    link: 'https://example.com/depuracion',
    link2: 'https://example.com/cocina/depuracion-recetas'
  },
  {
    titulo: 'Lenguaje de Bajo Nivel',
    explicación:
      'Un lenguaje de bajo nivel se comunica directamente con el hardware de la computadora. Los lenguajes de ensamblador son ejemplos de lenguajes de bajo nivel, que ofrecen un control preciso sobre los recursos del sistema.',
    cine: "En películas como 'Terminator', se exploran las implicaciones de las máquinas que podrían estar controladas a nivel de hardware.",
    cocina:
      'Cocinar en bajo nivel sería como hacer todos los ingredientes desde cero, controlando cada detalle del proceso de cocción.',
    deporte:
      "En el deporte, un entrenador que controla cada pequeño detalle del entrenamiento de un atleta estaría actuando a un nivel 'bajo' en términos de control.",
    random:
      'Los lenguajes de bajo nivel son más difíciles de aprender pero ofrecen mayor control y eficiencia para aplicaciones críticas.',
    link: 'https://example.com/lenguajes-bajo-nivel',
    link2: 'https://example.com/cocina/bajo-nivel-cocina'
  },
  {
    titulo: 'Lenguaje de Alto Nivel',
    explicación:
      'Los lenguajes de alto nivel, como Python o Java, están más cerca del lenguaje humano, lo que los hace más fáciles de aprender y usar que los lenguajes de bajo nivel.',
    cine: "En 'Matrix', los códigos que se ven en pantalla son representaciones ficticias de lenguajes de alto nivel para controlar el mundo digital.",
    cocina:
      'Usar un lenguaje de alto nivel es como seguir una receta detallada paso a paso sin tener que entender cada proceso químico detrás de la cocina.',
    deporte:
      'Es como tener una estrategia de juego simplificada que los jugadores pueden seguir fácilmente sin complicaciones técnicas.',
    random:
      'El desarrollo de lenguajes de alto nivel ha permitido a más personas adentrarse en el mundo de la programación sin necesidad de conocimientos profundos de hardware.',
    link: 'https://example.com/lenguajes-alto-nivel',
    link2: 'https://example.com/cocina/alto-nivel-cocina'
  },
  {
    titulo: 'Git',
    explicación:
      'Git es un sistema de control de versiones que permite a los programadores rastrear cambios en su código y colaborar en proyectos. Es fundamental para el desarrollo de software moderno.',
    cine: "En el mundo cinematográfico, la colaboración masiva de equipos de efectos visuales en proyectos como 'Avengers' podría ser posible gracias a sistemas como Git.",
    cocina:
      'Es como tener un registro detallado de todos los cambios que has hecho en una receta, de manera que puedas regresar a versiones anteriores si algo sale mal.',
    deporte:
      'En el deporte, sería como tener un historial detallado de cada entrenamiento, para poder comparar y ajustar el progreso.',
    random:
      'Git fue creado por Linus Torvalds, el mismo creador del sistema operativo Linux.',
    link: 'https://example.com/git',
    link2: 'https://example.com/cocina/git-recetas'
  },

  {
    titulo: 'Bucle Infinito',
    explicación:
      'Es una situación en la que un bucle no tiene una condición de salida, causando que el programa se quede ejecutando indefinidamente.',
    cine: "En 'Doctor Strange', la batalla final con Dormammu es un ejemplo visual de un bucle infinito creado por el Ojo de Agamotto.",
    cocina:
      'Seguir batiendo sin parar porque olvidaste fijar un tiempo límite es como un bucle infinito.',
    deporte:
      'Un equipo que sigue usando la misma estrategia fallida sin ajustarla está atrapado en un bucle infinito.',
    random:
      'Los bucles infinitos son comunes al programar y pueden causar que el sistema se bloquee si no se gestionan correctamente.',
    link: 'https://example.com/bucle-infinito',
    link2: 'https://example.com/cocina/bucle-infinito'
  },
  {
    titulo: 'Token de Autenticación',
    explicación:
      'Es un objeto que verifica la identidad de un usuario en un sistema y permite el acceso a recursos protegidos.',
    cine: "En 'Inception', las peonzas de los personajes funcionan como tokens que validan si están en la realidad o en un sueño.",
    cocina:
      'En una app de recetas, el token valida que solo los usuarios registrados puedan guardar o modificar recetas.',
    deporte:
      'En deportes, un token sería como un pase digital que permite acceso exclusivo a partidos en vivo.',
    random:
      'Los tokens suelen tener un tiempo de expiración para garantizar la seguridad del sistema.',
    link: 'https://example.com/tokens',
    link2: 'https://example.com/cocina/tokens'
  },
  {
    titulo: 'Renderizado',
    explicación:
      'Es el proceso de generar la representación visual de una página web o una imagen a partir de datos o código.',
    cine: "En 'Avatar', el mundo de Pandora fue creado y renderizado utilizando avanzadas tecnologías CGI.",
    cocina:
      'En una app culinaria, el renderizado sería la acción de mostrar una receta completa basada en datos almacenados.',
    deporte:
      'En deportes, el renderizado permite mostrar gráficos como marcadores en vivo o análisis de jugadas.',
    random:
      'El renderizado puede ser del lado del cliente (frontend) o del lado del servidor (backend).',
    link: 'https://example.com/renderizado',
    link2: 'https://example.com/cocina/renderizado'
  },
  {
    titulo: 'Cloud Computing',
    explicación:
      'Es la entrega de servicios informáticos, como almacenamiento y procesamiento, a través de internet.',
    cine: "En 'Spider-Man: Far From Home', los drones de Stark usan una red basada en la nube para coordinar sus acciones.",
    cocina:
      'Almacenar recetas y fotos en la nube para acceder a ellas desde cualquier dispositivo es un ejemplo de cloud computing.',
    deporte:
      'En deportes, se usa para analizar datos de rendimiento y transmitir partidos desde servidores remotos.',
    random:
      'Servicios como Amazon Web Services (AWS) y Google Cloud son ejemplos populares de cloud computing.',
    link: 'https://example.com/cloud-computing',
    link2: 'https://example.com/cocina/cloud-computing'
  },
  {
    titulo: 'Criptografía',
    explicación:
      'Es el arte de proteger información mediante técnicas de cifrado para que solo pueda ser leída por personas autorizadas.',
    cine: "En 'The Imitation Game', Alan Turing descifra el código Enigma utilizando criptografía avanzada.",
    cocina:
      'En cocina, proteger una receta secreta con un código especial es como aplicar criptografía.',
    deporte:
      'En deportes, la criptografía se usa para asegurar la transmisión de datos como estadísticas de jugadores.',
    random:
      'El cifrado AES es uno de los estándares más seguros y ampliamente utilizados en la actualidad.',
    link: 'https://example.com/criptografia',
    link2: 'https://example.com/cocina/criptografia'
  },
  {
    titulo: 'Big Data',
    explicación:
      'Es el manejo de grandes volúmenes de datos que no pueden ser procesados de manera tradicional debido a su tamaño, velocidad o variedad.',
    cine: "En 'Moneyball', el uso de Big Data revolucionó la manera en que se seleccionaban los jugadores de béisbol.",
    cocina:
      'En cocina, analizar datos de recetas populares y tendencias alimenticias en tiempo real es un uso de Big Data.',
    deporte:
      'En deportes, se usa para analizar el rendimiento de jugadores y estrategias en múltiples partidos.',
    random:
      'El Big Data utiliza tecnologías como Hadoop y Spark para manejar y procesar información.',
    link: 'https://example.com/big-data',
    link2: 'https://example.com/cocina/big-data'
  },
  {
    titulo: 'Caché',
    explicación:
      'Es una memoria de alta velocidad que almacena datos de acceso frecuente para mejorar el rendimiento.',
    cine: "En 'Iron Man', la armadura de Tony Stark utiliza caché para cargar datos críticos del sistema más rápido.",
    cocina:
      'Tener los utensilios más usados cerca mientras cocinas es como usar una caché.',
    deporte:
      'En deportes, la caché permite cargar estadísticas de partidos recientes sin volver a procesarlas desde cero.',
    random:
      'La caché se encuentra en diferentes niveles, desde hardware (CPU) hasta navegadores.',
    link: 'https://example.com/cache',
    link2: 'https://example.com/cocina/cache'
  },
  {
    titulo: 'Recursos Estáticos',
    explicación:
      'Son archivos que no cambian frecuentemente, como imágenes, hojas de estilo y scripts de JavaScript.',
    cine: "En 'WALL-E', los carteles publicitarios de Buy n Large en el espacio son recursos estáticos que no cambian con el tiempo.",
    cocina:
      'En una web de recetas, imágenes de los platos y fondos decorativos son recursos estáticos.',
    deporte:
      'En una app deportiva, los logotipos de los equipos y las reglas del juego son recursos estáticos.',
    random:
      'Los recursos estáticos se almacenan en CDNs para mejorar la velocidad de carga de las páginas web.',
    link: 'https://example.com/recursos-estaticos',
    link2: 'https://example.com/cocina/recursos-estaticos'
  },
  {
    titulo: 'Rutas Dinámicas',
    explicación:
      'Son rutas en aplicaciones web que cambian según los parámetros proporcionados por el usuario.',
    cine: "En 'Blade Runner 2049', las pistas llevan a K a diferentes ubicaciones, similar a cómo funcionan las rutas dinámicas en aplicaciones.",
    cocina:
      "En una app culinaria, una ruta dinámica podría llevar a '/receta/pasta-carbonara' según la receta seleccionada.",
    deporte:
      "En deportes, una ruta dinámica podría mostrar '/jugador/messi' o '/equipo/barcelona' dependiendo de la consulta.",
    random:
      'Las rutas dinámicas en frameworks como React Router permiten crear aplicaciones de navegación fluida.',
    link: 'https://example.com/rutas-dinamicas',
    link2: 'https://example.com/cocina/rutas-dinamicas'
  },
  {
    titulo: 'Compilador',
    explicación:
      'Un compilador es un programa que traduce el código fuente escrito en un lenguaje de alto nivel a código máquina que la computadora puede entender. Es fundamental para los lenguajes compilados.',
    cine: "En películas como 'Matrix', el concepto de traducir el mundo digital en códigos podría estar relacionado con el papel de un compilador en la programación.",
    cocina:
      'En la cocina, un compilador sería como un chef que traduce una receta compleja en instrucciones claras que cualquier persona pueda seguir.',
    deporte:
      'En el deporte, un compilador sería como un entrenador que convierte una estrategia compleja en instrucciones simples para los jugadores.',
    random:
      'El proceso de compilación puede identificar errores de sintaxis antes de que el programa se ejecute.',
    link: 'https://example.com/compiladores',
    link2: 'https://example.com/cocina/chef-compilador'
  },
  {
    titulo: 'Lenguajes Multi-Paradigma',
    explicación:
      'Los lenguajes multi-paradigma son aquellos que soportan más de un paradigma de programación, como Python, que permite tanto programación orientada a objetos como funcional.',
    cine: "El uso de lenguajes multi-paradigma en la creación de mundos virtuales para películas como 'Inception' permite una mayor flexibilidad en la programación de efectos especiales.",
    cocina:
      'En cocina, sería como tener una receta que te permita asar o freír un mismo ingrediente según tus preferencias.',
    deporte:
      'En el deporte, usar un lenguaje multi-paradigma sería como poder cambiar estrategias de juego en el momento según la situación.',
    random:
      'Lenguajes como Python y JavaScript permiten mezclar estilos de programación, aumentando la flexibilidad y el control del programador.',
    link: 'https://example.com/multi-paradigma',
    link2: 'https://example.com/cocina/multi-estilo'
  },
  {
    titulo: 'HTML (Lenguaje de Marcado de Hipertexto)',
    explicación:
      'Es el estándar para estructurar y presentar contenido en la web mediante etiquetas.',
    cine: "En 'The Social Network', los sitios web iniciales creados están diseñados con HTML como base estructural.",
    cocina:
      'HTML en la cocina es como el esqueleto de una receta que organiza los pasos e ingredientes.',
    deporte:
      'En el deporte, HTML sería como el diseño inicial de un campo antes de agregar detalles como las porterías o las líneas.',
    random:
      'HTML fue creado en 1993 por Tim Berners-Lee y sigue siendo el corazón de la web moderna.',
    link: 'https://example.com/html',
    link2: 'https://example.com/cocina/html'
  },
  {
    titulo: 'CSS (Hojas de Estilo en Cascada)',
    explicación:
      'Es un lenguaje utilizado para describir la presentación de un documento HTML, incluyendo colores, diseño y fuentes.',
    cine: 'El uso de CSS es como los efectos visuales en una película: hace que el contenido se vea atractivo y pulido.',
    cocina:
      'En cocina, CSS sería como el emplatado de un plato que hace que luzca apetitoso.',
    deporte:
      'En el deporte, CSS sería como los uniformes y los colores que hacen que un equipo sea visualmente reconocible.',
    random:
      'CSS permite separar el contenido de la presentación, lo que facilita el mantenimiento del diseño de un sitio web.',
    link: 'https://example.com/css',
    link2: 'https://example.com/cocina/css'
  },
  {
    titulo: 'XML (Lenguaje de Marcado Extensible)',
    explicación:
      'Es un lenguaje de marcado diseñado para almacenar y transportar datos de manera estructurada y legible por humanos y máquinas.',
    cine: 'XML se usa en sistemas de gestión de películas para almacenar metadatos como títulos, directores y fechas de lanzamiento.',
    cocina:
      'XML en la cocina sería como un archivo que organiza recetas con etiquetas para ingredientes, pasos y tiempos.',
    deporte:
      'En el deporte, XML podría organizar estadísticas de jugadores y resultados en un formato estructurado.',
    random:
      'XML es ampliamente utilizado en aplicaciones empresariales y en la comunicación entre sistemas.',
    link: 'https://example.com/xml',
    link2: 'https://example.com/cocina/xml'
  },
  {
    titulo: 'JavaScript',
    explicación:
      'Es un lenguaje de programación que permite crear contenido interactivo en la web, como formularios dinámicos o animaciones.',
    cine: "En películas interactivas como 'Bandersnatch' de Netflix, JavaScript podría usarse para manejar las interacciones del usuario.",
    cocina:
      'En la cocina, JavaScript sería como un temporizador automático que avisa cuándo voltear los alimentos.',
    deporte:
      'En el deporte, JavaScript sería como un marcador dinámico que cambia en tiempo real según los goles.',
    random:
      'JavaScript fue creado en 1995 por Brendan Eich y es compatible con todos los navegadores modernos.',
    link: 'https://example.com/javascript',
    link2: 'https://example.com/cocina/javascript'
  },
  {
    titulo: 'JSON (Notación de Objetos de JavaScript)',
    explicación:
      'Es un formato de texto ligero para intercambiar datos, muy utilizado en aplicaciones web y APIs.',
    cine: 'En sistemas de streaming, JSON se utiliza para enviar datos como listas de películas y detalles de usuarios.',
    cocina:
      'En la cocina, JSON sería como una tabla de información nutricional representada en un archivo estructurado.',
    deporte:
      'En deportes, JSON podría usarse para intercambiar datos sobre estadísticas de equipos y resultados de partidos.',
    random:
      'JSON es una alternativa más ligera y fácil de leer en comparación con XML.',
    link: 'https://example.com/json',
    link2: 'https://example.com/cocina/json'
  },
  {
    titulo: 'Etiquetas HTML',
    explicación:
      'Son elementos del lenguaje HTML que definen el propósito y formato del contenido en una página web.',
    cine: 'Las etiquetas HTML son como los créditos iniciales de una película, que presentan el contenido estructurado.',
    cocina:
      'En la cocina, las etiquetas serían como encabezados y categorías en un recetario.',
    deporte:
      'En deportes, las etiquetas HTML serían como las secciones de un informe de juego: resumen, estadísticas y análisis.',
    random:
      'Las etiquetas más comunes incluyen `<p>` para párrafos y `<h1>` a `<h6>` para encabezados.',
    link: 'https://example.com/etiquetas-html',
    link2: 'https://example.com/cocina/etiquetas-html'
  },
  {
    titulo: 'Atributos HTML',
    explicación:
      'Son propiedades que proporcionan información adicional sobre un elemento HTML, como estilos, identificadores o enlaces.',
    cine: 'En diseño web para cine, los atributos HTML se usarían para personalizar la apariencia de una página de estreno.',
    cocina:
      "En la cocina, los atributos son como notas adicionales en una receta, como 'cocinar a fuego lento'.",
    deporte:
      'En deportes, los atributos serían como las estadísticas detalladas de un jugador en un informe.',
    random:
      "Los atributos comunes incluyen 'id', 'class' y 'style', que permiten personalizar elementos HTML.",
    link: 'https://example.com/atributos-html',
    link2: 'https://example.com/cocina/atributos-html'
  },
  {
    titulo: 'Metaetiquetas',
    explicación:
      'Son etiquetas HTML que proporcionan metadatos sobre una página web, como la descripción o las palabras clave.',
    cine: 'Las metaetiquetas son como las descripciones de películas en un catálogo digital, que ayudan a los usuarios a encontrar lo que buscan.',
    cocina:
      'En la cocina, las metaetiquetas serían como las notas al margen de una receta, explicando su origen o ingredientes destacados.',
    deporte:
      'En deportes, las metaetiquetas serían como etiquetas de búsqueda en una base de datos de jugadores o partidos.',
    random:
      'Las metaetiquetas se utilizan para mejorar el SEO y proporcionar información a los motores de búsqueda.',
    link: 'https://example.com/metaetiquetas',
    link2: 'https://example.com/cocina/metaetiquetas'
  },
  {
    titulo: 'DOM (Modelo de Objetos del Documento)',
    explicación:
      'Es una representación estructurada del contenido de una página web, que permite a los lenguajes de programación interactuar con ella.',
    cine: "En 'Inception', el DOM sería como los diferentes niveles de sueño que interactúan entre sí.",
    cocina:
      'En la cocina, el DOM sería como un esquema visual que muestra cómo se relacionan los ingredientes y pasos en una receta.',
    deporte:
      'En deportes, el DOM sería como un diagrama que conecta los jugadores, posiciones y estrategias en un partido.',
    random:
      'El DOM permite modificar dinámicamente el contenido, estructura y estilo de una página web usando JavaScript.',
    link: 'https://example.com/dom',
    link2: 'https://example.com/cocina/dom'
  },
  {
    titulo: 'SVG (Gráficos Vectoriales Escalables)',
    explicación:
      'Es un formato basado en XML para crear gráficos vectoriales escalables que pueden integrarse directamente en HTML.',
    cine: 'En el cine, SVG podría usarse para crear logotipos o animaciones vectoriales en sitios web de películas.',
    cocina:
      'En la cocina, SVG sería como un diagrama vectorial que muestra el emplatado ideal de un platillo.',
    deporte:
      'En deportes, SVG permite crear diagramas interactivos para estrategias de juego.',
    random:
      'Los gráficos SVG son escalables sin pérdida de calidad, ideales para interfaces web y diseño responsivo.',
    link: 'https://example.com/svg',
    link2: 'https://example.com/cocina/svg'
  },
  {
    titulo: 'XPath',
    explicación:
      'Es un lenguaje utilizado para navegar y seleccionar nodos en documentos XML o HTML.',
    cine: 'En bases de datos de cine, XPath se usa para extraer información específica como títulos o directores de películas.',
    cocina:
      'XPath sería como buscar un ingrediente específico dentro de una lista organizada de recetas.',
    deporte:
      'En el deporte, XPath sería como filtrar jugadores según su posición en una tabla estructurada.',
    random:
      'XPath es esencial para trabajar con XML en aplicaciones como transformaciones XSLT.',
    link: 'https://example.com/xpath',
    link2: 'https://example.com/cocina/xpath'
  },
  {
    titulo: 'XSLT (Lenguaje de Transformación de Estilos)',
    explicación:
      'Es un lenguaje que transforma documentos XML en otros formatos como HTML o texto plano.',
    cine: 'En plataformas de streaming, XSLT se utiliza para convertir metadatos de películas almacenados en XML a HTML para mostrarlos en el sitio.',
    cocina:
      'En cocina, XSLT sería como transformar una receta en formato digital a una lista de compras impresa.',
    deporte:
      'En el deporte, XSLT podría transformar datos de un partido en gráficos o reportes legibles.',
    random:
      'XSLT permite aplicar plantillas para convertir datos en documentos con estilos personalizados.',
    link: 'https://example.com/xslt',
    link2: 'https://example.com/cocina/xslt'
  },
  {
    titulo: 'Markdown',
    explicación:
      'Es un lenguaje de marcado ligero que permite formatear texto de manera sencilla, utilizado principalmente en documentación y blogs.',
    cine: 'En el cine, Markdown podría usarse para escribir guiones con formato básico y exportarlos a documentos más elaborados.',
    cocina:
      'En la cocina, Markdown sería como escribir una receta en texto plano con formato para resaltar ingredientes y pasos.',
    deporte:
      'Markdown podría usarse para redactar informes rápidos de partidos con formato legible.',
    random:
      'Markdown es ampliamente utilizado en plataformas como GitHub para crear documentación.',
    link: 'https://example.com/markdown',
    link2: 'https://example.com/cocina/markdown'
  },
  {
    titulo: 'Bootstrap',
    explicación:
      'Es un framework de CSS que facilita la creación de interfaces web responsivas y atractivas.',
    cine: 'En el diseño de páginas promocionales para películas, Bootstrap ayuda a crear sitios atractivos rápidamente.',
    cocina:
      'En la cocina, Bootstrap sería como usar plantillas para decorar platillos de forma estandarizada y eficiente.',
    deporte:
      'En deportes, Bootstrap podría ser como un sistema predefinido para organizar marcadores y estadísticas en tiempo real.',
    random:
      'Bootstrap incluye componentes como barras de navegación, carruseles y formularios listos para usar.',
    link: 'https://example.com/bootstrap',
    link2: 'https://example.com/cocina/bootstrap'
  },
  {
    titulo: 'SVG Animado',
    explicación:
      'Es una técnica para agregar animaciones a gráficos vectoriales escalables en la web.',
    cine: 'En la industria cinematográfica, los SVG animados podrían usarse para crear logotipos dinámicos en sitios de películas.',
    cocina:
      'SVG animado sería como un dibujo que muestra el paso a paso animado de una receta.',
    deporte:
      'En deportes, los SVG animados pueden crear gráficos interactivos para jugadas y estadísticas.',
    random:
      'Los SVG animados usan atributos como `<animate>` para definir los movimientos en un gráfico.',
    link: 'https://example.com/svg-animado',
    link2: 'https://example.com/cocina/svg-animado'
  },
  {
    titulo: 'JSON Schema',
    explicación:
      'Es una especificación para estructurar y validar datos en formato JSON.',
    cine: 'En bases de datos de películas, JSON Schema asegura que los datos de cada título cumplan con un formato específico.',
    cocina:
      'En cocina, JSON Schema validaría que una receta digital tenga los campos requeridos como ingredientes y pasos.',
    deporte:
      'En deportes, JSON Schema podría validar datos de jugadores asegurando que incluyan edad, posición y estadísticas.',
    random:
      'JSON Schema es útil para asegurar que los datos intercambiados entre aplicaciones sean consistentes.',
    link: 'https://example.com/json-schema',
    link2: 'https://example.com/cocina/json-schema'
  },
  {
    titulo: 'Semantic HTML',
    explicación:
      'Es el uso de etiquetas HTML que tienen un significado claro y describen la estructura del contenido.',
    cine: 'En sitios de películas, el uso de HTML semántico mejora la accesibilidad y el SEO al estructurar secciones como reseñas y tráileres.',
    cocina:
      'En la cocina, HTML semántico sería como usar encabezados claros para separar categorías de recetas.',
    deporte:
      'En deportes, el HTML semántico ayudaría a organizar estadísticas, noticias y resultados de partidos en secciones claras.',
    random:
      'Etiquetas como `<article>`, `<section>` y `<nav>` son ejemplos de HTML semántico.',
    link: 'https://example.com/html-semantico',
    link2: 'https://example.com/cocina/html-semantico'
  },
  {
    titulo: 'Preprocesadores CSS',
    explicación:
      'Son herramientas que extienden CSS con características como variables, anidamiento y mixins, generando un código más limpio y reutilizable.',
    cine: 'En diseño de sitios web para películas, un preprocesador CSS como Sass facilita la gestión de estilos complejos.',
    cocina:
      'En cocina, un preprocesador sería como preparar mezclas base que se pueden usar en diferentes recetas.',
    deporte:
      'En deportes, un preprocesador CSS permitiría crear estilos consistentes para los gráficos de todos los equipos en un torneo.',
    random:
      'Sass y Less son los preprocesadores CSS más utilizados en la actualidad.',
    link: 'https://example.com/preprocesadores-css',
    link2: 'https://example.com/cocina/preprocesadores-css'
  },
  {
    titulo: 'CDN (Red de Distribución de Contenidos)',
    explicación:
      'Es una red de servidores distribuidos que entrega contenido de manera eficiente al usuario según su ubicación.',
    cine: 'En servicios de streaming como Netflix, los CDNs aseguran que las películas se carguen rápidamente en todo el mundo.',
    cocina:
      'En la cocina, un CDN sería como tener despensas distribuidas en varios lugares para acceder más rápido a los ingredientes.',
    deporte:
      'En deportes, los CDNs permiten transmitir partidos en vivo a nivel global con baja latencia.',
    random:
      'CDNs como Cloudflare y Akamai son utilizados por los principales sitios web y plataformas de streaming.',
    link: 'https://example.com/cdn',
    link2: 'https://example.com/cocina/cdn'
  },
  {
    titulo: 'XML',
    explicación:
      'Es un lenguaje de marcado extensible diseñado para almacenar y transportar datos de forma estructurada y legible.',
    cine: 'En bases de datos de películas, XML se usa para almacenar información como elenco, director y duración de las películas.',
    cocina:
      'XML sería como un recetario digital organizado donde cada receta tiene campos para ingredientes y pasos.',
    deporte:
      'En deportes, XML se utiliza para estructurar datos como estadísticas de jugadores o resultados de partidos.',
    random:
      'XML es ampliamente utilizado en servicios web y configuraciones de aplicaciones.',
    link: 'https://example.com/xml',
    link2: 'https://example.com/cocina/xml'
  },
  {
    titulo: 'RSS',
    explicación:
      'Es un formato basado en XML que permite a los usuarios recibir actualizaciones de sitios web en tiempo real.',
    cine: 'En sitios de noticias de cine, los feeds RSS informan sobre los últimos estrenos y reseñas.',
    cocina:
      'Un RSS en cocina sería como recibir notificaciones de nuevas recetas en tu aplicación favorita.',
    deporte:
      'En deportes, los RSS actualizan en tiempo real sobre resultados de partidos y fichajes.',
    random:
      'RSS es utilizado principalmente por blogs, sitios de noticias y podcasts.',
    link: 'https://example.com/rss',
    link2: 'https://example.com/cocina/rss'
  },
  {
    titulo: 'YAML',
    explicación:
      'Es un lenguaje de serialización de datos legible para humanos, utilizado para configuración y almacenamiento de datos.',
    cine: 'En producción cinematográfica, YAML podría usarse para almacenar configuraciones de renderización para efectos visuales.',
    cocina:
      'En cocina, YAML sería un formato simple para listar ingredientes y pasos de una receta.',
    deporte:
      'En deportes, YAML podría estructurar la configuración de software utilizado para analizar estadísticas.',
    random:
      'YAML es ampliamente utilizado en herramientas como Docker y Kubernetes.',
    link: 'https://example.com/yaml',
    link2: 'https://example.com/cocina/yaml'
  },
  {
    titulo: 'HTML Canvas',
    explicación:
      'Es un elemento de HTML5 que permite dibujar gráficos en 2D y 3D directamente en el navegador.',
    cine: 'En cine, HTML Canvas se utiliza para crear animaciones o interacciones visuales en sitios de promoción de películas.',
    cocina:
      'Canvas sería como una tabla donde dibujas el diseño de un platillo antes de prepararlo.',
    deporte:
      'En deportes, HTML Canvas se usa para mostrar jugadas animadas o gráficos en tiempo real.',
    random:
      'Canvas es compatible con JavaScript para manipular gráficos y animaciones.',
    link: 'https://example.com/html-canvas',
    link2: 'https://example.com/cocina/html-canvas'
  },
  {
    titulo: 'WYSIWYG (What You See Is What You Get)',
    explicación:
      'Es una herramienta de edición visual donde lo que ves mientras editas es el resultado final.',
    cine: 'En diseño de portales de películas, editores WYSIWYG permiten crear páginas sin escribir código.',
    cocina:
      'En cocina, un editor WYSIWYG sería como visualizar una receta finalizada mientras la redactas.',
    deporte:
      'En deportes, los editores WYSIWYG permiten crear páginas de estadísticas deportivas rápidamente.',
    random:
      'Herramientas como WordPress y Wix utilizan editores WYSIWYG para facilitar el diseño web.',
    link: 'https://example.com/wysiwyg',
    link2: 'https://example.com/cocina/wysiwyg'
  },
  {
    titulo: 'JSON-LD',
    explicación:
      'Es una manera de estructurar datos en JSON para describir contenido de una página web en un formato legible por máquinas.',
    cine: 'En sitios de películas, JSON-LD describe detalles como títulos, géneros y horarios para motores de búsqueda.',
    cocina:
      'En cocina, JSON-LD puede estructurar información de recetas para que aparezcan en resultados enriquecidos de búsqueda.',
    deporte:
      'En deportes, JSON-LD organiza datos de partidos para buscadores como Google.',
    random:
      'JSON-LD es común en SEO para enriquecer los resultados de búsqueda con información estructurada.',
    link: 'https://example.com/json-ld',
    link2: 'https://example.com/cocina/json-ld'
  },
  {
    titulo: 'Atom',
    explicación:
      'Es un estándar para sindicación de contenido similar a RSS, pero más flexible y extensible.',
    cine: 'Atom podría usarse para distribuir actualizaciones de noticias en sitios de cine.',
    cocina:
      'En cocina, Atom podría notificar sobre nuevas recetas o publicaciones en un blog culinario.',
    deporte:
      'En deportes, Atom se usa para distribuir actualizaciones sobre partidos y clasificaciones.',
    random: 'Atom es más moderno que RSS, pero ambos se utilizan ampliamente.',
    link: 'https://example.com/atom',
    link2: 'https://example.com/cocina/atom'
  },
  {
    titulo: 'AJAX',
    explicación:
      'Es una técnica que permite actualizar partes de una página web sin recargarla completamente, mejorando la experiencia del usuario.',
    cine: 'En sitios de películas, AJAX permite cargar información como reseñas o tráilers sin recargar la página.',
    cocina:
      'AJAX en cocina sería como actualizar un temporizador en una receta sin volver a cargar toda la aplicación.',
    deporte:
      'En deportes, AJAX actualiza marcadores en vivo y estadísticas en tiempo real.',
    random:
      'AJAX utiliza tecnologías como JavaScript y XML para el intercambio de datos.',
    link: 'https://example.com/ajax',
    link2: 'https://example.com/cocina/ajax'
  },
  {
    titulo: 'Cookies',
    explicación:
      'Son pequeños archivos de texto almacenados en el navegador del usuario que contienen datos sobre su actividad en un sitio web.',
    cine: 'En sitios de streaming, las cookies recuerdan tus preferencias de películas o series vistas.',
    cocina:
      'En una aplicación culinaria, las cookies podrían recordar tus recetas favoritas o historial de búsqueda.',
    deporte:
      'En sitios deportivos, las cookies almacenan información como el equipo favorito del usuario para personalizar la experiencia.',
    random:
      'Las cookies son esenciales para funciones como autenticación y personalización en la web.',
    link: 'https://example.com/cookies',
    link2: 'https://example.com/cocina/cookies'
  },
  {
    titulo: 'Session Storage',
    explicación:
      'Es una forma de almacenar datos temporalmente en el navegador hasta que la pestaña o ventana se cierra.',
    cine: 'En un sitio de cine, el Session Storage puede almacenar temporalmente las películas seleccionadas para comparar.',
    cocina:
      'En cocina, podría usarse para mantener activos los pasos de una receta mientras navegas por otros ingredientes.',
    deporte:
      'En un sitio deportivo, Session Storage podría almacenar temporalmente estadísticas de un partido en curso.',
    random:
      'Session Storage es útil para datos que no necesitan persistir más allá de una sesión de navegación.',
    link: 'https://example.com/session-storage',
    link2: 'https://example.com/cocina/session-storage'
  },
  {
    titulo: 'Local Storage',
    explicación:
      'Es una forma de almacenamiento web que permite guardar datos en el navegador de forma persistente.',
    cine: 'En una plataforma de películas, el Local Storage puede guardar listas personalizadas de películas para ver más tarde.',
    cocina:
      'En cocina, Local Storage guarda las recetas favoritas o personalizadas del usuario.',
    deporte:
      'En deportes, almacena configuraciones personalizadas, como notificaciones de equipos favoritos.',
    random:
      'A diferencia de las cookies, el Local Storage no se envía al servidor en cada solicitud.',
    link: 'https://example.com/local-storage',
    link2: 'https://example.com/cocina/local-storage'
  },
  {
    titulo: 'Microdatos',
    explicación:
      'Son un estándar para incrustar metadatos directamente en el HTML de una página para mejorar su comprensión por los motores de búsqueda.',
    cine: 'En sitios de películas, los microdatos ayudan a destacar datos como títulos, géneros y valoraciones en los resultados de búsqueda.',
    cocina:
      'En una web de cocina, los microdatos estructuran información como el tiempo de preparación y los ingredientes de las recetas.',
    deporte:
      'En deportes, describen partidos, estadísticas y perfiles de jugadores para optimizar su aparición en buscadores.',
    random:
      'Los microdatos son parte de las tecnologías de datos estructurados soportadas por Google.',
    link: 'https://example.com/microdatos',
    link2: 'https://example.com/cocina/microdatos'
  },
  {
    titulo: 'Data URI',
    explicación:
      'Es un esquema que permite incrustar datos, como imágenes o archivos, directamente en el código HTML o CSS.',
    cine: 'En cine, Data URI permite incrustar imágenes de tráilers o carteles en sitios de promoción sin usar enlaces externos.',
    cocina:
      'En cocina, podrías incluir imágenes de platos directamente en el código de una receta online usando Data URI.',
    deporte:
      'En deportes, incrusta logotipos o gráficos estadísticos en aplicaciones sin necesidad de recursos externos.',
    random:
      'El uso de Data URI puede reducir solicitudes HTTP, mejorando el rendimiento de la página.',
    link: 'https://example.com/data-uri',
    link2: 'https://example.com/cocina/data-uri'
  },
  {
    titulo: 'Lazy Loading',
    explicación:
      'Es una técnica que retrasa la carga de elementos, como imágenes o vídeos, hasta que son necesarios.',
    cine: 'En sitios de películas, Lazy Loading carga imágenes de carteles solo cuando el usuario las desplaza a su vista.',
    cocina:
      'En cocina, Lazy Loading puede usarse para cargar imágenes de recetas únicamente cuando aparecen en pantalla.',
    deporte:
      'En deportes, permite cargar estadísticas o imágenes de partidos solo cuando el usuario las necesita.',
    random:
      'Lazy Loading mejora el rendimiento de las páginas web al reducir el tiempo de carga inicial.',
    link: 'https://example.com/lazy-loading',
    link2: 'https://example.com/cocina/lazy-loading'
  },
  {
    titulo: 'CORS (Cross-Origin Resource Sharing)',
    explicación:
      'Es un mecanismo que permite que recursos restringidos en una página web sean solicitados desde otro dominio distinto.',
    cine: 'En sitios de streaming de cine, CORS permite integrar servicios de terceros para obtener tráilers o datos de películas.',
    cocina:
      'En cocina, podría permitir que una aplicación obtenga datos de recetas de una API externa.',
    deporte:
      'En deportes, CORS se usa para integrar datos en tiempo real de partidos desde servidores externos.',
    random:
      'El uso de CORS requiere que el servidor permita explícitamente el acceso a dominios externos.',
    link: 'https://example.com/cors',
    link2: 'https://example.com/cocina/cors'
  },
  {
    titulo: 'Sitemaps',
    explicación:
      'Son archivos que listan las páginas de un sitio web, ayudando a los motores de búsqueda a rastrear el contenido de manera eficiente.',
    cine: 'En sitios de cine, un sitemap asegura que todas las páginas de películas y reseñas sean fácilmente encontradas por buscadores.',
    cocina:
      'En cocina, un sitemap organiza las páginas de recetas, ingredientes y blogs para mejorar su visibilidad en buscadores.',
    deporte:
      'En deportes, asegura que páginas de partidos, clasificaciones y estadísticas sean rastreadas correctamente.',
    random:
      'Los sitemaps pueden ser en formato XML y deben actualizarse con regularidad para reflejar nuevos contenidos.',
    link: 'https://example.com/sitemaps',
    link2: 'https://example.com/cocina/sitemaps'
  },
  {
    titulo: 'Metadatos',
    explicación:
      'Son datos que describen otros datos, proporcionando información adicional sobre el contenido, como el autor o la fecha de creación.',
    cine: "En 'Minority Report', los perfiles de los ciudadanos contienen metadatos sobre sus hábitos y posibles crímenes futuros.",
    cocina:
      'En una receta online, los metadatos pueden incluir el tiempo de preparación y el número de porciones.',
    deporte:
      'En deportes, los metadatos de un partido podrían incluir la fecha, el lugar y los equipos participantes.',
    random:
      'Los metadatos son clave para el SEO, ya que describen el contenido para los motores de búsqueda.',
    link: 'https://example.com/metadatos',
    link2: 'https://example.com/cocina/metadatos'
  },
  {
    titulo: 'Bootstrap',
    explicación:
      'Es un framework de CSS y JavaScript para diseñar páginas web responsivas y modernas.',
    cine: "En 'The Social Network', los desarrolladores probablemente usaron frameworks similares a Bootstrap para diseñar las primeras interfaces de Facebook.",
    cocina:
      'En una web de cocina, Bootstrap permite crear interfaces claras y amigables para buscar recetas.',
    deporte:
      'En deportes, se usa para diseñar páginas de resultados y estadísticas que se adapten a móviles y PCs.',
    random:
      'Bootstrap incluye componentes como barras de navegación, botones y formularios prediseñados.',
    link: 'https://example.com/bootstrap',
    link2: 'https://example.com/cocina/bootstrap'
  },
  {
    titulo: 'SEO (Optimización para Motores de Búsqueda)',
    explicación:
      'Es el conjunto de técnicas que optimizan un sitio web para mejorar su visibilidad en los motores de búsqueda.',
    cine: "En 'Her', las búsquedas que realiza Theodore probablemente utilizan estrategias de SEO avanzadas para mostrar resultados relevantes rápidamente.",
    cocina:
      'En cocina, el SEO ayuda a que recetas específicas sean más visibles en buscadores como Google.',
    deporte:
      'En deportes, SEO posiciona páginas de resultados de partidos o noticias relevantes en las primeras posiciones.',
    random:
      'El SEO se basa en factores como palabras clave, velocidad de la página y enlaces de calidad.',
    link: 'https://example.com/seo',
    link2: 'https://example.com/cocina/seo'
  },
  {
    titulo: 'DOM (Document Object Model)',
    explicación:
      'Es una representación estructurada de un documento HTML o XML, que permite a los lenguajes de programación interactuar con él.',
    cine: "En 'Tron: Legacy', la interacción de Sam Flynn con el mundo digital podría asemejarse al manejo del DOM en programación.",
    cocina:
      'En cocina, el DOM facilita actualizar los ingredientes de una receta seleccionada sin recargar la página.',
    deporte:
      'En deporte, manipular el DOM permite modificar en tiempo real las estadísticas visibles en una página.',
    random:
      'El DOM es crucial para crear experiencias dinámicas y responsivas en la web.',
    link: 'https://example.com/dom',
    link2: 'https://example.com/cocina/dom'
  },

  {
    titulo: 'Inteligencia Artificial',
    explicación:
      'La inteligencia artificial (IA) es la simulación de procesos de inteligencia humana mediante máquinas, especialmente sistemas informáticos. La IA es clave en la automatización, reconocimiento de patrones y aprendizaje automático.',
    cine: "En 'Ex Machina', Ava representa un modelo avanzado de IA capaz de aprender y manipular su entorno.",
    cocina:
      'La IA en cocina sería como tener un chef robot que puede aprender y perfeccionar recetas a través de la experiencia.',
    deporte:
      'En deportes, la IA se utiliza para analizar el rendimiento de los jugadores y predecir posibles lesiones o resultados de partidos.',
    random:
      'El concepto de IA fue introducido por primera vez en 1956 en la conferencia de Dartmouth.',
    link: 'https://example.com/inteligencia-artificial',
    link2: 'https://example.com/cocina/ia-cocina'
  },
  // etiquetas

  {
    titulo: '<h1>',
    explicación:
      'Se utiliza para definir el encabezado principal de una página. Es la etiqueta de título de nivel más alto.',
    cine: "En una página sobre 'El Señor de los Anillos', el título 'La Comunidad del Anillo' estaría dentro de un <h1>.",
    cocina:
      "El título principal de una receta, como 'Pastel de Chocolate', usaría <h1>.",
    deporte:
      "En una página sobre la final de la Copa Mundial, 'Final de la Copa Mundial 2022' sería el contenido de un <h1>.",
    random:
      'Se recomienda tener solo un <h1> por página para optimizar el SEO.',
    link: 'https://example.com/html-h1',
    link2: 'https://example.com/cocina/html-h1'
  },
  {
    titulo: '<p>',
    explicación: 'Se utiliza para definir un párrafo de texto.',
    cine: "En una página sobre 'Matrix', un párrafo describiendo la trama se incluiría dentro de un <p>.",
    cocina:
      "Una breve descripción de una receta, como 'Este pastel es perfecto para fiestas', iría dentro de un <p>.",
    deporte: 'Un párrafo explicando las reglas del fútbol podría usar un <p>.',
    random:
      'La etiqueta <p> agrega un margen por defecto al texto para separarlo visualmente.',
    link: 'https://example.com/html-p',
    link2: 'https://example.com/cocina/html-p'
  },
  {
    titulo: '<a>',
    explicación: 'Define un hipervínculo que conecta a otra página o sección.',
    cine: "Un enlace como 'Ver más sobre Star Wars' usaría <a href='link'>.",
    cocina:
      "Un botón para 'Leer receta completa' estaría envuelto en una etiqueta <a>.",
    deporte:
      "En una página de estadísticas, un enlace para 'Ver más detalles del jugador' usaría <a>.",
    random:
      "La etiqueta <a> puede abrir enlaces en una nueva pestaña utilizando el atributo target='_blank'.",
    link: 'https://example.com/html-a',
    link2: 'https://example.com/cocina/html-a'
  },
  {
    titulo: '<img>',
    explicación: 'Se utiliza para insertar imágenes en una página.',
    cine: "El póster de 'Titanic' podría mostrarse usando <img src='titanic.jpg'>.",
    cocina:
      "Una imagen del plato terminado, como 'pasta.jpg', se inserta con <img>.",
    deporte:
      "Una fotografía de un equipo de fútbol se mostraría con <img src='equipo.jpg'>.",
    random:
      'El atributo alt describe la imagen y es importante para la accesibilidad.',
    link: 'https://example.com/html-img',
    link2: 'https://example.com/cocina/html-img'
  },
  {
    titulo: '<ul>',
    explicación:
      'Crea una lista desordenada, que normalmente se muestra con viñetas.',
    cine: "Una lista de personajes de 'Harry Potter' podría estar dentro de un <ul>.",
    cocina: 'Los ingredientes necesarios para una receta se listan en un <ul>.',
    deporte:
      'Un listado de equipos participantes en un torneo estaría en un <ul>.',
    random: 'Cada elemento de la lista usa la etiqueta <li> dentro del <ul>.',
    link: 'https://example.com/html-ul',
    link2: 'https://example.com/cocina/html-ul'
  },
  {
    titulo: '<ol>',
    explicación:
      'Crea una lista ordenada, que normalmente se muestra con números.',
    cine: 'El orden cronológico de las películas de Marvel se representaría con un <ol>.',
    cocina: "Los pasos de una receta, como '1. Mezclar', estarían en un <ol>.",
    deporte:
      'El ranking de los mejores jugadores se representaría con un <ol>.',
    random: 'Las listas ordenadas son útiles para secuencias o jerarquías.',
    link: 'https://example.com/html-ol',
    link2: 'https://example.com/cocina/html-ol'
  },
  {
    titulo: '<table>',
    explicación:
      'Se utiliza para crear tablas y organizar datos en filas y columnas.',
    cine: "Una tabla con el reparto de 'El Padrino', mostrando nombre y personaje, usaría <table>.",
    cocina: 'Una tabla de calorías por porción podría crearse con <table>.',
    deporte:
      'El calendario de partidos de un torneo se organiza en una tabla usando <table>.',
    random:
      'Cada fila de tabla se define con <tr> y cada celda con <td> o <th>.',
    link: 'https://example.com/html-table',
    link2: 'https://example.com/cocina/html-table'
  },
  {
    titulo: '<div>',
    explicación: 'Es un contenedor genérico para agrupar contenido.',
    cine: "En una página sobre 'Jurassic Park', un <div> podría agrupar el contenido sobre dinosaurios.",
    cocina:
      'Un <div> puede agrupar imágenes y texto de una receta en un solo contenedor.',
    deporte:
      'En deportes, se utiliza un <div> para organizar secciones como estadísticas y resultados.',
    random:
      'Los <div> son clave para estructurar y diseñar páginas web usando CSS.',
    link: 'https://example.com/html-div',
    link2: 'https://example.com/cocina/html-div'
  },
  {
    titulo: '<span>',
    explicación:
      'Es un contenedor en línea usado para aplicar estilos o manipular partes específicas del texto.',
    cine: "En 'The Matrix', destacar la palabra 'Neo' en un párrafo usaría <span>.",
    cocina:
      "En una receta, resaltar 'sin gluten' en los ingredientes se haría con un <span>.",
    deporte:
      'En deportes, usarías <span> para destacar nombres de jugadores en un párrafo.',
    random:
      'A diferencia de <div>, <span> no inicia un nuevo bloque, por lo que es ideal para texto en línea.',
    link: 'https://example.com/html-span',
    link2: 'https://example.com/cocina/html-span'
  },
  {
    titulo: '<form>',
    explicación:
      'Se utiliza para crear formularios que recopilan datos del usuario.',
    cine: "En una página de fans de 'Star Wars', un formulario para unirse al club usaría <form>.",
    cocina:
      'En un sitio de recetas, un formulario permite enviar tu propia receta usando <form>.',
    deporte:
      'Un formulario para registrarte en un torneo deportivo estaría dentro de <form>.',
    random:
      "Los formularios pueden enviar datos usando los métodos 'GET' o 'POST'.",
    link: 'https://example.com/html-form',
    link2: 'https://example.com/cocina/html-form'
  },
  {
    titulo: '<input>',
    explicación:
      'Se utiliza para crear diferentes tipos de campos en formularios, como texto, contraseñas, botones y más.',
    cine: "En una página de 'Star Wars', un <input type='text'> permitiría buscar información sobre personajes.",
    cocina:
      "En un sitio de recetas, <input type='number'> se usaría para ingresar la cantidad de porciones deseadas.",
    deporte:
      "En una página de registro para un torneo, un <input type='email'> solicitaría el correo electrónico del jugador.",
    random:
      "El atributo 'type' define el tipo de entrada, como texto, número o fecha.",
    link: 'https://example.com/html-input',
    link2: 'https://example.com/cocina/html-input'
  },
  {
    titulo: '<button>',
    explicación:
      'Define un botón que puede realizar acciones específicas, como enviar un formulario o ejecutar un script.',
    cine: "Un botón con texto 'Ver Tráiler' en una página de 'Inception' usaría <button>.",
    cocina:
      "Un botón para 'Calcular calorías' en una receta podría crearse con <button>.",
    deporte:
      "En una página de estadísticas, un botón 'Actualizar resultados' estaría dentro de una etiqueta <button>.",
    random:
      'Puedes usar JavaScript para asignar funciones específicas a un botón.',
    link: 'https://example.com/html-button',
    link2: 'https://example.com/cocina/html-button'
  },
  {
    titulo: '<option>',
    explicación:
      'Se utiliza dentro de un <select> para definir las opciones disponibles en un menú desplegable.',
    cine: "En una página de fans de 'Harry Potter', las casas de Hogwarts podrían ser opciones dentro de un <select>.",
    cocina:
      "Un menú desplegable para elegir 'Tipo de harina' en una receta tendría opciones como 'trigo' o 'almendra'.",
    deporte:
      'Un <option> dentro de un <select> podría listar deportes: fútbol, baloncesto, tenis, etc.',
    random:
      "Puedes usar 'selected' para establecer una opción como predeterminada.",
    link: 'https://example.com/html-option',
    link2: 'https://example.com/cocina/html-option'
  },
  {
    titulo: '<footer>',
    explicación:
      'Define el pie de página de una página o sección, que suele contener información adicional o enlaces.',
    cine: "En una página de 'El Señor de los Anillos', el <footer> podría incluir créditos y enlaces a redes sociales.",
    cocina:
      "En un sitio de recetas, el <footer> podría mostrar 'Copyright 2025 Recetas Gourmet' y enlaces a contacto.",
    deporte:
      'En una página de estadísticas deportivas, el <footer> contendría el copyright y el enlace a políticas de privacidad.',
    random: 'Al igual que <header>, es una etiqueta semántica de HTML5.',
    link: 'https://example.com/html-footer',
    link2: 'https://example.com/cocina/html-footer'
  },
  {
    titulo: '<article>',
    explicación:
      'Define contenido independiente dentro de una página, como un artículo o una publicación de blog.',
    cine: "Un análisis de 'Blade Runner' podría estar envuelto en un <article> en un blog de cine.",
    cocina:
      'Cada receta en un blog culinario podría estar dentro de un <article>.',
    deporte:
      'Un artículo sobre la biografía de un jugador estaría contenido en un <article> en un sitio deportivo.',
    random:
      'El <article> es ideal para contenido que puede ser distribuido independientemente.',
    link: 'https://example.com/html-article',
    link2: 'https://example.com/cocina/html-article'
  },
  {
    titulo: '<section>',
    explicación: 'Agrupa contenido relacionado dentro de una página.',
    cine: "En un sitio sobre 'Matrix', una <section> podría agrupar información sobre los personajes.",
    cocina:
      'En un blog culinario, una <section> podría contener todas las recetas de postres.',
    deporte:
      'En una página de estadísticas, una <section> podría agrupar información sobre la liga.',
    random:
      'La etiqueta <section> es una alternativa semántica a <div> cuando el contenido tiene un propósito claro.',
    link: 'https://example.com/html-section',
    link2: 'https://example.com/cocina/html-section'
  },
  {
    titulo: '<nav>',
    explicación:
      'Define un bloque de navegación que contiene enlaces a otras partes del sitio o a páginas externas.',
    cine: "En una página de 'Jurassic Park', el <nav> podría incluir enlaces a 'Inicio', 'Dinosaurios' y 'Parques'.",
    cocina:
      "En un blog de cocina, el <nav> podría incluir enlaces a categorías como 'Entradas', 'Platos Fuertes' y 'Postres'.",
    deporte:
      "En un sitio de estadísticas deportivas, el <nav> podría contener enlaces a 'Equipos', 'Calendario' y 'Resultados'.",
    random:
      'La etiqueta <nav> mejora la accesibilidad y facilita la navegación del sitio.',
    link: 'https://example.com/html-nav',
    link2: 'https://example.com/cocina/html-nav'
  },
  {
    titulo: '<aside>',
    explicación:
      'Define contenido adicional relacionado con el contenido principal, como barras laterales.',
    cine: "En una página de 'The Dark Knight', un <aside> podría incluir trivia sobre el Joker.",
    cocina:
      'En un blog de recetas, un <aside> podría contener tips adicionales para la receta principal.',
    deporte:
      'En un sitio deportivo, un <aside> podría mostrar estadísticas rápidas o noticias relacionadas.',
    random:
      'El contenido en <aside> no suele ser esencial, pero complementa la página.',
    link: 'https://example.com/html-aside',
    link2: 'https://example.com/cocina/html-aside'
  },
  {
    titulo: '<figure>',
    explicación:
      'Agrupa contenido visual como imágenes o diagramas, junto con su descripción.',
    cine: "En una página de 'Titanic', un <figure> podría incluir una foto del barco y un pie de foto explicativo.",
    cocina:
      'En una receta, un <figure> podría mostrar una imagen del plato terminado con su descripción.',
    deporte:
      'En una página de deportes, un <figure> podría contener una foto de un jugador y su nombre.',
    random:
      'La etiqueta <figcaption> se usa dentro de <figure> para proporcionar un pie de foto.',
    link: 'https://example.com/html-figure',
    link2: 'https://example.com/cocina/html-figure'
  },
  {
    titulo: '<figcaption>',
    explicación:
      'Proporciona un pie de foto o descripción para el contenido dentro de un <figure>.',
    cine: "En una página de 'Avengers', un <figcaption> podría decir 'El equipo original de los Vengadores' debajo de una imagen.",
    cocina:
      'En una receta, un <figcaption> podría describir la presentación del plato.',
    deporte:
      'En una galería de fotos de un partido, un <figcaption> podría indicar el momento del gol.',
    random:
      'El <figcaption> debe colocarse como primer o último hijo dentro del <figure>.',
    link: 'https://example.com/html-figcaption',
    link2: 'https://example.com/cocina/html-figcaption'
  },
  {
    titulo: '<audio>',
    explicación:
      'Se utiliza para incrustar contenido de audio, como música o podcasts.',
    cine: "En una página de 'Interstellar', un <audio> podría reproducir la banda sonora de Hans Zimmer.",
    cocina:
      'En un blog de cocina, un <audio> podría incluir una narración paso a paso de la receta.',
    deporte:
      'En un sitio deportivo, un <audio> podría reproducir comentarios de un partido.',
    random:
      "El atributo 'controls' agrega controles de reproducción como play, pause y volumen.",
    link: 'https://example.com/html-audio',
    link2: 'https://example.com/cocina/html-audio'
  },
  {
    titulo: '<video>',
    explicación: 'Permite incrustar contenido de video en una página web.',
    cine: "En una página de 'Spider-Man', un <video> podría mostrar avances de la película.",
    cocina:
      'En un blog de recetas, un <video> podría mostrar el proceso completo de preparación de un platillo.',
    deporte:
      'En un sitio deportivo, un <video> podría incluir un resumen de los mejores momentos de un partido.',
    random:
      "Puedes usar el atributo 'poster' para mostrar una imagen previa antes de reproducir el video.",
    link: 'https://example.com/html-video',
    link2: 'https://example.com/cocina/html-video'
  },
  {
    titulo: '<source>',
    explicación:
      'Define recursos multimedia alternativos para elementos <audio> o <video>.',
    cine: "En una página de 'The Lion King', <source> podría ofrecer la banda sonora en diferentes formatos.",
    cocina:
      'En un blog culinario, <source> podría incluir un video de cocina en varios formatos para compatibilidad.',
    deporte:
      'En un sitio de deportes, <source> podría proporcionar videos de partidos en diferentes resoluciones.',
    random:
      'Los navegadores seleccionan automáticamente la mejor fuente disponible según el formato soportado.',
    link: 'https://example.com/html-source',
    link2: 'https://example.com/cocina/html-source'
  },
  {
    titulo: '<iframe>',
    explicación:
      'Permite incrustar otra página web dentro de la página actual.',
    cine: "En una página de 'The Matrix', un <iframe> podría mostrar el tráiler de YouTube.",
    cocina:
      'En un blog de cocina, un <iframe> podría mostrar un mapa con la ubicación de mercados cercanos.',
    deporte:
      'En una página de resultados deportivos, un <iframe> podría mostrar la tabla de posiciones actualizada.',
    random:
      "El atributo 'allowfullscreen' permite que el contenido del <iframe> se reproduzca en pantalla completa.",
    link: 'https://example.com/html-iframe',
    link2: 'https://example.com/cocina/html-iframe'
  },
  {
    titulo: '<progress>',
    explicación: 'Muestra el progreso de una tarea en ejecución.',
    cine: "En una página de 'Transformers', un <progress> podría mostrar el avance de la descarga de un fondo de pantalla.",
    cocina:
      'En un blog de cocina, un <progress> podría indicar el tiempo restante para terminar de hornear.',
    deporte:
      'En una página de estadísticas, un <progress> podría mostrar el porcentaje completado de una temporada.',
    random:
      "El atributo 'value' indica el progreso actual, y 'max' define el valor máximo.",
    link: 'https://example.com/html-progress',
    link2: 'https://example.com/cocina/html-progress'
  },
  {
    titulo: '<details>',
    explicación:
      'Crea un widget interactivo que muestra u oculta información adicional al ser expandido.',
    cine: "En una página de 'Harry Potter', un <details> podría ocultar detalles sobre las varitas de los personajes.",
    cocina:
      'En un blog de recetas, un <details> podría mostrar consejos adicionales para decorar un pastel.',
    deporte:
      'En un sitio deportivo, un <details> podría revelar estadísticas avanzadas de un jugador al expandirse.',
    random:
      "El atributo 'open' permite que el <details> aparezca expandido por defecto.",
    link: 'https://example.com/html-details',
    link2: 'https://example.com/cocina/html-details'
  },
  {
    titulo: '<summary>',
    explicación:
      'Especifica un encabezado visible para un elemento <details>, que actúa como control para expandirlo o colapsarlo.',
    cine: "En una página de 'Inception', un <summary> podría decir 'Ver más sobre los niveles de sueño'.",
    cocina:
      "En un blog de cocina, un <summary> podría decir 'Mostrar sustitutos de ingredientes'.",
    deporte:
      "En un sitio deportivo, un <summary> podría mostrar 'Ver más sobre el rendimiento del equipo'.",
    random:
      'El <summary> es opcional dentro de <details>, pero mejora la experiencia del usuario.',
    link: 'https://example.com/html-summary',
    link2: 'https://example.com/cocina/html-summary'
  },
  {
    titulo: '<mark>',
    explicación: 'Resalta texto que es relevante dentro de un contexto.',
    cine: "En una página de 'Sherlock Holmes', <mark> podría resaltar pistas importantes en la narrativa.",
    cocina:
      'En una receta, <mark> podría resaltar ingredientes que pueden causar alergias.',
    deporte:
      'En una página de análisis, <mark> podría destacar las estadísticas clave del partido.',
    random:
      'El texto resaltado en <mark> suele aparecer con un fondo amarillo por defecto.',
    link: 'https://example.com/html-mark',
    link2: 'https://example.com/cocina/html-mark'
  },
  {
    titulo: '<blockquote>',
    explicación: 'Define una cita en bloque tomada de otra fuente.',
    cine: "En una página de 'Star Wars', un <blockquote> podría incluir la cita 'Que la fuerza te acompañe'.",
    cocina:
      'En un blog culinario, un <blockquote> podría citar a un famoso chef sobre la importancia de la presentación.',
    deporte:
      'En un artículo deportivo, un <blockquote> podría incluir palabras inspiradoras de un entrenador legendario.',
    random: "Puedes usar el atributo 'cite' para enlazar la fuente de la cita.",
    link: 'https://example.com/html-blockquote',
    link2: 'https://example.com/cocina/html-blockquote'
  },
  {
    titulo: '<time>',
    explicación: 'Representa un período o una hora específica en el tiempo.',
    cine: "En una página de 'Back to the Future', un <time> podría mostrar la fecha en que Marty viaja al pasado.",
    cocina:
      'En un blog de cocina, <time> podría indicar cuánto tiempo se tarda en preparar una receta.',
    deporte:
      'En una página de resultados deportivos, <time> podría mostrar la hora de inicio de un partido.',
    random:
      "El atributo 'datetime' permite especificar una fecha legible por máquinas.",
    link: 'https://example.com/html-time',
    link2: 'https://example.com/cocina/html-time'
  },
  {
    titulo: '<code>',
    explicación: 'Define un fragmento de código en un documento.',
    cine: "En una página de 'Matrix', un <code> podría mostrar el famoso código verde que representa la simulación.",
    cocina:
      'En un blog técnico de cocina, <code> podría incluir un script para calcular proporciones de ingredientes.',
    deporte:
      'En un sitio de estadísticas deportivas, <code> podría mostrar un script usado para analizar datos.',
    random:
      'Los navegadores suelen mostrar el contenido de <code> con una fuente monoespaciada.',
    link: 'https://example.com/html-code',
    link2: 'https://example.com/cocina/html-code'
  },
  {
    titulo: '<pre>',
    explicación:
      'Muestra texto preformateado con espacios y saltos de línea preservados.',
    cine: "En una página de 'Tron', un <pre> podría mostrar código fuente del mundo digital.",
    cocina:
      'En un blog de cocina, un <pre> podría mostrar una tabla ASCII de conversión de medidas.',
    deporte:
      'En un sitio deportivo, <pre> podría mostrar estadísticas de jugadores en un formato tabular fijo.',
    random:
      'El uso de <pre> es ideal para representar datos que requieren un formato exacto.',
    link: 'https://example.com/html-pre',
    link2: 'https://example.com/cocina/html-pre'
  },
  {
    titulo: '<small>',
    explicación:
      'Hace que el texto aparezca más pequeño en comparación con el texto circundante.',
    cine: "En una página de 'Ant-Man', <small> podría enfatizar la idea de miniaturización.",
    cocina:
      'En una receta, <small> podría incluir notas sobre variaciones o ajustes opcionales.',
    deporte:
      'En un artículo deportivo, <small> podría mostrar información secundaria como fuentes de estadísticas.',
    random:
      'Se usa comúnmente para disclaimers, advertencias o notas adicionales.',
    link: 'https://example.com/html-small',
    link2: 'https://example.com/cocina/html-small'
  },
  {
    titulo: '<bdi>',
    explicación:
      'Asegura que el texto contenido no se vea afectado por la dirección del texto circundante.',
    cine: "En una página de 'Aladdin', <bdi> podría usarse para mostrar nombres en árabe correctamente.",
    cocina:
      'En un blog de cocina internacional, <bdi> podría mantener intactos nombres de platillos en idiomas RTL (de derecha a izquierda).',
    deporte:
      'En un sitio de deportes, <bdi> podría garantizar que los nombres de los equipos en idiomas diferentes se muestren correctamente.',
    random:
      'Es útil en contenidos multilingües para evitar errores de dirección del texto.',
    link: 'https://example.com/html-bdi',
    link2: 'https://example.com/cocina/html-bdi'
  },
  {
    titulo: '<wbr>',
    explicación:
      'Indica una posición dentro de una palabra donde el navegador puede realizar un salto de línea.',
    cine: "En una página de 'The Lord of the Rings', <wbr> podría evitar que un nombre largo como 'Minas Tirith' se desborde.",
    cocina:
      'En una receta con instrucciones largas, <wbr> podría mejorar la legibilidad dividiendo líneas extensas.',
    deporte:
      'En un sitio deportivo, <wbr> podría garantizar que nombres de jugadores o equipos largos se ajusten al diseño.',
    random:
      'El navegador solo divide la palabra si es necesario para evitar desbordes.',
    link: 'https://example.com/html-wbr',
    link2: 'https://example.com/cocina/html-wbr'
  },
  {
    titulo: '<input>',
    explicación:
      'Especifica un campo interactivo donde los usuarios pueden ingresar datos.',
    cine: "En una página de 'Ready Player One', un <input> podría solicitar un código de acceso al OASIS.",
    cocina:
      'En un blog culinario, un <input> podría permitir buscar recetas por ingredientes.',
    deporte:
      'En un sitio deportivo, un <input> podría permitir a los usuarios buscar estadísticas de jugadores.',
    random:
      "El atributo 'type' define el tipo de campo, como texto, contraseña o correo electrónico.",
    link: 'https://example.com/html-input',
    link2: 'https://example.com/cocina/html-input'
  },
  {
    titulo: '<textarea>',
    explicación:
      'Define un área de texto de varias líneas para que los usuarios escriban comentarios o contenido extenso.',
    cine: "En una página de 'The Godfather', un <textarea> podría permitir a los usuarios escribir sus críticas sobre la película.",
    cocina:
      'En un blog de recetas, un <textarea> podría permitir compartir una experiencia personal cocinando un platillo.',
    deporte:
      'En una página de fans, un <textarea> podría recolectar opiniones sobre el desempeño de un equipo.',
    random:
      'A diferencia de <input>, <textarea> permite incluir texto largo con múltiples líneas.',
    link: 'https://example.com/html-textarea',
    link2: 'https://example.com/cocina/html-textarea'
  },
  {
    titulo: '<button>',
    explicación:
      'Crea un botón clicable que puede ejecutar acciones específicas al interactuar con él.',
    cine: "En una página de 'Jurassic Park', un <button> podría activar un recorrido interactivo del parque.",
    cocina:
      'En un blog de cocina, un <button> podría permitir descargar una receta en formato PDF.',
    deporte:
      'En una página deportiva, un <button> podría iniciar un simulador de partidos entre equipos históricos.',
    random:
      "Los botones pueden tener diferentes tipos, como 'submit', 'reset' o simplemente 'button'.",
    link: 'https://example.com/html-button',
    link2: 'https://example.com/cocina/html-button'
  },
  {
    titulo: '<select>',
    explicación:
      'Crea un menú desplegable donde los usuarios pueden elegir una opción.',
    cine: "En un sitio sobre 'Marvel', un <select> podría permitir seleccionar tu superhéroe favorito.",
    cocina:
      'En una página de recetas, un <select> podría permitir elegir el tipo de platillo (entrada, plato fuerte, postre).',
    deporte:
      'En un sitio deportivo, un <select> podría permitir elegir una liga para mostrar las estadísticas correspondientes.',
    random:
      "El atributo 'multiple' permite a los usuarios seleccionar más de una opción a la vez.",
    link: 'https://example.com/html-select',
    link2: 'https://example.com/cocina/html-select'
  },
  {
    titulo: '<label>',
    explicación:
      'Asocia un texto descriptivo con un elemento de entrada en un formulario.',
    cine: "En una página de 'Inception', un <label> podría explicar el propósito de un campo de texto, como 'Ingresa tu nivel de sueño'.",
    cocina:
      "En un blog culinario, un <label> podría decir 'Escribe tu ingrediente favorito' para un campo de texto.",
    deporte:
      "En un formulario deportivo, un <label> podría decir 'Selecciona tu equipo favorito'.",
    random:
      "El atributo 'for' conecta el <label> con el ID de un <input> correspondiente.",
    link: 'https://example.com/html-label',
    link2: 'https://example.com/cocina/html-label'
  },
  {
    titulo: '<fieldset>',
    explicación:
      'Agrupa visualmente elementos relacionados dentro de un formulario.',
    cine: "En una página de 'Avengers', un <fieldset> podría agrupar los campos de registro para ser un vengador.",
    cocina:
      'En un blog de cocina, un <fieldset> podría agrupar campos para agregar ingredientes y pasos de una receta.',
    deporte:
      'En un formulario de predicciones deportivas, un <fieldset> podría agrupar las opciones de un torneo específico.',
    random:
      'El uso de <fieldset> mejora la accesibilidad al asociar grupos de campos relacionados.',
    link: 'https://example.com/html-fieldset',
    link2: 'https://example.com/cocina/html-fieldset'
  },
  {
    titulo: '<legend>',
    explicación: 'Proporciona un título para un elemento <fieldset>.',
    cine: "En una página de 'The Matrix', un <legend> podría decir 'Selecciona tu realidad'.",
    cocina:
      "En un formulario culinario, un <legend> podría decir 'Información del platillo'.",
    deporte:
      "En una página deportiva, un <legend> podría decir 'Detalles del equipo'.",
    random:
      'El texto del <legend> suele mostrarse al principio del <fieldset> al que pertenece.',
    link: 'https://example.com/html-legend',
    link2: 'https://example.com/cocina/html-legend'
  },
  {
    titulo: '<datalist>',
    explicación:
      'Proporciona una lista de opciones predefinidas para un campo de entrada.',
    cine: "En un formulario de 'Harry Potter', un <datalist> podría sugerir nombres de hechizos.",
    cocina:
      'En una página de recetas, un <datalist> podría sugerir ingredientes comunes mientras escribes.',
    deporte:
      'En un formulario deportivo, un <datalist> podría sugerir nombres de jugadores famosos.',
    random:
      "El <datalist> debe estar asociado a un <input> mediante el atributo 'list'.",
    link: 'https://example.com/html-datalist',
    link2: 'https://example.com/cocina/html-datalist'
  },
  {
    titulo: '<audio>',
    explicación:
      'Se utiliza para incrustar contenido de audio en una página web.',
    cine: "En una página de 'The Sound of Music', un <audio> podría reproducir la banda sonora de la película.",
    cocina:
      'En un blog de recetas, un <audio> podría explicar en voz cómo preparar un platillo.',
    deporte:
      'En un sitio deportivo, un <audio> podría reproducir los comentarios de un partido famoso.',
    random:
      "El atributo 'controls' agrega opciones como reproducir, pausar y ajustar el volumen.",
    link: 'https://example.com/html-audio',
    link2: 'https://example.com/cocina/html-audio'
  },
  {
    titulo: '<track>',
    explicación:
      'Añade subtítulos, descripciones o metadatos a un elemento <video> o <audio>.',
    cine: "En una página de 'Parasite', un <track> podría agregar subtítulos en inglés para el tráiler.",
    cocina:
      'En un tutorial culinario, un <track> podría incluir subtítulos con los pasos de la receta.',
    deporte:
      'En un video deportivo, un <track> podría mostrar estadísticas en tiempo real como subtítulos.',
    random:
      "El atributo 'kind' define el tipo de pista, como 'subtitles', 'captions' o 'descriptions'.",
    link: 'https://example.com/html-track',
    link2: 'https://example.com/cocina/html-track'
  },
  {
    titulo: '<iframe>',
    explicación: 'Permite incrustar otro documento HTML dentro de una página.',
    cine: "En una página de 'Star Wars', un <iframe> podría mostrar un mapa interactivo de la galaxia.",
    cocina:
      'En un blog de cocina, un <iframe> podría incrustar un video de YouTube sobre una receta.',
    deporte:
      'En un sitio deportivo, un <iframe> podría mostrar resultados en vivo desde otra página.',
    random:
      "El atributo 'sandbox' restringe las acciones permitidas dentro del contenido incrustado.",
    link: 'https://example.com/html-iframe',
    link2: 'https://example.com/cocina/html-iframe'
  },
  {
    titulo: '<svg>',
    explicación:
      'Permite crear gráficos vectoriales escalables directamente en el HTML.',
    cine: "En una página de 'Spider-Man: Into the Spider-Verse', un <svg> podría mostrar el logotipo de Spider-Man como un gráfico interactivo.",
    cocina:
      'En un blog culinario, un <svg> podría dibujar un utensilio de cocina o ilustrar un platillo.',
    deporte:
      'En un sitio deportivo, un <svg> podría representar un campo de juego con posiciones de los jugadores.',
    random:
      'Los gráficos SVG son ideales para íconos, logotipos y diagramas interactivos.',
    link: 'https://example.com/html-svg',
    link2: 'https://example.com/cocina/html-svg'
  },
  {
    titulo: '<picture>',
    explicación:
      'Define un contenedor para múltiples versiones de una imagen, proporcionando opciones de calidad y tamaño.',
    cine: "En una página de 'The Matrix', un <picture> podría mostrar imágenes de fondo adaptadas a diferentes dispositivos.",
    cocina:
      'En un blog de cocina, un <picture> podría mostrar versiones de una receta con fotos optimizadas para móviles y escritorio.',
    deporte:
      'En un sitio deportivo, un <picture> podría mostrar fotos de partidos con diferentes resoluciones para la mejor visualización.',
    random:
      'El <picture> permite especificar diferentes imágenes según las condiciones, como el ancho de pantalla.',
    link: 'https://example.com/html-picture',
    link2: 'https://example.com/cocina/html-picture'
  },
  {
    titulo: '<header>',
    explicación:
      'Define la cabecera de una página o sección, que usualmente contiene títulos y navegación.',
    cine: "En una página de 'Harry Potter', un <header> podría incluir un logotipo de Hogwarts y un menú de secciones.",
    cocina:
      'En un blog culinario, un <header> podría mostrar el título del blog y un menú con categorías de recetas.',
    deporte:
      'En un sitio deportivo, un <header> podría incluir el nombre del equipo y un menú de noticias.',
    random:
      'Es un contenedor semántico clave para la organización de páginas web.',
    link: 'https://example.com/html-header',
    link2: 'https://example.com/cocina/html-header'
  },
  {
    titulo: '<table>',
    explicación:
      'Se utiliza para crear tablas estructuradas para organizar datos en filas y columnas.',
    cine: "En una página de 'The Matrix', un <table> podría listar las estadísticas de los personajes.",
    cocina:
      'En un blog culinario, un <table> podría mostrar una tabla nutricional de los platillos.',
    deporte:
      'En un sitio deportivo, un <table> podría mostrar las posiciones de los equipos en una liga.',
    random:
      'Los elementos clave son <thead>, <tbody> y <tfoot> para organizar la tabla.',
    link: 'https://example.com/html-table',
    link2: 'https://example.com/cocina/html-table'
  },
  {
    titulo: '<tr>',
    explicación: 'Define una fila dentro de una tabla.',
    cine: "En una página de 'The Godfather', un <tr> podría representar una familia en la tabla de personajes.",
    cocina:
      'En un blog culinario, un <tr> podría representar una categoría de ingredientes en una tabla.',
    deporte:
      'En un sitio deportivo, un <tr> podría representar a un equipo en una tabla de posiciones.',
    random:
      'Cada fila dentro de <table> se compone de una o más celdas definidas con <td> o <th>.',
    link: 'https://example.com/html-tr',
    link2: 'https://example.com/cocina/html-tr'
  },
  {
    titulo: '<td>',
    explicación: 'Define una celda de datos dentro de una tabla.',
    cine: "En una página de 'Jurassic Park', un <td> podría mostrar el nombre de un dinosaurio en una tabla.",
    cocina:
      'En un blog culinario, un <td> podría contener el nombre de un ingrediente en una tabla de recetas.',
    deporte:
      'En un sitio deportivo, un <td> podría contener el número de puntos de un equipo en una tabla.',
    random:
      'Las celdas <td> son utilizadas para datos regulares, mientras que <th> se usa para encabezados.',
    link: 'https://example.com/html-td',
    link2: 'https://example.com/cocina/html-td'
  },
  {
    titulo: '<th>',
    explicación: 'Define una celda de encabezado dentro de una tabla.',
    cine: "En una página de 'Harry Potter', un <th> podría ser el encabezado de una tabla de casas de Hogwarts.",
    cocina:
      'En un blog culinario, un <th> podría ser el título de una columna en una tabla de ingredientes.',
    deporte:
      'En un sitio deportivo, un <th> podría ser el encabezado de una tabla de clasificaciones.',
    random:
      "El atributo 'scope' en <th> puede mejorar la accesibilidad al indicar qué rango cubre el encabezado.",
    link: 'https://example.com/html-th',
    link2: 'https://example.com/cocina/html-th'
  },
  {
    titulo: '<caption>',
    explicación: 'Proporciona un título o descripción breve para una tabla.',
    cine: "En una página de 'Titanic', un <caption> podría describir una tabla de pasajeros sobrevivientes.",
    cocina:
      'En un blog culinario, un <caption> podría explicar el propósito de una tabla nutricional.',
    deporte:
      'En un sitio deportivo, un <caption> podría describir una tabla de resultados de un torneo.',
    random:
      'El <caption> se coloca directamente después de la etiqueta <table> y antes de sus filas.',
    link: 'https://example.com/html-caption',
    link2: 'https://example.com/cocina/html-caption'
  },
  {
    titulo: '<b>',
    explicación:
      'Se utiliza para dar énfasis visual a un texto mediante negritas, sin añadir importancia semántica.',
    cine: "En una página de 'Inception', un <b> podría resaltar los nombres de los personajes principales.",
    cocina:
      'En un blog culinario, un <b> podría destacar los ingredientes principales de una receta.',
    deporte:
      'En un sitio deportivo, un <b> podría resaltar al equipo ganador en una crónica.',
    random:
      'A diferencia de <strong>, <b> no tiene significado semántico adicional.',
    link: 'https://example.com/html-b',
    link2: 'https://example.com/cocina/html-b'
  },
  {
    titulo: '<i>',
    explicación:
      'Aplica un estilo de cursiva al texto, útil para títulos, citas o nombres científicos.',
    cine: "En una página de 'Jurassic Park', un <i> podría estilizar los nombres científicos de los dinosaurios.",
    cocina:
      'En un blog culinario, un <i> podría usarse para escribir frases o nombres en otro idioma.',
    deporte:
      'En un sitio deportivo, un <i> podría dar énfasis a los lemas de los equipos.',
    random:
      'El uso de <i> puede ser reemplazado por CSS para mayor control visual.',
    link: 'https://example.com/html-i',
    link2: 'https://example.com/cocina/html-i'
  },
  {
    titulo: '<strong>',
    explicación:
      'Da énfasis semántico fuerte al texto, generalmente mostrado en negritas.',
    cine: "En una página de 'The Matrix', un <strong> podría enfatizar frases clave como 'The One'.",
    cocina:
      "En un blog culinario, un <strong> podría destacar advertencias importantes, como 'Cuidado con las alergias'.",
    deporte:
      'En un sitio deportivo, un <strong> podría resaltar la fecha de un evento importante.',
    random:
      'Se recomienda usar <strong> en lugar de <b> cuando el texto tiene un significado importante.',
    link: 'https://example.com/html-strong',
    link2: 'https://example.com/cocina/html-strong'
  },
  {
    titulo: '<em>',
    explicación:
      'Añade énfasis semántico al texto, generalmente mostrado en cursiva.',
    cine: "En una página de 'The Godfather', un <em> podría enfatizar frases icónicas como 'I'll make him an offer he can't refuse'.",
    cocina:
      'En un blog culinario, un <em> podría destacar comentarios personales sobre recetas.',
    deporte:
      'En un sitio deportivo, un <em> podría enfatizar las palabras de una cita de un jugador.',
    random:
      'El uso de <em> está recomendado para añadir importancia contextual al texto.',
    link: 'https://example.com/html-em',
    link2: 'https://example.com/cocina/html-em'
  },
  {
    titulo: '<mark>',
    explicación: 'Resalta texto con un color de fondo amarillo predeterminado.',
    cine: "En una página de 'Sherlock Holmes', un <mark> podría destacar pistas importantes en un texto.",
    cocina:
      'En un blog culinario, un <mark> podría resaltar pasos críticos de una receta.',
    deporte:
      'En un sitio deportivo, un <mark> podría señalar momentos destacados de un partido.',
    random: 'El estilo predeterminado puede ser modificado usando CSS.',
    link: 'https://example.com/html-mark',
    link2: 'https://example.com/cocina/html-mark'
  },
  {
    titulo: '<iframe>',
    explicación:
      'Permite incrustar contenido externo, como otro sitio web, en la página actual.',
    cine: "En una página de 'Star Wars', un <iframe> podría incrustar un mapa interactivo de la galaxia.",
    cocina:
      'En un blog culinario, un <iframe> podría mostrar un video de YouTube sobre cocina.',
    deporte:
      'En un sitio deportivo, un <iframe> podría incrustar una tabla de posiciones actualizada en tiempo real.',
    random:
      "El atributo 'sandbox' se utiliza para mejorar la seguridad al limitar las acciones permitidas en el contenido incrustado.",
    link: 'https://example.com/html-iframe',
    link2: 'https://example.com/cocina/html-iframe'
  },
  {
    titulo: '<canvas>',
    explicación:
      'Proporciona un área de dibujo para gráficos dinámicos, como diagramas o animaciones.',
    cine: "En una página de 'Toy Story', un <canvas> podría dibujar una animación de Buzz Lightyear volando.",
    cocina:
      'En un blog culinario, un <canvas> podría mostrar una animación de cómo mezclar ingredientes.',
    deporte:
      'En un sitio deportivo, un <canvas> podría generar gráficas interactivas de estadísticas de jugadores.',
    random:
      'La API de JavaScript permite controlar completamente el contenido del elemento <canvas>.',
    link: 'https://example.com/html-canvas',
    link2: 'https://example.com/cocina/html-canvas'
  }
]

export default data
