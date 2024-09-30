const ejerciciosProgramacion = [
  {
    asignatura: "Entornos",
    ejercicio: "Ejercicio 1",
    fecha: "27-09-24",
    enunciado: "Escribe una función que reciba una cadena de texto y devuelva la cadena invertida.",
    respuesta: "function invertirString(str) { return str.split('').reverse().join(''); }",
    imagen: "invertir_string.png"
  },
  {
    asignatura: "Entornos",
    ejercicio: "Ejercicio 1",
    fecha: "27-09-24",
    enunciado: "Desarrolla un componente funcional que reciba propiedades y muestre un saludo personalizado.",
    respuesta: "function Saludo({ nombre }) { return <h1>Hola, {nombre}!</h1>; }function Saludo({ nombre }) { return <h1>Hola, {nombre}!</h1>; }function Saludo({ nombre }) { return <h1>Hola, {nombre}!</h1>; }function Saludo({ nombre }) { return <h1>Hola, {nombre}!</h1>; }function Saludo({ nombre }) { return <h1>Hola, {nombre}!</h1>; }function Saludo({ nombre }) { return <h1>Hola, {nombre}!</h1>; }function Saludo({ nombre }) { return <h1>Hola, {nombre}!</h1>; }function Saludo({ nombre }) { return <h1>Hola, {nombre}!</h1>; }function Saludo({ nombre }) { return <h1>Hola, {nombre}!</h1>; }function Saludo({ nombre }) { return <h1>Hola, {nombre}!</h1>; }function Saludo({ nombre }) { return <h1>Hola, {nombre}!</h1>; }function Saludo({ nombre }) { return <h1>Hola, {nombre}!</h1>; }",
    imagen: "componente_funcional.png"
  },
  {
    asignatura: "Entornos",
    ejercicio: "Ejercicio 1",
    fecha: "27-09-24",
    enunciado: "Crea un botón con un efecto de sombra al pasar el mouse sobre él.",
    respuesta: ".boton { box-shadow: 0px 4px 2px -2px gray; }",
    imagen: "boton_sombra.png"
  },
  {
    asignatura: "Entornos",
    ejercicio: "Ejercicio 1",
    fecha: "27-09-24",
    enunciado: "Escribe una función que encuentre todos los números primos hasta un número dado.",
    respuesta: "def encontrar_primos(n): return [x for x in range(2, n+1) if all(x % y != 0 for y in range(2, x))]",
    imagen: "encontrar_primos.png"
  },
  {
    asignatura: "Entornos",
    ejercicio: "Ejercicio 1",
    fecha: "27-09-24",
    enunciado: "Diseña una tabla en HTML que permita agregar nuevas filas mediante JavaScript.",
    respuesta: "<table id='miTabla'><tr><td>Fila 1</td></tr></table><button onclick='agregarFila()'>Agregar Fila</button>",
    imagen: "tabla_dinamica.png"
  },
  {
    asignatura: "Node.Entornos",
    ejercicio: "Ejercicio 1",
    fecha: "27-09-24",
    enunciado: "Implementa un servidor HTTP en Node.js que responda con 'Hello World' a cualquier petición.",
    respuesta: "const http = require('http'); http.createServer((req, res) => { res.end('Hello World'); }).listen(3000);",
    imagen: "servidor_basico.png"
  },
  {
    asignatura: "Entornos",
    ejercicio: "Ejercicio 1",
    fecha: "27-09-24",
    enunciado: "Escribe una consulta SQL que seleccione todos los clientes de una tabla 'clientes' cuyo país sea 'España'.",
    respuesta: "SELECT * FROM clientes WHERE pais = 'España';",
    imagen: "consulta_sql.png"
  },
  {
    asignatura: "Entornos",
    ejercicio: "Ejercicio 1'",
    fecha: "27-09-24",
    enunciado: "Crea una clase en Java llamada 'Persona' con atributos nombre y edad, y un método para mostrar la información.",
    respuesta: "class Persona { String nombre; int edad; void mostrarInfo() { System.out.println(nombre + ', ' + edad); } }",
    imagen: "clase_persona.png"
  },
  {
    asignatura: "Entornos",
    ejercicio: "Ejercicio 1",
    fecha: "27-09-24",
    enunciado: "Realiza un commit en Git que incluya todos los cambios realizados en el directorio de trabajo.",
    respuesta: "git add . && git commit -m 'Commit inicial'",
    imagen: "commit_git.png"
  }
];

export default ejerciciosProgramacion;
