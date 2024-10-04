const data = [
  {
    titulo: "Disco Duro",
    explicación: "El disco duro es el dispositivo de almacenamiento de datos de un ordenador, donde se guardan archivos, programas y el sistema operativo.",
    cine: "El disco duro es como la sala de proyección en un cine, donde se almacenan todas las películas que se van a mostrar.",
    cocina: "El disco duro es como la despensa de una cocina, donde guardas todos los ingredientes necesarios para hacer diferentes platos.",
    deporte: "El disco duro es como la banca de un equipo, donde se almacenan los jugadores suplentes esperando su momento para entrar en el partido.",
    random: "El disco duro es como una biblioteca gigante, llena de libros y archivos que puedes consultar en cualquier momento.",
    link: "",
    link2: "",
  },
  {
    titulo: "Memoria RAM",
    explicación: "La memoria RAM es un tipo de almacenamiento temporal de un ordenador, que se utiliza para guardar los datos que se están usando en ese momento.",
    cine: "La RAM es como el guion en las manos del director, que está disponible en todo momento mientras se rueda la película.",
    cocina: "La RAM es como la mesa de trabajo en la cocina, donde tienes los ingredientes listos para preparar la comida.",
    deporte: "La RAM es como los jugadores que están en el campo, activos y participando en el partido en tiempo real.",
    random: "La RAM es como una pizarra blanca que se usa para escribir temporalmente algo y luego borrarlo cuando ya no es necesario.",
    link: "",
    link2: "",
  },
  {
    titulo: "CPU",
    explicación: "La CPU, o Unidad Central de Procesamiento, es el cerebro del ordenador, encargado de ejecutar las instrucciones y procesar los datos.",
    cine: "La CPU es como el director de cine, que se asegura de que todos sigan el guion y las escenas se rueden correctamente.",
    cocina: "La CPU es como el chef, que organiza todo el trabajo en la cocina y asegura que cada plato salga bien.",
    deporte: "La CPU es como el entrenador, que da las instrucciones a los jugadores y organiza la estrategia del equipo.",
    random: "La CPU es como el maestro de ceremonias en un espectáculo, que coordina todo lo que sucede sobre el escenario.",
    link: "",
    link2: "",
  },
  {
    titulo: "Impresora",
    explicación: "La impresora es un dispositivo que convierte los documentos digitales en físicos, imprimiendo en papel lo que está en el ordenador.",
    cine: "La impresora es como la sala de montaje, donde las escenas filmadas se convierten en la versión final de la película.",
    cocina: "La impresora es como el horno, que convierte los ingredientes crudos en un plato terminado y listo para comer.",
    deporte: "La impresora es como el marcador electrónico en un estadio, mostrando en pantalla lo que está ocurriendo en el partido.",
    random: "La impresora es como una fotocopiadora de la mente, plasmando en papel las ideas y pensamientos que tienes en la cabeza.",
    link: "",
    link2: "",
  },
  {
    titulo: "Teclado",
    explicación: "El teclado es un dispositivo de entrada que permite al usuario escribir y dar órdenes al ordenador.",
    cine: "El teclado es como la máquina de escribir de un guionista, donde se crea la historia que luego se convertirá en película.",
    cocina: "El teclado es como el cuchillo de un chef, que se usa para preparar todos los ingredientes antes de cocinar.",
    deporte: "El teclado es como los zapatos de los jugadores, la herramienta principal para moverse y controlar el juego.",
    random: "El teclado es como un piano, donde cada tecla puede producir una nota diferente que compone una melodía completa.",
    link: "",
    link2: "",
  },
  {
    titulo: "Tarjeta de Red",
    explicación: "La tarjeta de red permite que un ordenador se conecte a internet o a otras redes de ordenadores.",
    cine: "La tarjeta de red es como el proyector que conecta la película con la pantalla, haciendo que todo el mundo pueda verla.",
    cocina: "La tarjeta de red es como el camarero que conecta la cocina con los comensales, trayendo la comida a la mesa.",
    deporte: "La tarjeta de red es como el árbitro, que conecta las reglas del juego con la acción en el campo.",
    random: "La tarjeta de red es como un puente, conectando dos islas para que las personas puedan ir de un lado a otro.",
    link: "",
    link2: "",
  },
  {
    titulo: "Tarjeta gráfica",
    explicación: "La tarjeta gráfica es el componente que se encarga de procesar y mostrar imágenes en la pantalla del ordenador.",
    cine: "La tarjeta gráfica es como el equipo de efectos especiales, encargado de crear las imágenes más espectaculares para la película.",
    cocina: "La tarjeta gráfica es como el plato de presentación final, donde todo el trabajo de cocina se muestra en su mejor aspecto.",
    deporte: "La tarjeta gráfica es como las cámaras de televisión, que capturan y transmiten las mejores imágenes del partido.",
    random: "La tarjeta gráfica es como un pintor que convierte una idea en una obra de arte visual.",
    link: "",
    link2: "",
  },
  {
    titulo: "Escáner",
    explicación: "El escáner es un dispositivo que convierte documentos físicos en formato digital para ser usados o guardados en el ordenador.",
    cine: "El escáner es como un restaurador de películas antiguas, que digitaliza los rollos de película para preservarlos.",
    cocina: "El escáner es como una batidora, que convierte los ingredientes sólidos en algo más fluido y fácil de procesar.",
    deporte: "El escáner es como una cámara lenta, que convierte un momento del partido en una secuencia detallada para su análisis.",
    random: "El escáner es como un filtro de Instagram, que convierte una imagen ordinaria en algo que puedes compartir digitalmente.",
    link: "",
    link2: "",
  },
  {
    titulo: "Pantalla",
    explicación: "La pantalla es el dispositivo de salida principal de un ordenador, donde se muestran las imágenes, textos y videos.",
    cine: "La pantalla es como la gran pantalla del cine, donde se proyecta la película para que el público la disfrute.",
    cocina: "La pantalla es como el plato final, donde todo lo que has cocinado se muestra para que lo vean y lo disfruten.",
    deporte: "La pantalla es como el marcador del estadio, donde todos pueden ver los resultados y lo que está sucediendo en el partido.",
    random: "La pantalla es como una ventana mágica, que te permite ver otros mundos y realidades desde tu lugar.",
    link: "",
    link2: "",
  },
  {
    titulo: "Fuente de alimentación",
    explicación: "La fuente de alimentación es el componente del ordenador que suministra energía eléctrica a todos los demás componentes.",
    cine: "La fuente de alimentación es como el generador de un set de filmación, que proporciona electricidad para las cámaras, luces y equipo.",
    cocina: "La fuente de alimentación es como el gas o la electricidad que alimenta los fogones, sin ella, no se podría cocinar nada.",
    deporte: "La fuente de alimentación es como la condición física de un atleta, la energía que mantiene todo en funcionamiento durante el partido.",
    random: "La fuente de alimentación es como el corazón, que bombea sangre (energía) a todas las partes del cuerpo.",
    link: "",
    link2: "",
  },
  {
    titulo: "Ratón",
    explicación: "El ratón es un dispositivo de entrada que permite al usuario interactuar con el ordenador moviendo un cursor en la pantalla.",
    cine: "El ratón es como una cámara que sigue la acción en la película, moviéndose de una escena a otra con precisión.",
    cocina: "El ratón es como una espátula, que te permite mover los ingredientes o alimentos en la sartén con precisión y control.",
    deporte: "El ratón es como el balón en un partido, controlado por el jugador que lo dirige a donde quiere que vaya.",
    random: "El ratón es como una varita mágica, que te permite apuntar y hacer que las cosas sucedan con solo un toque.",
    link: "",
    link2: "",
  },
  {
    titulo: "Placa base",
    explicación: "La placa base es el componente central de un ordenador donde se conectan y comunican todos los demás componentes.",
    cine: "La placa base es como el set de filmación, donde todo el equipo y los actores se reúnen para trabajar juntos en la película.",
    cocina: "La placa base es como la cocina en sí misma, donde todo el equipamiento está conectado y en funcionamiento para hacer las comidas.",
    deporte: "La placa base es como el campo de juego, donde todos los jugadores y componentes interactúan y se organizan para el partido.",
    random: "La placa base es como una estación central de trenes, donde todo está interconectado y las líneas van hacia diferentes destinos.",
    link: "",
    link2: "",
  },
  {
    titulo: "Conectores IDE",
    explicación: "Los conectores IDE son un tipo de interfaz que permite conectar discos duros y unidades ópticas a la placa base del ordenador.",
    cine: "Los conectores IDE son como las bobinas de cinta que conectan la película al proyector, asegurando que la película pueda reproducirse.",
    cocina: "Los conectores IDE son como las tuberías de gas en una cocina, que conectan los fogones con la fuente de energía.",
    deporte: "Los conectores IDE son como las zapatillas de un corredor, que lo conectan directamente con el suelo para poder moverse rápidamente.",
    random: "Los conectores IDE son como una antigua carretera, que aunque ha sido reemplazada por nuevas rutas, sigue funcionando para conectar dos lugares.",
    link: "",
    link2: "",
  },
];

export default data;