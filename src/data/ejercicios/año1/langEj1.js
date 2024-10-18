const ejerciciosProgramacion = [
  {
    asignatura: "file-code",
    ejercicio: "Ejercicio 1",
    imagenEj: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729190909/ej1_itvc0z.png",
       fecha: "17-10-24",
    enunciado: "",
    respuesta: 
    `
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Formulario de Ejemplo</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

  <h1 style="background-color: lightcoral;">Formulario de Ejemplo</h1>
  <h2 style="background-color: lightcoral;">Formulario con Estilos Básicos</h2>

  <form action="procesar.php" method="POST">
    <!-- El formulario envía los datos al archivo "procesar.php" mediante el método POST -->

    <label for="nombre" style="background-color: lightyellow;">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required style="background-color: lightgray;"><br><br>

    <label for="email" style="background-color: lightyellow;">Correo electrónico:</label>
    <input type="email" id="email" name="email" required style="background-color: lightgray;"><br><br>

    <label for="edad" style="background-color: lightyellow;">Edad:</label>
    <input type="number" id="edad" name="edad" min="18" required style="background-color: lightgray;"><br><br>

    <label for="sexo" style="background-color: lightyellow;">Sexo:</label>
    <select id="sexo" name="sexo" required style="background-color: lightgray;">
      <option value="masculino">Masculino</option>
      <option value="femenino">Femenino</option>
      <option value="otro">Otro</option>
    </select><br><br>

    <label for="comentarios" style="background-color: lightyellow;">Comentarios:</label>
    <textarea id="comentarios" name="comentarios" rows="4" cols="50"
      style="background-color: lightgray;"></textarea><br><br>

    <label style="background-color: lightyellow;">Estado Civil:</label><br>
    <input type="radio" id="soltero" name="estadoCivil" value="soltero" style="background-color: lightgray;">
    <label for="soltero" style="background-color: lightyellow;">Soltero</label>
    <input type="radio" id="casado" name="estadoCivil" value="casado" style="background-color: lightgray;">
    <label for="casado" style="background-color: lightyellow;">Casado</label>
    <input type="radio" id="divorciado" name="estadoCivil" value="divorciado" style="background-color: lightgray;">
    <label for="divorciado" style="background-color: lightyellow;">Divorciado</label><br><br>

    <label for="fechaNacimiento" style="background-color: lightyellow;">Fecha de Nacimiento:</label>
    <input type="date" id="fechaNacimiento" name="fechaNacimiento" required
      style="background-color: lightgray;"><br><br>

    <label for="archivo" style="background-color: lightyellow;">Cargar Archivo:</label>
    <input type="file" id="archivo" name="archivo" style="background-color: lightgray;"><br><br>

    <input type="reset" value="Restablecer Formulario" style="background-color: lightblue;">
    <input type="submit" value="Enviar" style="background-color: lightblue;">
  </form>

  <br>
  <h3 style="background-color: lightcoral;">Enlace a ThePower</h3>
  <p>Visita el sitio oficial de <a href="https://thepower.education" target="_blank"
      style="background-color: lightyellow;">THEPOWER</a> para aprender más sobre programación y desarrollo web.</p>
</body>

</html>
    `,
    imagenes: [""]

  },
  {
    asignatura: "file-code",
    ejercicio: "Ejercicio 2",
    imagenEj:
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729190906/ej2_yd1mes.png",
       fecha: "17-10-24",
    enunciado:`
    
    
    `,
            respuesta:  [
`
<!DOCTYPE html>
<html lang="es">

<head>
  <title>Formulario de Ejemplo</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
  <h1 style="background-color: lightblue;">Formulario de Ejemplo</h1>
  <h2 style="background-color: lightblue;">Formulario con Estilos Básicos</h2>
  <form action="procesar.php" method="POST">
    <!-- El formulario envía los datos al archivo "procesar.php" mediante el método POST -->
    <label for="nombre" style="background-color: lightgreen;">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required><br><br>
    <label for="email" style="background-color: lightgreen;">Correo electrónico:</label>
    <input type="email" id="email" name="email" required><br><br>
    <label for="edad" style="background-color: lightgreen;">Edad:</label>
    <input type="number" id="edad" name="edad" min="18" required><br><br>
    <label for="sexo" style="background-color: lightgreen;">Sexo:</label>
    <select id="sexo" name="sexo" required>
      <option value="masculino">Masculino</option>
      <option value="femenino">Femenino</option>
      <option value="otro">Otro</option>
    </select><br><br>

    <label for="comentarios" style="background-color: lightgreen;">Comentarios:</label>
    <textarea id="comentarios" name="comentarios" rows="4" cols="50"></textarea><br><br>
    <label style="background-color: lightgreen;">Estado Civil:</label>
    <input type="radio" id="soltero" name="estadoCivil" value="soltero">
    <label for="soltero">Soltero</label>
    <input type="radio" id="casado" name="estadoCivil" value="casado">
    <label for="casado">Casado</label>
    <input type="radio" id="divorciado" name="estadoCivil" value="divorciado">
    <label for="divorciado">Divorciado</label><br><br>
    <label for="fechaNacimiento" style="background-color: lightgreen;">Fecha de Nacimiento:</label>
    <input type="date" id="fechaNacimiento" name="fechaNacimiento" required><br><br>
    <label for="archivo" style="background-color: lightgreen;">Cargar Archivo:</label>
    <input type="file" id="archivo" name="archivo"><br><br>
    <input type="reset" value="Restablecer Formulario">
    <input type="submit" value="Enviar">
  </form>
  <br>
  <h3>Enlace a ThePower</h3>
  <p>Visita el sitio oficial de <a href="https://thepower.education" target="_blank">THEPOWER</a> para aprender más
    sobre programación y desarrollo web.</p>
</body>

</html>
`,
    ],
        imagenes:[
""
    ]
  },
  {
    asignatura: "file-code",
    ejercicio: "Ejercicio 3",
    imagenEj:
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729190905/ej3_cvhsds.png",


       fecha: "17-10-24",
    enunciado:"",
    respuesta:`
<!DOCTYPE html>
<html lang="es">

<head>
  <title>Formulario de Ejemplo</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
  <h1 style="background-color: aquamarine;">Formulario de Ejemplo</h1>
  <h2 style="background-color: aquamarine;">Formulario con Estilos Básicos</h2>
  <form action="procesar.php" method="POST">

    <label for="nombre" style="background-color: lightgray;">Nombre:</label><br>
    <input type="text" id="nombre" name="nombre" required><br><br>

    <label for="email" style="background-color: lightgray;">Correo electrónico:</label><br>
    <input type="email" id="email" name="email" required><br><br>

    <label for="edad" style="background-color: lightgray;">Edad:</label><br>
    <input type="number" id="edad" name="edad" min="18" required><br><br>

    <label for="sexo" style="background-color: lightgray;">Sexo:</label><br>
    <select id="sexo" name="sexo" required>
      <option value="masculino">Masculino</option>
      <option value="femenino">Femenino</option>
      <option value="otro">Otro</option>
    </select><br><br>

    <label for="comentarios" style="background-color: lightgray;">Comentarios:</label><br>
    <textarea id="comentarios" name="comentarios" rows="4" cols="50"></textarea><br><br>

    <label style="background-color: lightgray;">Estado Civil:</label><br>
    <input type="radio" id="soltero" name="estadoCivil" value="soltero">
    <label for="soltero">Soltero</label><br>
    <input type="radio" id="casado" name="estadoCivil" value="casado">
    <label for="casado">Casado</label><br>
    <input type="radio" id="divorciado" name="estadoCivil" value="divorciado">
    <label for="divorciado">Divorciado</label><br><br>

    <label for="fechaNacimiento" style="background-color: lightgray;">Fecha de Nacimiento:</label><br>
    <input type="date" id="fechaNacimiento" name="fechaNacimiento" required><br><br>

    <label for="archivo" style="background-color: lightgray;">Cargar Archivo:</label><br>
    <input type="file" id="archivo" name="archivo"><br><br>

    <input type="reset" value="Restablecer Formulario">
    <input type="submit" value="Enviar">
  </form>

  <br>
  <h3>Enlace a ThePower</h3>
  <p>Visita el sitio oficial de <a href="https://thepower.education" target="_blank">THEPOWER</a> para aprender más
    sobre programación y desarrollo web.</p>
</body>

</html>
`,
        imagenes:[
""
    ]
  },
  {
    asignatura: "file-code",
    ejercicio: "Ejercicio 4",
    imagenEj:
    "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729190904/ej4_gyrg9v.png",
       fecha: "17-10-24",
    enunciado:"",
    respuesta:`
<!DOCTYPE html>
<html lang="es">

<head>
  <title>Formulario de Ejemplo</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
  <h1 style="background-color: lightcoral;">Formulario de Ejemplo</h1>
  <h2 style="background-color: lightcoral;">Formulario con Estilos Básicos</h2>

  <form action="procesar.php" method="POST">

    <label for="nombre" style="background-color: lightyellow;">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required style="background-color: lightgray;"><br><br>

    <label for="sexo" style="background-color: lightyellow;">Sexo:</label>
    <select id="sexo" name="sexo" required style="background-color: lightgray;">
      <option value="masculino">Masculino</option>
      <option value="femenino">Femenino</option>
      <option value="otro">Otro</option>
    </select><br><br>

    <label for="email" style="background-color: lightyellow;">Correo electrónico:</label>
    <input type="email" id="email" name="email" required style="background-color: lightgray;"><br><br>

    <label for="edad" style="background-color: lightyellow;">Edad:</label>
    <input type="number" id="edad" name="edad" min="18" required style="background-color: lightgray;"><br><br>

    <label for="fechaNacimiento" style="background-color: lightyellow;">Fecha de Nacimiento:</label>
    <input type="date" id="fechaNacimiento" name="fechaNacimiento" required
      style="background-color: lightgray;"><br><br>

    <label style="background-color: lightyellow;">Estado Civil:</label><br>
    <input type="radio" id="soltero" name="estadoCivil" value="soltero" style="background-color: lightgray;">
    <label for="soltero" style="background-color: lightyellow;">Soltero</label>
    <input type="radio" id="casado" name="estadoCivil" value="casado" style="background-color: lightgray;">
    <label for="casado" style="background-color: lightyellow;">Casado</label>
    <input type="radio" id="divorciado" name="estadoCivil" value="divorciado" style="background-color: lightgray;">
    <label for="divorciado" style="background-color: lightyellow;">Divorciado</label><br><br>

    <label for="comentarios" style="background-color: lightyellow;">Comentarios:</label>
    <textarea id="comentarios" name="comentarios" rows="4" cols="50"
      style="background-color: lightgray;"></textarea><br><br>

    <label for="archivo" style="background-color: lightyellow;">Cargar Archivo:</label>
    <input type="file" id="archivo" name="archivo" style="background-color: lightgray;"><br><br>

    <input type="reset" value="Restablecer Formulario" style="background-color: lightblue;">
    <input type="submit" value="Enviar" style="background-color: lightblue;">
  </form>

  <br>
  <h3 style="background-color: lightcoral;">Enlace a ThePower</h3>
  <p>Visita el sitio oficial de <a href="https://thepower.education" 
      style="background-color: lightyellow;">THEPOWER</a> para aprender más sobre programación y desarrollo web.</p>
</body>

</html>
`,
        imagenes:[
  ""
    ]
  },
  {
    asignatura: "file-code",
    ejercicio: "Ejercicio 5",
    imagenEj:
    " https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729190910/ej5_upi32e.png",
       fecha: "17-10-24",
    enunciado:"",
    respuesta:`
    <!DOCTYPE html>
<html lang="es">

<head>
  <title>Formulario de Ejemplo</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
  <!-- Cuerpo de la página web -->

  <h1 style="background-color: lightcoral;">Formulario de Ejemplo</h1>
  <h2 style="background-color: lightcoral;">Formulario con Estilos Básicos</h2>

  <form action="procesar.php" method="POST">
    <!-- El formulario envía los datos al archivo "procesar.php" mediante el método POST -->

    <label for="nombre" style="background-color: lightyellow;">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required style="background-color: lightgray;"><br><br>

    <label style="background-color: lightyellow;">Sexo:</label><br>
    <input type="radio" id="masculino" name="sexo" value="masculino" style="background-color: lightgray;">
    <label for="masculino" style="background-color: lightyellow;">Masculino</label>
    <input type="radio" id="femenino" name="sexo" value="femenino" style="background-color: lightgray;">
    <label for="femenino" style="background-color: lightyellow;">Femenino</label>
    <input type="radio" id="otro" name="sexo" value="otro" style="background-color: lightgray;">
    <label for="otro" style="background-color: lightyellow;">Otro</label><br><br>

    <label for="email" style="background-color: lightyellow;">Correo electrónico:</label>
    <input type="email" id="email" name="email" required style="background-color: lightgray;"><br><br>

    <label for="edad" style="background-color: lightyellow;">Edad:</label>
    <input type="number" id="edad" name="edad" min="18" required style="background-color: lightgray;"><br><br>

    <label for="fechaNacimiento" style="background-color: lightyellow;">Fecha de Nacimiento:</label>
    <input type="date" id="fechaNacimiento" name="fechaNacimiento" required
      style="background-color: lightgray;"><br><br>

    <label style="background-color: lightyellow;">Estado Civil:</label><br>
    <input type="radio" id="soltero" name="estadoCivil" value="soltero" style="background-color: lightgray;">
    <label for="soltero" style="background-color: lightyellow;">Soltero</label>
    <input type="radio" id="casado" name="estadoCivil" value="casado" style="background-color: lightgray;">
    <label for="casado" style="background-color: lightyellow;">Casado</label>
    <input type="radio" id="divorciado" name="estadoCivil" value="divorciado" style="background-color: lightgray;">
    <label for="divorciado" style="background-color: lightyellow;">Divorciado</label><br><br>

    <label for="comentarios" style="background-color: lightyellow;">Comentarios:</label>
    <textarea id="comentarios" name="comentarios" rows="4" cols="50"
      style="background-color: lightgray;"></textarea><br><br>

    <label for="archivo" style="background-color: lightyellow;">Cargar Archivo:</label>
    <input type="file" id="archivo" name="archivo" style="background-color: lightgray;"><br><br>

    <input type="reset" value="Restablecer Formulario" style="background-color: lightblue;">
    <input type="submit" value="Enviar" style="background-color: lightblue;">
  </form>

  <br>
  <h3 style="background-color: lightcoral;">Enlace a ThePower</h3>
  <p>Visita el sitio oficial de <a href="https://thepower.education
      style="background-color: lightyellow;">THEPOWER</a> para aprender más sobre programación y desarrollo web.</p>

</body>

</html>
`,
        imagenes:[""    ]
  },
  {
    asignatura: "file-code",
    ejercicio: "Ejercicio 1",
    imagenEj: "tabla_dinamica.png",
    fecha: "17-10-24",
    enunciado: "Desarrolla un componente funcional que reciba propiedades y muestre un saludo personalizado.",
    respuesta:``,
        imagenes:[
      "",
    ]
  },
  {
    asignatura: "file-code",
    ejercicio: "Ejercicio 1",
    imagenEj: "tabla_dinamica.png",
    fecha: "27-09-24",
    enunciado: "Crea un botón con un efecto de sombra al pasar el mouse sobre él.",
    respuesta:``,
        imagenes:[
      "",
    ]
  },
  {
    asignatura: "file-code",
    ejercicio: "Ejercicio 1",
    imagenEj: "tabla_dinamica.png",
    fecha: "27-09-24",
    enunciado: "Escribe una función que encuentre todos los números primos hasta un número dado.",
    respuesta:``,
        imagenes:[
      "",
    ]
  },
  {
    asignatura: "file-code",
    ejercicio: "Ejercicio 1",
    imagenEj: "tabla_dinamica.png",
    fecha: "27-09-24",
    enunciado: "Diseña una tabla en HTML que permita agregar nuevas filas mediante JavaScript.",
    respuesta:``,
        imagenes:[
      "",
    ]
  },
  {
    asignatura: "file-code",
    ejercicio: "Ejercicio 1",
    imagenEj: "tabla_dinamica.png",
    fecha: "27-09-24",
    enunciado: "Implementa un servidor HTTP en Node.js que responda con 'Hello World' a cualquier petición.",
    respuesta:``,
        imagenes:[
      "",
    ]
  },
  {
    asignatura: "file-code",
    ejercicio: "Ejercicio 1",
    imagenEj: "tabla_dinamica.png",
    fecha: "27-09-24",
    enunciado: "Escribe una consulta SQL que seleccione todos los clientes de una tabla 'clientes' cuyo país sea 'España'.",
    respuesta:``,
        imagenes:[
      "",
    ]
  },
  {
    asignatura: "file-code",
    ejercicio: "Ejercicio 1'",
    fecha: "27-09-24",
    enunciado: "Crea una clase en Java llamada 'Persona' con atributos nombre y edad, y un método para mostrar la información.",
    respuesta:``,
        imagenes:[
      "",
    ]
  },
  {
    asignatura: "file-code",
    ejercicio: "Ejercicio 1",
    imagenEj: "tabla_dinamica.png",
    fecha: "27-09-24",
    enunciado: "Realiza un commit en Git que incluya todos los cambios realizados en el directorio de trabajo.",
    respuesta:``,
        imagenes:[
      "",
    ]
  }
];

export default ejerciciosProgramacion;

