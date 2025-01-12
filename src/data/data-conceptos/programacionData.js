// data.js

const data = [
  {
    titulo: 'Algoritmo',
    explicación:
      'Un algoritmo es un conjunto de pasos o instrucciones que se siguen para resolver un problema o completar una tarea. Los algoritmos son fundamentales en la programación, ya que permiten automatizar procesos y optimizar soluciones.',
    cine: "Los algoritmos juegan un papel importante en las películas de ciencia ficción, como en la trama de 'Matrix', donde las decisiones del protagonista están influenciadas por códigos complejos.",
    cocina:
      "Recetas de cocina automatizadas donde cada paso sigue un 'algoritmo' preciso para obtener resultados consistentes, como en la repostería.",
    deporte:
      'El uso de algoritmos para analizar el rendimiento deportivo y predecir el resultado de juegos o el comportamiento de los jugadores.',
    random:
      'Curiosamente, el primer algoritmo conocido fue desarrollado por el matemático persa Al-Juarismi en el siglo IX.',
    link: 'https://example.com/algoritmos',
    link2: 'https://example.com/cocina/algoritmos-cocina'
  },
  {
    titulo: 'Lenguajes de Programación',
    explicación:
      'Un lenguaje de programación es una forma de comunicación entre los programadores y las computadoras. Los lenguajes permiten escribir código que instruye a la máquina para realizar tareas específicas. Algunos lenguajes conocidos son Python, Java y C++.',
    cine: "En películas como 'Tron' o 'Ready Player One', los lenguajes de programación son esenciales para crear los mundos virtuales que vemos.",
    cocina:
      'Comparar un lenguaje de programación con una receta: ambos tienen instrucciones claras que deben seguirse en orden para crear algo funcional.',
    deporte:
      'El uso de lenguajes de programación para crear simulaciones deportivas, analizando datos y prediciendo movimientos en deportes de alto rendimiento.',
    random:
      'El primer lenguaje de programación fue creado por Ada Lovelace, quien es considerada la primera programadora del mundo.',
    link: 'https://example.com/lenguajes-programacion',
    link2: 'https://example.com/cocina/recetas-codigo'
  },
  {
    titulo: 'Lenguajes Compilados',
    explicación:
      'Los lenguajes compilados son aquellos cuyo código fuente se traduce a código máquina antes de ser ejecutado. Ejemplos de lenguajes compilados son C, C++ y Rust. Este proceso genera un archivo ejecutable que puede correr directamente en la máquina.',
    cine: "En 'Ex Machina', la capacidad de la inteligencia artificial podría haber sido desarrollada usando lenguajes compilados por su eficiencia y rapidez.",
    cocina:
      'Piensa en la cocina como un proceso compilado: preparas todos los ingredientes (compilas) y al final tienes el platillo listo (ejecutable).',
    deporte:
      'En simulaciones de deportes, los lenguajes compilados permiten un rendimiento óptimo y mayor eficiencia en los cálculos complejos.',
    random:
      'A pesar de su velocidad, algunos programadores prefieren lenguajes interpretados por su flexibilidad y simplicidad.',
    link: 'https://example.com/lenguajes-compilados',
    link2: 'https://example.com/cocina/recetas-optimizadas'
  },

  {
    titulo: 'Lenguajes Interpretados',
    explicación:
      'Los lenguajes interpretados ejecutan el código línea por línea a medida que el programa se ejecuta, en lugar de compilarlo todo de una vez. Ejemplos comunes incluyen Python, JavaScript y Ruby. Son más flexibles pero generalmente más lentos que los lenguajes compilados.',
    cine: 'El uso de JavaScript en películas animadas para crear efectos visuales en tiempo real durante la postproducción.',
    cocina:
      'Es como cocinar siguiendo cada paso uno a uno sin preparación previa, adaptando la receta mientras la cocinas.',
    deporte:
      'Aplicaciones en tiempo real que analizan el rendimiento de los atletas durante un juego pueden ser desarrolladas en lenguajes interpretados por su flexibilidad.',
    random:
      "Python, uno de los lenguajes interpretados más populares, fue nombrado así en honor al grupo de comedia británico 'Monty Python'.",
    link: 'https://example.com/lenguajes-interpretados',
    link2: 'https://example.com/cocina/recetas-interpretadas'
  },

  {
    titulo: 'Tiempo de Compilación',
    explicación:
      'El tiempo de compilación es el periodo en el que el código fuente de un programa se traduce a código máquina. Durante este proceso, el compilador verifica el código en busca de errores y genera un archivo ejecutable. Es crucial para garantizar un código sin errores antes de la ejecución.',
    cine: "En películas de ciencia ficción, como 'The Matrix', el concepto de compilar un mundo digital en tiempo real podría relacionarse con el tiempo de compilación.",
    cocina:
      'El tiempo de compilación es como el tiempo que lleva preparar todos los ingredientes de una receta antes de comenzar a cocinar.',
    deporte:
      'El análisis previo al juego, donde se recopilan y procesan datos, podría compararse con el tiempo de compilación en programación.',
    random:
      'El tiempo de compilación puede variar mucho dependiendo del tamaño del proyecto y el tipo de lenguaje utilizado.',
    link: 'https://example.com/tiempo-compilacion',
    link2: 'https://example.com/cocina/preparacion-ingredientes'
  },

  {
    titulo: 'Tiempo de Ejecución',
    explicación:
      'El tiempo de ejecución es cuando un programa se está ejecutando en el sistema después de haber sido compilado. En este momento, el código interactúa con el sistema operativo y el hardware, y se producen los cálculos y resultados del programa.',
    cine: "El concepto de tiempo de ejecución se ve reflejado en películas de IA, donde las decisiones se toman en tiempo real, como en 'Her'.",
    cocina:
      'Es el tiempo que pasas cocinando y viendo cómo la receta se ejecuta; los ingredientes ya están preparados, ahora solo queda cocinar.',
    deporte:
      'Durante un partido, el tiempo de ejecución se refleja en la toma de decisiones en tiempo real de los jugadores según la situación en el campo.',
    random:
      'Curiosamente, algunos errores solo ocurren en tiempo de ejecución, cuando ya es demasiado tarde para corregirlos fácilmente.',
    link: 'https://example.com/tiempo-ejecucion',
    link2: 'https://example.com/cocina/ejecucion-recetas'
  },
  {
    titulo: 'Depuración',
    explicación:
      'La depuración es el proceso de identificar y corregir errores o bugs en un programa. Involucra el análisis del código, la ejecución controlada y la observación de los resultados para solucionar problemas.',
    cine: "En películas como 'The Matrix', depurar el código del sistema podría salvar a los personajes de fallas en la simulación.",
    cocina:
      'Depurar en cocina sería como revisar una receta y corregir los pasos que se han hecho mal para evitar que el platillo final falle.',
    deporte:
      'Analizar errores de ejecución en deportes, como fallas en estrategias durante un partido, es similar a depurar un programa en tiempo real.',
    random:
      "El término 'debugging' proviene de la eliminación de un insecto (bug) en una computadora real que estaba causando fallas.",
    link: 'https://example.com/depuracion',
    link2: 'https://example.com/cocina/depuracion-recetas'
  },
  {
    titulo: 'Estructuras de Datos',
    explicación:
      'Las estructuras de datos son formas de organizar y almacenar datos para que puedan ser utilizados de manera eficiente. Ejemplos incluyen listas, pilas, colas y árboles.',
    cine: "En películas como 'Tron', la representación visual de datos puede ser vista como estructuras de datos en acción.",
    cocina:
      'Una estructura de datos es como una despensa organizada donde cada ingrediente está en su lugar y puede ser accedido fácilmente según sea necesario.',
    deporte:
      'En los deportes, las estructuras de datos se utilizan para almacenar y organizar datos sobre el rendimiento de los jugadores, lo que permite un análisis más eficiente.',
    random:
      'Las estructuras de datos son esenciales en la informática, pero el concepto puede aplicarse también a cómo organizamos nuestras tareas diarias.',
    link: 'https://example.com/estructuras-datos',
    link2: 'https://example.com/cocina/estructuras-recetas'
  },
  {
    titulo: 'Algoritmos de Búsqueda',
    explicación:
      'Los algoritmos de búsqueda son procesos que se utilizan para encontrar un valor específico dentro de una estructura de datos. Ejemplos incluyen la búsqueda binaria y la búsqueda secuencial.',
    cine: "En 'Minority Report', se usan algoritmos avanzados para predecir crímenes, lo que es similar a algoritmos de búsqueda prediciendo datos en grandes bases de datos.",
    cocina:
      'Buscar un ingrediente en una receta puede compararse con el uso de un algoritmo de búsqueda para encontrar la información necesaria.',
    deporte:
      'Los algoritmos de búsqueda ayudan a encontrar patrones específicos en datos de jugadores o equipos, optimizando estrategias en tiempo real.',
    random:
      'El algoritmo de búsqueda más eficiente en estructuras ordenadas es la búsqueda binaria, que reduce el número de pasos necesarios a la mitad en cada iteración.',
    link: 'https://example.com/algoritmos-busqueda',
    link2: 'https://example.com/cocina/recetas-busqueda'
  },
  {
    titulo: 'Algoritmos de Ordenación',
    explicación:
      'Los algoritmos de ordenación organizan elementos en un conjunto de datos según un criterio definido, como de menor a mayor. Ejemplos incluyen QuickSort y MergeSort.',
    cine: "En 'The Social Network', los algoritmos de ordenación juegan un papel clave en la clasificación de las conexiones sociales.",
    cocina:
      'Ordenar los ingredientes de una receta según el orden de preparación es comparable a un algoritmo de ordenación.',
    deporte:
      'En deportes, los algoritmos de ordenación pueden ayudar a clasificar jugadores o equipos según su rendimiento.',
    random:
      'El algoritmo de ordenación QuickSort es uno de los más eficientes en la mayoría de los casos, pero fue inventado en 1960 por Tony Hoare.',
    link: 'https://example.com/algoritmos-ordenacion',
    link2: 'https://example.com/cocina/orden-recetas'
  },
  {
    titulo: 'Recursividad',
    explicación:
      'La recursividad es una técnica en programación donde una función se llama a sí misma para resolver subproblemas más pequeños de un problema más grande. Es utilizada en algoritmos como la búsqueda de profundidad y la ordenación.',
    cine: "En 'Origen', el concepto de 'sueños dentro de sueños' es un buen ejemplo de recursividad aplicada en la narrativa.",
    cocina:
      'Una receta que implica repetición de pasos, como hornear múltiples capas de un pastel, puede asemejarse a la recursividad en programación.',
    deporte:
      'En la táctica deportiva, ciertas estrategias repetitivas pueden ser vistas como recursivas, ajustándose constantemente al comportamiento del oponente.',
    random:
      'La recursividad es tan fundamental que puede utilizarse para resolver problemas tan diversos como el cálculo de factoriales o la generación de fractales.',
    link: 'https://example.com/recursividad',
    link2: 'https://example.com/cocina/recetas-recursivas'
  },
  {
    titulo: 'Funciones',
    explicación:
      'Una función en programación es un bloque de código reutilizable que realiza una tarea específica. Las funciones ayudan a organizar y modular el código, haciéndolo más mantenible y legible.',
    cine: "En 'Iron Man', la creación de módulos para el traje de Tony Stark es similar a cómo las funciones modulares se usan para estructurar código.",
    cocina:
      "Una función en la cocina sería como una técnica que aplicas repetidamente, como 'mezclar', que puede usarse en múltiples recetas.",
    deporte:
      'En deportes, se utilizan funciones para modelar y simular comportamientos específicos, como la trayectoria de una pelota o el rendimiento de un jugador.',
    random:
      'Las funciones anónimas, conocidas como lambdas, permiten escribir código más compacto y eficiente.',
    link: 'https://example.com/funciones-programacion',
    link2: 'https://example.com/cocina/funciones-cocina'
  },
  {
    titulo: 'Condicionales',
    explicación:
      "Los condicionales son estructuras de control que permiten que el programa tome decisiones basadas en si una condición es verdadera o falsa. Las instrucciones comunes incluyen 'if', 'else' y 'switch'.",
    cine: "En 'The Matrix', las decisiones de Neo pueden ser vistas como condicionales: elegir la pastilla azul o la pastilla roja.",
    cocina:
      'En la cocina, usar condicionales sería como decidir qué ingrediente agregar dependiendo del sabor que buscas.',
    deporte:
      'Los condicionales se utilizan en simulaciones deportivas para prever decisiones tácticas dependiendo del comportamiento del oponente.',
    random:
      'El uso de condicionales permite que los programas sean dinámicos y se adapten a diferentes entradas de datos.',
    link: 'https://example.com/condicionales',
    link2: 'https://example.com/cocina/condicionales-cocina'
  },
  {
    titulo: 'Bucles',
    explicación:
      "Los bucles son estructuras que permiten repetir un bloque de código varias veces. Existen varios tipos de bucles, como 'for', 'while' y 'do-while'.",
    cine: "En la película 'Edge of Tomorrow', el protagonista vive un bucle temporal, lo que es una excelente metáfora de un bucle en programación.",
    cocina:
      'En la cocina, un bucle sería como repetir una acción, por ejemplo, batir huevos hasta que alcancen la consistencia deseada.',
    deporte:
      'Los bucles se usan en el entrenamiento de atletas, donde repiten los mismos ejercicios varias veces para mejorar su rendimiento.',
    random:
      "Algunos bucles mal diseñados pueden causar que un programa nunca termine de ejecutarse, lo que se conoce como 'bucles infinitos'.",
    link: 'https://example.com/bucles',
    link2: 'https://example.com/cocina/bucles-recetas'
  },
  {
    titulo: 'Compilador',
    explicación:
      'Un compilador es un programa que traduce el código fuente escrito en un lenguaje de alto nivel a código máquina, que es ejecutable por una computadora.',
    cine: "El concepto de un compilador puede relacionarse con películas como 'Transcendence', donde el conocimiento humano es transferido y compilado en una máquina.",
    cocina:
      'El compilador en la cocina es como un chef que traduce una receta escrita en instrucciones precisas que los ayudantes de cocina pueden seguir.',
    deporte:
      'En simulaciones deportivas, el compilador traduce las reglas del deporte a un formato que la computadora puede procesar rápidamente.',
    random:
      'El primer compilador fue creado por Grace Hopper en los años 50, lo que revolucionó el mundo de la programación.',
    link: 'https://example.com/compiladores',
    link2: 'https://example.com/cocina/compilacion-recetas'
  },
  {
    titulo: 'Inteligencia Artificial',
    explicación:
      'La inteligencia artificial (IA) es el campo de la informática que se centra en la creación de sistemas capaces de realizar tareas que normalmente requieren inteligencia humana, como el reconocimiento de voz, el aprendizaje y la resolución de problemas.',
    cine: "Películas como 'Ex Machina' o 'Her' exploran los límites de la inteligencia artificial y su interacción con los humanos.",
    cocina:
      'En la cocina, las IA pueden ser usadas para crear recetas personalizadas basadas en preferencias alimenticias y restricciones dietéticas.',
    deporte:
      'En deportes, la IA se utiliza para analizar el rendimiento de los jugadores, predecir el resultado de los juegos y optimizar tácticas en tiempo real.',
    random:
      "El campo de la inteligencia artificial comenzó en los años 50, cuando los científicos soñaban con máquinas que pudieran 'pensar' como humanos.",
    link: 'https://example.com/inteligencia-artificial',
    link2: 'https://example.com/cocina/recetas-ia'
  },
  {
    titulo: 'Programación Orientada a Objetos (OOP)',
    explicación:
      'Es un paradigma de programación basado en el uso de objetos, que encapsulan datos y comportamientos. Ejemplos de principios clave son la herencia, el polimorfismo y la encapsulación.',
    cine: "En 'Iron Man', JARVIS utiliza una arquitectura similar a la OOP para gestionar módulos independientes.",
    cocina:
      "Organizar recetas como objetos, donde 'Receta' tiene atributos como ingredientes y pasos, es similar a OOP.",
    deporte:
      'Crear objetos para jugadores, equipos y partidos en una aplicación deportiva sigue el paradigma OOP.',
    random:
      'Java, Python y C++ son lenguajes populares que implementan la OOP ampliamente.',
    link: 'https://example.com/oop',
    link2: 'https://example.com/cocina/oop'
  },
  {
    titulo: 'Programación Funcional',
    explicación:
      'Un paradigma de programación donde las funciones son tratadas como ciudadanos de primera clase. Enfatiza la inmutabilidad y la ausencia de estados compartidos.',
    cine: "En 'Ex Machina', los algoritmos funcionales podrían estar detrás de las decisiones autónomas de Ava.",
    cocina:
      'Escribir una receta paso a paso, donde cada paso transforma los ingredientes, es como la programación funcional.',
    deporte:
      'Calcular las estadísticas de un jugador basándose únicamente en sus datos de entrada es un enfoque funcional.',
    random:
      'Lenguajes como Haskell y Lisp son conocidos por su enfoque en la programación funcional.',
    link: 'https://example.com/funcional',
    link2: 'https://example.com/cocina/funcional'
  },
  {
    titulo: 'Variables',
    explicación:
      'Son contenedores que almacenan datos en memoria, los cuales pueden cambiar durante la ejecución de un programa.',
    cine: "En 'The Matrix', las variables se ven claramente en las líneas de código que representan la simulación.",
    cocina:
      "Un ingrediente como 'azúcar = 100g' en una receta representa una variable en cocina.",
    deporte:
      'La puntuación de un partido que se actualiza a medida que avanza el juego es una variable en el contexto deportivo.',
    random:
      'Las variables pueden ser de diferentes tipos como enteros, cadenas y booleanos.',
    link: 'https://example.com/variables',
    link2: 'https://example.com/cocina/variables'
  },
  {
    titulo: 'Tipos de Datos',
    explicación:
      'Definen el tipo de valor que puede almacenar una variable, como enteros, cadenas o booleanos.',
    cine: "En 'Her', los diferentes datos procesados por la IA (como emociones y respuestas) podrían categorizarse en tipos de datos.",
    cocina:
      'Los ingredientes se pueden clasificar en tipos como sólidos, líquidos y especias, similar a los tipos de datos.',
    deporte:
      'En un juego, los tipos de datos podrían incluir números para puntuaciones o cadenas para nombres de jugadores.',
    random:
      'Los tipos de datos están presentes en todos los lenguajes de programación, desde Java hasta Python.',
    link: 'https://example.com/tipos-datos',
    link2: 'https://example.com/cocina/tipos-datos'
  },
  {
    titulo: 'Algoritmos Greedy',
    explicación:
      'Son algoritmos que toman decisiones óptimas en cada paso con la esperanza de encontrar una solución global óptima.',
    cine: "En 'The Imitation Game', el algoritmo de Alan Turing para descifrar Enigma podría interpretarse como un enfoque greedy en cada intento.",
    cocina:
      'Elegir el ingrediente más cercano al preparar una receta puede ser un enfoque greedy.',
    deporte:
      'En ajedrez, un movimiento greedy sería capturar la pieza más valiosa disponible.',
    random:
      'El algoritmo del cambio de monedas es un ejemplo clásico de greedy.',
    link: 'https://example.com/greedy',
    link2: 'https://example.com/cocina/greedy'
  },
  {
    titulo: 'Estructuras Condicionales',
    explicación:
      'Permiten ejecutar diferentes bloques de código basándose en condiciones evaluadas como verdaderas o falsas.',
    cine: "En 'Inception', las condiciones establecidas en los niveles de los sueños funcionan como estructuras condicionales.",
    cocina:
      'Si no tienes un ingrediente, puedes buscar un sustituto, lo que equivale a una estructura condicional.',
    deporte:
      'Decidir si atacar o defender en función del marcador es similar a usar condiciones.',
    random:
      "El 'if-else' es la estructura condicional más utilizada en la programación.",
    link: 'https://example.com/condicionales',
    link2: 'https://example.com/cocina/condicionales'
  },
  {
    titulo: 'Iteradores',
    explicación:
      'Son herramientas que permiten recorrer elementos en estructuras de datos como listas o arreglos.',
    cine: "En 'Inside Out', recorrer diferentes recuerdos es como usar un iterador para acceder a cada elemento.",
    cocina:
      'Revisar todos los pasos de una receta uno por uno es comparable a un iterador.',
    deporte:
      'En un torneo, un iterador se usaría para recorrer cada partido en el cronograma.',
    random: "En Python, un iterador común es el bucle 'for'.",
    link: 'https://example.com/iteradores',
    link2: 'https://example.com/cocina/iteradores'
  },
  {
    titulo: 'Paradigmas de Programación',
    explicación:
      'Son enfoques o estilos de programación, como la orientación a objetos, la programación funcional o la programación imperativa.',
    cine: "En 'The Matrix Reloaded', la escena del Arquitecto menciona paradigmas diferentes en el diseño del sistema.",
    cocina:
      'Seguir una receta paso a paso es similar a un paradigma procedural.',
    deporte:
      'En un partido, las estrategias de juego pueden considerarse paradigmas para alcanzar la victoria.',
    random:
      'Los paradigmas ayudan a los desarrolladores a elegir cómo estructurar sus programas.',
    link: 'https://example.com/paradigmas',
    link2: 'https://example.com/cocina/paradigmas'
  },
  {
    titulo: 'Patrones de Diseño',
    explicación:
      'Son soluciones reutilizables a problemas comunes en el diseño de software, como Singleton, Factory y Observer.',
    cine: "En 'Westworld', la programación de los anfitriones sigue patrones de diseño para su funcionalidad repetitiva.",
    cocina:
      'Usar una receta estándar para hacer pan es comparable a un patrón de diseño.',
    deporte:
      'Los equipos pueden seguir patrones de diseño en tácticas de juego como el tiki-taka en fútbol.',
    random:
      'El patrón Singleton asegura que solo exista una instancia de un objeto.',
    link: 'https://example.com/patrones',
    link2: 'https://example.com/cocina/patrones'
  },
  {
    titulo: 'Gestión de Memoria',
    explicación:
      'Es el proceso de asignar, usar y liberar memoria en un programa para evitar fugas de memoria y optimizar el rendimiento.',
    cine: "En 'Blade Runner 2049', la memoria artificial de los replicantes refleja principios de gestión de memoria.",
    cocina:
      'Planificar el uso de utensilios en la cocina es como gestionar memoria: reutilizas lo que puedes.',
    deporte:
      'Un equipo debe gestionar su energía durante un partido para evitar agotamiento, similar a la gestión de memoria.',
    random:
      'Los lenguajes como C requieren gestión manual de memoria, mientras que Java usa Garbage Collection.',
    link: 'https://example.com/memoria',
    link2: 'https://example.com/cocina/memoria'
  },
  {
    titulo: 'Hilos (Threads)',
    explicación:
      'Son unidades de ejecución dentro de un proceso que permiten realizar tareas concurrentes en un programa.',
    cine: "En 'The Social Network', la implementación de múltiples hilos habría sido clave para manejar usuarios simultáneos en Facebook.",
    cocina:
      'En la cocina, varios chefs trabajando simultáneamente en diferentes partes de una receta son como hilos.',
    deporte:
      'En un equipo, diferentes jugadores realizando tareas al mismo tiempo representan hilos trabajando juntos.',
    random:
      'Java tiene un modelo robusto para manejar threads usando la clase Thread y Runnable.',
    link: 'https://example.com/threads',
    link2: 'https://example.com/cocina/threads'
  },
  {
    titulo: 'Concurrencia',
    explicación:
      'Es la capacidad de un programa para ejecutar varias tareas al mismo tiempo, mejorando el rendimiento y la eficiencia.',
    cine: "En 'Interstellar', los cálculos concurrentes entre dimensiones podrían asemejarse a tareas concurrentes en programación.",
    cocina:
      'Preparar varios platos al mismo tiempo en una cocina concurrida es un ejemplo de concurrencia.',
    deporte:
      'En un partido, la ofensiva y la defensa actuando simultáneamente representan concurrencia.',
    random:
      'Los sistemas concurrentes utilizan hilos o procesos ligeros para gestionar tareas.',
    link: 'https://example.com/concurrencia',
    link2: 'https://example.com/cocina/concurrencia'
  },
  {
    titulo: 'Bases de Datos',
    explicación:
      'Son sistemas que almacenan y organizan datos de manera estructurada para facilitar su acceso y manipulación.',
    cine: "En 'Snowden', el acceso a bases de datos clasificadas juega un papel fundamental en la trama.",
    cocina:
      'Un recetario organizado es similar a una base de datos, con cada receta como un registro.',
    deporte:
      'Una base de datos puede almacenar estadísticas de jugadores y resultados de partidos.',
    random:
      'Sistemas como MySQL, PostgreSQL y MongoDB son ejemplos de bases de datos ampliamente utilizados.',
    link: 'https://example.com/bases-datos',
    link2: 'https://example.com/cocina/bases-datos'
  },
  {
    titulo: 'Programación Asíncrona',
    explicación:
      'Es un enfoque en el que las tareas se ejecutan de manera independiente, permitiendo que un programa no se bloquee esperando una respuesta.',
    cine: "En 'Avatar', las comunicaciones a larga distancia en Pandora podrían requerir programación asíncrona para evitar retrasos.",
    cocina:
      'Dejar un pastel en el horno mientras preparas otra cosa es un ejemplo de programación asíncrona.',
    deporte:
      'Esperar que el árbitro revise el VAR mientras el juego continúa es un ejemplo de asincronía.',
    random:
      'Promesas en JavaScript y async/await son herramientas comunes para manejar asincronía.',
    link: 'https://example.com/asincrona',
    link2: 'https://example.com/cocina/asincrona'
  },
  {
    titulo: 'Interfaces de Usuario (UI)',
    explicación:
      'Es el punto de interacción entre un usuario y un sistema, diseñado para ser intuitivo y funcional.',
    cine: "En 'Iron Man', la interfaz holográfica de Tony Stark es un ejemplo avanzado de UI.",
    cocina:
      'Un menú de restaurante claro y bien organizado es un ejemplo de una buena interfaz de usuario.',
    deporte:
      'Los tableros digitales que muestran las puntuaciones en tiempo real son interfaces de usuario.',
    random:
      'Frameworks como React y Angular se utilizan ampliamente para construir interfaces de usuario.',
    link: 'https://example.com/ui',
    link2: 'https://example.com/cocina/ui'
  },
  {
    titulo: 'Frameworks',
    explicación:
      'Son estructuras predefinidas que proporcionan una base para desarrollar software de manera más rápida y eficiente.',
    cine: "En 'The Matrix', el framework subyacente del sistema de simulación podría asimilarse a frameworks de desarrollo.",
    cocina:
      'Seguir un método estándar para hornear pasteles es como usar un framework en la cocina.',
    deporte:
      'En el entrenamiento, usar programas predefinidos para mejorar habilidades es similar a un framework.',
    random:
      'Frameworks populares incluyen Spring para Java y Django para Python.',
    link: 'https://example.com/frameworks',
    link2: 'https://example.com/cocina/frameworks'
  },
  {
    titulo: 'Desarrollo de Software Ágil',
    explicación:
      'Es una metodología que enfatiza la entrega rápida y continua de software funcional a través de iteraciones.',
    cine: "En 'The Social Network', un enfoque ágil habría sido clave para iterar rápidamente sobre la construcción inicial de Facebook.",
    cocina:
      'Preparar un plato en varias etapas con retroalimentación después de cada una es similar a la metodología ágil.',
    deporte:
      'Adaptar estrategias durante un partido basándose en el rendimiento actual del equipo es un enfoque ágil.',
    random: 'Scrum y Kanban son marcos populares en el desarrollo ágil.',
    link: 'https://example.com/agil',
    link2: 'https://example.com/cocina/agil'
  },
  {
    titulo: 'Integración Continua (CI)',
    explicación:
      'Es una práctica en la que los desarrolladores integran frecuentemente su código en un repositorio compartido para detectar errores de manera temprana.',
    cine: "En 'Hackers', una integración continua podría haber ayudado a detectar las vulnerabilidades en tiempo real.",
    cocina:
      'Actualizar constantemente una receta para reflejar las mejoras realizadas es como la integración continua.',
    deporte:
      'En deportes, evaluar el desempeño después de cada sesión de entrenamiento es similar a CI.',
    random:
      'Herramientas como Jenkins y GitHub Actions se utilizan para la integración continua.',
    link: 'https://example.com/ci',
    link2: 'https://example.com/cocina/ci'
  },
  {
    titulo: 'Seguridad Informática',
    explicación:
      'Es la práctica de proteger los sistemas y datos de accesos no autorizados y ataques maliciosos.',
    cine: "En 'Live Free or Die Hard', la seguridad informática es central para prevenir un ataque digital masivo.",
    cocina:
      'Guardar recetas secretas en un lugar seguro es como implementar seguridad informática.',
    deporte:
      'Proteger los datos de los jugadores y tácticas de un equipo de ser robados es un ejemplo de seguridad en el deporte.',
    random:
      'Los firewalls y la encriptación son medidas comunes de seguridad informática.',
    link: 'https://example.com/seguridad',
    link2: 'https://example.com/cocina/seguridad'
  },
  {
    titulo: 'Refactorización',
    explicación:
      'Es el proceso de mejorar el código sin cambiar su comportamiento externo, para hacerlo más limpio y eficiente.',
    cine: "En 'Moneyball', los ajustes en las tácticas del equipo para mejorar su rendimiento reflejan la refactorización.",
    cocina:
      'Simplificar los pasos de una receta sin cambiar el resultado final es como refactorizar código.',
    deporte:
      'Reorganizar las tácticas de un equipo para que sean más efectivas es similar a la refactorización.',
    random:
      'La refactorización ayuda a reducir la deuda técnica y mejorar la mantenibilidad del código.',
    link: 'https://example.com/refactorizacion',
    link2: 'https://example.com/cocina/refactorizacion'
  },
  {
    titulo: 'JVM (Java Virtual Machine)',
    explicación:
      'Es un motor que ejecuta programas Java compilados al convertirlos en instrucciones específicas para la máquina.',
    cine: "En 'Tron', el entorno virtual podría representarse como una JVM, ejecutando aplicaciones dentro de su espacio controlado.",
    cocina:
      'La JVM es como un chef que interpreta recetas escritas en varios idiomas y las convierte en un plato final.',
    deporte:
      'En deportes, un entrenador que traduce estrategias a tácticas específicas para su equipo es como la JVM.',
    random:
      'La JVM permite la portabilidad del código Java entre diferentes plataformas.',
    link: 'https://example.com/jvm',
    link2: 'https://example.com/cocina/jvm'
  },
  {
    titulo: 'JRE (Java Runtime Environment)',
    explicación:
      'Es un entorno que permite ejecutar aplicaciones Java proporcionando las bibliotecas y la JVM necesarias.',
    cine: "En 'Inception', cada nivel del sueño podría interpretarse como un entorno de ejecución con reglas específicas, similar al JRE.",
    cocina:
      'El JRE es como una cocina equipada con todos los utensilios necesarios para preparar una receta.',
    deporte:
      'En un estadio, tener todas las herramientas necesarias para un partido es comparable al JRE.',
    random:
      'El JRE es parte del JDK y es esencial para ejecutar programas Java.',
    link: 'https://example.com/jre',
    link2: 'https://example.com/cocina/jre'
  },
  {
    titulo: 'JDK (Java Development Kit)',
    explicación:
      'Es un paquete de herramientas para desarrollar aplicaciones Java, que incluye el compilador, JRE, y otras utilidades.',
    cine: "En 'Ready Player One', las herramientas para diseñar el Oasis pueden asimilarse al JDK.",
    cocina:
      'El JDK es como un kit de herramientas completo para que un chef prepare platos sofisticados.',
    deporte:
      'En un equipo deportivo, el JDK sería el conjunto de recursos como entrenadores, herramientas y equipamiento.',
    random:
      "El JDK incluye herramientas como 'javac' para compilar código Java.",
    link: 'https://example.com/jdk',
    link2: 'https://example.com/cocina/jdk'
  },
  {
    titulo: 'Garbage Collection',
    explicación:
      'Es un proceso automático en Java que libera memoria eliminando objetos no utilizados.',
    cine: "En 'Wall-E', la tarea del robot recolector refleja el concepto de Garbage Collection al eliminar desechos.",
    cocina:
      'En la cocina, limpiar los utensilios que ya no se necesitan es como el garbage collection.',
    deporte:
      'Eliminar tácticas que no funcionan en un equipo es comparable a este proceso.',
    random: 'La recolección de basura en Java es administrada por la JVM.',
    link: 'https://example.com/garbage-collection',
    link2: 'https://example.com/cocina/garbage-collection'
  },
  {
    titulo: 'Multithreading',
    explicación:
      'Es la capacidad de un programa para ejecutar múltiples hilos simultáneamente.',
    cine: "En 'Minority Report', las múltiples predicciones que se procesan al mismo tiempo son un ejemplo de multithreading.",
    cocina:
      'En la cocina, varios chefs trabajando en diferentes platos al mismo tiempo representan multithreading.',
    deporte:
      'En un equipo, cada jugador contribuyendo simultáneamente a la estrategia es como un hilo.',
    random:
      'En Java, la clase Thread facilita la implementación de multithreading.',
    link: 'https://example.com/multithreading',
    link2: 'https://example.com/cocina/multithreading'
  },
  {
    titulo: 'Interfaces',
    explicación:
      'Son contratos que definen métodos que una clase debe implementar, promoviendo la abstracción.',
    cine: "En 'Westworld', las interfaces podrían simbolizar las instrucciones básicas que cada anfitrión debe seguir.",
    cocina:
      'En la cocina, un libro de recetas actúa como una interfaz, definiendo los pasos que debes seguir.',
    deporte:
      'Un manual de entrenamiento que define las rutinas básicas para los jugadores es una interfaz.',
    random:
      "Las interfaces en Java se declaran usando la palabra clave 'interface'.",
    link: 'https://example.com/interfaces',
    link2: 'https://example.com/cocina/interfaces'
  },
  {
    titulo: 'Clases Abstractas',
    explicación:
      'Son clases que no se pueden instanciar directamente y que pueden contener métodos abstractos y concretos.',
    cine: "En 'Jurassic Park', las especificaciones genéticas básicas de los dinosaurios pueden compararse con clases abstractas.",
    cocina:
      'Una plantilla de receta que necesita ser completada con detalles específicos es como una clase abstracta.',
    deporte:
      'Un esquema de juego que debe ser adaptado para cada equipo es comparable a una clase abstracta.',
    random:
      'Las clases abstractas permiten una base común para múltiples implementaciones.',
    link: 'https://example.com/clases-abstractas',
    link2: 'https://example.com/cocina/clases-abstractas'
  },
  {
    titulo: 'Polimorfismo',
    explicación:
      'Es la capacidad de un objeto de adoptar diferentes formas según el contexto.',
    cine: "En 'Transformers', los Autobots muestran polimorfismo al transformarse entre vehículos y robots.",
    cocina:
      'Un cuchillo que puede usarse para cortar diferentes ingredientes es un ejemplo de polimorfismo.',
    deporte:
      'Un jugador versátil que puede desempeñar varios roles en el equipo representa polimorfismo.',
    random:
      'El polimorfismo es un principio clave en la programación orientada a objetos.',
    link: 'https://example.com/polimorfismo',
    link2: 'https://example.com/cocina/polimorfismo'
  },
  {
    titulo: 'Encapsulación',
    explicación:
      'Es la práctica de restringir el acceso directo a los datos de un objeto para proteger su integridad.',
    cine: "En 'The Truman Show', la cápsula donde vive Truman es un ejemplo de encapsulación para controlar su entorno.",
    cocina:
      'Usar un recipiente sellado para guardar alimentos es similar a la encapsulación.',
    deporte:
      'Proteger las tácticas del equipo de ser descubiertas por el rival es un ejemplo de encapsulación.',
    random:
      "La encapsulación se implementa en Java usando modificadores de acceso como 'private' y 'protected'.",
    link: 'https://example.com/encapsulacion',
    link2: 'https://example.com/cocina/encapsulacion'
  },
  {
    titulo: 'Herencia',
    explicación:
      'Es un mecanismo que permite que una clase derive de otra para reutilizar su código.',
    cine: "En 'Star Wars', el aprendizaje Jedi entre maestro y aprendiz refleja el concepto de herencia.",
    cocina:
      'Una receta que hereda pasos básicos de otra más general es un ejemplo de herencia.',
    deporte:
      'Una estrategia básica que se adapta para diferentes juegos representa herencia.',
    random:
      "En Java, la herencia se implementa con la palabra clave 'extends'.",
    link: 'https://example.com/herencia',
    link2: 'https://example.com/cocina/herencia'
  },
  {
    titulo: 'Generics',
    explicación:
      'Permiten escribir clases y métodos que funcionen con cualquier tipo de dato, manteniendo la seguridad de tipos.',
    cine: "En 'Matrix', los códigos de programación genéricos permiten manejar múltiples configuraciones del sistema.",
    cocina:
      'Una herramienta de cocina que puede usarse con diferentes ingredientes es como un generic.',
    deporte:
      'Un esquema de entrenamiento adaptable a cualquier jugador es comparable a un generic.',
    random:
      'Los generics en Java ayudan a reducir errores en tiempo de compilación.',
    link: 'https://example.com/generics',
    link2: 'https://example.com/cocina/generics'
  },
  {
    titulo: 'Streams',
    explicación:
      'Son una forma de procesar secuencias de datos de manera funcional y eficiente.',
    cine: "En 'Minority Report', el flujo de datos visualizados para predecir crímenes se asemeja al uso de streams.",
    cocina:
      'Organizar un flujo de trabajo en la cocina para maximizar la eficiencia es como usar streams.',
    deporte:
      'Procesar estadísticas de un equipo durante toda una temporada es comparable a los streams.',
    random:
      'Los streams en Java permiten filtrar, mapear y reducir datos con facilidad.',
    link: 'https://example.com/streams',
    link2: 'https://example.com/cocina/streams'
  },
  {
    titulo: 'Colecciones (Collections)',
    explicación:
      'Son marcos en Java que proporcionan estructuras de datos como listas, conjuntos y mapas.',
    cine: "En 'The Social Network', la base de usuarios se podría manejar usando colecciones para organizar datos.",
    cocina:
      'Organizar un grupo de recetas en categorías es como usar colecciones.',
    deporte:
      'Almacenar datos de jugadores en un equipo es un ejemplo de colecciones.',
    random: 'Java Collections Framework incluye ArrayList, HashSet, y HashMap.',
    link: 'https://example.com/colecciones',
    link2: 'https://example.com/cocina/colecciones'
  },
  {
    titulo: 'ArrayList',
    explicación:
      'Es una estructura de datos dinámica que permite almacenar elementos en una lista redimensionable.',
    cine: "En 'Ready Player One', la lista de jugadores conectados podría manejarse con un ArrayList.",
    cocina:
      'Una bandeja que puede ampliarse para contener más platos es como un ArrayList.',
    deporte:
      'Una lista de jugadores que se actualiza durante una temporada representa un ArrayList.',
    random:
      'ArrayList es parte de la biblioteca estándar de Java en el paquete java.util.',
    link: 'https://example.com/arraylist',
    link2: 'https://example.com/cocina/arraylist'
  },
  {
    titulo: 'HashMap',
    explicación:
      'Es una estructura de datos que almacena pares clave-valor y permite acceso rápido a los valores.',
    cine: "En 'The Matrix', un HashMap podría usarse para relacionar cada programa con su propósito.",
    cocina:
      'Un libro de recetas donde puedes buscar un plato por su nombre es como un HashMap.',
    deporte:
      'Un diccionario que mapea nombres de equipos a sus puntuaciones es comparable a un HashMap.',
    random: 'HashMap utiliza una tabla hash para buscar valores rápidamente.',
    link: 'https://example.com/hashmap',
    link2: 'https://example.com/cocina/hashmap'
  },
  {
    titulo: 'Spring Framework',
    explicación:
      'Es un framework para desarrollar aplicaciones Java robustas y escalables.',
    cine: "En 'Hackers', un framework como Spring habría permitido organizar y escalar sus programas.",
    cocina:
      'Usar un sistema modular para gestionar recetas en una cocina es como usar Spring Framework.',
    deporte:
      'Organizar un torneo con diferentes módulos para equipos y partidos es similar a Spring.',
    random:
      'Spring proporciona características como inyección de dependencias y gestión de transacciones.',
    link: 'https://example.com/spring',
    link2: 'https://example.com/cocina/spring'
  },
  {
    titulo: 'Hibernate',
    explicación:
      'Es una herramienta de mapeo objeto-relacional (ORM) para trabajar con bases de datos en Java.',
    cine: "En 'The Social Network', un ORM como Hibernate podría haberse utilizado para manejar la base de datos de usuarios.",
    cocina:
      'Mapear ingredientes a recetas para facilitar su acceso es comparable a Hibernate.',
    deporte:
      'Un sistema que relaciona jugadores con sus estadísticas es como usar Hibernate.',
    random:
      'Hibernate simplifica el trabajo con bases de datos al evitar escribir consultas SQL manualmente.',
    link: 'https://example.com/hibernate',
    link2: 'https://example.com/cocina/hibernate'
  },
  {
    titulo: 'JavaFX',
    explicación:
      'Es una biblioteca para desarrollar interfaces gráficas avanzadas en Java.',
    cine: "En 'Iron Man', la interfaz holográfica que Tony Stark utiliza podría desarrollarse con JavaFX.",
    cocina:
      'Crear un menú visual atractivo en un restaurante es como usar JavaFX para una interfaz.',
    deporte:
      'Un marcador digital interactivo en un partido se asemeja a una aplicación JavaFX.',
    random:
      'JavaFX es una alternativa moderna a Swing para crear interfaces gráficas en Java.',
    link: 'https://example.com/javafx',
    link2: 'https://example.com/cocina/javafx'
  },
  {
    titulo: 'Maven',
    explicación:
      'Es una herramienta de gestión y construcción de proyectos que simplifica la dependencia y configuración del proyecto.',
    cine: "En 'The Social Network', una herramienta como Maven habría facilitado el desarrollo colaborativo de la aplicación.",
    cocina:
      'Un sistema que organiza automáticamente ingredientes y recetas es como Maven.',
    deporte:
      'Un programa que gestiona equipos y torneos automáticamente representa Maven.',
    random:
      "Maven utiliza un archivo 'pom.xml' para definir dependencias y configuraciones del proyecto.",
    link: 'https://example.com/maven',
    link2: 'https://example.com/cocina/maven'
  },
  {
    titulo: 'Lambdas (Expresiones Lambda)',
    explicación:
      'Son funciones anónimas que permiten escribir código más conciso y funcional.',
    cine: "En 'Inception', los pequeños ajustes en el sueño podrían programarse usando expresiones lambda.",
    cocina:
      'Un paso rápido en una receta que no requiere nombre es como una lambda.',
    deporte:
      'Un movimiento improvisado en un partido que no forma parte de la estrategia principal es como una lambda.',
    random:
      'Las lambdas se introdujeron en Java 8 para facilitar la programación funcional.',
    link: 'https://example.com/lambdas',
    link2: 'https://example.com/cocina/lambdas'
  },
  {
    titulo: 'For',
    explicación:
      'Es un bucle que repite un bloque de código un número específico de veces.',
    cine: "En 'Edge of Tomorrow', el ciclo repetitivo de eventos se asemeja a un bucle For con condiciones de repetición.",
    cocina:
      'Repetir un paso, como batir 10 veces, es equivalente a un bucle For.',
    deporte:
      'Iterar sobre una lista de jugadores para calcular su rendimiento es similar a usar un For.',
    random:
      'El bucle For tiene una inicialización, condición y actualización en Java.',
    link: 'https://example.com/for',
    link2: 'https://example.com/cocina/for'
  },
  {
    titulo: 'Do-While',
    explicación:
      'Es un bucle que ejecuta un bloque de código al menos una vez antes de evaluar la condición.',
    cine: "En 'Groundhog Day', el protagonista vive un Do-While constante, repitiendo el día una y otra vez.",
    cocina:
      'Probar una mezcla y luego decidir si necesita más sal es como un Do-While.',
    deporte:
      'Intentar un tiro en baloncesto y luego ajustar la técnica es similar a este bucle.',
    random:
      'En un Do-While, la condición se evalúa después de ejecutar el bloque de código.',
    link: 'https://example.com/do-while',
    link2: 'https://example.com/cocina/do-while'
  },
  {
    titulo: 'Switch',
    explicación:
      'Es una estructura de control que ejecuta un bloque de código según el valor de una variable.',
    cine: "En 'Inside Out', las emociones eligen diferentes recuerdos, como un Switch basado en la emoción activa.",
    cocina:
      'Elegir entre diferentes métodos de cocción según el tipo de ingrediente es como un Switch.',
    deporte:
      'Determinar la estrategia del equipo según el clima es comparable a un Switch.',
    random:
      "El Switch es una alternativa eficiente a múltiples condiciones 'if' en Java.",
    link: 'https://example.com/switch',
    link2: 'https://example.com/cocina/switch'
  },
  {
    titulo: 'Break',
    explicación:
      'Es una instrucción que detiene un bucle o Switch antes de que termine.',
    cine: "En 'Matrix', Neo usa Break para salir del ciclo del sistema y ganar control sobre él.",
    cocina:
      'Detener la cocción de un pastel al alcanzar el punto exacto es como usar Break.',
    deporte:
      'Interrumpir un entrenamiento cuando el jugador está fatigado es un ejemplo de Break.',
    random: 'Break se utiliza para salir de bucles y Switch en Java.',
    link: 'https://example.com/break',
    link2: 'https://example.com/cocina/break'
  },
  {
    titulo: 'Continue',
    explicación:
      'Es una instrucción que salta a la siguiente iteración de un bucle, omitiendo el resto del código actual.',
    cine: "En 'Finding Nemo', Marlin sigue nadando, saltándose obstáculos en su camino, como un Continue.",
    cocina:
      'Ignorar un paso de la receta que no es relevante es como usar Continue.',
    deporte:
      'En un entrenamiento, saltar un ejercicio que no es necesario en ese momento representa Continue.',
    random: 'Continue es útil para omitir iteraciones específicas en bucles.',
    link: 'https://example.com/continue',
    link2: 'https://example.com/cocina/continue'
  },
  {
    titulo: 'Métodos',
    explicación:
      'Son bloques de código reutilizables que realizan una tarea específica y pueden ser invocados desde otras partes del programa.',
    cine: "En 'Star Wars', la planificación de estrategias por los rebeldes sigue un método reutilizable en diferentes misiones.",
    cocina:
      "Un paso repetido en varias recetas, como 'hervir agua', es como un método.",
    deporte:
      'Realizar una rutina de calentamiento estándar antes de un partido es equivalente a un método.',
    random: 'Los métodos en Java pueden ser estáticos o de instancia.',
    link: 'https://example.com/metodos',
    link2: 'https://example.com/cocina/metodos'
  },
  {
    titulo: 'Parámetros',
    explicación:
      'Son datos que se pasan a un método para que pueda trabajar con ellos.',
    cine: "En 'Avatar', los datos sobre Pandora podrían representarse como parámetros para ejecutar simulaciones.",
    cocina:
      'Pasar las cantidades de ingredientes a una receta es similar a usar parámetros.',
    deporte:
      'Pasar la posición inicial de un jugador a una estrategia es como un parámetro.',
    random:
      'Los parámetros pueden ser de tipos primitivos o referencias a objetos en Java.',
    link: 'https://example.com/parametros',
    link2: 'https://example.com/cocina/parametros'
  },
  {
    titulo: 'Return',
    explicación:
      'Es una instrucción que devuelve un valor desde un método al punto donde fue llamado.',
    cine: "En 'Inception', cada nivel de sueño devuelve un valor crítico para salir del nivel anterior.",
    cocina:
      'El resultado final de una receta, como un pastel, es equivalente a un valor de retorno.',
    deporte:
      'El tiempo final de un corredor después de una carrera es como un valor de retorno.',
    random:
      'El tipo de retorno de un método debe coincidir con el valor devuelto.',
    link: 'https://example.com/return',
    link2: 'https://example.com/cocina/return'
  },
  {
    titulo: 'Sobrecarga de Métodos',
    explicación:
      'Es la capacidad de definir varios métodos con el mismo nombre pero diferentes parámetros.',
    cine: "En 'Doctor Strange', las diferentes formas en que usa el tiempo son como sobrecargas del mismo método.",
    cocina:
      'Un chef que puede preparar una receta con o sin un ingrediente opcional demuestra sobrecarga de métodos.',
    deporte:
      'Un entrenador que diseña estrategias personalizadas para jugadores de diferentes posiciones usa sobrecarga.',
    random:
      'La sobrecarga mejora la flexibilidad y reutilización del código en Java.',
    link: 'https://example.com/sobrecarga',
    link2: 'https://example.com/cocina/sobrecarga'
  },
  {
    titulo: 'Static',
    explicación:
      'Es un modificador que indica que un método o variable pertenece a la clase en lugar de a una instancia específica.',
    cine: "En 'The Matrix', el código base del sistema puede considerarse estático, accesible sin instancias específicas.",
    cocina:
      'Una receta general que no depende de un chef específico es como un método estático.',
    deporte: 'Un reglamento deportivo universal representa un uso estático.',
    random:
      'Los métodos estáticos en Java pueden ser llamados sin crear una instancia de la clase.',
    link: 'https://example.com/static',
    link2: 'https://example.com/cocina/static'
  },
  {
    titulo: 'Final',
    explicación:
      'Es un modificador que indica que una variable, método o clase no puede ser modificada después de su declaración.',
    cine: "En 'Avengers: Endgame', el sacrificio de Iron Man representa un final inmutable en la narrativa.",
    cocina:
      'Un ingrediente que no puede ser sustituido en una receta es como una variable final.',
    deporte:
      'Un número de dorsal que no puede cambiar en un torneo es un ejemplo de final.',
    random:
      'Las variables marcadas como final en Java deben ser inicializadas al declararse.',
    link: 'https://example.com/final',
    link2: 'https://example.com/cocina/final'
  },
  {
    titulo: 'Arrays Multidimensionales',
    explicación:
      'Son estructuras de datos que permiten almacenar datos en más de una dimensión, como matrices.',
    cine: "El control de múltiples realidades en 'Doctor Strange' es como manejar arrays multidimensionales.",
    cocina:
      'Un menú que organiza platos por tipo (entradas, platos principales, postres) es como un array multidimensional.',
    deporte:
      'Una tabla de posiciones que clasifica equipos por puntos y diferencia de goles representa un array bidimensional.',
    random:
      'Los arrays multidimensionales en Java pueden tener tamaños irregulares.',
    link: 'https://example.com/arrays-multidimensionales',
    link2: 'https://example.com/cocina/arrays-multidimensionales'
  },
  {
    titulo: 'Try-Catch',
    explicación:
      'Es una estructura que permite manejar excepciones y errores en tiempo de ejecución.',
    cine: "En 'Interstellar', el intento de Cooper de atravesar el agujero negro y adaptarse a sus errores es como un Try-Catch.",
    cocina:
      'Intentar preparar un plato nuevo y manejar errores, como añadir demasiado sal, es como un Try-Catch.',
    deporte:
      'Hacer ajustes durante un partido cuando una estrategia no funciona es un ejemplo de Try-Catch.',
    random:
      'El bloque Try-Catch en Java ayuda a prevenir fallos del programa debido a excepciones.',
    link: 'https://example.com/try-catch',
    link2: 'https://example.com/cocina/try-catch'
  },
  {
    titulo: 'Excepciones',
    explicación:
      'Son eventos que interrumpen el flujo normal de un programa y deben ser manejados para evitar errores.',
    cine: "En 'Jurassic Park', los errores en el sistema de seguridad representan excepciones que requieren manejo urgente.",
    cocina:
      'Quemar un plato es como una excepción que debe manejarse para salvar la comida.',
    deporte:
      'Un jugador lesionado durante un partido es una excepción que requiere ajustes.',
    random:
      'Java tiene excepciones verificadas (checked) y no verificadas (unchecked).',
    link: 'https://example.com/excepciones',
    link2: 'https://example.com/cocina/excepciones'
  },
  {
    titulo: 'Enumeraciones (Enum)',
    explicación:
      'Son un tipo especial en Java que define un conjunto fijo de constantes relacionadas.',
    cine: "En 'Inside Out', las cinco emociones básicas son un conjunto de valores similares a un Enum.",
    cocina:
      "Categorías de ingredientes como 'lácteos', 'vegetales' y 'carnes' pueden representarse con Enum.",
    deporte:
      'Tipos de faltas en un deporte, como leve, moderada y grave, son un ejemplo de Enum.',
    random:
      'Las enumeraciones en Java son inmutables y tienen un conjunto fijo de valores.',
    link: 'https://example.com/enum',
    link2: 'https://example.com/cocina/enum'
  },
  {
    titulo: 'Constructores',
    explicación:
      'Son métodos especiales que se ejecutan cuando se crea un objeto y se utilizan para inicializarlo.',
    cine: "En 'Iron Man', la creación del traje inicial por Tony Stark es como un constructor para el superhéroe.",
    cocina:
      'Al comenzar una receta, reunir todos los ingredientes necesarios es como un constructor.',
    deporte:
      'Al formar un equipo, seleccionar a los jugadores y asignar roles es un ejemplo de constructor.',
    random: 'Un constructor en Java debe tener el mismo nombre que su clase.',
    link: 'https://example.com/constructores',
    link2: 'https://example.com/cocina/constructores'
  },
  {
    titulo: "Palabra clave 'this'",
    explicación:
      'Es una referencia implícita al objeto actual dentro de un método o constructor.',
    cine: "En 'The Lion King', Simba refiriéndose a su rol como rey representa el uso de 'this'.",
    cocina: "Un chef refiriéndose a su propia receta es como usar 'this'.",
    deporte:
      "Un jugador refiriéndose a su propio rendimiento durante el partido es un caso de 'this'.",
    random:
      "La palabra 'this' se usa para diferenciar entre variables locales y de instancia.",
    link: 'https://example.com/this',
    link2: 'https://example.com/cocina/this'
  },
  {
    titulo: "Palabra clave 'super'",
    explicación:
      'Es una referencia a la clase padre de un objeto, utilizada para acceder a métodos o constructores de la superclase.',
    cine: "En 'Spider-Man: Into the Spider-Verse', Miles aprende de los otros Spider-Man, como un uso de 'super'.",
    cocina:
      "Un chef siguiendo técnicas básicas aprendidas de su mentor es como usar 'super'.",
    deporte:
      "Un jugador usando estrategias enseñadas por un entrenador anterior es como 'super'.",
    random:
      "La palabra 'super' se usa comúnmente para llamar al constructor de la superclase en Java.",
    link: 'https://example.com/super',
    link2: 'https://example.com/cocina/super'
  },
  {
    titulo: 'Interfaces Funcionales',
    explicación:
      'Son interfaces con un único método abstracto, utilizadas comúnmente con expresiones lambda.',
    cine: "En 'Ex Machina', la inteligencia artificial usa decisiones únicas y directas, como una interfaz funcional.",
    cocina:
      'Una receta simplificada que define un solo paso esencial es similar a una interfaz funcional.',
    deporte:
      'Una tarea única asignada a un jugador durante un partido es como una interfaz funcional.',
    random:
      'La anotación @FunctionalInterface asegura que una interfaz solo tenga un método abstracto.',
    link: 'https://example.com/interfaces-funcionales',
    link2: 'https://example.com/cocina/interfaces-funcionales'
  },
  {
    titulo: 'Clases Internas',
    explicación:
      'Son clases definidas dentro de otra clase para encapsular su funcionalidad relacionada.',
    cine: "En 'Inception', los sueños dentro de otros sueños son como clases internas con funciones específicas.",
    cocina:
      'Un utensilio especializado dentro de un conjunto de cocina es como una clase interna.',
    deporte:
      'Un grupo específico de jugadores dentro de un equipo, como los defensores, representa una clase interna.',
    random: 'Las clases internas en Java pueden ser estáticas o no estáticas.',
    link: 'https://example.com/clases-internas',
    link2: 'https://example.com/cocina/clases-internas'
  },
  {
    titulo: 'Clases Anónimas',
    explicación:
      'Son clases sin nombre que se declaran e instancian en una sola expresión.',
    cine: "En 'The Dark Knight', el Joker usa tácticas inesperadas que funcionan como clases anónimas: cumplen su propósito y desaparecen.",
    cocina:
      'Un chef que improvisa un paso de la receta es como usar una clase anónima.',
    deporte:
      'Un suplente que juega un rol único y no recurrente es similar a una clase anónima.',
    random:
      'Las clases anónimas son útiles para implementar interfaces o clases abstractas.',
    link: 'https://example.com/clases-anonimas',
    link2: 'https://example.com/cocina/clases-anonimas'
  },
  {
    titulo: 'Métodos',
    explicación:
      'Son bloques de código reutilizables que realizan una tarea específica y pueden ser invocados desde otras partes del programa.',
    cine: "En 'The Matrix', cada habilidad cargada en Neo puede verse como un método especializado.",
    cocina:
      "Un paso repetido en varias recetas, como 'hervir agua', es como un método.",
    deporte:
      'Realizar una rutina de calentamiento estándar antes de un partido es equivalente a un método.',
    random: 'Los métodos en Java pueden ser estáticos o de instancia.',
    link: 'https://example.com/metodos',
    link2: 'https://example.com/cocina/metodos'
  },
  {
    titulo: 'Parámetros',
    explicación:
      'Son datos que se pasan a un método para que pueda trabajar con ellos.',
    cine: "En 'Iron Man', los materiales específicos para construir cada traje son como parámetros.",
    cocina:
      'Pasar las cantidades de ingredientes a una receta es similar a usar parámetros.',
    deporte:
      'Pasar la posición inicial de un jugador a una estrategia es como un parámetro.',
    random:
      'Los parámetros pueden ser de tipos primitivos o referencias a objetos en Java.',
    link: 'https://example.com/parametros',
    link2: 'https://example.com/cocina/parametros'
  },
  {
    titulo: 'Return',
    explicación:
      'Es una instrucción que devuelve un valor desde un método al punto donde fue llamado.',
    cine: "En 'Toy Story', Woody regresa a Andy, representando un valor de retorno exitoso.",
    cocina:
      'El resultado final de una receta, como un pastel, es equivalente a un valor de retorno.',
    deporte:
      'El tiempo final de un corredor después de una carrera es como un valor de retorno.',
    random:
      'El tipo de retorno de un método debe coincidir con el valor devuelto.',
    link: 'https://example.com/return',
    link2: 'https://example.com/cocina/return'
  },
  {
    titulo: 'Sobrecarga de Métodos',
    explicación:
      'Es la capacidad de definir varios métodos con el mismo nombre pero diferentes parámetros.',
    cine: "En 'Doctor Strange', el uso del Ojo de Agamotto para diferentes propósitos refleja la sobrecarga de métodos.",
    cocina:
      'Un chef que puede preparar una receta con o sin un ingrediente opcional demuestra sobrecarga de métodos.',
    deporte:
      'Un entrenador que diseña estrategias personalizadas para jugadores de diferentes posiciones usa sobrecarga.',
    random:
      'La sobrecarga mejora la flexibilidad y reutilización del código en Java.',
    link: 'https://example.com/sobrecarga',
    link2: 'https://example.com/cocina/sobrecarga'
  },
  {
    titulo: 'Static',
    explicación:
      'Es un modificador que indica que un método o variable pertenece a la clase en lugar de a una instancia específica.',
    cine: "En 'Harry Potter', las leyes mágicas que afectan a todos los magos funcionan como métodos estáticos.",
    cocina:
      'Una receta general que no depende de un chef específico es como un método estático.',
    deporte: 'Un reglamento deportivo universal representa un uso estático.',
    random:
      'Los métodos estáticos en Java pueden ser llamados sin crear una instancia de la clase.',
    link: 'https://example.com/static',
    link2: 'https://example.com/cocina/static'
  },
  {
    titulo: 'Final',
    explicación:
      'Es un modificador que indica que una variable, método o clase no puede ser modificada después de su declaración.',
    cine: "El final de 'Inception' deja un objeto inmóvil, representando la inmutabilidad de una variable final.",
    cocina:
      'Un ingrediente que no puede ser sustituido en una receta es como una variable final.',
    deporte:
      'Un número de dorsal que no puede cambiar en un torneo es un ejemplo de final.',
    random:
      'Las variables marcadas como final en Java deben ser inicializadas al declararse.',
    link: 'https://example.com/final',
    link2: 'https://example.com/cocina/final'
  },
  {
    titulo: 'Arrays Multidimensionales',
    explicación:
      'Son estructuras de datos que permiten almacenar datos en más de una dimensión, como matrices.',
    cine: "En 'Tenet', las múltiples líneas de tiempo representan un manejo complejo como un array multidimensional.",
    cocina:
      'Un menú que organiza platos por tipo (entradas, platos principales, postres) es como un array multidimensional.',
    deporte:
      'Una tabla de posiciones que clasifica equipos por puntos y diferencia de goles representa un array bidimensional.',
    random:
      'Los arrays multidimensionales en Java pueden tener tamaños irregulares.',
    link: 'https://example.com/arrays-multidimensionales',
    link2: 'https://example.com/cocina/arrays-multidimensionales'
  },
  {
    titulo: 'Try-Catch',
    explicación:
      'Es una estructura que permite manejar excepciones y errores en tiempo de ejecución.',
    cine: "En 'Gravity', Ryan Stone enfrenta problemas y ajusta sus decisiones como un Try-Catch en tiempo real.",
    cocina:
      'Intentar preparar un plato nuevo y manejar errores, como añadir demasiado sal, es como un Try-Catch.',
    deporte:
      'Hacer ajustes durante un partido cuando una estrategia no funciona es un ejemplo de Try-Catch.',
    random:
      'El bloque Try-Catch en Java ayuda a prevenir fallos del programa debido a excepciones.',
    link: 'https://example.com/try-catch',
    link2: 'https://example.com/cocina/try-catch'
  },
  {
    titulo: 'Excepciones',
    explicación:
      'Son eventos que interrumpen el flujo normal de un programa y deben ser manejados para evitar errores.',
    cine: "El fallo en los sistemas de energía de 'Apollo 13' es una excepción crítica que requiere soluciones inmediatas.",
    cocina:
      'Quemar un plato es como una excepción que debe manejarse para salvar la comida.',
    deporte:
      'Un jugador lesionado durante un partido es una excepción que requiere ajustes.',
    random:
      'Java tiene excepciones verificadas (checked) y no verificadas (unchecked).',
    link: 'https://example.com/excepciones',
    link2: 'https://example.com/cocina/excepciones'
  },
  {
    titulo: 'Enumeraciones (Enum)',
    explicación:
      'Son un tipo especial en Java que define un conjunto fijo de constantes relacionadas.',
    cine: "En 'Inside Out', las emociones básicas como Alegría, Tristeza y Miedo pueden ser representadas como un Enum.",
    cocina:
      "Categorías de ingredientes como 'lácteos', 'vegetales' y 'carnes' pueden representarse con Enum.",
    deporte:
      'Tipos de faltas en un deporte, como leve, moderada y grave, son un ejemplo de Enum.',
    random:
      'Las enumeraciones en Java son inmutables y tienen un conjunto fijo de valores.',
    link: 'https://example.com/enum',
    link2: 'https://example.com/cocina/enum'
  },
  {
    titulo: 'Constructores',
    explicación:
      'Son métodos especiales que se ejecutan cuando se crea un objeto y se utilizan para inicializarlo.',
    cine: "En 'Iron Man', Tony Stark construye el Mark I, un constructor que define las bases para sus trajes futuros.",
    cocina:
      'Al comenzar una receta, reunir todos los ingredientes necesarios es como un constructor.',
    deporte:
      'Al formar un equipo, seleccionar a los jugadores y asignar roles es un ejemplo de constructor.',
    random: 'Un constructor en Java debe tener el mismo nombre que su clase.',
    link: 'https://example.com/constructores',
    link2: 'https://example.com/cocina/constructores'
  },
  {
    titulo: "Palabra clave 'this'",
    explicación:
      'Es una referencia implícita al objeto actual dentro de un método o constructor.',
    cine: "En 'Spider-Man', Peter Parker reflexiona sobre sus decisiones, representando el uso de 'this' como referencia a sí mismo.",
    cocina: "Un chef refiriéndose a su propia receta es como usar 'this'.",
    deporte:
      "Un jugador refiriéndose a su propio rendimiento durante el partido es un caso de 'this'.",
    random:
      "La palabra 'this' se usa para diferenciar entre variables locales y de instancia.",
    link: 'https://example.com/this',
    link2: 'https://example.com/cocina/this'
  },
  {
    titulo: "Palabra clave 'super'",
    explicación:
      'Es una referencia a la clase padre de un objeto, utilizada para acceder a métodos o constructores de la superclase.',
    cine: "En 'Star Wars', Luke Skywalker accede al legado de su padre, Anakin, como un uso de 'super'.",
    cocina:
      "Un chef siguiendo técnicas básicas aprendidas de su mentor es como usar 'super'.",
    deporte:
      "Un jugador usando estrategias enseñadas por un entrenador anterior es como 'super'.",
    random:
      "La palabra 'super' se usa comúnmente para llamar al constructor de la superclase en Java.",
    link: 'https://example.com/super',
    link2: 'https://example.com/cocina/super'
  },
  {
    titulo: 'Interfaces Funcionales',
    explicación:
      'Son interfaces con un único método abstracto, utilizadas comúnmente con expresiones lambda.',
    cine: "En 'The Terminator', el T-800 tiene un objetivo único, similar a una interfaz funcional.",
    cocina:
      'Una receta simplificada que define un solo paso esencial es similar a una interfaz funcional.',
    deporte:
      'Una tarea única asignada a un jugador durante un partido es como una interfaz funcional.',
    random:
      'La anotación @FunctionalInterface asegura que una interfaz solo tenga un método abstracto.',
    link: 'https://example.com/interfaces-funcionales',
    link2: 'https://example.com/cocina/interfaces-funcionales'
  },
  {
    titulo: 'Clases Internas',
    explicación:
      'Son clases definidas dentro de otra clase para encapsular su funcionalidad relacionada.',
    cine: "En 'Inception', las capas de sueños funcionan como clases internas, dentro de un sueño principal.",
    cocina:
      'Un utensilio especializado dentro de un conjunto de cocina es como una clase interna.',
    deporte:
      'Un grupo específico de jugadores dentro de un equipo, como los defensores, representa una clase interna.',
    random: 'Las clases internas en Java pueden ser estáticas o no estáticas.',
    link: 'https://example.com/clases-internas',
    link2: 'https://example.com/cocina/clases-internas'
  },
  {
    titulo: 'Clases Anónimas',
    explicación:
      'Son clases sin nombre que se declaran e instancian en una sola expresión.',
    cine: "En 'John Wick', los personajes secundarios desempeñan roles clave pero temporales, como clases anónimas.",
    cocina:
      'Un chef que improvisa un paso de la receta es como usar una clase anónima.',
    deporte:
      'Un suplente que juega un rol único y no recurrente es similar a una clase anónima.',
    random:
      'Las clases anónimas son útiles para implementar interfaces o clases abstractas.',
    link: 'https://example.com/clases-anonimas',
    link2: 'https://example.com/cocina/clases-anonimas'
  },
  {
    titulo: 'Polimorfismo',
    explicación:
      'Es la capacidad de un objeto de adoptar diferentes formas según el contexto.',
    cine: "En 'X-Men', Mystique cambia de forma para adaptarse a diferentes situaciones, representando polimorfismo.",
    cocina:
      'Un cuchillo que puede usarse para cortar diferentes ingredientes es un ejemplo de polimorfismo.',
    deporte:
      'Un jugador versátil que puede desempeñar varios roles en el equipo representa polimorfismo.',
    random:
      'El polimorfismo es un principio clave en la programación orientada a objetos.',
    link: 'https://example.com/polimorfismo',
    link2: 'https://example.com/cocina/polimorfismo'
  },
  {
    titulo: 'Encapsulación',
    explicación:
      'Es la práctica de restringir el acceso directo a los datos de un objeto para proteger su integridad.',
    cine: "En 'The Truman Show', el mundo de Truman está encapsulado para proteger el experimento.",
    cocina:
      'Usar un recipiente sellado para guardar alimentos es similar a la encapsulación.',
    deporte:
      'Proteger las tácticas del equipo de ser descubiertas por el rival es un ejemplo de encapsulación.',
    random:
      "La encapsulación se implementa en Java usando modificadores de acceso como 'private' y 'protected'.",
    link: 'https://example.com/encapsulacion',
    link2: 'https://example.com/cocina/encapsulacion'
  },
  {
    titulo: 'Herencia',
    explicación:
      'Es un mecanismo que permite que una clase derive de otra para reutilizar su código.',
    cine: "En 'The Lion King', Simba hereda el reino y responsabilidades de Mufasa, reflejando herencia.",
    cocina:
      'Una receta que hereda pasos básicos de otra más general es un ejemplo de herencia.',
    deporte:
      'Una estrategia básica que se adapta para diferentes juegos representa herencia.',
    random:
      "En Java, la herencia se implementa con la palabra clave 'extends'.",
    link: 'https://example.com/herencia',
    link2: 'https://example.com/cocina/herencia'
  },
  {
    titulo: 'Generics',
    explicación:
      'Permiten escribir clases y métodos que funcionen con cualquier tipo de dato, manteniendo la seguridad de tipos.',
    cine: "En 'The Matrix', los programas genéricos como los agentes pueden adaptarse a diferentes escenarios.",
    cocina:
      'Una herramienta de cocina que puede usarse con diferentes ingredientes es como un generic.',
    deporte:
      'Un esquema de entrenamiento adaptable a cualquier jugador es comparable a un generic.',
    random:
      'Los generics en Java ayudan a reducir errores en tiempo de compilación.',
    link: 'https://example.com/generics',
    link2: 'https://example.com/cocina/generics'
  },
  {
    titulo: 'Streams',
    explicación:
      'Son una forma de procesar secuencias de datos de manera funcional y eficiente.',
    cine: "En 'Minority Report', las predicciones fluyen como datos en streams, analizados en tiempo real.",
    cocina:
      'Organizar un flujo de trabajo en la cocina para maximizar la eficiencia es como usar streams.',
    deporte:
      'Procesar estadísticas de un equipo durante toda una temporada es comparable a los streams.',
    random:
      'Los streams en Java permiten filtrar, mapear y reducir datos con facilidad.',
    link: 'https://example.com/streams',
    link2: 'https://example.com/cocina/streams'
  },
  {
    titulo: 'Colecciones (Collections)',
    explicación:
      'Son marcos en Java que proporcionan estructuras de datos como listas, conjuntos y mapas.',
    cine: "En 'Harry Potter', la colección de Horrocruxes representa una colección clave para la trama.",
    cocina:
      'Organizar un grupo de recetas en categorías es como usar colecciones.',
    deporte:
      'Almacenar datos de jugadores en un equipo es un ejemplo de colecciones.',
    random: 'Java Collections Framework incluye ArrayList, HashSet, y HashMap.',
    link: 'https://example.com/colecciones',
    link2: 'https://example.com/cocina/colecciones'
  },
  {
    titulo: 'ArrayList',
    explicación:
      'Es una estructura de datos dinámica que permite almacenar elementos en una lista redimensionable.',
    cine: "En 'Toy Story', la lista de juguetes de Andy es un ejemplo de ArrayList que crece con nuevos personajes.",
    cocina:
      'Una bandeja que puede ampliarse para contener más platos es como un ArrayList.',
    deporte:
      'Una lista de jugadores que se actualiza durante una temporada representa un ArrayList.',
    random:
      'ArrayList es parte de la biblioteca estándar de Java en el paquete java.util.',
    link: 'https://example.com/arraylist',
    link2: 'https://example.com/cocina/arraylist'
  },
  {
    titulo: 'HashMap',
    explicación:
      'Es una estructura de datos que almacena pares clave-valor y permite acceso rápido a los valores.',
    cine: "En 'Sherlock Holmes', las pistas mapeadas a sus soluciones son un ejemplo de HashMap.",
    cocina:
      'Un libro de recetas donde puedes buscar un plato por su nombre es como un HashMap.',
    deporte:
      'Un diccionario que mapea nombres de equipos a sus puntuaciones es comparable a un HashMap.',
    random: 'HashMap utiliza una tabla hash para buscar valores rápidamente.',
    link: 'https://example.com/hashmap',
    link2: 'https://example.com/cocina/hashmap'
  },
  {
    titulo: 'Spring Framework',
    explicación:
      'Es un framework para desarrollar aplicaciones Java robustas y escalables.',
    cine: "En 'The Avengers', el equipo trabaja como un framework, con roles específicos para cada miembro.",
    cocina:
      'Usar un sistema modular para gestionar recetas en una cocina es como usar Spring Framework.',
    deporte:
      'Organizar un torneo con diferentes módulos para equipos y partidos es similar a Spring.',
    random:
      'Spring proporciona características como inyección de dependencias y gestión de transacciones.',
    link: 'https://example.com/spring',
    link2: 'https://example.com/cocina/spring'
  },
  {
    titulo: 'Hibernate',
    explicación:
      'Es una herramienta de mapeo objeto-relacional (ORM) para trabajar con bases de datos en Java.',
    cine: "En 'Ready Player One', los objetos virtuales mapeados al mundo real representan un uso similar al ORM.",
    cocina:
      'Mapear ingredientes a recetas para facilitar su acceso es comparable a Hibernate.',
    deporte:
      'Un sistema que relaciona jugadores con sus estadísticas es como usar Hibernate.',
    random:
      'Hibernate simplifica el trabajo con bases de datos al evitar escribir consultas SQL manualmente.',
    link: 'https://example.com/hibernate',
    link2: 'https://example.com/cocina/hibernate'
  },
  {
    titulo: 'JavaFX',
    explicación:
      'Es una biblioteca para desarrollar interfaces gráficas avanzadas en Java.',
    cine: "En 'Avatar', las interfaces holográficas interactivas se asemejan a las aplicaciones creadas con JavaFX.",
    cocina:
      'Crear un menú visual atractivo en un restaurante es como usar JavaFX para una interfaz.',
    deporte:
      'Un marcador digital interactivo en un partido se asemeja a una aplicación JavaFX.',
    random:
      'JavaFX es una alternativa moderna a Swing para crear interfaces gráficas en Java.',
    link: 'https://example.com/javafx',
    link2: 'https://example.com/cocina/javafx'
  },
  {
    titulo: 'Maven',
    explicación:
      'Es una herramienta de gestión y construcción de proyectos que simplifica la dependencia y configuración del proyecto.',
    cine: "En 'The Martian', los recursos organizados para la supervivencia de Mark son como dependencias en Maven.",
    cocina:
      'Un sistema que organiza automáticamente ingredientes y recetas es como Maven.',
    deporte:
      'Un programa que gestiona equipos y torneos automáticamente representa Maven.',
    random:
      "Maven utiliza un archivo 'pom.xml' para definir dependencias y configuraciones del proyecto.",
    link: 'https://example.com/maven',
    link2: 'https://example.com/cocina/maven'
  },
  {
    titulo: 'Lambdas (Expresiones Lambda)',
    explicación:
      'Son funciones anónimas que permiten escribir código más conciso y funcional.',
    cine: "En 'Doctor Strange', las manipulaciones temporales rápidas y precisas son como expresiones Lambda.",
    cocina:
      'Un paso rápido en una receta que no requiere nombre es como una lambda.',
    deporte:
      'Un movimiento improvisado en un partido que no forma parte de la estrategia principal es como una lambda.',
    random:
      'Las lambdas se introdujeron en Java 8 para facilitar la programación funcional.',
    link: 'https://example.com/lambdas',
    link2: 'https://example.com/cocina/lambdas'
  }
]

export default data
