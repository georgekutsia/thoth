const baseDeDatosTest = {
  simulacro1: [
    {
      id: 1,
      text: "¿Qué es una base de datos relacional?",
      options: [
        "Un conjunto de tablas relacionadas entre sí",
        "Un archivo de Excel con múltiples hojas",
        "Una lista de contactos en un teléfono móvil",
        "Un documento de Word con tablas",
      ],
      correctAnswer: 0,
    },
    {
      id: 2,
      text: "¿Cuál de los siguientes NO es un sistema de gestión de bases de datos relacional?",
      options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
      correctAnswer: 2,
    },
    {
      id: 3,
      text: "¿Qué es una clave primaria en una base de datos?",
      options: [
        "El primer campo de una tabla",
        "Un campo que identifica de forma única cada registro en una tabla",
        "La contraseña para acceder a la base de datos",
        "El nombre de la base de datos",
      ],
      correctAnswer: 1,
    },
  ],
  simulacro2: [
    {
      id: 1,
      text: "¿Qué significa SQL?",
      options: [
        "System Query Language",
        "Structured Question Language",
        "Structured Query Language",
        "System Question Language",
      ],
      correctAnswer: 2,
    },
    {
      id: 2,
      text: "¿Cuál es la función principal de una clave foránea?",
      options: [
        "Encriptar datos sensibles",
        "Acelerar las consultas",
        "Relacionar tablas entre sí",
        "Ordenar los registros en una tabla",
      ],
      correctAnswer: 2,
    },
    {
      id: 3,
      text: "¿Qué es la normalización en bases de datos?",
      options: [
        "Un proceso para optimizar el rendimiento de las consultas",
        "Una técnica para encriptar datos sensibles",
        "Un método para organizar los datos de manera eficiente y reducir la redundancia",
        "Un algoritmo para ordenar los registros en una tabla",
      ],
      correctAnswer: 2,
    },
  ],
  simulacro3: [
    {
      id: 1,
      text: "¿Qué es un índice en una base de datos?",
      options: [
        "Una lista de todas las tablas en la base de datos",
        "Una estructura de datos que mejora la velocidad de las operaciones en una tabla",
        "Un resumen de los datos contenidos en una tabla",
        "Una copia de seguridad de la base de datos",
      ],
      correctAnswer: 1,
    },
    {
      id: 2,
      text: "¿Qué es una transacción en bases de datos?",
      options: [
        "Un intercambio de datos entre dos bases de datos diferentes",
        "Una secuencia de operaciones que se ejecutan como una sola unidad",
        "Un proceso de copia de seguridad de la base de datos",
        "Una consulta que modifica múltiples tablas a la vez",
      ],
      correctAnswer: 1,
    },
    {
      id: 3,
      text: "¿Qué es un procedimiento almacenado?",
      options: [
        "Un conjunto de instrucciones SQL que se guardan y pueden ser reutilizadas",
        "Una tabla que almacena temporalmente los resultados de una consulta",
        "Un método para comprimir los datos en la base de datos",
        "Una herramienta para monitorear el rendimiento de la base de datos",
      ],
      correctAnswer: 0,
    },
  ],
};

export default baseDeDatosTest;
