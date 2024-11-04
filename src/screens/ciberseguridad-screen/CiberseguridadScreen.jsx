import {  MonacoComponentJavascript } from "../../components"
import "./ciberseguridad.css"
function CiberseguridadScreen() {
  return (
    <div className="ciberseguridad-box">
    
    {/* <MonacoComponentJavascript/> */}
    {/* <MonacoComponentJava/> */}
    <table contentEditable="true">
        <thead>
            <tr>
                <th>Importación</th>
                <th>Descripción</th>
                <th >Ejemplo de uso</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>import java.util.Scanner</td>
                <td>Permite leer datos de entrada desde el teclado. Se usa para recibir datos del usuario, como texto, enteros, decimales, etc.</td>
                <td><code>Scanner scanner = new Scanner(System.in);</code></td>
            </tr>
            <tr>
                <td>import java.util.ArrayList</td>
                <td>Proporciona una estructura de datos de lista dinámica que puede contener objetos. Es útil para listas de tamaño variable.</td>
                <td><code>ArrayList&lt;String&gt; list = new ArrayList&lt;&gt;();</code></td>
            </tr>
            <tr>
                <td>import java.util.HashMap</td>
                <td>Implementa una estructura de datos de mapa, donde cada clave única se asocia a un valor. Muy útil para almacenar pares clave-valor.</td>
                <td><code>HashMap&lt;String, Integer&gt; map = new HashMap&lt;&gt;();</code></td>
            </tr>
            <tr>
                <td>import java.util.Date</td>
                <td>Proporciona una clase para manejar fechas y horas. Útil para mostrar y manipular datos de tiempo actuales o pasados.</td>
                <td><code>Date date = new Date();</code></td>
            </tr>
            <tr>
                <td>import java.util.Random</td>
                <td>Genera números aleatorios, que se pueden usar en juegos, simulaciones, o cualquier aplicación que requiera valores aleatorios.</td>
                <td><code>Random random = new Random(); int num = random.nextInt(100);</code></td>
            </tr>
            <tr>
                <td>import java.util.Arrays</td>
                <td>Proporciona métodos para manipular arrays, como ordenar, buscar, o llenar arrays.</td>
                <td><code>Arrays.sort(array);</code></td>
            </tr>
            <tr>
                <td>import java.util.LinkedList</td>
                <td>Implementa una lista doblemente enlazada. Útil para operaciones donde la inserción y eliminación en ambas puntas son importantes.</td>
                <td><code>LinkedList&lt;String&gt; list = new LinkedList&lt;&gt;();</code></td>
            </tr>
            <tr>
                <td>import java.util.Stack</td>
                <td>Proporciona una estructura de datos de tipo pila (LIFO). Útil en algoritmos que requieren reversión o historial.</td>
                <td><code>Stack&lt;Integer&gt; stack = new Stack&lt;&gt;();</code></td>
            </tr>
            <tr>
                <td>import java.util.Queue</td>
                <td>Interfaz para una estructura de datos de tipo cola (FIFO). Común en procesamiento de tareas y simulaciones en cola.</td>
                <td><code>Queue&lt;String&gt; queue = new LinkedList&lt;&gt;();</code></td>
            </tr>
            <tr>
                <td>import java.io.File</td>
                <td>Permite manejar archivos y directorios en el sistema de archivos, como crear, eliminar y leer archivos.</td>
                <td><code>File file = new File("filename.txt");</code></td>
            </tr>
            <tr>
                <td>import java.io.FileWriter</td>
                <td>Proporciona una forma de escribir texto en archivos. Se puede usar junto con File para escribir datos en el sistema de archivos.</td>
                <td><code>FileWriter writer = new FileWriter("file.txt");</code></td>
            </tr>
            <tr>
                <td>import java.io.BufferedReader</td>
                <td>Permite leer texto de una fuente de entrada de manera más eficiente. Suele usarse con FileReader para leer archivos de texto.</td>
                <td><code>BufferedReader reader = new BufferedReader(new FileReader("file.txt"));</code></td>
            </tr>
            <tr>
                <td>import java.text.SimpleDateFormat</td>
                <td>Permite dar formato a las fechas de acuerdo a un patrón especificado. Útil para mostrar fechas en formatos personalizados.</td>
                <td><code>SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");</code></td>
            </tr>
            <tr>
                <td>import java.math.BigInteger</td>
                <td>Maneja enteros de precisión arbitraria, superando los límites de los enteros comunes (int, long). Útil en criptografía o cálculos grandes.</td>
                <td><code>BigInteger bigInt = new BigInteger("1234567890");</code></td>
            </tr>
            <tr>
                <td>import java.math.BigDecimal</td>
                <td>Maneja decimales de precisión arbitraria. Útil para cálculos financieros donde se requiere precisión exacta.</td>
                <td><code>BigDecimal bd = new BigDecimal("123.45");</code></td>
            </tr>
            <tr>
                <td>import java.util.concurrent</td>
                <td>Proporciona clases e interfaces para el manejo de tareas concurrentes, como Executor, Callable, Future. Útil para programación en paralelo y multithreading.</td>
                <td><code>ExecutorService executor = Executors.newFixedThreadPool(5);</code></td>
            </tr>
        </tbody>
    </table>
    </div>
  )
}

export default CiberseguridadScreen