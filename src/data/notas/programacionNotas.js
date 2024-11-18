const programacionNotas = {

  indice: [
    "Aula General",
    "Unidad1",
    "Unidad2",
    "Unidad3",
    "Unidad4",
    "unidad5",
    "unidad6",
  ],

  basicJava: [
    {
      url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729259267/java000000_jt2gfr.png",
      codeJava: `
/**
 *
 * @author jdavi
 */

//PARA COMENTAR LÍNEAS USAMOS //
/*PARA COMENTAR VARIAS LÍNEAS USAMOS */

package _1curso_java; //Creamos paquete de java y lo nombramos con _1curso_java//
 /*Un paquete es una forma de organizar las clases en Java. En este caso, creaste el paquete llamado _1curso_java. 
Los paquetes también evitan conflictos de nombres cuando tienes muchas clases.*/public class HolaMundo {
    //public: Es un modificador de acceso que indica que esta clase será accesible desde cualquier parte del programa.
    //class: Define una clase en Java. Todo el código de Java está contenido en clases.
/**
¿Qué es una clase?
En programación orientada a objetos, una clase es una plantilla o modelo a partir del cual se crean objetos. 
Los objetos son instancias de clases. La clase define los atributos (datos) y métodos (comportamientos) que esos objetos tendrán.
Atributos: Son las propiedades o características que describen a los objetos (como el color, el tamaño, etc.).
Métodos: Son las acciones o comportamientos que los objetos pueden realizar (como caminar, correr, ladrar, etc.).
*/
    
    //HolaMundo: Es el nombre de la clase. El nombre de la clase debe coincidir con el nombre del archivo si el archivo es público 
    //(por ejemplo, HolaMundo.java
    
    public static void main(String[] args) {
        // Función principal, todo el código empezará desde el main
        //static: Significa que este método pertenece a la clase, no a una instancia de la clase, por lo que puede ser ejecutado 
        //sin crear un objeto de la clase.
        System.out.println("Hola Mundo");
    }
}

`,
    },
    {
      url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729259333/java00_z5kyqk.png",
      codeJava: `/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package _1curso_java;

/**
 *
 * @author jdavi
 */

/*Una constante es una variable del sistema que mantiene un valor inmutable a lo largo de toda la vida del programa*/
public class _4constante {
        public static void main(String[] args) {
        // Función principal, todo el código empezará desde el main
        
        /*Para establecer que la varianble es constante se debe pone al inicio la palabra final*/
        
        final int numero = 150;
       
        System.out.println("El numero es: "+numero);//sale por pantalla El numero es: + el valor de la variable
   
}
}`,
    },
    {
      url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729259331/java001_q43th4.png",
      codeJava: `/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package _1curso_java;

import java.util.Scanner;//Hemos importado la libreria Scanner

/**
 *
 * @author jdavi
 */

/*ENTRADA DE DATOS*/

public class _5Datos {
            public static void main(String[] args) {
        // Función principal, todo el código empezará desde el main
        
        /*El uso de la clase Scanner es una de las mejores maneras de ingresar datos por teclado en Java.
        Utilizada para obtener la entrada de los tipos primitivos como int, double etc*/
        
        /*El operador new permite a los desarrolladores crear una instancia de un tipo de objeto definido por el usuario o de 
        uno de los tipos de objeto integrados que tiene un función constructora. Y la palabra in significa entrada de datos*/
        
        Scanner entrada = new Scanner(System.in);
        
        /*Para establecer que la varianble es constante se debe pone al inicio la palabra final*/
        
        final int numero = 150;
       
        System.out.println("El numero es: "+numero);//sale por pantalla El numero es: + el valor de la variable
}
}
`,
    },
    {
      url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729259258/java1_tea7by.png",
      codeJava: `/*@author jdavi*/

/*VARIABLES PRIMITIVAS
Una Variable es un espacio de memoria que almacena un valor, es decir como si tuvieramos una caja y guardamos algo*/

package _1curso_java;

public class _0variable_0_enterobis {
    public static void main(String[] args) {
        // Función principal, todo el código empezará desde el main
        
        // 1. Variable tipo byte (valor de -128 a 127)
        byte byteEntero = 1;  // También podemos hacerlo byte entero; entero = 1;
        System.out.println("Variable tipo byte: " + byteEntero);

        // 2. Variable tipo short (valor de -32,768 a 32,767)
        short shortEntero = 11000;  // También podemos hacerlo short entero; entero = 11000;
        System.out.println("Variable tipo short: " + shortEntero);

        // 3. Variable tipo int (valor de -2,147,483,648 a 2,147,483,647)
        int intEntero = 2000000000;  // También podemos hacerlo int entero; entero = 2000000000;
        System.out.println("Variable tipo int: " + intEntero);

        // 4. Variable tipo long (valor de -9,223,372,036,854,775,808 a 9,223,372,036,854,775,807)
        long longEntero = 2000000000000000000L;  // Añadir "L" para indicar que es un long
        System.out.println("Variable tipo long: " + longEntero);

        // OJO: solo se pueden poner números enteros, no decimales.
    }
}

/*
Explicación breve:
byte: Variable para almacenar números enteros pequeños, entre -128 y 127.

short: Variable para almacenar enteros un poco más grandes, entre -32,768 y 32,767.

int: Variable para enteros grandes, la más usada. Puede almacenar valores entre -2,147,483,648 y 2,147,483,647.

long: Variable para enteros extremadamente grandes, entre -9,223,372,036,854,775,808 y 9,223,372,036,854,775,807. 

Para los valores de long, se añade una L al final del número para indicar que es un long.
*/`,
    },
    {
      url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729259254/java2_kkgp4s.png",
      codeJava: `/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package _1curso_java;

/**
 *
 * @author jdavi
 */

//VARIABLES PRIMITIVAS

//Variable espacio de memoria que almacena un valor, es decir como si tuvieramos una cja y guardamos algo

public class _1variable_decimal {
        public static void main(String[] args) {
        // Función principal, todo el código empezará desde el main
        
        /*Variable tipo double en este caso entero, almacena datos de números decimal o números real. Esta variable "double va del número 
        1.7E+308 a 1.7E-308. En el caso de poner un valor fuera de este rango daría error*/

        
        double decimal;
        decimal = 4.45;
        
        //También podemos hacerlo de esta forma "double decimal = 1";

        System.out.println("Decimal: "+decimal);//sale por pantalla Decimal + el valor de la variable
        
        
        /*Variable tipo float en este caso entero, almacena datos de números enteros. Esta variable "byte va del número 
        3.4E+38 a 3.4E-38. En el caso de poner un valor fuera de este rango daría error
        
        float decimal;
        decimal = 4.45f;//Para el float es necesario poner la f, en caso contrario da error
        
        //También podemos hacerlo de esta forma "float decimal = 11000";

        System.out.println("Deciaml: "+decimal);//sale por pantalla Decimal + el valor de la variable*/
        
        
        
        
        
        //OJO SOLO SE PUEDEN PONER NÚMEROS DECIMALES, NO SE PUEDE PONER NÚMEROS ENTEROS.
        }
        }
`,
    },
    {
      url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729259286/java3_kjizzf.png",
      codeJava: `package _1curso_java;

public class _1variable_decimalbis {
    public static void main(String[] args) {
        
        // 1. Variable tipo double (números decimales de doble precisión)
        // El tipo double es el más utilizado para trabajar con decimales en Java. Puede almacenar números con decimales muy grandes.
        double decimalDouble;
        decimalDouble = 4.45;
        System.out.println("Variable tipo double: " + decimalDouble);
        
        // También puedes declararlo y asignarlo en la misma línea:
        double otroDecimalDouble = 1234567.123456789;
        System.out.println("Otro número tipo double: " + otroDecimalDouble);
        
        // 2. Variable tipo float (números decimales de precisión simple)
        // El tipo float es menos preciso que double, pero se utiliza cuando necesitamos ahorrar memoria.
        // Se debe agregar una 'f' al final del número para indicar que es un float.
        float decimalFloat;
        decimalFloat = 4.45f;
        System.out.println("Variable tipo float: " + decimalFloat);
        
        // También puedes declararlo y asignarlo en la misma línea:
        float otroDecimalFloat = 12345.6789f;
        System.out.println("Otro número tipo float: " + otroDecimalFloat);
        
        // NOTA: En general, se prefiere usar 'double' para la mayoría de los cálculos que involucran decimales
    }
}`,
    },
    {
      url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729259262/java4_dj0kxr.png",
      codeJava: `/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package _1curso_java;

/**
 *
 * @author jdavi
 */

//VARIABLES PRIMITIVAS

//Variable espacio de memoria que almacena un valor, es decir como si tuvieramos una cja y guardamos algo

public class _2variable_booleana {
    
        public static void main(String[] args) {
        // Función principal, todo el código empezará desde el main
        
        /*Variable tipo char en de tipo decisión, ejemplo: true, false,. No obstante se puede poner como caracter un numero
        Todo aquello que nos encontramos en le teclado es un carácter*/
        
        boolean decision = true;
        
        //También podemos hacerlo de esta forma "double decimal = 1";

        System.out.println("La decision es: "+decision);//sale por pantalla la decisión es: + el valor de la variable

        }
        }
`,
    },
    {
      url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729259285/java5_aw1y3q.png",
      codeJava: `/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package _1curso_java;

/**
 *
 * @author jdavi
 */

//VARIABLES PRIMITIVAS

// Una variable es un espacio de memoria que almacena un valor. En este caso, una variable booleana almacena un valor de decisión: true o false.

public class _2variable_booleanabis {
    
    public static void main(String[] args) {
        // Función principal, todo el código empezará desde el main
        
        /* Variable tipo boolean: Este tipo de variable almacena solo dos valores posibles: true (verdadero) o false (falso).
         * Se usa en decisiones o comparaciones lógicas.
         */
        
        boolean decision = true;  // Declaración de una variable booleana inicializada a true
        System.out.println("La decisión es: " + decision);  // Salida: La decisión es: true
        
        // Ejemplo usando una comparación para asignar un valor booleano
        int a = 5;
        int b = 10;
        boolean esMayor = a > b;  // Aquí se evalúa si a es mayor que b (esto dará false)
        System.out.println("¿Es 5 mayor que 10?: " + esMayor);  // Salida: false

        // Ejemplo con condicionales basados en una variable booleana
        boolean esIgual = (a == 5);  // La variable esIgual será true porque a es igual a 5
        if (esIgual) {
            System.out.println("El valor de 'a' es igual a 5.");  // Esto se imprimirá
        } else {
            System.out.println("El valor de 'a' no es igual a 5.");
        }
        
        // También podemos cambiar el valor de la variable boolean
        decision = false;
        System.out.println("La decisión ahora es: " + decision);  // Salida: La decisión ahora es: false

        // Usando el booleano en una condición más compleja
        boolean esPositivo = (a > 0) && (b > 0);  // Evalúa si tanto a como b son mayores que 0
        System.out.println("¿Son ambos números positivos?: " + esPositivo);  // Salida: true
    }
}
`,
    },
    {
      url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729259278/java6_obcfvg.png",
      codeJava: `/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package _1curso_java;

/**
 *
 * @author jdavi
 */

//DATOS NO PRIMITIVOS Y CADENAS

public class _3datos_no_primitivos_y_cadenas {
    
    public static void main(String[] args) {
        // Función principal, todo el código empezará desde el main
        
        /*Integer() : El constructor que permite recibir un tipo entero básico y convertirlo en un objeto Integer*/
        
        Integer numero = 150;
        
        System.out.println("El numero es: "+numero);//sale por pantalla El numero es: + el valor de la variable

        
        /*
        //LA CADENA
        
       public static void main(String[] args) {
        // Función principal, todo el código empezará desde el main
        
        //String define y admite cadenas de caracteres. (Dato no primitivo)
        //En algunos otros lenguajes de programación, una cadena o string es una matriz o array de caracteres
        
        String frase = "Esto es un ejercicio tipo cadena";//Debemos poner comillas dobles para cadenas
        
        //Por que decimos es en no primitivo, si ponemos frase seguido de un punto podemos ver los métodos
        
        frase.

        System.out.println("El resultado es: "+frase);//sale por pantalla El numero es: + el valor de la variable
        */
        
        
        }
        }`,
    },
    {
      url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729259281/java05_nopf8g.png",
      codeJava: `/*@author jdavi*/

/*VARIABLES PRIMITIVAS
Una Variable es un espacio de memoria que almacena un valor, es decir como si tuvieramos una caja y guardamos algo*/

package _1curso_java;public class _0variable_0_entero {
        public static void main(String[] args) {
        // Función principal, todo el código empezará desde el main
        
        /*byte es una variable en este caso entero, almacena datos de números enteros. Esta variable "byte va del número 
        -128 a 127. Qué quiere decir esto, que si ponemos en variable entero el número 130 no lo reconocería*/
        
        byte entero ;
        entero = 1;
       
        //También podemos hacerlo de esta forma "byte entero = 1";

        System.out.println("Entero: "+entero);//sale por pantalla Entero + el valor de la variable

        
        /*Variable tipo short en este caso entero, almacena datos de números enteros. Esta variable "byte va del número 
        -32.768 a 32.767. Qué quiere decir esto, que si ponemos en variable entero el número 33000 no lo reconocería
        
        short entero;
        entero = 11000;
        
        //También podemos hacerlo de esta forma "short entero = 11000";

        System.out.println("Entero: "+entero);//sale por pantalla Entero + el valor de la variable
        */
        
        
        
        /*Variable tipo Int en este caso entero (es el más utilizado), almacena datos de números enteros. 
        Esta variable "int va del número -2.147.483.648 a 2.147.483.647. Qué quiere decir esto, que si ponemos en variable entero el número 3.000.000.000 no lo reconocería
        
        int entero;
        entero = 2000000000;
        
        //También podemos hacerlo de esta forma "int entero = 1";

        System.out.println("Entero: "+entero);//sale por pantalla Entero + el valor de la variable
        */
        
        
        /*Variable tipo long en este caso entero, almacena datos de números enteros. 
        Esta variable "int va del número -9.223.372.036.854.775.808 a 9.223.372.854.775.807 
        Qué quiere decir esto, que si ponemos en variable entero el número 3.000.000.000 no lo reconocería
        
        long entero;
        entero = 2000000000000000000;
        
        //También podemos hacerlo de esta forma "int entero = 1";

        System.out.println("Entero: "+entero);//sale por pantalla Entero + el valor de la variable
        */
        
        //OJO SOLO SE PUEDEN PONER NÚMEROS ENTEROS, NO SE PUEDE PONER NÚMEROS CON DECIMALES.
        }
        }
/*
Explicación breve:
byte: Variable para almacenar números enteros pequeños, entre -128 y 127.

short: Variable para almacenar enteros un poco más grandes, entre -32,768 y 32,767.

int: Variable para enteros grandes, la más usada. Puede almacenar valores entre -2,147,483,648 y 2,147,483,647.

long: Variable para enteros extremadamente grandes, entre -9,223,372,036,854,775,808 y 9,223,372,036,854,775,807. 

Para los valores de long, se añade una L al final del número para indicar que es un long.
*/`,
    },
  ],
  conditionalJava: [
    {
      url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729266559/cond1_llbelx.png",
      codeJava: `/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package _1Condicionales;  // Declaración del paquete donde se encuentra la clase.

import java.util.Scanner;  // Importamos la clase Scanner desde el paquete java.util para leer la entrada del usuario.

/**
 * Clase que determina si dos números ingresados son iguales o cuál de ellos es mayor.
 * @author jdavi
 */
public class Mayor_Menor_Igualesbis {  // Definición de la clase principal "Mayor_Menor_Iguales".
   
   public static void main(String[] args) {  // Método principal donde se ejecuta el programa.
      Scanner sc = new Scanner(System.in);  // Creamos un objeto Scanner para leer datos desde el teclado.

      // Pedimos al usuario que introduzca el primer número.
      System.out.print("Introduzca un número: ");  // Imprime un mensaje solicitando al usuario el primer número.
      int n1 = sc.nextInt();  // Lee el primer número ingresado y lo asigna a la variable 'n1'.

      // Pedimos al usuario que introduzca el segundo número.
      System.out.print("Introduzca otro número: ");  // Imprime un mensaje solicitando al usuario el segundo número.
      int n2 = sc.nextInt();  // Lee el segundo número ingresado y lo asigna a la variable 'n2'.

      // Comparamos los dos números.
      if (n1 == n2) {  // Si ambos números son iguales.
         System.out.println("Son iguales");  // Imprime que los números son iguales.
      } else {  // Si los números no son iguales.
         if (n1 > n2) {  // Si el primer número 'n1' es mayor que el segundo número 'n2'.
            System.out.println(n1 + " es mayor que " + n2);  // Imprime que 'n1' es mayor que 'n2'.
         } else {  // Si el segundo número 'n2' es mayor que 'n1'.
            System.out.println(n2 + " es mayor que " + n1);  // Imprime que 'n2' es mayor que 'n1'.
         }
      }
   } 
}
`,
    },
    {
      url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729266464/cond2_t6n7em.png",
      codeJava: `/*Los operadores condicionales en Java son aquellos que evalúan dos expresiones booleanas.
Operador	Descripción
&&	        Operador condicional AND
||	        Operador condicional OR
?:	        Operador Ternario
instanceof	Operador instanceof
https://www.manualweb.net/java/operadores-condicionales-java/
*/
package _1Condicionales;
import java.util.Scanner;
/**
 * @author jdavi
 */
public class Mayor_Menor_Iguales {
      public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      System.out.print("Introduzca un número: ");
      int n1 = sc.nextInt();
      System.out.print("Introduzca otro número: ");
      int n2 = sc.nextInt();
      if (n1 == n2) {
         System.out.println("Son iguales");
      } else {
         if (n1 > n2) {
            System.out.println(n1 + " es mayor que " + n2);
         } else {
            System.out.println(n2 + " es mayor que " + n1);
         }
      }
   } 
}
`,
    },
    {
      url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729266489/cond3_ijr4vf.png",
      codeJava: `/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package _1Condicionales;  // Declaración del paquete donde se encuentra la clase.

import java.util.Scanner;  // Importamos la clase Scanner desde el paquete java.util para leer la entrada del usuario.

/**
 * Clase para determinar qué número es mayor o menor entre dos números ingresados por el usuario.
 * @author jdavi
 */
public class Mayor_Menorbis {  // Definición de la clase principal "Mayor_Menor".

   public static void main(String[] args) {  // Método principal donde se ejecuta el programa.
      Scanner sc = new Scanner(System.in);  // Creamos un objeto Scanner para leer datos del teclado.

      // Pedimos al usuario que introduzca el primer número.
      System.out.print("Introduzca un número: ");  // Imprime un mensaje solicitando al usuario que ingrese el primer número.
      int n1 = sc.nextInt();  // Lee el primer número ingresado por el usuario y lo asigna a la variable 'n1'.

      // Pedimos al usuario que introduzca el segundo número.
      System.out.print("Introduzca otro número: ");  // Imprime un mensaje solicitando al usuario que ingrese el segundo número.
      int n2 = sc.nextInt();  // Lee el segundo número ingresado por el usuario y lo asigna a la variable 'n2'.

      // Comparamos los dos números ingresados.
      if (n1 > n2) {  // Si el primer número 'n1' es mayor que el segundo número 'n2'.
         System.out.println(n1 + " es mayor que " + n2);  // Imprime que 'n1' es mayor que 'n2'.
      } else {  // Si el primer número 'n1' no es mayor que 'n2', entonces 'n2' es mayor o igual a 'n1'.
         System.out.println(n2 + " es mayor que " + n1);  // Imprime que 'n2' es mayor que 'n1'.
      }
   }
}
`,
    },
    {
      url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729266538/cond4_xobtwu.png",
      codeJava: `/*Los operadores condicionales en Java son aquellos que evalúan dos expresiones booleanas.
Operador	Descripción
&&	        Operador condicional AND
||	        Operador condicional OR
?:	        Operador Ternario
instanceof	Operador instanceof
https://www.manualweb.net/java/operadores-condicionales-java/
*/

package _1Condicionales;
import java.util.Scanner;// importamos libreria
/**
 * @author jdavi
 */
public class Mayor_Menor {
       public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);

      System.out.print("Introduzca un número: ");//Solicitamos imprimir por pantalla
      int n1 = sc.nextInt();
      System.out.print("Introduzca otro número: ");//Solicitamos imprimir por pantalla
      int n2 = sc.nextInt();

      if (n1 > n2) {
         System.out.println(n1 + " es mayor que " + n2);//Solicitamos imprimir por pantalla
      } else {
         System.out.println(n2 + " es mayor que " + n1);//Solicitamos imprimir por pantalla
      }
   }
}
`,
    },
    {
      url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729266561/cond5_xoxb9g.png",
      codeJava: `/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package _1Condicionales;  // Declaración del paquete donde se encuentra la clase.

import java.util.*;  /* El asterisco en la declaración de importación hace visible todos los miembros del paquete java.util,
                        por lo que no es necesario importar cada clase específica manualmente (en este caso, Scanner). */

public class Ecuacion_segundogradobis {  // Definición de la clase principal "Ecuacion_segundogrado".

   public static void main(String[] args) {  // Método principal que inicia la ejecución del programa.
      Scanner sc = new Scanner(System.in);  // Creación del objeto Scanner para leer los datos del usuario.

      /* Double es un tipo de dato en Java que se utiliza para almacenar valores de punto flotante (decimales).
         En este caso, se declaran las variables para los coeficientes a, b, y c, así como para las soluciones x1, x2, y el discriminante d. */
      double a, b, c;  // Coeficientes de la ecuación de segundo grado.
      double x1, x2, d;  // x1 y x2 serán las soluciones, y d es el discriminante de la ecuación.

      // Solicita al usuario el primer coeficiente (a) e imprime el mensaje en la consola.
      System.out.print("Introduzca primer coeficiente (a): ");
      a = sc.nextDouble();  // nextDouble() lee un valor de punto flotante ingresado por el usuario y lo asigna a la variable 'a'.
      
      // Solicita el segundo coeficiente (b).
      System.out.print("Introduzca segundo coeficiente (b): ");
      b = sc.nextDouble();  // nextDouble() lee el valor de 'b'.
      
      // Solicita el tercer coeficiente (c).
      System.out.print("Introduzca tercer coeficiente (c): ");
      c = sc.nextDouble();  // nextDouble() lee el valor de 'c'.

      // Calcula el discriminante de la ecuación cuadrática: d = b^2 - 4ac
      d = (b * b - 4 * a * c);

      // Si el discriminante es menor que 0, no hay soluciones reales.
      if (d < 0) { 
         System.out.println("No existen soluciones reales");  // Imprime un mensaje si no hay soluciones reales.
      } else {  // Si el discriminante es mayor o igual a 0, hay soluciones reales.
         
         // Si 'a' es 0, no es una ecuación de segundo grado.
         if (a == 0) {
            System.out.println("No es una ecuación de segundo grado");  // Si 'a' es 0, la ecuación no es cuadrática.
         } else {
            // Si el discriminante es mayor o igual a 0, se calculan las dos soluciones (x1 y x2).
            // La fórmula cuadrática es: x1 = (-b + √d) / 2a y x2 = (-b - √d) / 2a
            x1 = (-b + Math.sqrt(d)) / (2 * a);  // Calcula la primera solución usando la fórmula cuadrática.
            x2 = (-b - Math.sqrt(d)) / (2 * a);  // Calcula la segunda solución usando la fórmula cuadrática.

            // Imprime las soluciones.
            System.out.println("Solución 1: " + x1);
            System.out.println("Solución 2: " + x2);
         }
      }
   }
}
`,
    },
    {
      url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729266525/cond6_agdjng.png",
      codeJava: `/*Los operadores condicionales en Java son aquellos que evalúan dos expresiones booleanas.
Operador	Descripción
&&	        Operador condicional AND
||	        Operador condicional OR
?:	        Operador Ternario
instanceof	Operador instanceof

https://www.manualweb.net/java/operadores-condicionales-java/

*/

package _1Condicionales;

import java.util.*;/*El astericos en los java import tiene la funcionalidad de hacer visible todos los miembros de una coleccion
sin tener que usar el nombre del identificador completo*/

public class Ecuacion_segundogrado {

   public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      
/*Double es un tipo de dato en java que se utiliza para almacenar valores de punto flotante*/
      double a, b, c; 
      double x1, x2, d; 

      System.out.print("Introduzca primer coeficiente (a): ");//System.out.print Imprimir por pantalla
      a = sc.nextDouble();/*nextDouble para leer un dato double*/
      System.out.print("Introduzca segundo coeficiente (b): ");
      b = sc.nextDouble();
      System.out.print("Introduzca tercer coeficiente (c): ");
      c = sc.nextDouble();

      d = (b * b - 4 * a * c);
      if (d < 0) { 
         System.out.println("No existen soluciones reales");
      } else {
         if (a == 0) {//si a es igual a 0
            System.out.println("No es una ecuación de segundo grado");
         } else {
            x1 = (-b + Math.sqrt(d)) / (2 * a); //La  función Math.sqrt() retorna la raíz cuadrada de un número, que es
            x2 = (-b - Math.sqrt(d)) / (2 * a);

            System.out.println("Solución 1: " + x1);
            System.out.println("Solución 2: " + x2);
         }
      }
   }
}

`,
    },
    {
      url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729266552/cond7_wfswr2.png",
      codeJava: `/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package _1Condicionales;  // Declaración del paquete donde se encuentra la clase.

import java.util.Scanner;  // Importa la clase Scanner desde el paquete java.util, para poder leer la entrada del usuario.

public class Dia_semanabis {  // Definición de la clase principal "Dia_semana".

   public static void main(String[] args) {  // El método main es el punto de entrada del programa.
      Scanner sc = new Scanner(System.in);  // Creamos un objeto Scanner para leer datos desde el teclado.
      
      // Muestra un mensaje solicitando al usuario que introduzca un número entre 1 y 7.
      System.out.print("Introduzca un número de 1 a 7: ");  // System.out.print imprime el mensaje sin salto de línea.
      
      int dia = sc.nextInt();  // Lee un número entero ingresado por el usuario y lo almacena en la variable 'dia'.
      
      // Switch es una estructura condicional que selecciona una acción dependiendo del valor de la variable 'dia'.
      switch (dia) {  // El switch evalúa el valor de la variable 'dia' (el número ingresado por el usuario).
         
         // Si el valor de 'dia' es 1, imprime "lunes".
         case 1 -> System.out.println("lunes");  // Lunes corresponde al valor 1.
         
         // Si el valor de 'dia' es 2, imprime "martes".
         case 2 -> System.out.println("martes");  // Martes corresponde al valor 2.
         
         // Si el valor de 'dia' es 3, imprime "miércoles".
         case 3 -> System.out.println("miércoles");  // Miércoles corresponde al valor 3.
         
         // Si el valor de 'dia' es 4, imprime "jueves".
         case 4 -> System.out.println("jueves");  // Jueves corresponde al valor 4.
         
         // Si el valor de 'dia' es 5, imprime "viernes".
         case 5 -> System.out.println("viernes");  // Viernes corresponde al valor 5.
         
         // Si el valor de 'dia' es 6, imprime "sábado".
         case 6 -> System.out.println("sábado");  // Sábado corresponde al valor 6.
         
         // Si el valor de 'dia' es 7, imprime "domingo".
         case 7 -> System.out.println("domingo");  // Domingo corresponde al valor 7.
         
         // No se incluye un bloque default porque se asume que el usuario ingresará un número entre 1 y 7.
      }
   }
}
`,
    },
    {
      url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729266515/cond8_vlo2n2.png",
      codeJava: `/*Los operadores condicionales en Java son aquellos que evalúan dos expresiones booleanas.
Operador	Descripción
&&	        Operador condicional AND
||	        Operador condicional OR
?:	        Operador Ternario
instanceof	Operador instanceof

https://www.manualweb.net/java/operadores-condicionales-java/
*/

package _1Condicionales;

import java.util.Scanner;

public class Dia_semana {

   public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      System.out.print("Introduzca un número de 1 a 7: ");//System.out.print Imprimir por pantalla
      int dia = sc.nextInt();
      
      
      switch (dia) {
         case 1 -> System.out.println("lunes");
         case 2 -> System.out.println("martes");
         case 3 -> System.out.println("miércoles");
         case 4 -> System.out.println("jueves");
         case 5 -> System.out.println("viernes");
         case 6 -> System.out.println("sábado");
         case 7 -> System.out.println("domingo");
      }
   }
}`,
    },
    {
      url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729266556/cond9_ttoowf.png",
      codeJava: `/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package _1Condicionales;  // Declaración del paquete donde se encuentra la clase, útil para organizar el código.

import java.util.Scanner;  // Importa la clase Scanner desde el paquete java.util, que permite leer la entrada del usuario.

public class Calificacion_nota2bis {  // Definición de la clase principal "Calificacion_nota2".

    /* Scanner es la mejor clase para recibir información a través de teclado y nos permite 
       capturar datos primitivos como int, double, String, etc. */
    
    public static void main(String[] args) {  // El método main es el punto de entrada del programa.
        Scanner sc = new Scanner(System.in);  // Creamos un objeto Scanner para leer la entrada del usuario.
        
        // Muestra un mensaje pidiendo al usuario que introduzca una nota.
        System.out.print("Introduzca una nota: ");  // System.out.print imprime el mensaje sin un salto de línea.
        
        int nota = sc.nextInt();  // Lee un número entero (la nota) ingresada por el usuario y la almacena en la variable 'nota'.
        
        /* El switch es una estructura de control que selecciona una instrucción de múltiples vías,
           evaluando distintos casos y ejecutando la opción que coincide con el valor de la variable.
           En este caso, evalúa el valor de la variable 'nota'. Es decir es una alternativa más estructurada para condiciones */
        switch (nota) {  // El switch evalúa el valor de la variable 'nota'.
            
            // Si la nota es 0, 1, 2, 3 o 4, se imprime "Insuficiente".
            case 0, 1, 2, 3, 4 -> 
                System.out.println("Insuficiente");  // Imprime "Insuficiente" en la consola.
                
            // Si la nota es exactamente 5, se imprime "Suficiente".
            case 5 -> 
                System.out.println("Suficiente");  // Imprime "Suficiente" en la consola.
                
            // Si la nota es exactamente 6, se imprime "Bien".
            case 6 -> 
                System.out.println("Bien");  // Imprime "Bien" en la consola.
                
            // Si la nota es 7 u 8, se imprime "Notable".
            case 7, 8 -> 
                System.out.println("Notable");  // Imprime "Notable" en la consola.
                
            // Si la nota es 9 o 10, se imprime "Sobresaliente".
            case 9, 10 -> 
                System.out.println("Sobresaliente");  // Imprime "Sobresaliente" en la consola.
                
            // Si la nota no coincide con ninguno de los casos anteriores (por ejemplo, si la nota es menor que 0 o mayor que 10), 
            // se ejecuta el bloque "default" y se imprime "Error: nota no válida".
            default -> 
                System.out.println("Error: nota no válida");  // Imprime un mensaje de error si la nota no es válida.
        }
    }
}
`,
    },
    {
      url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729266445/cond10_mptcxo.png",
      codeJava: `/*Los operadores condicionales en Java son aquellos que evalúan dos expresiones booleanas.
Operador	Descripción
&&	        Operador condicional AND
||	        Operador condicional OR
?:	        Operador Ternario
instanceof	Operador instanceof

https://www.manualweb.net/java/operadores-condicionales-java/
*/package _1Condicionales;

import java.util.Scanner;

public class Calificacion_nota {

   public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      System.out.print("Introduzca una nota: ");//System.out.print Imprimir por pantalla
      
      int nota = sc.nextInt();/*Mediante la instrucción sc.nextInt() Scanner accede al buffer de entrada para obtener un 
      dato de tipo int y asignarlo a la variable exp */

      /*If condicional simple, que significa si. Con el if si se cumple la condición "true/verdad" se ejecuta la condición
      en caso contrario "false/Falso" pasaría la siguiente condicional ELSE*/
      if (0 <= nota && nota < 5) { 
         System.out.println("Insuficiente");
      /*else condicional doble */
      } else if (nota == 5) {
         System.out.println("Suficiente");
      } else if (nota == 6) {
         System.out.println("Bien");
      } else if (nota == 7 || nota == 8) { 
         System.out.println("Notable");
      } else if (nota == 9 || nota == 10) { 
         System.out.println("Sobresaliente");
      } else {
         System.out.println("Error: nota no válida");
      }
   }
}`,
    },
    {
      url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729266439/cond11_dqvnhn.png",
      codeJava: `/*Los operadores condicionales en Java son aquellos que evalúan dos expresiones booleanas.
Operador	Descripción
&&	        Operador condicional AND
||	        Operador condicional OR
?:	        Operador Ternario
instanceof	Operador instanceof

https://www.manualweb.net/java/operadores-condicionales-java/
*/

package _1Condicionales;

import java.util.Scanner;

public class Calificacion_nota2 {
    
/* Scanner es la mejor clase para recibir información a tráves de teclado y nos permite 
    capturar datos primitivos tipo int, double, string....*/
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Introduzca una nota: ");//System.out.print Imprimir por pantalla
        int nota = sc.nextInt();
        
        /*Switch es una condicional que selecciona una instrucción de multiples vía con varios 
        que evalúa distintos casos y selecciona un opción entre varias
        */
        switch (nota) {
            case 0, 1, 2, 3, 4 ->
                System.out.println("Insuficiente");//Solicitamos imprimir por pantalla
            case 5 ->
                System.out.println("Suficiente");//Solicitamos imprimir por pantalla
            case 6 ->
                System.out.println("Bien");//Solicitamos imprimir por pantalla
            case 7, 8 ->
                System.out.println("Notable");//Solicitamos imprimir por pantalla
            case 9, 10 ->
                System.out.println("Sobresaliente");//Solicitamos imprimir por pantalla
            default ->
                System.out.println("Error: nota no válida");//Solicitamos imprimir por pantalla
        }
    }
}`,
    },
    {
      url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729266495/cond12_w43lnq.png",
      codeJava: `/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package _1Condicionales;  // Declaración del paquete, que agrupa clases relacionadas en Java.

// Importa la clase Scanner, que permite la entrada de datos desde el teclado.
import java.util.Scanner;

public class Calificacion_notabis {  // Definición de la clase principal "Calificacion_nota", donde está el código.

   public static void main(String[] args) {  // Método principal, donde comienza la ejecución del programa.
      Scanner sc = new Scanner(System.in);  // Crea una instancia de la clase Scanner para leer datos desde el teclado.
      
      // Muestra un mensaje en la consola pidiendo al usuario que introduzca una nota.
      System.out.print("Introduzca una nota: ");

      // Lee un número entero ingresado por el usuario (la nota) y lo asigna a la variable 'nota'.
      int nota = sc.nextInt();  /* Mediante la instrucción sc.nextInt(), el objeto Scanner accede al buffer de entrada
                                   y obtiene un valor de tipo entero que se asigna a la variable 'nota'. Es decir que lee el valor ingresado */

      /* Estructura condicional if-else que evalúa el valor de la variable 'nota' para determinar su calificación.
         'if' es una estructura condicional que ejecuta un bloque de código solo si la condición especificada es verdadera. */
      if (0 <= nota && nota < 5) {  // Si la nota está entre 0 (incluido) y 4 (inclusive), muestra "Insuficiente".
         System.out.println("Insuficiente");
         
      } else if (nota == 5) {  // Si la nota es exactamente 5, muestra "Suficiente".
         System.out.println("Suficiente");
         
      } else if (nota == 6) {  // Si la nota es exactamente 6, muestra "Bien".
         System.out.println("Bien");
         
      } else if (nota == 7 || nota == 8) {  // Si la nota es 7 u 8, muestra "Notable".
         System.out.println("Notable");
         
      } else if (nota == 9 || nota == 10) {  // Si la nota es 9 o 10, muestra "Sobresaliente".
         System.out.println("Sobresaliente");
         
      } else {  // Si ninguna de las condiciones anteriores se cumple (nota fuera de rango), muestra "Error: nota no válida".
         System.out.println("Error: nota no válida");
      }
   }
}
`,
    },
  ],
  conditional2Java: [
   {
     url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729862114/calculadoraimc_fbak4i.png",
     codeJava: `
/*
IMC = Peso/(altura)^2
Locale localeUS = Locale.US;       // Inglés de EE.UU.
Locale localeUK = Locale.UK;       // Inglés del Reino Unido
Locale localeFR = Locale.FRANCE;   // Francés de Francia
Locale localeES = Locale.SPAIN;    // Español de España
 */

package _1Condicionales2;

//Para evitar la excepción al poner . en double
//import java.util.Locale;  

import java.util.Scanner;

public class CalculadoraIMC {
    public static void main(String[] args) {
        
        //Scanner scanner = new Scanner(System.in).useLocale(Locale.US);
        Scanner scanner = new Scanner(System.in);

        System.out.print("Introduce tu peso en kg: ");
        double peso = scanner.nextDouble();

        System.out.print("Introduce tu altura en metros: ");
        double altura = scanner.nextDouble();

        double imc = peso / (altura * altura);

        System.out.println("Tu índice de masa corporal es: " + imc);

        if (imc < 18.5) {
            System.out.println("Estás en la categoría de bajo peso.");
        } else if (imc >= 18.5 && imc < 24.9) {
            System.out.println("Estás en la categoría de peso normal.");
        } else if (imc >= 25 && imc < 29.9) {
            System.out.println("Estás en la categoría de sobrepeso.");
        } else {
            System.out.println("Estás en la categoría de obesidad.");
        }
    }
}

`
   },
   {
     url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729862114/diassemana_oghiue.png",
     codeJava: `/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package _1Condicionales2;

import java.util.Scanner;

public class DiasSemana {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Solicitar al usuario que introduzca un número entre 1 y 7
        System.out.print("Introduce un número entre 1 y 7 para seleccionar un día de la semana: ");
        int opcion = scanner.nextInt();

        // Estructura switch para los días de la semana  java 12
        switch (opcion) {
            case 1:
                System.out.println("Lunes");
                break;
            case 2:
                System.out.println("Martes");
                break;
            case 3:
                System.out.println("Miércoles");
                break;
            case 4:
                System.out.println("Jueves");
                break;
            case 5:
                System.out.println("Viernes");
                break;
            case 6:
                System.out.println("Sábado");
                break;
            case 7:
                System.out.println("Domingo");
                break;
            default:
                System.out.println("Número no válido. Por favor, introduce un número entre 1 y 7.");
                break;
        }
    }
}`
   },
   {
     url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729862245/parimpar_oobrlw.png",
     codeJava: `/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package _1Condicionales2;

import java.util.Scanner;

public class ParImpar {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Introduce un número entero: ");
        int numero = scanner.nextInt();
        
        // Operador modulo en java %  y se usa para obtener resto
        //Si numero % 2 es 0, significa que numero es divisible por 2 sin dejar un resto, lo que indica que el número es par.
        if (numero % 2 == 0) {
            System.out.println(numero + " es un número par.");
        } else {
            System.out.println(numero + " es un número impar.");
        }
    }
}
`
   },
   {
     url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729862114/calculadoradescuento_vubjpd.png",
     codeJava: `/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package _1Condicionales2;

import java.util.Scanner;

public class CalculadoraDescuento {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Introduce el precio original: ");
        double precioOriginal = scanner.nextDouble();

        System.out.print("Introduce el porcentaje de descuento: ");
        double descuento = scanner.nextDouble();

        if (descuento >= 0 && descuento <= 100) {
            double precioFinal = precioOriginal - (precioOriginal * descuento / 100);
            System.out.println("El precio con descuento es: " + precioFinal);
        } else {
            System.out.println("Porcentaje de descuento no válido.");
        }
    }
}

`
   },
   {
     url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729862116/cajeroautomatico_m4qgmp.png",
     codeJava: ``
   },
   {
     url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729862116/calculotarifa_ptnqhb.png",
     codeJava: `/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package _1Condicionales2;

import java.util.Scanner;

public class CalculoTarifa {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Tarifa base
        double tarifaBase = 100.0;

        // Solicitar la edad del usuario
        System.out.print("Introduce tu edad: ");
        int edad = scanner.nextInt();

        double tarifaFinal = tarifaBase;

        // Verificar condiciones de descuento
        if (edad < 12) {
            tarifaFinal = tarifaBase * 0.5; // 50% de descuento
            System.out.println("Te corresponde un 50% de descuento.");
        } else if (edad >= 65) {
            tarifaFinal = tarifaBase * 0.7; // 30% de descuento
            System.out.println("Te corresponde un 30% de descuento.");
        } else {
            System.out.println("No tienes descuento.");
        }

        System.out.println("El total a pagar es: " + tarifaFinal);
    }
}
`
   },
   {
     url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729862120/calculadoraconcondicionales_oraup1.png",
     codeJava: `package _1Condicionales2;
import java.util.Scanner;
public class CalculadoraConCondicionales {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);         // Solicitar números al usuario
        System.out.print("Introduce el primer número: ");
        double numero1 = scanner.nextDouble();
        System.out.print("Introduce el segundo número: ");
        double numero2 = scanner.nextDouble();         // Solicitar la operación al usuario
        System.out.print("Introduce la operación (+, -, *, /): ");
        char operacion = scanner.next().charAt(0);         // Variables para almacenar el resultado
        double resultado = 0;
        boolean operacionValida = true;         // Condicionales para realizar la operación correspondiente
        if (operacion == '+') {
            resultado = numero1 + numero2;
        } else if (operacion == '-') {
            resultado = numero1 - numero2;
        } else if (operacion == '*') {
            resultado = numero1 * numero2;
        } else if (operacion == '/') {
            if (numero2 != 0) {
                resultado = numero1 / numero2;
            } else {
                System.out.println("Error: No se puede dividir entre cero.");
                operacionValida = false;
            }
        } else {
            System.out.println("Operación no válida.");
            operacionValida = false;
        }
        // Mostrar el resultado si la operación fue válida
        if (operacionValida) {
            System.out.println("El resultado es: " + resultado);
        }
    }
}

`
   },
   ]
};

export default programacionNotas;
