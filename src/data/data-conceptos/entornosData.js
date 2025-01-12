// data.js

const data = [
  {
    titulo: 'IDE (Entorno de Desarrollo Integrado)',
    explicación:
      'Es un software que combina herramientas de desarrollo como un editor de código, un depurador, un compilador o intérprete y un gestor de proyectos en una sola interfaz.',
    cine: "En 'The Social Network', Mark Zuckerberg habría utilizado un IDE como Eclipse o Visual Studio para escribir y depurar el código de Facebook rápidamente.",
    cocina:
      'Un IDE es como una cocina profesional que tiene todos los utensilios y herramientas necesarias para cocinar eficientemente.',
    deporte:
      'Es como un gimnasio completamente equipado donde un atleta puede entrenar todos los aspectos de su rendimiento.',
    random:
      'Ejemplos de IDEs incluyen Visual Studio Code, IntelliJ IDEA y PyCharm.'
  },
  {
    titulo: 'Debugger (Depurador)',
    explicación:
      'Herramienta que permite al programador identificar, analizar y corregir errores en el código durante su ejecución.',
    cine: "En 'Tron: Legacy', el depurador sería esencial para solucionar problemas en el sistema virtual antes de que causen un colapso.",
    cocina:
      'En cocina, depurar sería como probar una sopa y corregirla si le falta sal o tiene demasiada pimienta.',
    deporte:
      'En deportes, sería como revisar una repetición en cámara lenta para detectar errores tácticos en un juego.',
    random:
      'Los depuradores populares incluyen los integrados en IDEs como Visual Studio, PyCharm o Eclipse.'
  },
  {
    titulo: 'Compilador',
    explicación:
      'Es una herramienta que traduce código fuente en un lenguaje de alto nivel a lenguaje máquina, que puede ser entendido por la computadora.',
    cine: "En 'Matrix', un compilador sería necesario para traducir las instrucciones del mundo digital en comandos ejecutables.",
    cocina:
      'En cocina, un compilador sería como un chef que convierte una receta escrita en instrucciones claras para otros cocineros.',
    deporte:
      'En deportes, un entrenador que transforma una estrategia compleja en instrucciones simples para los jugadores actúa como un compilador.',
    random: 'GCC y Clang son ejemplos populares de compiladores para C/C++.'
  },
  {
    titulo: 'Interprete',
    explicación:
      'Es una herramienta que ejecuta código fuente línea por línea, en lugar de compilarlo antes de la ejecución.',
    cine: "En 'Star Trek', un intérprete sería como la computadora de la nave que traduce comandos en tiempo real para ejecutarlos.",
    cocina:
      'Un intérprete sería como un chef que lee una receta y la ejecuta paso a paso sin prepararla completamente antes.',
    deporte:
      'En deportes, sería como un jugador que toma decisiones tácticas en tiempo real basándose en instrucciones dadas durante el juego.',
    random: 'Python y JavaScript usan intérpretes para ejecutar su código.'
  },
  {
    titulo: 'Control de Versiones',
    explicación:
      'Sistema que registra los cambios realizados en un archivo o conjunto de archivos a lo largo del tiempo para que puedas recuperar versiones específicas.',
    cine: "En 'The Social Network', un sistema de control de versiones habría ayudado a rastrear cada cambio en el desarrollo inicial de Facebook.",
    cocina:
      'Es como tener un registro detallado de cómo se han modificado las recetas a lo largo del tiempo.',
    deporte:
      'En deportes, sería como tener un historial completo de los ajustes tácticos realizados durante una temporada.',
    random: 'Git es el sistema de control de versiones más popular.'
  },
  {
    titulo: 'CI/CD (Integración Continua/Despliegue Continuo)',
    explicación:
      'Prácticas de desarrollo que automatizan la integración de código y su despliegue en entornos de producción.',
    cine: "En películas de ciencia ficción como 'Minority Report', los sistemas automatizados de actualización reflejan conceptos similares a CI/CD.",
    cocina:
      'En cocina, sería como un sistema automático que ajusta las recetas y las sirve en tiempo real según los comentarios del cliente.',
    deporte:
      'Es como un sistema de entrenamiento que evalúa el rendimiento del jugador después de cada sesión y ajusta las estrategias automáticamente.',
    random:
      'Herramientas populares de CI/CD incluyen Jenkins, GitHub Actions y GitLab CI.'
  },
  {
    titulo: 'CLI (Interfaz de Línea de Comandos)',
    explicación:
      'Es una forma de interactuar con la computadora usando comandos de texto en lugar de una interfaz gráfica.',
    cine: "En 'WarGames', el joven protagonista usa una CLI para acceder a sistemas informáticos.",
    cocina:
      'En cocina, una CLI sería como dar instrucciones verbales a un chef para preparar un platillo sin usar menús visuales.',
    deporte:
      'Es como un entrenador dando comandos verbales claros a los jugadores durante un partido.',
    random:
      'Ejemplos de CLI incluyen Bash, PowerShell y el Command Prompt de Windows.'
  },
  {
    titulo: 'SDK (Kit de Desarrollo de Software)',
    explicación:
      'Es un conjunto de herramientas y bibliotecas proporcionadas por un desarrollador para facilitar la creación de aplicaciones para una plataforma específica.',
    cine: "En películas como 'Iron Man', un SDK podría ser lo que permite a Tony Stark integrar nuevas funciones en su traje rápidamente.",
    cocina:
      'En cocina, un SDK sería como un kit de cocina que incluye ingredientes y utensilios específicos para crear un platillo.',
    deporte:
      'Es como un set de herramientas deportivas que permite a los entrenadores diseñar estrategias personalizadas para cada equipo.',
    random: 'Ejemplos de SDK son el Android SDK y el iOS SDK.'
  },
  {
    titulo: 'Editor de Código',
    explicación:
      'Es una herramienta que permite escribir y editar código fuente. Puede ser independiente o parte de un IDE.',
    cine: "En 'The Imitation Game', Alan Turing habría utilizado algo similar a un editor de código para escribir sus algoritmos para romper códigos.",
    cocina:
      'Un editor de código sería como un cuaderno de recetas donde un chef escribe y ajusta sus creaciones.',
    deporte:
      'En deportes, sería como un cuaderno donde un entrenador dibuja estrategias y jugadas.',
    random:
      'Ejemplos de editores de código populares son Sublime Text, Notepad++ y Visual Studio Code.'
  },
  {
    titulo: 'Refactorización',
    explicación:
      'Proceso de mejorar la estructura del código sin cambiar su funcionalidad externa.',
    cine: "En 'Inception', ajustar los detalles del diseño del sueño para hacerlo más estable sería como refactorizar el código.",
    cocina:
      'Refactorizar en cocina sería simplificar una receta compleja manteniendo el mismo sabor final.',
    deporte:
      'En deportes, sería como reorganizar la formación de un equipo para que sea más efectiva sin cambiar los jugadores.',
    random:
      'La refactorización reduce la deuda técnica y mejora la mantenibilidad del código.'
  },
  {
    titulo: 'Testing Automatizado',
    explicación:
      'Es el proceso de utilizar scripts o herramientas para realizar pruebas de manera automática, asegurando que el software funcione como se espera.',
    cine: "En 'Jurassic Park', las pruebas automáticas de los sistemas del parque para evitar fallos serían un ejemplo de testing automatizado.",
    cocina:
      'En cocina, sería como una máquina que prueba automáticamente si los ingredientes están en las proporciones correctas antes de cocinarlos.',
    deporte:
      'En deportes, sería como un simulador que prueba diferentes tácticas de juego antes de aplicarlas en un partido real.',
    random:
      'Herramientas como Selenium y JUnit son populares para pruebas automatizadas.'
  },
  {
    titulo: 'Entorno de Producción',
    explicación:
      'Es el entorno final donde los usuarios interactúan con el software, en contraste con los entornos de desarrollo o pruebas.',
    cine: "En 'Ready Player One', el OASIS es un entorno de producción en el que millones de usuarios interactúan diariamente.",
    cocina:
      'El entorno de producción sería como la cocina de un restaurante donde los platillos preparados llegan a los clientes.',
    deporte:
      'En deportes, sería como el partido en sí, donde las estrategias entrenadas se ponen en práctica.',
    random:
      'El entorno de producción suele incluir medidas de seguridad y monitorización para garantizar su estabilidad.'
  },
  {
    titulo: 'Gestores de Paquetes',
    explicación:
      'Son herramientas que facilitan la instalación, actualización y gestión de dependencias de software en un proyecto.',
    cine: "En 'The Matrix', los programas de habilidades descargados en los personajes serían como un gestor de paquetes que instala nuevas capacidades al instante.",
    cocina:
      'Un gestor de paquetes sería como un sistema que organiza y entrega ingredientes de recetas automáticamente al chef.',
    deporte:
      'En deportes, sería como un sistema que proporciona automáticamente los recursos necesarios para cada entrenamiento específico.',
    random:
      'Ejemplos de gestores de paquetes son npm para JavaScript y pip para Python.'
  },
  {
    titulo: 'DevOps',
    explicación:
      'Es una cultura de colaboración entre los equipos de desarrollo y operaciones para acelerar la entrega de software y mejorar su calidad.',
    cine: "En 'Iron Man', la constante colaboración entre Tony Stark (desarrollo) y Jarvis (operaciones) ejemplifica los principios de DevOps.",
    cocina:
      'En cocina, DevOps sería como la colaboración entre los chefs que crean nuevas recetas y el personal que las sirve al cliente.',
    deporte:
      'En deportes, sería como la interacción continua entre los entrenadores que diseñan tácticas y los jugadores que las ejecutan.',
    random:
      'Herramientas como Docker, Kubernetes y Jenkins son esenciales en DevOps.'
  },
  {
    titulo: 'Monitorización',
    explicación:
      'Es el proceso de supervisar un sistema en tiempo real para detectar problemas o identificar oportunidades de mejora.',
    cine: "En 'Gravity', la monitorización constante de los sistemas de la nave espacial es crucial para la supervivencia de los personajes.",
    cocina:
      'En cocina, sería como revisar constantemente la temperatura del horno para asegurarse de que el pastel se cocine adecuadamente.',
    deporte:
      'En deportes, sería como un monitor cardíaco que revisa continuamente las condiciones físicas de un atleta durante el entrenamiento.',
    random:
      'Herramientas de monitorización populares incluyen Prometheus y Nagios.'
  },
  {
    titulo: 'Contenedores',
    explicación:
      'Son unidades de software que empaquetan código y sus dependencias para que se ejecuten de manera consistente en diferentes entornos.',
    cine: "En 'Interstellar', las cápsulas espaciales que contienen los recursos necesarios para sobrevivir en otros planetas son como contenedores de software.",
    cocina:
      'Un contenedor en cocina sería como un kit de comida que incluye todos los ingredientes necesarios para una receta.',
    deporte:
      'En deportes, sería como un maletín que contiene todo el equipo necesario para un entrenamiento específico.',
    random: 'Docker es la tecnología de contenedores más conocida.'
  },
  {
    titulo: 'Scripting',
    explicación:
      'Escribir pequeños programas o scripts para automatizar tareas repetitivas o realizar configuraciones rápidas.',
    cine: "En 'The Social Network', los primeros scripts usados para automatizar la clasificación de fotos en FaceMash serían un ejemplo de scripting.",
    cocina:
      'En cocina, sería como tener una rutina escrita para organizar y limpiar rápidamente la estación de trabajo.',
    deporte:
      'En deportes, scripting sería como un protocolo estándar para calentar antes de cada partido.',
    random:
      'Lenguajes como Python, Bash y JavaScript son ideales para scripting.'
  },
  {
    titulo: 'Pipeline de Desarrollo',
    explicación:
      'Es una serie de pasos automatizados para construir, probar y desplegar aplicaciones de manera eficiente.',
    cine: "En 'Iron Man', el proceso automatizado de diseño y construcción de trajes es un ejemplo de pipeline en ingeniería.",
    cocina:
      'En cocina, sería como una línea de ensamblaje donde cada paso de la receta se realiza en secuencia automática.',
    deporte:
      'En deportes, sería como un circuito de entrenamiento donde cada etapa está diseñada para preparar a los atletas progresivamente.',
    random:
      'Herramientas como Jenkins y GitHub Actions facilitan la creación de pipelines de desarrollo.'
  },
  {
    titulo: 'Documentación',
    explicación:
      'Es la escritura de manuales, guías y referencias para explicar cómo funciona un software y cómo usarlo.',
    cine: "En 'Blade Runner', las instrucciones del replicante sobre su tiempo de vida podrían considerarse una forma de documentación.",
    cocina:
      'En cocina, la documentación sería como un libro de recetas detallado que incluye tiempos, técnicas e ingredientes.',
    deporte:
      'En deportes, sería como un manual de entrenamiento que explica cada ejercicio y su propósito.',
    random:
      'Las plataformas como Read the Docs y GitBook son populares para alojar documentación.'
  },
  {
    titulo: 'Hot Reloading',
    explicación:
      'Es una característica que permite a los desarrolladores ver los cambios en su código reflejados inmediatamente sin necesidad de reiniciar la aplicación.',
    cine: "En 'Matrix', la capacidad de cambiar un entorno en tiempo real sería un ejemplo de hot reloading aplicado en un mundo digital.",
    cocina:
      'En cocina, sería como ajustar los condimentos de un guiso mientras aún está en el fuego y probar los cambios de inmediato.',
    deporte:
      'En deportes, sería como realizar ajustes tácticos durante un partido en tiempo real y ver los resultados al instante.',
    random: 'Hot Reloading es común en frameworks como React y Flutter.'
  },
  {
    titulo: 'Integración de Servicios',
    explicación:
      'Es el proceso de conectar diferentes sistemas o servicios para que trabajen juntos, como bases de datos, APIs y aplicaciones de terceros.',
    cine: "En 'Avengers: Endgame', la integración de los diferentes sistemas de Stark para viajar en el tiempo es un ejemplo de integración de servicios.",
    cocina:
      'En cocina, sería como coordinar varios electrodomésticos inteligentes para preparar un plato complejo.',
    deporte:
      'En deportes, sería como sincronizar dispositivos de seguimiento y análisis de rendimiento en tiempo real.',
    random:
      'Ejemplos de herramientas para integración de servicios son Zapier y Apache Camel.'
  },
  {
    titulo: 'Environments (Entornos)',
    explicación:
      'Son configuraciones específicas para ejecutar aplicaciones en diferentes fases como desarrollo, pruebas y producción.',
    cine: "En 'The Martian', los diferentes entornos creados para simular las condiciones de Marte reflejan el concepto de entornos de desarrollo y prueba.",
    cocina:
      'En cocina, los entornos serían como la diferencia entre cocinar en casa, en un restaurante o en una cocina experimental.',
    deporte:
      'En deportes, sería como tener diferentes instalaciones para entrenamientos básicos, simulaciones y partidos oficiales.',
    random: 'Herramientas como Docker permiten configurar entornos fácilmente.'
  },
  {
    titulo: 'Control de Dependencias',
    explicación:
      'Es el manejo de las bibliotecas y herramientas que un proyecto necesita para funcionar correctamente.',
    cine: "En 'Inception', las capas de sueños dependen unas de otras para mantenerse estables, lo que refleja la importancia del control de dependencias.",
    cocina:
      'En cocina, sería como asegurarse de tener todos los ingredientes necesarios antes de comenzar a cocinar.',
    deporte:
      'En deportes, sería como asegurarse de que todos los jugadores clave estén disponibles para ejecutar una estrategia específica.',
    random:
      'Herramientas como Maven, npm y pip son populares para gestionar dependencias.'
  },
  {
    titulo: 'Configuración de Proyecto',
    explicación:
      'Es el proceso de establecer los parámetros iniciales para comenzar a desarrollar un proyecto, como definir dependencias, estructuras y entornos.',
    cine: "En 'Iron Man', Tony Stark configura su laboratorio para comenzar el desarrollo de su traje.",
    cocina:
      'En cocina, sería como preparar todos los utensilios e ingredientes antes de comenzar a cocinar.',
    deporte:
      'En deportes, sería como planificar un entrenamiento detallado antes de comenzar la práctica.',
    random:
      'Los archivos de configuración comunes incluyen package.json, pom.xml y .env.'
  },
  {
    titulo: 'Integración Continua (CI)',
    explicación:
      'Es una práctica donde los desarrolladores integran su código frecuentemente en un repositorio compartido, verificando su funcionalidad mediante pruebas automáticas.',
    cine: "En 'The Social Network', el equipo de desarrollo podría haber usado integración continua para verificar que cada nueva funcionalidad añadida funcionara sin problemas.",
    cocina:
      'En cocina, sería como probar cada parte de una receta por separado antes de combinar todos los ingredientes.',
    deporte:
      'En deportes, sería como analizar el desempeño de cada jugador después de cada práctica para ajustar estrategias.',
    random:
      'Jenkins y Travis CI son herramientas populares para implementar CI.'
  },
  {
    titulo: 'Despliegue Continuo (CD)',
    explicación:
      'Es el proceso automatizado de implementar cambios de software en un entorno de producción una vez que han pasado las pruebas.',
    cine: "En 'Interstellar', la automatización de la nave para adaptarse a los cambios de su entorno es comparable al despliegue continuo.",
    cocina:
      'En cocina, sería como un sistema automatizado que sirve platos directamente a los clientes después de ser preparados.',
    deporte:
      'En deportes, sería como implementar una nueva táctica inmediatamente después de probarla en un entrenamiento.',
    random:
      'Herramientas como AWS CodePipeline y Azure DevOps permiten despliegues continuos.'
  },
  {
    titulo: 'Gestión de Errores',
    explicación:
      'Es el proceso de identificar, registrar y manejar errores en una aplicación para minimizar su impacto.',
    cine: "En 'Apollo 13', la gestión de errores fue esencial para resolver problemas en tiempo real y garantizar el regreso seguro de la nave.",
    cocina:
      'En cocina, sería como identificar y corregir un error en la preparación de un platillo antes de servirlo.',
    deporte:
      'En deportes, sería como ajustar una estrategia durante el partido después de que un jugador comete un error.',
    random:
      'Librerías como Sentry y Rollbar ayudan a gestionar errores en aplicaciones.'
  },
  {
    titulo: 'Branching',
    explicación:
      'Es la creación de una copia de una rama de código principal para trabajar en nuevas funcionalidades sin afectar el código estable.',
    cine: "En 'Doctor Strange', las ramificaciones del multiverso son un ejemplo de cómo diferentes ramas pueden desarrollarse a partir de una misma línea principal.",
    cocina:
      'En cocina, sería como experimentar con una variación de una receta sin alterar la receta original.',
    deporte:
      'En deportes, sería como probar una táctica alternativa en los entrenamientos sin cambiar la estrategia principal del equipo.',
    random:
      'Git permite manejar branches con facilidad usando comandos como `git branch`.'
  },
  {
    titulo: 'Testing en Entorno Real',
    explicación:
      'Es la prueba de software en condiciones reales de uso para garantizar que funcione correctamente en producción.',
    cine: "En 'The Matrix Reloaded', las pruebas del programa para la llave maestra en el mundo simulado son un ejemplo de testing en entorno real.",
    cocina:
      'En cocina, sería como probar un platillo con clientes reales para asegurarse de que cumple con sus expectativas.',
    deporte:
      'En deportes, sería como simular un partido completo antes de una competencia para probar estrategias.',
    random:
      'El testing en entorno real se realiza después de las pruebas unitarias y de integración.'
  },
  {
    titulo: 'Debugging',
    explicación:
      'Es el proceso de identificar y resolver errores o problemas en el código de un programa.',
    cine: "En 'Tron: Legacy', Sam Flynn depura y corrige errores en el sistema de su padre para restaurar el orden.",
    cocina:
      'En cocina, sería como ajustar la cantidad de un ingrediente cuando el sabor no es el esperado.',
    deporte:
      'En deportes, sería como analizar y corregir la ejecución de una jugada que no funciona correctamente.',
    random:
      'Las herramientas de depuración como Visual Studio Debugger y Chrome DevTools son fundamentales para los programadores.'
  },
  {
    titulo: 'IDE (Entorno de Desarrollo Integrado)',
    explicación:
      'Es una aplicación que combina herramientas necesarias para el desarrollo de software, como editores de texto, compiladores y depuradores.',
    cine: "En 'Iron Man', la interfaz de desarrollo de Tony Stark en su taller funciona como un avanzado IDE que integra todas sus herramientas.",
    cocina:
      'En cocina, un IDE sería como tener todos los utensilios, ingredientes y recetas organizados en un solo lugar.',
    deporte:
      'En deportes, sería como tener un centro de entrenamiento que incluye todas las herramientas necesarias para mejorar el rendimiento.',
    random:
      'Ejemplos de IDEs populares incluyen IntelliJ IDEA, Visual Studio y PyCharm.'
  },
  {
    titulo: 'Documentación Técnica',
    explicación:
      'Es el conjunto de instrucciones y descripciones que ayudan a los desarrolladores a entender y usar un software o API.',
    cine: "En 'Jurassic Park', la falta de documentación clara sobre los sistemas de control del parque lleva a graves problemas.",
    cocina:
      'En cocina, sería como tener un libro de recetas detallado que explica cada paso y técnica.',
    deporte:
      'En deportes, sería como tener un manual de entrenamiento que detalla ejercicios y estrategias.',
    random:
      'Buenas prácticas de documentación incluyen el uso de Markdown o herramientas como Docusaurus y ReadTheDocs.'
  },
  {
    titulo: 'Control de Versiones',
    explicación:
      'Es un sistema que registra cambios en el código para que los desarrolladores puedan colaborar y volver a versiones anteriores si es necesario.',
    cine: "En 'Looper', la capacidad de volver a un punto anterior en el tiempo refleja el concepto de control de versiones aplicado al universo.",
    cocina:
      'En cocina, sería como guardar las versiones de una receta a medida que se hacen modificaciones.',
    deporte:
      'En deportes, sería como revisar videos de partidos pasados para aprender y mejorar estrategias futuras.',
    random: 'Git es la herramienta más popular para el control de versiones.'
  },
  {
    titulo: 'CLI (Interfaz de Línea de Comandos)',
    explicación:
      'Es una interfaz que permite interactuar con el software mediante comandos escritos, sin necesidad de un entorno gráfico.',
    cine: "En 'WarGames', el protagonista utiliza una CLI para comunicarse con el sistema militar y simular escenarios de guerra.",
    cocina:
      'En cocina, sería como dar instrucciones precisas y rápidas a un equipo sin necesidad de usar gestos o demostraciones.',
    deporte:
      'En deportes, sería como que un entrenador dé órdenes específicas a través de señales rápidas.',
    random: 'Herramientas como Bash, PowerShell y zsh son ejemplos de CLI.'
  },
  {
    titulo: 'Test Unitario',
    explicación:
      'Es una técnica de prueba que evalúa unidades individuales del código, como funciones o métodos, para asegurarse de que funcionan correctamente.',
    cine: "En 'The Social Network', cada parte del sistema que construyen Mark y su equipo podría haber pasado por pruebas unitarias para garantizar que funcionara como se esperaba.",
    cocina:
      'En cocina, sería como probar cada ingrediente individualmente para asegurarse de su calidad antes de usarlo en una receta.',
    deporte:
      'En deportes, sería como practicar tiros libres repetidamente para perfeccionarlos antes de un partido.',
    random:
      'Frameworks como JUnit, pytest y Jasmine se utilizan para realizar pruebas unitarias.'
  },
  {
    titulo: 'Test de Integración',
    explicación:
      'Es el proceso de probar cómo diferentes módulos o componentes de un sistema trabajan juntos.',
    cine: "En 'Avatar', los sistemas de soporte vital y los controladores de los avatares deben integrarse perfectamente para que funcionen.",
    cocina:
      'En cocina, sería como probar una receta completa después de combinar todos los ingredientes.',
    deporte:
      'En deportes, sería como un entrenamiento conjunto donde todo el equipo practica jugadas complejas.',
    random:
      'El Test de Integración garantiza que los módulos no solo funcionen individualmente, sino también en conjunto.'
  },
  {
    titulo: 'Linting',
    explicación:
      'Es el proceso de analizar el código fuente para encontrar errores o problemas de estilo.',
    cine: "En 'The Matrix', los agentes actúan como linter, detectando anomalías y corrigiendo problemas en el sistema.",
    cocina:
      'En cocina, sería como revisar los pasos de una receta para asegurarse de que no falta nada.',
    deporte:
      'En deportes, sería como un árbitro que asegura que las reglas se cumplan durante el juego.',
    random:
      'Herramientas como ESLint y Pylint son populares para hacer linting en JavaScript y Python, respectivamente.'
  },
  {
    titulo: 'Emuladores',
    explicación:
      'Son herramientas que replican el comportamiento de un sistema en otro, permitiendo probar software en un entorno simulado.',
    cine: "En 'Ready Player One', el Oasis podría considerarse un emulador de mundos virtuales que simula entornos y comportamientos realistas.",
    cocina:
      'En cocina, sería como usar un microondas para simular el efecto de un horno.',
    deporte:
      'En deportes, sería como entrenar en un simulador de condiciones climáticas extremas antes de un evento al aire libre.',
    random:
      'Los emuladores son comunes para probar aplicaciones móviles en diferentes dispositivos y sistemas operativos.'
  },
  {
    titulo: 'Virtualización',
    explicación:
      'Es la creación de una versión virtual de un recurso físico, como un servidor, almacenamiento o red.',
    cine: "En 'Tron', el mundo digital donde se transporta el protagonista es un ejemplo de virtualización extrema del espacio físico.",
    cocina:
      'En cocina, sería como usar un software para diseñar virtualmente una cocina antes de construirla físicamente.',
    deporte:
      'En deportes, sería como usar simulaciones virtuales para entrenar estrategias de equipo sin estar en el campo.',
    random:
      'Herramientas como VMware y VirtualBox permiten la virtualización de servidores y sistemas operativos.'
  },
  {
    titulo: 'Continuous Integration (CI)',
    explicación:
      'Es una práctica de desarrollo que implica la integración frecuente del código de los desarrolladores en un repositorio compartido, con pruebas automáticas para detectar errores.',
    cine: "En 'The Social Network', la colaboración constante entre los programadores refleja una forma temprana de integración continua para construir Facebook.",
    cocina:
      'En cocina, sería como comprobar cada paso de una receta con un panel de control para asegurar que todo avanza correctamente.',
    deporte:
      'En deportes, sería como monitorear el desempeño de un equipo en tiempo real para ajustar la estrategia al instante.',
    random:
      'Herramientas como Jenkins, GitLab CI y Travis CI son ampliamente utilizadas para implementar CI.'
  },
  {
    titulo: 'Continuous Deployment (CD)',
    explicación:
      'Es la práctica de implementar automáticamente el código probado y aprobado en producción sin intervención manual.',
    cine: "En 'Iron Man', la implementación instantánea de nuevas versiones del traje de Tony Stark refleja el concepto de despliegue continuo.",
    cocina:
      'En cocina, sería como tener un sistema automatizado que sirva platos directamente después de terminarlos.',
    deporte:
      'En deportes, sería como ajustar automáticamente una táctica basada en los datos recopilados durante un partido.',
    random:
      'Continuous Deployment ayuda a acelerar la entrega de valor a los usuarios finales.'
  },
  {
    titulo: 'Entornos de Pruebas',
    explicación:
      'Son entornos dedicados donde se prueba el software antes de implementarlo en producción.',
    cine: "En 'Jurassic Park', las pruebas en simuladores antes de abrir el parque al público reflejan un entorno de pruebas.",
    cocina:
      'En cocina, sería como probar una nueva receta en casa antes de ofrecerla en un restaurante.',
    deporte:
      'En deportes, sería como realizar un partido de práctica antes del inicio de una competición.',
    random:
      'Los entornos de prueba incluyen desarrollo, staging y UAT (pruebas de aceptación del usuario).'
  },
  {
    titulo: 'Entornos de Producción',
    explicación:
      'Es el entorno final donde el software está disponible para los usuarios finales.',
    cine: "En 'The Matrix', el mundo virtual simulado podría considerarse un entorno de producción para los humanos conectados.",
    cocina:
      'En cocina, sería como servir un plato a los clientes en un restaurante después de múltiples pruebas.',
    deporte:
      'En deportes, sería como un partido oficial donde todo debe estar listo para los espectadores y jugadores.',
    random:
      'Los entornos de producción requieren monitoreo constante para garantizar su estabilidad.'
  },
  {
    titulo: 'Docker',
    explicación:
      'Es una plataforma que permite empaquetar aplicaciones y sus dependencias en contenedores para facilitar su despliegue y portabilidad.',
    cine: "En 'Wall-E', los robots que operan de manera independiente pero sincronizada reflejan el concepto de contenedores como en Docker.",
    cocina:
      'En cocina, sería como tener ingredientes empaquetados en porciones listas para ser usadas en cualquier cocina.',
    deporte:
      'En deportes, sería como tener kits de entrenamiento portátiles que pueden ser utilizados en cualquier lugar.',
    random:
      'Docker se utiliza ampliamente para microservicios y entornos de desarrollo consistentes.'
  },
  {
    titulo: 'Kubernetes',
    explicación:
      'Es una plataforma para gestionar contenedores de software, automatizando su despliegue, escalado y operación.',
    cine: "En 'The Lego Movie', los bloques que se ensamblan y organizan automáticamente para construir estructuras reflejan la idea de Kubernetes.",
    cocina:
      'En cocina, sería como un sistema automatizado que organiza y utiliza ingredientes según las necesidades de cada receta.',
    deporte:
      'En deportes, sería como un entrenador que organiza y optimiza el rendimiento del equipo en tiempo real.',
    random:
      'Kubernetes es compatible con servicios en la nube como AWS, Google Cloud y Azure.'
  },
  {
    titulo: 'Logs',
    explicación:
      'Son registros generados por el software que documentan eventos, errores y operaciones para análisis y monitoreo.',
    cine: "En 'Blade Runner', los registros de replicantes y sus acciones serían como logs utilizados para rastrear su comportamiento.",
    cocina:
      'En cocina, sería como llevar un registro de cada plato que se prepara y sirve.',
    deporte:
      'En deportes, sería como registrar cada jugada y puntuación de un partido para análisis posterior.',
    random:
      'Herramientas como ELK Stack y Splunk se utilizan para centralizar y analizar logs.'
  },
  {
    titulo: 'Monitoreo de Aplicaciones',
    explicación:
      'Es el seguimiento continuo del rendimiento y el estado de una aplicación en tiempo real.',
    cine: "En 'Avatar', el monitoreo de los sistemas vitales de los avatares y los pilotos es un ejemplo de monitoreo constante.",
    cocina:
      'En cocina, sería como supervisar constantemente la temperatura de los hornos para garantizar que los platos se cocinen correctamente.',
    deporte:
      'En deportes, sería como monitorear la frecuencia cardíaca y el desempeño de un atleta durante el entrenamiento.',
    random:
      'Herramientas como New Relic y Datadog son populares para monitorear aplicaciones modernas.'
  },
  {
    titulo: 'Notificaciones de Error',
    explicación:
      'Son alertas que informan sobre fallos o problemas en el sistema, permitiendo a los desarrolladores responder rápidamente.',
    cine: "En 'Apollo 13', las alarmas y alertas constantes sobre fallos en el sistema reflejan notificaciones críticas.",
    cocina:
      'En cocina, sería como una alarma que te avisa cuando un plato está a punto de quemarse.',
    deporte:
      'En deportes, sería como una notificación del médico del equipo sobre una posible lesión en un jugador durante el partido.',
    random:
      'Las notificaciones de error suelen enviarse por correo, mensajería instantánea o herramientas de monitoreo.'
  }
]

export default data
