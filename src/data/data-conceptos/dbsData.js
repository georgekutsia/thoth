// data.js

const data = [
  {
    titulo: 'Base de Datos',
    explicación:
      'Una base de datos es un almacén organizado que permite guardar grandes cantidades de información para su uso posterior. Los datos en una base de datos están relacionados y pertenecen a un mismo contexto, organizados en tablas con filas y columnas.',
    cine: "En películas como 'The Matrix', las bases de datos contienen toda la información que sustenta la simulación en la que viven los personajes. También en 'Minority Report', se usan bases de datos para predecir crímenes.",
    cocina:
      'Una base de datos en la cocina sería como una despensa organizada o un libro de recetas, donde todos los ingredientes o recetas están almacenados para su fácil consulta.',
    deporte:
      'En el deporte, las bases de datos permiten almacenar estadísticas de jugadores, equipos y partidos, facilitando el análisis de rendimiento y estrategias.',
    random: "El término 'base de datos' fue acuñado en la década de 1960.",
    link: '',
    link2: ''
  },
  {
    titulo: 'Sistema de Gestión de Bases de Datos (SGBD)',
    explicación:
      'Un SGBD es un software que permite a los usuarios procesar, describir, administrar y recuperar datos almacenados en una base de datos, garantizando la integridad y seguridad de los mismos.',
    cine: "En la película 'The Net', la protagonista usa sistemas de gestión de bases de datos para obtener información sobre sus enemigos. En 'The Matrix', un SGBD podría gestionar toda la información del mundo simulado.",
    cocina:
      'El SGBD es como un chef que organiza los ingredientes y recetas, asegurando que todo esté correctamente gestionado, como un sistema digital para buscar y añadir nuevas recetas.',
    deporte:
      'Los entrenadores deportivos usan SGBD para gestionar estadísticas de jugadores y equipos, ayudando en la toma de decisiones estratégicas.',
    random: 'El primer SGBD moderno fue creado por IBM en la década de 1960.',
    link: '',
    link2: ''
  },
  {
    titulo: 'Relación',
    explicación:
      'En bases de datos relacionales, una relación es equivalente a una tabla que contiene filas y columnas para organizar los datos.',
    cine: "En 'The Matrix', las relaciones de bases de datos podrían representar las conexiones entre los diferentes elementos de la simulación.",
    cocina:
      'En la cocina, una relación es como una lista de ingredientes (columnas) y cantidades (filas) para una receta específica.',
    deporte:
      'Las relaciones en bases de datos permiten comparar estadísticas entre diferentes jugadores en un mismo equipo o torneo.',
    random:
      "El término 'relación' proviene de la teoría matemática de conjuntos, aplicada al almacenamiento de datos.",
    link: '',
    link2: ''
  },
  {
    titulo: 'Datos',
    explicación:
      'Datos es un término que se refiere a hechos, eventos, transacciones, etc., que han sido registrados. Es la entrada sin procesar de la cual se produce la información. Los datos son hechos brutos y sin procesar que, por sí solos, no tienen un significado claro.',
    cine: "En 'The Matrix', los datos son los códigos sin procesar que representan la simulación antes de que los personajes los interpreten.",
    cocina:
      'En la cocina, los datos podrían ser las cantidades exactas de ingredientes de una receta, sin relación entre ellos hasta que se combinan.',
    deporte:
      'En el deporte, los datos son las estadísticas en bruto, como la cantidad de goles o minutos jugados por un jugador.',
    random:
      "El dato más simple puede ser un número como '5', pero por sí solo no transmite ningún significado hasta que se le da contexto.",
    link: '',
    link2: ''
  },
  {
    titulo: 'Información',
    explicación:
      'Información se refiere a los datos que han sido procesados y comunicados de tal manera que pueden ser entendidos e interpretados por el receptor.',
    cine: "En 'Minority Report', la información que predice un crimen está basada en datos que han sido procesados y contextualizados para que los agentes puedan tomar decisiones.",
    cocina:
      'En la cocina, la información sería la receta completa, donde los datos (ingredientes) se organizan en un orden específico para crear un platillo.',
    deporte:
      'En el deporte, la información es el análisis que se deriva de las estadísticas de un jugador, como su rendimiento en un partido, que permite ajustar estrategias.',
    random:
      'La información no puede ser procesada por máquinas sin contexto, mientras que los datos son estructurados y pueden ser manejados fácilmente por sistemas automatizados.',
    link: '',
    link2: ''
  },
  {
    titulo: 'Clave Primaria',
    explicación:
      'La clave primaria es un campo o conjunto de campos que identifica de manera única a cada fila en una tabla de base de datos.',
    cine: "En un sistema como el de 'The Matrix', las claves primarias serían los identificadores únicos de cada individuo en la simulación.",
    cocina:
      'En una receta, la clave primaria podría ser el nombre del platillo, que lo distingue de otros en un libro de cocina.',
    deporte:
      'En bases de datos deportivas, la clave primaria podría ser el número de camiseta de un jugador, que lo diferencia de los demás.',
    random:
      'Las claves primarias no pueden ser nulas, garantizando que cada registro sea único.',
    link: '',
    link2: ''
  },
  {
    titulo: 'Registros',
    explicación:
      'Un registro en una base de datos es un conjunto de datos relacionados que se agrupan en una misma fila dentro de una tabla.',
    cine: "En 'Minority Report', los registros serían cada predicción de un crimen almacenada en una base de datos, donde cada fila contiene datos específicos sobre el delito y el sospechoso.",
    cocina:
      'En la cocina, un registro sería una receta específica almacenada en un libro de cocina digital, con campos como el nombre del plato, los ingredientes y los tiempos de cocción.',
    deporte:
      'En bases de datos deportivas, un registro podría ser la información de un jugador: nombre, número de camiseta, goles marcados y equipo al que pertenece.',
    random:
      'En una base de datos, cada registro debe ser único, identificado generalmente por una clave primaria, como el número de identificación de un cliente.',
    link: '',
    link2: ''
  },
  {
    titulo: 'Clave Foránea',
    explicación:
      'Una clave foránea es un campo en una tabla que se refiere a la clave primaria en otra tabla, estableciendo una relación entre ambas.',
    cine: "La clave foránea en una base de datos podría representar las conexiones entre personajes en una narrativa compleja, como en 'Inception'.",
    cocina:
      'Una clave foránea en la cocina sería como referenciar ingredientes de una receta base que se utilizan en múltiples platillos.',
    deporte:
      'En el análisis de rendimiento deportivo, las claves foráneas se usan para vincular las estadísticas de un jugador con su equipo.',
    random:
      'Las claves foráneas garantizan que los datos en una tabla se correspondan correctamente con otra, manteniendo la integridad referencial.',
    link: '',
    link2: ''
  },
  {
    titulo: 'Integridad Referencial',
    explicación:
      'La integridad referencial asegura que los valores de una clave foránea correspondan a valores válidos de una clave primaria en otra tabla.',
    cine: "En 'I, Robot', la integridad referencial podría compararse con cómo los robots siguen estrictamente las leyes de la robótica.",
    cocina:
      'En una receta, la integridad referencial asegura que todos los ingredientes necesarios en una receta estén presentes en la despensa.',
    deporte:
      'En bases de datos deportivas, la integridad referencial se asegura de que los datos del jugador estén correctamente relacionados con su equipo.',
    random:
      'Una violación de la integridad referencial ocurre cuando una tabla contiene referencias a datos que no existen en la tabla relacionada.',
    link: '',
    link2: ''
  },
  {
    titulo: 'Sistema de Información',
    explicación:
      'Un sistema de información es un conjunto de elementos destinados al tratamiento y administración de datos e información, organizados y listos para su posterior uso.',
    cine: "En películas como 'Minority Report', los sistemas de información juegan un rol fundamental para organizar y analizar datos complejos en tiempo real.",
    cocina:
      'Imagina una receta en la cual se organiza cada paso y los ingredientes de forma precisa, similar a cómo un sistema de información maneja datos.',
    deporte:
      'En los deportes, los sistemas de información permiten analizar el rendimiento de los atletas y tomar decisiones en tiempo real sobre estrategias y tácticas.',
    random:
      'Los primeros sistemas de información computarizados se desarrollaron en los años 60 para la gestión empresarial.',
    link: '',
    link2: ''
  },
  {
    titulo: 'SQL',
    explicación:
      'SQL es un lenguaje de consulta estructurado que permite consultar, insertar, actualizar y borrar información de bases de datos relacionales. Es el lenguaje estándar para interactuar con bases de datos.',
    cine: "En 'Tron', los personajes interactúan con sistemas que podrían estar sustentados por bases de datos manejadas mediante SQL.",
    cocina:
      'Usar SQL en la cocina sería como tener un sistema que permite buscar ingredientes específicos en una base de recetas automáticamente.',
    deporte:
      'En los deportes, SQL se utiliza para extraer datos de bases de datos que contienen estadísticas de jugadores y equipos.',
    random:
      'SQL fue creado en los años 70 y es uno de los lenguajes más utilizados para el manejo de bases de datos.',
    link: '',
    link2: ''
  },
  {
    titulo: 'Diccionario de Datos',
    explicación:
      'Un diccionario de datos es una herramienta dentro de una base de datos que almacena la descripción de los datos, tales como la estructura de las tablas, los tipos de datos y las relaciones entre los datos.',
    cine: "En 'Matrix', un diccionario de datos podría describir las relaciones entre los diferentes elementos que conforman la simulación.",
    cocina:
      'Un diccionario de datos en la cocina sería como un índice donde se describe el tipo de ingredientes y su uso en las recetas.',
    deporte:
      'En el deporte, el diccionario de datos define cómo se estructuran las estadísticas de los jugadores y equipos en las bases de datos.',
    random:
      'El diccionario de datos actúa como una guía para entender cómo se organiza y almacena la información en la base de datos.',
    link: '',
    link2: ''
  },
  {
    titulo: 'Redundancia de Datos',
    explicación:
      'La redundancia de datos ocurre cuando la misma información se almacena en varios lugares de una base de datos, lo que puede provocar inconsistencias y aumentar el espacio de almacenamiento necesario.',
    cine: "En 'Matrix', si los mismos datos sobre un personaje existieran en diferentes lugares del sistema, podría causar fallos en su representación dentro de la simulación.",
    cocina:
      'En la cocina, la redundancia sería como tener varias recetas que explican el mismo platillo pero con diferencias, lo que podría causar confusión.',
    deporte:
      'En los deportes, la redundancia de datos podría significar que las estadísticas de un jugador se registran varias veces, causando inconsistencia en los informes.',
    random:
      'Uno de los principales problemas de los sistemas de archivos antiguos era la redundancia de datos.',
    link: '',
    link2: ''
  },
  {
    titulo: 'Integridad de Datos',
    explicación:
      'La integridad de datos se refiere a la precisión y consistencia de los datos en una base de datos, garantizando que la información sea correcta y no esté corrupta.',
    cine: "En 'Ex Machina', la inteligencia artificial dependería de la integridad de los datos para asegurar que sus decisiones sean correctas.",
    cocina:
      'La integridad de datos en la cocina sería como asegurarse de que todos los ingredientes estén correctos y en las cantidades necesarias para que la receta salga bien.',
    deporte:
      'En el deporte, mantener la integridad de los datos asegura que las estadísticas de los jugadores y equipos sean precisas para análisis futuros.',
    random:
      'La integridad de datos es esencial para evitar errores en los sistemas de información y toma de decisiones.',
    link: '',
    link2: ''
  },
  {
    titulo: 'Base de Datos Relacional',
    explicación:
      'Es un tipo de base de datos estructurada en tablas relacionadas entre sí mediante claves primarias y foráneas.',
    cocina:
      'Un sistema que relaciona ingredientes y recetas en tablas es un ejemplo de base de datos relacional.',
    deporte:
      'Una base de datos que conecta jugadores, equipos y torneos es relacional.',
    cine: 'Un sistema que relaciona películas, directores y actores en tablas representa este modelo.',
    random:
      'MySQL es uno de los sistemas más utilizados para bases de datos relacionales.',
    link: 'https://example.com/bd-relacional',
    link2: 'https://example.com/cocina/bd-relacional'
  },
  {
    titulo: 'Base de Datos NoSQL',
    explicación:
      'Es un sistema de bases de datos que no utiliza tablas y puede almacenar datos en formatos como documentos, grafos o columnas.',
    cocina:
      'Un sistema de almacenamiento de menús en formato JSON es un ejemplo de base de datos NoSQL.',
    deporte:
      'Un sistema que guarda estadísticas en tiempo real de un partido usa NoSQL.',
    cine: 'Un sistema que almacena críticas de películas como documentos JSON utiliza NoSQL.',
    random:
      'MongoDB es un ejemplo popular de base de datos NoSQL orientada a documentos.',
    link: 'https://example.com/bd-nosql',
    link2: 'https://example.com/cocina/bd-nosql'
  },
  {
    titulo: 'Entidad',
    explicación:
      'Es un objeto o concepto del mundo real que se representa en una base de datos como una tabla o documento.',
    cocina:
      "Un 'Ingrediente' con atributos como nombre y cantidad es una entidad.",
    deporte: "Un 'Jugador' con atributos como nombre y equipo es una entidad.",
    cine: "Una 'Película' con atributos como título, año y director es una entidad.",
    random:
      'Las entidades se representan como tablas en bases de datos relacionales.',
    link: 'https://example.com/entidad',
    link2: 'https://example.com/cocina/entidad'
  },
  {
    titulo: 'Atributo',
    explicación:
      'Es una característica o propiedad de una entidad, que corresponde a una columna en una tabla.',
    cocina:
      "El nombre de un ingrediente es un atributo de la entidad 'Ingrediente'.",
    deporte:
      "La posición de un jugador es un atributo de la entidad 'Jugador'.",
    cine: "El género de una película es un atributo de la entidad 'Película'.",
    random:
      'Los atributos se representan como columnas en las tablas de una base de datos.',
    link: 'https://example.com/atributo',
    link2: 'https://example.com/cocina/atributo'
  },
  {
    titulo: 'Normalización',
    explicación:
      'Es el proceso de organizar los datos para reducir la redundancia y mejorar la integridad.',
    cocina:
      'Separar tablas de recetas y chefs para evitar duplicación es un ejemplo de normalización.',
    deporte:
      'Crear tablas para equipos y partidos separados mejora la estructura de datos.',
    cine: 'Separar tablas de películas y actores para evitar repetir información es un ejemplo de normalización.',
    random:
      'La normalización incluye pasos como la primera, segunda y tercera forma normal.',
    link: 'https://example.com/normalizacion',
    link2: 'https://example.com/cocina/normalizacion'
  },
  {
    titulo: 'Denormalización',
    explicación:
      'Es el proceso inverso a la normalización, utilizado para optimizar el rendimiento al consultar datos.',
    cocina:
      'Combinar tablas de recetas e ingredientes en una sola es un ejemplo de denormalización.',
    deporte:
      'Guardar información de partidos y resultados en una sola tabla es denormalización.',
    cine: 'Tener títulos y nombres de actores en la misma tabla reduce consultas en bases de datos de películas.',
    random:
      'Aunque aumenta la redundancia, la denormalización puede mejorar el rendimiento de consultas frecuentes.',
    link: 'https://example.com/denormalizacion',
    link2: 'https://example.com/cocina/denormalizacion'
  },
  {
    titulo: 'Transacción',
    explicación:
      'Es una unidad de trabajo que se ejecuta en una base de datos de forma atómica, consistente, aislada y duradera (ACID).',
    cocina:
      'Registrar la compra de ingredientes como una sola transacción asegura consistencia.',
    deporte:
      'Actualizar las estadísticas de un partido al final del juego puede ser una transacción.',
    cine: 'Registrar la venta de boletos de una película en la base de datos es una transacción.',
    random:
      'Las transacciones aseguran que los cambios en la base de datos se completen o se reviertan completamente.',
    link: 'https://example.com/transaccion',
    link2: 'https://example.com/cocina/transaccion'
  },
  {
    titulo: 'ACID',
    explicación:
      'Son las propiedades fundamentales de una transacción: Atomicidad, Consistencia, Aislamiento y Durabilidad.',
    cocina:
      'Un sistema de inventario en una cocina sigue ACID para garantizar que las actualizaciones sean seguras.',
    deporte:
      'Registrar las puntuaciones finales de un torneo debe respetar las propiedades ACID.',
    cine: 'Actualizar la recaudación de una película en tiempo real sigue estas propiedades.',
    random:
      'Los sistemas de bases de datos relacionales garantizan las propiedades ACID por diseño.',
    link: 'https://example.com/acid',
    link2: 'https://example.com/cocina/acid'
  },
  {
    titulo: 'Índice',
    explicación:
      'Es una estructura que mejora la velocidad de acceso a los datos en una tabla.',
    cocina:
      "Un índice en la columna 'ingrediente' permite búsquedas rápidas en recetas.",
    deporte:
      "Un índice en la columna 'nombre' permite encontrar jugadores rápidamente en una base de datos deportiva.",
    cine: "Un índice en la columna 'director' acelera las búsquedas en bases de datos de películas.",
    random:
      'Los índices pueden ser únicos o no únicos, dependiendo de los requisitos de la consulta.',
    link: 'https://example.com/indice',
    link2: 'https://example.com/cocina/indice'
  },
  {
    titulo: 'Vista',
    explicación:
      'Es una tabla virtual que se crea a partir de una consulta en la base de datos.',
    cocina:
      'Una vista que muestra los ingredientes más utilizados en las recetas puede ayudar a optimizar compras.',
    deporte:
      'Una vista con estadísticas combinadas de partidos y jugadores facilita análisis.',
    cine: 'Una vista que muestra películas con mayor recaudación simplifica los reportes.',
    random:
      'Las vistas no almacenan datos físicamente; los generan dinámicamente cuando se consultan.',
    link: 'https://example.com/vista',
    link2: 'https://example.com/cocina/vista'
  },
  {
    titulo: 'Cursor',
    explicación:
      'Es una estructura que permite recorrer los resultados de una consulta fila por fila.',
    cocina:
      'Un cursor puede recorrer una lista de ingredientes para procesarlos individualmente.',
    deporte:
      'En una base de datos de partidos, un cursor puede recorrer las estadísticas de cada jugador.',
    cine: 'Un cursor puede procesar una lista de películas para calcular su recaudación total.',
    random:
      'Los cursores son útiles para iterar sobre grandes conjuntos de resultados en SQL.',
    link: 'https://example.com/cursor',
    link2: 'https://example.com/cocina/cursor'
  },
  {
    titulo: 'Stored Procedure (Procedimiento Almacenado)',
    explicación:
      'Es un conjunto de instrucciones SQL precompiladas que se almacenan en la base de datos.',
    cocina:
      'Un procedimiento almacenado puede calcular automáticamente el costo de un menú completo.',
    deporte:
      'Un procedimiento puede calcular el promedio de goles de un jugador por temporada.',
    cine: 'Un procedimiento almacenado puede filtrar las películas por género y recaudación.',
    random:
      'Los procedimientos almacenados mejoran el rendimiento al reducir el tráfico entre la aplicación y la base de datos.',
    link: 'https://example.com/stored-procedure',
    link2: 'https://example.com/cocina/stored-procedure'
  },
  {
    titulo: 'Trigger (Disparador)',
    explicación:
      'Es un procedimiento que se ejecuta automáticamente ante ciertos eventos en una tabla.',
    cocina:
      'Un trigger puede actualizar el inventario automáticamente cuando se añaden recetas nuevas.',
    deporte:
      'Un trigger puede registrar cambios en la tabla de estadísticas de jugadores.',
    cine: 'Un disparador puede enviar alertas cuando se añade una nueva película a la base de datos.',
    random: 'Los triggers se activan en eventos como INSERT, UPDATE o DELETE.',
    link: 'https://example.com/trigger',
    link2: 'https://example.com/cocina/trigger'
  },
  {
    titulo: 'Sharding',
    explicación:
      'Es la práctica de dividir una base de datos grande en partes más pequeñas distribuidas entre diferentes servidores.',
    cocina:
      'Los datos de pedidos de diferentes restaurantes pueden almacenarse en shards según su ubicación.',
    deporte:
      'Las estadísticas de torneos se pueden distribuir en shards por región o temporada.',
    cine: 'Las reseñas de películas pueden dividirse en shards según el idioma de los usuarios.',
    random:
      'El sharding mejora el rendimiento y la escalabilidad de bases de datos distribuidas.',
    link: 'https://example.com/sharding',
    link2: 'https://example.com/cocina/sharding'
  },
  {
    titulo: 'Replica',
    explicación:
      'Es una copia exacta de una base de datos utilizada para mejorar la disponibilidad y tolerancia a fallos.',
    cocina:
      'Una réplica puede garantizar que los datos de inventario estén siempre disponibles.',
    deporte:
      'Las estadísticas de jugadores pueden replicarse para evitar pérdida de datos en caso de fallo.',
    cine: 'Una réplica puede asegurar que las bases de datos de películas estén accesibles durante un pico de tráfico.',
    random:
      'La replicación puede ser sincrónica o asincrónica dependiendo de las necesidades del sistema.',
    link: 'https://example.com/replica',
    link2: 'https://example.com/cocina/replica'
  },
  {
    titulo: 'Concurrencia',
    explicación:
      'Es la capacidad de una base de datos para manejar múltiples transacciones al mismo tiempo.',
    cocina:
      'Un sistema de pedidos en un restaurante necesita concurrencia para manejar múltiples órdenes simultáneas.',
    deporte:
      'Un sistema que registra resultados de partidos en tiempo real debe soportar concurrencia.',
    cine: 'Un sistema que vende entradas de cine en línea debe manejar múltiples usuarios simultáneamente.',
    random:
      'Las bases de datos utilizan bloqueos para gestionar la concurrencia de manera eficiente.',
    link: 'https://example.com/concurrencia',
    link2: 'https://example.com/cocina/concurrencia'
  },
  {
    titulo: 'Rollback',
    explicación:
      'Es la operación que revierte los cambios realizados por una transacción en caso de error.',
    cocina:
      'Un rollback puede deshacer la actualización de precios en un menú si ocurre un error.',
    deporte:
      'Si un partido se cancela, los datos de su resultado pueden revertirse con un rollback.',
    cine: 'Un rollback puede deshacer la venta de entradas si falla el sistema de pago.',
    random:
      'Los rollbacks son esenciales para mantener la consistencia en sistemas transaccionales.',
    link: 'https://example.com/rollback',
    link2: 'https://example.com/cocina/rollback'
  },
  {
    titulo: 'Commit',
    explicación:
      'Es la operación que guarda de manera permanente los cambios realizados por una transacción.',
    cocina:
      'Un commit asegura que los cambios en el inventario de ingredientes se registren de forma definitiva.',
    deporte:
      'El registro final de las estadísticas de un torneo se guarda con un commit.',
    cine: 'La recaudación de una película se guarda definitivamente en la base de datos con un commit.',
    random:
      'Los commits son el paso final para confirmar una transacción en una base de datos.',
    link: 'https://example.com/commit',
    link2: 'https://example.com/cocina/commit'
  },
  {
    titulo: 'MapReduce',
    explicación:
      'Es un modelo de programación utilizado para procesar grandes conjuntos de datos en bases de datos distribuidas.',
    cocina:
      'MapReduce puede calcular la cantidad total de ingredientes usados en recetas en un mes.',
    deporte:
      'Se usa para analizar grandes volúmenes de datos de rendimiento de jugadores en varias temporadas.',
    cine: 'Puede procesar millones de críticas de películas para determinar las más populares.',
    random:
      'MapReduce es un modelo ampliamente utilizado en sistemas como Hadoop.',
    link: 'https://example.com/mapreduce',
    link2: 'https://example.com/cocina/mapreduce'
  },
  {
    titulo: 'Data Warehouse',
    explicación:
      'Es un sistema utilizado para el almacenamiento y análisis de grandes volúmenes de datos históricos.',
    cocina:
      'Un restaurante grande puede usar un Data Warehouse para analizar tendencias de ventas.',
    deporte:
      'Un club puede almacenar y analizar estadísticas históricas de partidos y jugadores.',
    cine: 'Un estudio de cine puede usarlo para analizar recaudaciones de películas a lo largo de los años.',
    random:
      'Los Data Warehouses están diseñados para consultas analíticas, no transaccionales.',
    link: 'https://example.com/data-warehouse',
    link2: 'https://example.com/cocina/data-warehouse'
  },
  {
    titulo: 'OLAP (Procesamiento Analítico en Línea)',
    explicación:
      'Es un enfoque para realizar consultas analíticas complejas en bases de datos.',
    cocina:
      'Un sistema OLAP puede analizar las tendencias de ventas de un restaurante por día, semana o mes.',
    deporte:
      'OLAP se usa para analizar el rendimiento de jugadores a lo largo de múltiples temporadas.',
    cine: 'Un sistema OLAP puede analizar la recaudación de películas por género o región.',
    random:
      'OLAP se utiliza comúnmente en sistemas de Data Warehouse para análisis profundos.',
    link: 'https://example.com/olap',
    link2: 'https://example.com/cocina/olap'
  },
  {
    titulo: 'OLTP (Procesamiento de Transacciones en Línea)',
    explicación:
      'Es un sistema diseñado para gestionar transacciones en tiempo real en una base de datos.',
    cocina:
      'OLTP se usa para registrar pedidos en tiempo real en un restaurante.',
    deporte:
      'Un sistema OLTP registra la compra de entradas para un evento deportivo en tiempo real.',
    cine: 'Un sistema OLTP gestiona la venta de boletos de cine en línea.',
    random: 'OLTP prioriza la rapidez y consistencia en transacciones.',
    link: 'https://example.com/oltp',
    link2: 'https://example.com/cocina/oltp'
  },
  {
    titulo: 'Redundancia de Datos',
    explicación: 'Es la duplicación innecesaria de datos en una base de datos.',
    cocina:
      'Tener la lista de ingredientes repetida en cada receta es un ejemplo de redundancia.',
    deporte:
      'Registrar estadísticas duplicadas de un jugador en varias tablas genera redundancia.',
    cine: 'Guardar el nombre del director en cada película repetidamente es redundancia.',
    random:
      'La redundancia puede ser intencionada en sistemas denormalizados para mejorar la velocidad.',
    link: 'https://example.com/redundancia',
    link2: 'https://example.com/cocina/redundancia'
  },
  {
    titulo: 'Integridad Referencial',
    explicación:
      'Es una propiedad que asegura que las relaciones entre tablas se mantengan consistentes.',
    cocina:
      'Asegurar que un ingrediente en una receta exista en la tabla de ingredientes es integridad referencial.',
    deporte:
      'Un equipo en la tabla de jugadores debe existir en la tabla de equipos para mantener integridad.',
    cine: 'Una película debe estar vinculada a un género válido en la tabla correspondiente.',
    random:
      'Las claves foráneas son esenciales para garantizar la integridad referencial.',
    link: 'https://example.com/integridad-referencial',
    link2: 'https://example.com/cocina/integridad-referencial'
  },
  {
    titulo: 'Key-Value Store',
    explicación:
      'Es un tipo de base de datos NoSQL que almacena datos como pares clave-valor.',
    cocina:
      "Almacenar un menú con claves como 'entrada' y 'postre' es un ejemplo de Key-Value Store.",
    deporte:
      "Guardar estadísticas con claves como 'goles' y 'asistencias' en un sistema deportivo es Key-Value Store.",
    cine: "Un sistema que almacena películas con claves como 'título' y 'director' es un Key-Value Store.",
    random: 'Redis es un ejemplo popular de base de datos Key-Value.',
    link: 'https://example.com/key-value-store',
    link2: 'https://example.com/cocina/key-value-store'
  },
  {
    titulo: 'Base de Datos de Grafos',
    explicación:
      'Es un tipo de base de datos que utiliza nodos y aristas para representar y gestionar relaciones.',
    cocina:
      'Un sistema que muestra la relación entre recetas e ingredientes usa una base de datos de grafos.',
    deporte:
      'Las conexiones entre jugadores, equipos y ligas se modelan bien en una base de datos de grafos.',
    cine: 'Una base de datos de grafos puede representar relaciones entre actores, directores y películas.',
    random: 'Neo4j es un ejemplo popular de base de datos de grafos.',
    link: 'https://example.com/grafos',
    link2: 'https://example.com/cocina/grafos'
  },
  {
    titulo: 'Neo4j',
    explicación:
      'Es una base de datos de grafos ampliamente utilizada para modelar relaciones complejas entre datos.',
    cocina:
      'Un chef puede usar Neo4j para visualizar relaciones entre platos e ingredientes.',
    deporte:
      'Neo4j puede mapear conexiones entre jugadores, entrenadores y ligas.',
    cine: 'Se utiliza para analizar relaciones entre películas, directores y actores.',
    random:
      'Neo4j es conocido por su alto rendimiento en consultas complejas de relaciones.',
    link: 'https://example.com/neo4j',
    link2: 'https://example.com/cocina/neo4j'
  },
  {
    titulo: 'Document Store',
    explicación:
      'Es un tipo de base de datos NoSQL que almacena datos en documentos (generalmente JSON).',
    cocina:
      'Un sistema de recetas donde cada receta es un documento JSON es un Document Store.',
    deporte:
      'Un sistema que almacena estadísticas de jugadores como documentos JSON utiliza Document Store.',
    cine: 'Guardar datos de películas como JSON, incluyendo título, director y género, es Document Store.',
    random: 'MongoDB es un ejemplo líder de Document Store.',
    link: 'https://example.com/document-store',
    link2: 'https://example.com/cocina/document-store'
  },
  {
    titulo: 'Persistencia de Datos',
    explicación:
      'Es la capacidad de una base de datos para almacenar datos de manera permanente, incluso después de apagar el sistema.',
    cocina:
      'Un sistema de inventario de ingredientes requiere persistencia para no perder datos tras un apagado.',
    deporte:
      'Las estadísticas de torneos necesitan persistencia para su análisis futuro.',
    cine: 'Los registros de taquilla de películas deben mantenerse persistentes para reportes históricos.',
    random: 'La persistencia es fundamental en bases de datos transaccionales.',
    link: 'https://example.com/persistencia',
    link2: 'https://example.com/cocina/persistencia'
  },
  {
    titulo: 'Estructura de Datos',
    explicación:
      'Es una forma organizada de almacenar y gestionar datos en una base de datos.',
    cocina:
      'Organizar ingredientes en listas jerárquicas es un ejemplo de estructura de datos.',
    deporte:
      'Un árbol binario puede representar el progreso de un torneo deportivo.',
    cine: 'Un grafo dirigido puede modelar las relaciones entre películas y actores.',
    random:
      'Las estructuras de datos incluyen listas, árboles, grafos y tablas hash.',
    link: 'https://example.com/estructura-datos',
    link2: 'https://example.com/cocina/estructura-datos'
  },
  // manejo de sql
  {
    titulo: 'SELECT',
    explicación:
      'Es la instrucción SQL utilizada para recuperar datos de una o más tablas.',
    cocina:
      'Usar SELECT para obtener todos los ingredientes de una receta almacenada en una tabla.',
    deporte:
      'Con SELECT se pueden obtener los nombres de todos los jugadores de un equipo.',
    cine: 'Un SELECT puede listar todas las películas dirigidas por un director específico.',
    random:
      'SELECT * FROM tabla; devuelve todas las filas y columnas de una tabla.',
    link: 'https://example.com/sql-select',
    link2: 'https://example.com/cocina/sql-select'
  },
  {
    titulo: 'WHERE',
    explicación:
      'Se usa para filtrar los resultados de una consulta SQL según una condición.',
    cocina:
      'Con WHERE se pueden buscar ingredientes cuyo precio sea menor a un valor específico.',
    deporte:
      'Usar WHERE para filtrar jugadores con más de 10 goles en una temporada.',
    cine: 'WHERE permite buscar películas con una calificación mayor a 8.',
    random:
      'La cláusula WHERE es fundamental para refinar los resultados de una consulta.',
    link: 'https://example.com/sql-where',
    link2: 'https://example.com/cocina/sql-where'
  },
  {
    titulo: 'JOIN',
    explicación:
      'Permite combinar filas de dos o más tablas relacionadas entre sí.',
    cocina:
      'Con JOIN se pueden combinar las tablas de recetas e ingredientes para obtener detalles completos.',
    deporte:
      'JOIN puede unir tablas de jugadores y estadísticas para mostrar resultados combinados.',
    cine: 'Permite combinar tablas de películas y directores para mostrar películas con sus respectivos creadores.',
    random: 'Los tipos de JOIN incluyen INNER JOIN, LEFT JOIN y RIGHT JOIN.',
    link: 'https://example.com/sql-join',
    link2: 'https://example.com/cocina/sql-join'
  },
  {
    titulo: 'ORDER BY',
    explicación:
      'Se utiliza para ordenar los resultados de una consulta SQL según una o más columnas.',
    cocina: 'Ordenar ingredientes por precio en orden ascendente con ORDER BY.',
    deporte:
      'Usar ORDER BY para ordenar jugadores por número de goles en orden descendente.',
    cine: 'ORDER BY permite listar películas en orden alfabético por título.',
    random:
      'ORDER BY se puede combinar con ASC (ascendente) o DESC (descendente).',
    link: 'https://example.com/sql-orderby',
    link2: 'https://example.com/cocina/sql-orderby'
  },
  {
    titulo: 'GROUP BY',
    explicación:
      'Agrupa los resultados de una consulta según una o más columnas.',
    cocina: "Agrupar ingredientes por categoría, como 'vegetales' o 'carnes'.",
    deporte:
      'Agrupar jugadores por equipo para sumar los goles de cada equipo.',
    cine: 'GROUP BY puede agrupar películas por género para calcular la cantidad de cada tipo.',
    random:
      'GROUP BY es comúnmente usado con funciones de agregación como COUNT o SUM.',
    link: 'https://example.com/sql-groupby',
    link2: 'https://example.com/cocina/sql-groupby'
  },
  {
    titulo: 'HAVING',
    explicación:
      'Permite filtrar los resultados de una consulta después de aplicar GROUP BY.',
    cocina:
      'Usar HAVING para mostrar categorías de ingredientes con más de 10 ítems.',
    deporte: 'Filtrar equipos con más de 20 goles totales usando HAVING.',
    cine: 'Mostrar géneros de películas con un promedio de calificación superior a 7.',
    random:
      'HAVING se usa después de GROUP BY, mientras que WHERE filtra antes de agrupar.',
    link: 'https://example.com/sql-having',
    link2: 'https://example.com/cocina/sql-having'
  },
  {
    titulo: 'DISTINCT',
    explicación:
      'Elimina duplicados y devuelve solo valores únicos en una columna.',
    cocina: 'Obtener categorías únicas de ingredientes usando DISTINCT.',
    deporte:
      'Listar los diferentes equipos en los que han jugado los jugadores usando DISTINCT.',
    cine: 'Mostrar una lista única de directores que tienen películas en la base de datos.',
    random:
      'DISTINCT se utiliza para evitar resultados redundantes en consultas.',
    link: 'https://example.com/sql-distinct',
    link2: 'https://example.com/cocina/sql-distinct'
  },
  {
    titulo: 'LIKE',
    explicación:
      'Permite buscar patrones específicos en los datos de una columna.',
    cocina: "Usar LIKE para buscar ingredientes que comiencen con 'choco'.",
    deporte: "Buscar jugadores cuyos nombres contengan 'Mart' usando LIKE.",
    cine: "LIKE puede encontrar películas cuyo título termine en 'man'.",
    random: "LIKE utiliza comodines como '%' para patrones avanzados.",
    link: 'https://example.com/sql-like',
    link2: 'https://example.com/cocina/sql-like'
  },
  {
    titulo: 'IN',
    explicación:
      'Filtra resultados que coincidan con un conjunto de valores específicos.',
    cocina:
      "Obtener recetas que usen ingredientes específicos, como 'pollo' o 'pescado', con IN.",
    deporte:
      'Listar jugadores que pertenezcan a un grupo específico de equipos usando IN.',
    cine: "Filtrar películas cuyos géneros estén en una lista dada, como 'acción' o 'drama'.",
    random: 'IN simplifica consultas con múltiples valores en una condición.',
    link: 'https://example.com/sql-in',
    link2: 'https://example.com/cocina/sql-in'
  },
  {
    titulo: 'LIMIT',
    explicación: 'Restringe la cantidad de filas devueltas por una consulta.',
    cocina: 'Mostrar solo las 5 recetas más recientes en una tabla con LIMIT.',
    deporte: 'Obtener los 10 jugadores con más goles usando LIMIT.',
    cine: 'LIMIT permite listar las primeras 3 películas con mayor recaudación.',
    random: 'LIMIT se utiliza comúnmente para paginación en aplicaciones web.',
    link: 'https://example.com/sql-limit',
    link2: 'https://example.com/cocina/sql-limit'
  },
  {
    titulo: 'BETWEEN',
    explicación:
      'Filtra los resultados que se encuentran dentro de un rango específico.',
    cocina:
      'Buscar ingredientes cuyo precio esté entre 5 y 10 unidades de moneda usando BETWEEN.',
    deporte: 'Filtrar jugadores cuya edad esté entre 20 y 30 años.',
    cine: 'Obtener películas estrenadas entre 2000 y 2010.',
    random: 'BETWEEN puede ser usado con valores numéricos, fechas y texto.',
    link: 'https://example.com/sql-between',
    link2: 'https://example.com/cocina/sql-between'
  },
  {
    titulo: 'NOT',
    explicación: 'Excluye filas que cumplan con una condición específica.',
    cocina: "Buscar recetas que no incluyan 'azúcar' usando NOT.",
    deporte: "Listar jugadores que no sean del equipo 'Barcelona'.",
    cine: "Filtrar películas que no sean de género 'comedia'.",
    random: 'NOT se combina con otras condiciones como WHERE y IN.',
    link: 'https://example.com/sql-not',
    link2: 'https://example.com/cocina/sql-not'
  },
  {
    titulo: 'IS NULL',
    explicación: 'Encuentra filas donde el valor de una columna es NULL.',
    cocina:
      'Obtener ingredientes que no tengan precio asignado usando IS NULL.',
    deporte: 'Filtrar jugadores cuyo equipo aún no está definido.',
    cine: 'Listar películas cuyo director no está registrado (NULL).',
    random: 'IS NULL se utiliza para identificar datos faltantes en una tabla.',
    link: 'https://example.com/sql-isnull',
    link2: 'https://example.com/cocina/sql-isnull'
  },
  {
    titulo: 'IS NOT NULL',
    explicación: 'Encuentra filas donde el valor de una columna no es NULL.',
    cocina:
      'Listar ingredientes que tengan un precio definido usando IS NOT NULL.',
    deporte: 'Buscar jugadores que ya tengan un equipo asignado.',
    cine: 'Obtener películas que tienen género definido.',
    random: 'IS NOT NULL asegura que solo se consideren valores existentes.',
    link: 'https://example.com/sql-isnotnull',
    link2: 'https://example.com/cocina/sql-isnotnull'
  },
  {
    titulo: 'COUNT',
    explicación:
      'Devuelve el número de filas en los resultados de una consulta.',
    cocina: 'Contar cuántas recetas hay en la tabla de recetas usando COUNT.',
    deporte: 'Contar el número de jugadores en un equipo.',
    cine: 'COUNT puede calcular cuántas películas tiene un director en la base de datos.',
    random:
      'COUNT(*) devuelve el total de filas, mientras que COUNT(columna) cuenta valores no nulos.',
    link: 'https://example.com/sql-count',
    link2: 'https://example.com/cocina/sql-count'
  },
  {
    titulo: 'SUM',
    explicación: 'Calcula la suma total de los valores de una columna.',
    cocina:
      'SUM puede calcular el costo total de todos los ingredientes en una tabla.',
    deporte: 'Sumar los goles de todos los jugadores de un equipo usando SUM.',
    cine: 'Obtener la suma de recaudaciones de todas las películas de un género específico.',
    random:
      'SUM es útil para operaciones de análisis financiero y de inventario.',
    link: 'https://example.com/sql-sum',
    link2: 'https://example.com/cocina/sql-sum'
  },
  {
    titulo: 'AVG',
    explicación: 'Calcula el promedio de los valores en una columna.',
    cocina: 'Calcular el precio promedio de todos los ingredientes con AVG.',
    deporte: 'Obtener el promedio de goles marcados por jugador en un equipo.',
    cine: 'Determinar el promedio de calificaciones de un género de películas.',
    random: 'AVG ignora los valores NULL al calcular el promedio.',
    link: 'https://example.com/sql-avg',
    link2: 'https://example.com/cocina/sql-avg'
  },
  {
    titulo: 'MIN',
    explicación: 'Encuentra el valor mínimo en una columna.',
    cocina: 'Obtener el precio más bajo de un ingrediente usando MIN.',
    deporte: 'Encontrar al jugador más joven en un equipo.',
    cine: 'Identificar la película con la menor recaudación.',
    random: 'MIN puede ser usado en columnas numéricas y de texto.',
    link: 'https://example.com/sql-min',
    link2: 'https://example.com/cocina/sql-min'
  },
  {
    titulo: 'MAX',
    explicación: 'Encuentra el valor máximo en una columna.',
    cocina: 'Obtener el precio más alto de un ingrediente con MAX.',
    deporte: 'Encontrar al jugador con más goles en un equipo.',
    cine: 'Determinar la película con mayor recaudación.',
    random:
      'MAX se utiliza para identificar el valor más grande en un conjunto de datos.',
    link: 'https://example.com/sql-max',
    link2: 'https://example.com/cocina/sql-max'
  },
  {
    titulo: 'CAST',
    explicación:
      'Convierte el tipo de datos de una columna o expresión a otro tipo.',
    cocina: 'Convertir precios almacenados como texto a números para cálculos.',
    deporte:
      'Cambiar el formato de las fechas en estadísticas deportivas usando CAST.',
    cine: 'Convertir duraciones de películas almacenadas como texto a un formato de tiempo.',
    random:
      'CAST es útil para preparar datos para cálculos o formatos específicos.',
    link: 'https://example.com/sql-cast',
    link2: 'https://example.com/cocina/sql-cast'
  },
  {
    titulo: 'CONCAT',
    explicación: 'Une valores de varias columnas en un solo resultado.',
    cocina: 'Concatenar el nombre de un ingrediente con su categoría.',
    deporte: 'Unir el nombre y apellido de un jugador en una sola columna.',
    cine: 'Concatenar el título de una película con el nombre de su director.',
    random: 'CONCAT_WS permite especificar un separador al concatenar valores.',
    link: 'https://example.com/sql-concat',
    link2: 'https://example.com/cocina/sql-concat'
  },
  {
    titulo: 'EXISTS',
    explicación: 'Verifica si una subconsulta devuelve algún resultado.',
    cocina: 'Comprobar si existe una receta que use un ingrediente específico.',
    deporte:
      'EXISTS puede verificar si un equipo tiene al menos un jugador con más de 10 goles.',
    cine: 'Determinar si hay películas dirigidas por un director específico.',
    random: 'EXISTS devuelve TRUE si la subconsulta tiene al menos una fila.',
    link: 'https://example.com/sql-exists',
    link2: 'https://example.com/cocina/sql-exists'
  },
  {
    titulo: 'SUBQUERY',
    explicación: 'Es una consulta anidada dentro de otra consulta.',
    cocina:
      'Encontrar recetas cuyo ingrediente principal sea el más caro utilizando una subconsulta.',
    deporte: 'Seleccionar jugadores cuyo equipo tenga el mayor puntaje.',
    cine: 'Listar películas dirigidas por el director con más premios usando subconsultas.',
    random: 'Las subconsultas pueden estar en SELECT, WHERE o FROM.',
    link: 'https://example.com/sql-subquery',
    link2: 'https://example.com/cocina/sql-subquery'
  },
  {
    titulo: 'UNION',
    explicación:
      'Combina los resultados de dos o más consultas eliminando duplicados.',
    cocina: 'Unir listas de ingredientes de varias tablas de recetas.',
    deporte:
      'UNION puede combinar jugadores de equipos diferentes en una sola lista.',
    cine: 'Combinar listas de películas de dos géneros diferentes.',
    random: 'UNION ALL incluye duplicados en los resultados combinados.',
    link: 'https://example.com/sql-union',
    link2: 'https://example.com/cocina/sql-union'
  },
  {
    titulo: 'LEFT JOIN',
    explicación:
      'Devuelve todas las filas de la tabla izquierda y las filas coincidentes de la tabla derecha. Si no hay coincidencia, rellena con NULL.',
    cocina:
      'Listar todas las recetas, incluso si no tienen ingredientes asociados.',
    deporte:
      'Obtener jugadores de un equipo, incluso si no tienen estadísticas.',
    cine: 'Mostrar todas las películas, aunque no tengan premios asociados.',
    random:
      'LEFT JOIN es útil para encontrar elementos que no tienen relaciones definidas.',
    link: 'https://example.com/sql-left-join',
    link2: 'https://example.com/cocina/sql-left-join'
  },
  {
    titulo: 'RIGHT JOIN',
    explicación:
      'Devuelve todas las filas de la tabla derecha y las filas coincidentes de la tabla izquierda. Si no hay coincidencia, rellena con NULL.',
    cocina: 'Mostrar ingredientes, incluso si no están asignados a recetas.',
    deporte:
      'Listar todos los equipos, incluso si no tienen jugadores asociados.',
    cine: 'Mostrar todos los premios, aunque no estén asignados a películas.',
    random:
      'RIGHT JOIN es menos común que LEFT JOIN pero útil en situaciones específicas.',
    link: 'https://example.com/sql-right-join',
    link2: 'https://example.com/cocina/sql-right-join'
  },
  {
    titulo: 'FULL OUTER JOIN',
    explicación:
      'Devuelve todas las filas de ambas tablas, rellenando con NULL cuando no hay coincidencia.',
    cocina:
      'Mostrar todas las recetas e ingredientes, incluso si no están relacionados.',
    deporte:
      'Combinar todos los equipos y jugadores, incluyendo los que no tienen relación.',
    cine: 'Listar todas las películas y premios, aunque no estén conectados.',
    random: 'FULL OUTER JOIN combina los resultados de LEFT JOIN y RIGHT JOIN.',
    link: 'https://example.com/sql-full-outer-join',
    link2: 'https://example.com/cocina/sql-full-outer-join'
  },
  {
    titulo: 'INNER JOIN',
    explicación:
      'Devuelve solo las filas que tienen coincidencias en ambas tablas.',
    cocina: 'Mostrar recetas e ingredientes únicamente si están relacionados.',
    deporte: 'Obtener jugadores y equipos solo si están asociados.',
    cine: 'Listar películas y premios únicamente si están vinculados.',
    random: 'INNER JOIN es el tipo de JOIN más utilizado en SQL.',
    link: 'https://example.com/sql-inner-join',
    link2: 'https://example.com/cocina/sql-inner-join'
  },
  {
    titulo: 'CROSS JOIN',
    explicación:
      'Combina cada fila de la primera tabla con cada fila de la segunda tabla (producto cartesiano).',
    cocina:
      'Generar combinaciones de recetas e ingredientes sin importar la relación.',
    deporte: 'Combinar todos los jugadores con todos los equipos.',
    cine: 'Combinar todas las películas con todos los géneros.',
    random:
      'CROSS JOIN puede generar grandes volúmenes de datos si no se usa con cuidado.',
    link: 'https://example.com/sql-cross-join',
    link2: 'https://example.com/cocina/sql-cross-join'
  },
  {
    titulo: 'LIMIT OFFSET',
    explicación:
      'Se usa para paginación, limitando el número de filas devueltas y saltando un número de filas inicial.',
    cocina: 'Mostrar recetas del 11 al 20 en una lista paginada.',
    deporte: 'Listar jugadores del 21 al 30 de un equipo.',
    cine: 'LIMIT OFFSET puede mostrar películas de la página 2 de resultados.',
    random:
      'Es común en aplicaciones web para manejar paginación de resultados.',
    link: 'https://example.com/sql-limit-offset',
    link2: 'https://example.com/cocina/sql-limit-offset'
  },
  {
    titulo: 'SELF JOIN',
    explicación: 'Es un JOIN donde una tabla se une consigo misma.',
    cocina: 'Comparar recetas que compartan los mismos ingredientes.',
    deporte: 'Comparar jugadores que estén en el mismo equipo.',
    cine: 'Encontrar películas que compartan el mismo género o director.',
    random:
      'SELF JOIN puede ser útil para analizar relaciones jerárquicas en una tabla.',
    link: 'https://example.com/sql-self-join',
    link2: 'https://example.com/cocina/sql-self-join'
  },
  {
    titulo: 'WITH (CTE)',
    explicación:
      'Es una expresión de tabla común que define un resultado temporal que puede ser usado dentro de una consulta.',
    cocina:
      'Calcular el costo total de recetas dentro de una subconsulta con WITH.',
    deporte:
      'Usar CTE para calcular el promedio de goles antes de filtrar jugadores.',
    cine: 'Definir un conjunto de películas de un género específico para análisis adicional.',
    random: 'CTEs hacen las consultas más legibles y organizadas.',
    link: 'https://example.com/sql-cte',
    link2: 'https://example.com/cocina/sql-cte'
  },
  {
    titulo: 'UNION ALL',
    explicación:
      'Combina los resultados de dos o más consultas, incluyendo duplicados.',
    cocina:
      'Unir listas de ingredientes de varias tablas con duplicados permitidos.',
    deporte:
      'Combinar estadísticas de jugadores de varios equipos, incluyendo duplicados.',
    cine: 'Combinar películas de diferentes géneros permitiendo duplicados.',
    random:
      'A diferencia de UNION, UNION ALL no elimina duplicados automáticamente.',
    link: 'https://example.com/sql-union-all',
    link2: 'https://example.com/cocina/sql-union-all'
  },
  {
    titulo: 'HAVING COUNT',
    explicación:
      'Filtra grupos de resultados según la cantidad de elementos que contienen.',
    cocina: 'Mostrar categorías de ingredientes con más de 5 ítems.',
    deporte: 'Listar equipos con al menos 10 jugadores registrados.',
    cine: 'Mostrar géneros de películas que tengan más de 20 títulos.',
    random: 'HAVING se combina frecuentemente con funciones de agregación.',
    link: 'https://example.com/sql-having-count',
    link2: 'https://example.com/cocina/sql-having-count'
  },
  {
    titulo: 'PARTITION BY',
    explicación:
      'Divide los datos en particiones para realizar cálculos por grupo.',
    cocina: 'Calcular el costo promedio de ingredientes por categoría.',
    deporte: 'Calcular el promedio de goles por equipo.',
    cine: 'Determinar la recaudación promedio de películas por género.',
    random: 'PARTITION BY se usa comúnmente con funciones de ventana.',
    link: 'https://example.com/sql-partition-by',
    link2: 'https://example.com/cocina/sql-partition-by'
  },
  {
    titulo: 'RANK',
    explicación:
      'Asigna un rango a cada fila dentro de una partición, ordenada por una columna.',
    cocina: 'Rankear las recetas según su popularidad.',
    deporte: 'Asignar un rango a jugadores según su puntuación.',
    cine: 'RANK puede ordenar películas por recaudación dentro de cada género.',
    random: 'RANK asigna el mismo número si dos filas tienen el mismo valor.',
    link: 'https://example.com/sql-rank',
    link2: 'https://example.com/cocina/sql-rank'
  },
  {
    titulo: 'DENSE_RANK',
    explicación:
      'Similar a RANK, pero no deja huecos en la numeración cuando hay empates.',
    cocina: 'DENSE_RANK puede ordenar recetas según su nivel de dificultad.',
    deporte: 'Rankear jugadores por goles, sin dejar huecos en la numeración.',
    cine: 'Ordenar películas por calificación dentro de cada género sin saltos en el rango.',
    random: 'DENSE_RANK es útil para reportes más compactos.',
    link: 'https://example.com/sql-dense-rank',
    link2: 'https://example.com/cocina/sql-dense-rank'
  },
  {
    titulo: 'ROW_NUMBER',
    explicación: 'Asigna un número único a cada fila dentro de una partición.',
    cocina: 'Asignar un número a cada receta dentro de una categoría.',
    deporte: 'Numerar jugadores dentro de cada equipo.',
    cine: 'Asignar números a películas dentro de cada género.',
    random: 'ROW_NUMBER es muy útil para paginación.',
    link: 'https://example.com/sql-row-number',
    link2: 'https://example.com/cocina/sql-row-number'
  },
  {
    titulo: 'OVER',
    explicación:
      'Especifica un conjunto de filas para calcular funciones de ventana como SUM, AVG, RANK, etc.',
    cocina:
      'Calcular el promedio de costos por categoría de ingredientes con OVER.',
    deporte:
      'Sumar goles por equipo mientras se mantienen los datos de cada jugador usando OVER.',
    cine: 'Calcular el total de recaudaciones por género mientras se muestran las películas individuales.',
    random:
      'OVER permite usar funciones de ventana junto con cláusulas como PARTITION BY y ORDER BY.',
    link: 'https://example.com/sql-over',
    link2: 'https://example.com/cocina/sql-over'
  },
  {
    titulo: 'WINDOW FUNCTION',
    explicación:
      'Permite realizar cálculos a través de un conjunto de filas relacionadas con la fila actual.',
    cocina:
      'Calcular el costo acumulativo de ingredientes por receta usando funciones de ventana.',
    deporte:
      'Determinar el promedio móvil de goles por jugador durante una temporada.',
    cine: 'Calcular la recaudación acumulativa de películas por género.',
    random:
      'Las funciones de ventana no afectan la granularidad del resultado.',
    link: 'https://example.com/sql-window-function',
    link2: 'https://example.com/cocina/sql-window-function'
  },
  {
    titulo: 'CUME_DIST',
    explicación:
      'Calcula la distribución acumulativa de una fila dentro de un conjunto de datos.',
    cocina:
      'Evaluar qué porcentaje de ingredientes tienen un costo menor o igual que un valor dado.',
    deporte:
      'Determinar la distribución acumulativa de puntuaciones de jugadores.',
    cine: 'Calcular qué porcentaje de películas tienen una recaudación menor o igual que una específica.',
    random: 'CUME_DIST devuelve valores entre 0 y 1.',
    link: 'https://example.com/sql-cume-dist',
    link2: 'https://example.com/cocina/sql-cume-dist'
  },
  {
    titulo: 'NTILE',
    explicación:
      'Divide el conjunto de resultados en un número específico de grupos.',
    cocina: 'Dividir los ingredientes en cuatro grupos basados en su costo.',
    deporte: 'Agrupar jugadores en tres categorías según su rendimiento.',
    cine: 'Clasificar películas en percentiles según su recaudación.',
    random: 'NTILE(4) dividiría los resultados en cuartiles.',
    link: 'https://example.com/sql-ntile',
    link2: 'https://example.com/cocina/sql-ntile'
  },
  {
    titulo: 'LEAD',
    explicación:
      'Permite acceder al valor de una fila siguiente en el conjunto de resultados.',
    cocina: 'Mostrar el ingrediente siguiente en la lista según su costo.',
    deporte: 'Ver el próximo jugador en la tabla de goleadores.',
    cine: 'LEAD permite comparar la recaudación de una película con la siguiente.',
    random: 'LEAD es útil para cálculos secuenciales en análisis de datos.',
    link: 'https://example.com/sql-lead',
    link2: 'https://example.com/cocina/sql-lead'
  },
  {
    titulo: 'LAG',
    explicación:
      'Accede al valor de una fila anterior en el conjunto de resultados.',
    cocina: 'Comparar el costo de un ingrediente con el de su predecesor.',
    deporte:
      'Observar el rendimiento de un jugador en comparación con el partido anterior.',
    cine: 'Comparar la recaudación de una película con la de la anterior.',
    random:
      'LAG es útil para detectar tendencias o cambios en datos secuenciales.',
    link: 'https://example.com/sql-lag',
    link2: 'https://example.com/cocina/sql-lag'
  },
  {
    titulo: 'COALESCE',
    explicación: 'Devuelve el primer valor no nulo en una lista de argumentos.',
    cocina:
      'Usar COALESCE para asignar un precio por defecto a ingredientes sin precio.',
    deporte: "Mostrar 'Sin equipo' si el jugador no tiene un equipo asignado.",
    cine: "Asignar 'Desconocido' como director si el campo está vacío.",
    random: 'COALESCE es útil para manejar valores NULL en consultas.',
    link: 'https://example.com/sql-coalesce',
    link2: 'https://example.com/cocina/sql-coalesce'
  },
  {
    titulo: 'CASE',
    explicación:
      'Permite realizar lógica condicional dentro de una consulta SQL.',
    cocina:
      "Usar CASE para categorizar ingredientes como 'caros' o 'baratos' según su costo.",
    deporte: "Asignar 'Estrella' a jugadores con más de 20 goles.",
    cine: "Categorizar películas como 'Éxito' o 'Fracaso' según su recaudación.",
    random: "CASE puede actuar como un 'if-else' dentro de SQL.",
    link: 'https://example.com/sql-case',
    link2: 'https://example.com/cocina/sql-case'
  },
  {
    titulo: 'TRUNCATE',
    explicación:
      'Elimina todas las filas de una tabla, pero conserva su estructura.',
    cocina: 'Vaciar la tabla de recetas sin borrar sus columnas con TRUNCATE.',
    deporte:
      'Eliminar todas las estadísticas de jugadores manteniendo la estructura de la tabla.',
    cine: 'Vaciar la tabla de películas para comenzar con datos nuevos.',
    random:
      'TRUNCATE es más rápido que DELETE porque no registra cada fila eliminada.',
    link: 'https://example.com/sql-truncate',
    link2: 'https://example.com/cocina/sql-truncate'
  },
  {
    titulo: 'DELETE',
    explicación: 'Elimina filas específicas de una tabla según una condición.',
    cocina: 'Eliminar una receta específica de la tabla de recetas.',
    deporte: 'Borrar a un jugador retirado de la tabla de jugadores.',
    cine: 'Eliminar películas con recaudaciones muy bajas de la base de datos.',
    random: 'DELETE permite controlar qué datos eliminar mediante WHERE.',
    link: 'https://example.com/sql-delete',
    link2: 'https://example.com/cocina/sql-delete'
  },
  {
    titulo: 'EXCEPT',
    explicación:
      'Devuelve filas de la primera consulta que no estén en la segunda.',
    cocina: 'Mostrar recetas que no tienen ingredientes específicos.',
    deporte: 'Listar jugadores que no pertenecen a un grupo seleccionado.',
    cine: 'Obtener películas que no fueron dirigidas por un conjunto de directores.',
    random: 'EXCEPT es útil para comparar conjuntos de datos.',
    link: 'https://example.com/sql-except',
    link2: 'https://example.com/cocina/sql-except'
  },
  {
    titulo: 'INTERSECT',
    explicación: 'Devuelve solo las filas que están en ambas consultas.',
    cocina: 'Mostrar ingredientes que están en dos recetas específicas.',
    deporte: 'Listar jugadores que están en dos equipos diferentes.',
    cine: 'Obtener películas que comparten el mismo género en dos tablas diferentes.',
    random:
      'INTERSECT es el equivalente a la intersección en teoría de conjuntos.',
    link: 'https://example.com/sql-intersect',
    link2: 'https://example.com/cocina/sql-intersect'
  },
  {
    titulo: 'MERGE',
    explicación:
      'Combina operaciones de INSERT, UPDATE y DELETE en una sola sentencia.',
    cocina:
      'Actualizar ingredientes existentes o insertar nuevos automáticamente con MERGE.',
    deporte: 'Actualizar estadísticas de jugadores o agregar nuevos registros.',
    cine: 'Usar MERGE para sincronizar listas de películas y recaudaciones.',
    random: 'MERGE simplifica la gestión de datos combinados.',
    link: 'https://example.com/sql-merge',
    link2: 'https://example.com/cocina/sql-merge'
  },
  {
    titulo: 'JSON_QUERY',
    explicación: 'Extrae objetos JSON de una columna en formato JSON.',
    cocina:
      'Usar JSON_QUERY para obtener ingredientes detallados de una receta almacenada como JSON.',
    deporte:
      'Extraer estadísticas detalladas de un jugador almacenadas en un campo JSON.',
    cine: 'Obtener datos de críticas de películas almacenadas como JSON.',
    random:
      'JSON_QUERY permite trabajar con datos semiestructurados en bases de datos SQL.',
    link: 'https://example.com/sql-json-query',
    link2: 'https://example.com/cocina/sql-json-query'
  },
  {
    titulo: 'FOR XML',
    explicación: 'Devuelve los resultados de una consulta en formato XML.',
    cocina:
      'Generar una lista de recetas en formato XML para compartir entre sistemas.',
    deporte: 'Exportar estadísticas de jugadores como XML.',
    cine: 'Crear un archivo XML con la lista de películas y sus directores.',
    random:
      'FOR XML es útil para integrar bases de datos con aplicaciones que consumen datos XML.',
    link: 'https://example.com/sql-for-xml',
    link2: 'https://example.com/cocina/sql-for-xml'
  },
  {
    titulo: 'JSON_VALUE',
    explicación:
      'Extrae un valor escalar de un documento JSON almacenado en una columna.',
    cocina:
      'Usar JSON_VALUE para extraer el nombre de un ingrediente de un campo JSON.',
    deporte:
      'Extraer la posición de un jugador desde un campo JSON que contiene sus estadísticas.',
    cine: 'JSON_VALUE puede obtener el género de una película almacenado en formato JSON.',
    random: 'JSON_VALUE devuelve un único valor, no un objeto JSON completo.',
    link: 'https://example.com/sql-json-value',
    link2: 'https://example.com/cocina/sql-json-value'
  },
  {
    titulo: 'WITH ROLLUP',
    explicación:
      'Genera subtotales y totales generales en una consulta GROUP BY.',
    cocina:
      'Calcular el costo total de ingredientes por categoría y el total general.',
    deporte:
      'Obtener el total de goles por equipo y un total general para el torneo.',
    cine: 'Calcular la recaudación total por género y el total general para todas las películas.',
    random: 'WITH ROLLUP añade filas adicionales al resultado de GROUP BY.',
    link: 'https://example.com/sql-with-rollup',
    link2: 'https://example.com/cocina/sql-with-rollup'
  },
  {
    titulo: 'WITH CUBE',
    explicación:
      'Genera combinaciones de subtotales y totales generales en varias dimensiones.',
    cocina:
      'Calcular costos totales por categoría y proveedor en un sistema de recetas.',
    deporte:
      'Obtener estadísticas combinadas por equipo y temporada en un torneo.',
    cine: 'Generar un análisis de recaudación por género y año de estreno.',
    random:
      'WITH CUBE amplía los resultados de GROUP BY a múltiples dimensiones.',
    link: 'https://example.com/sql-with-cube',
    link2: 'https://example.com/cocina/sql-with-cube'
  },
  {
    titulo: 'PIVOT',
    explicación:
      'Transforma filas en columnas para resumir y reorganizar datos.',
    cocina:
      'Convertir recetas en columnas para comparar ingredientes rápidamente.',
    deporte: 'Mostrar estadísticas de jugadores por equipo como columnas.',
    cine: 'PIVOT puede organizar películas por género como columnas con sus recaudaciones.',
    random:
      'PIVOT es útil para crear informes resumidos y visualmente organizados.',
    link: 'https://example.com/sql-pivot',
    link2: 'https://example.com/cocina/sql-pivot'
  },
  {
    titulo: 'UNPIVOT',
    explicación: 'Transforma columnas en filas, opuesto a PIVOT.',
    cocina:
      'Convertir columnas de recetas en una lista de ingredientes detallada.',
    deporte: 'Desglosar estadísticas por equipos en filas individuales.',
    cine: 'Descomponer datos de recaudación por género y año en filas individuales.',
    random:
      'UNPIVOT es útil para normalizar datos almacenados en formato ancho.',
    link: 'https://example.com/sql-unpivot',
    link2: 'https://example.com/cocina/sql-unpivot'
  },
  {
    titulo: 'SET',
    explicación: 'Asigna valores a variables o actualiza valores en una tabla.',
    cocina: 'Usar SET para cambiar el precio de un ingrediente.',
    deporte:
      'Actualizar la posición de un jugador en una tabla de estadísticas.',
    cine: 'Modificar el género de una película en la base de datos con SET.',
    random: 'SET es común para definir valores en procedimientos almacenados.',
    link: 'https://example.com/sql-set',
    link2: 'https://example.com/cocina/sql-set'
  },
  {
    titulo: 'DECLARE',
    explicación: 'Crea variables en SQL para almacenar valores temporales.',
    cocina:
      'DECLARE puede almacenar el costo total de ingredientes para usar en cálculos posteriores.',
    deporte:
      'Declarar una variable para guardar el promedio de goles en un torneo.',
    cine: 'Usar DECLARE para almacenar temporalmente la recaudación total de un género.',
    random: 'DECLARE se usa frecuentemente en procedimientos y scripts SQL.',
    link: 'https://example.com/sql-declare',
    link2: 'https://example.com/cocina/sql-declare'
  },
  {
    titulo: 'IF...ELSE',
    explicación:
      'Permite ejecutar diferentes conjuntos de instrucciones según una condición.',
    cocina:
      'Usar IF para verificar si un ingrediente está disponible antes de agregarlo a una receta.',
    deporte:
      'Verificar si un jugador supera un umbral de rendimiento para actualizar su estado.',
    cine: 'Determinar si una película es un éxito o fracaso según su recaudación.',
    random:
      'IF...ELSE se combina frecuentemente con variables y declaraciones lógicas.',
    link: 'https://example.com/sql-if-else',
    link2: 'https://example.com/cocina/sql-if-else'
  },
  {
    titulo: 'WHILE',
    explicación:
      'Ejecuta un bloque de código repetidamente mientras una condición sea verdadera.',
    cocina:
      'Usar WHILE para calcular el costo acumulado de recetas mientras quedan ingredientes por procesar.',
    deporte:
      'Iterar sobre jugadores en una tabla para calcular estadísticas acumuladas.',
    cine: 'Calcular recaudaciones acumulativas de películas mientras existan datos por procesar.',
    random:
      'WHILE es útil para bucles en procedimientos almacenados o scripts SQL.',
    link: 'https://example.com/sql-while',
    link2: 'https://example.com/cocina/sql-while'
  },
  {
    titulo: 'BREAK',
    explicación: 'Interrumpe un bucle WHILE o FOR en SQL.',
    cocina:
      'Usar BREAK para detener el procesamiento de recetas al encontrar un error crítico.',
    deporte:
      'Detener un análisis de estadísticas si se encuentra una condición específica.',
    cine: 'Interrumpir un cálculo de recaudaciones al identificar una película con errores en los datos.',
    random: 'BREAK es útil para evitar iteraciones innecesarias en bucles.',
    link: 'https://example.com/sql-break',
    link2: 'https://example.com/cocina/sql-break'
  },
  {
    titulo: 'CONTINUE',
    explicación:
      'Salta a la siguiente iteración de un bucle sin ejecutar el código restante.',
    cocina:
      'Usar CONTINUE para omitir ingredientes que no cumplan ciertos criterios en un cálculo.',
    deporte:
      'Saltar estadísticas de jugadores que no hayan jugado en una temporada específica.',
    cine: 'Omitir películas con recaudaciones incompletas al procesar datos.',
    random:
      'CONTINUE mejora la flexibilidad en el control de flujo dentro de bucles.',
    link: 'https://example.com/sql-continue',
    link2: 'https://example.com/cocina/sql-continue'
  }
]

export default data
