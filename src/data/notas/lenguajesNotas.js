const lenguajeNotas = {
  ejemplo:[
    { url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729204217/marcas2_xolned.png", code: "html_intro_code2" },
    { url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729204210/marcas3_jtrwa1.png", code: "html_intro_code3" },
    { url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729204220/marcas4_shcoss.png", code: "html_intro_code4" },
  ],

  introHtml: [
    { url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729204188/marcas1_pi4beh.png", code: "html_intro_code1" },
    { url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729204217/marcas2_xolned.png", code: "html_intro_code2" },
    { url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729204210/marcas3_jtrwa1.png", code: "html_intro_code3" },
    { url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729204220/marcas4_shcoss.png", code: "html_intro_code4" },
    { url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729204216/marcas5_ev3d0g.png", code: "html_intro_code5" },
  ],

  basicoHtml: [
    {  title:"Etiquetas <h></h>", url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730716355/1_euurby.png", 
        code: `
      <!-- El DOCTYPE que debe iniciar cualquier archivo HTML puede contener lo que a algunas personas les parece una declaración de 
idioma. No obstante, indica el idioma del esquema asociado con este documento, no tiene nada que ver con el idioma del 
documento mismo.-->

<!DOCTYPE html>l

<!--
Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
Click nbfs://nbhost/SystemFileSystem/Templates/Other/html.html to edit this template
-->

<html lang="es" dir="ltr">

    <!-- El atributo lang para establecer el idioma del documento o un rango de texto. Por ejemplo, lo siguiente establece 
    el idioma predeterminado en Español -->

    <!-- El atributo global dir es un atributo enumerado que indica la direccionalidad del texto de los elementos. 
    Puede tener los siguientes valores : ltr , significa izquierda a derecha y es usado para los lenguajes que son 
    escritos de izquierda a derecha ( como el Inglés ) -->

    <head>

        <!--La cabecera se inicia con la etiqueta <head> es la primera de las dos partes en que se estructura un documento HTML. 
        En la cabecera reside información acerca del documento, y generalmente no se ve cuando se navega por él. -->

        <title>Iniciandonos en HTML</title>    <!-- En la cabecera se pone el elemento lleno <title> que es una breve 
                                               descripción que identifica la página -->

        <meta charset="UTF-8">
        <!-- El elemento meta con atributo charset en un documento HTML está el destinado a indicar la codificación de 
        caracteres utilizada (charset).UTF-8 es el sistema de codificación más extendido -->

        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- viewport prmite determinar el ancho de la zona de representación de la página, la escala inicial o las posibilidades
        de escalado que se aplica a la página
        Con initial-scale=1 conseguimos definir la escala inicial del documento para evitar transformaciones
        Width: anchura virtual (emulada) de la pantalla o anchura del viewport.-->
        

    </head>    <!--Este es el cierre de la cabecera </head>  -->

    <body>
        <!-- La etiqueta HTLM <body> se utiliza para definir el cuerpo del documento HTML. Específicamente, es la parte en donde
        se describe el contenido de la página, colores, forma, estructura, texto, imágenes -->

        
        <!-- El atributo align en HTML se usa para especificar la alineación del contenido de texto.
        Los textos se pueden:
            center = Centrado
            left = izquierda
            right = derecha
        -->
        
        <h1 align="center">1 Este es el primer código HTML para THEPOWER</h1><!-- El código siguiente muestra unos pocos encabezados con algo de 
                                                            contenido debajo de ellos -->
        <h2>2 Este es el primer código HTML para THEPOWER</h2>
        <h3>3 Este es el primer código HTML para THEPOWER</h3>
        <h4>4 Este es el primer código HTML para THEPOWER</h4>
        <h5>5 Este es el primer código HTML para THEPOWER</h5>
        <h6>6 Este es el primer código HTML para THEPOWER</h6>

    <br><!--  el Br crea un salto de línea -->
        <p align="center"> El apasionante mundo de la programación</p> <!-- Parrafos de texto -->
    <br><!--  el Br crea un salto de línea -->

        
    </body>

</html>
` },
    {  title:"Etiquetas <h></h> |  <input/>",  url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730716444/2_h0m2fe.png", code: `
      <!-- El DOCTYPE que debe iniciar cualquier archivo HTML puede contener lo que a algunas personas les parece una declaración de 
idioma. No obstante, indica el idioma del esquema asociado con este documento, no tiene nada que ver con el idioma del 
documento mismo.-->

<!DOCTYPE html>

<!--
Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
Click nbfs://nbhost/SystemFileSystem/Templates/Other/html.html to edit this template
-->

<html lang="es" dir="ltr">

    <!-- El atributo lang para establecer el idioma del documento o un rango de texto. Por ejemplo, lo siguiente establece 
    el idioma predeterminado en Español -->

    <!-- El atributo global dir es un atributo enumerado que indica la direccionalidad del texto de los elementos. 
    Puede tener los siguientes valores : ltr , significa izquierda a derecha y es usado para los lenguajes que son 
    escritos de izquierda a derecha ( como el Inglés ) -->

    <head>

        <!--La cabecera se inicia con la etiqueta <head> es la primera de las dos partes en que se estructura un documento HTML. 
        En la cabecera reside información acerca del documento, y generalmente no se ve cuando se navega por él. -->

        <title>Iniciandonos en HTML</title>    <!-- En la cabecera se pone el elemento lleno <title> que es una breve 
                                               descripción que identifica la página -->

        <meta charset="UTF-8">
        <!-- El elemento meta con atributo charset en un documento HTML está el destinado a indicar la codificación de 
        caracteres utilizada (charset).UTF-8 es el sistema de codificación más extendido -->

        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- viewport prmite determinar el ancho de la zona de representación de la página, la escala inicial o las posibilidades
        de escalado que se aplica a la página
        Con initial-scale=1 conseguimos definir la escala inicial del documento para evitar transformaciones
        Width: anchura virtual (emulada) de la pantalla o anchura del viewport.-->
               
    </head>    <!--Este es el cierre de la cabecera </head>  -->

    <body>
        <!-- La etiqueta HTLM <body> se utiliza para definir el cuerpo del documento HTML. Específicamente, es la parte en donde
        se describe el contenido de la página, colores, forma, estructura, texto, imágenes -->

        
        <!-- El atributo align en HTML se usa para especificar la alineación del contenido de texto.
        Los textos se pueden:
             center = Centrado
             left = izquierda
             right = derecha
        -->
        
        <h1 align="center">1 Este es el primer código HTML para THEPOWER</h1>
        <!-- El código siguiente muestra unos pocos encabezados con algo de contenido debajo de ellos -->
        
        <h2 id="encabezado" class=" "style="background-color: aquamarine;">2 Este es el primer código HTML para THEPOWER</h2>
        
        <p class=" " style="background-color: aquamarine;"> 2 Este es el primer código HTML para THEPOWER</p>
        
        <h3>3 Este es el primer código HTML para THEPOWER</h3>
        <h4>4 Este es el primer código HTML para THEPOWER</h4>
        <h5>5 Este es el primer código HTML para THEPOWER</h5>
        <h6>6 Este es el primer código HTML para THEPOWER</h6>

    <br><!--  el Br crea un salto de línea -->

        <p align="center"> El apasionante mundo de la programación</p> <!-- Parrafos de texto -->
    <br><!--  el Br crea un salto de línea -->

        <input type="text" tabindex="1"><!--El tabindexatributo especifica el orden de tabulación de un elemento (cuando se 
                                        utiliza el botón "tabulador" para navegar -->
        <input type="text" tabindex="2"><!-- El tabindexatributo especifica el orden de tabulación de un elemento (cuando se 
                                        utiliza el botón "tabulador" para navegar  -->  
        
        <!--La <a>etiqueta define un hipervínculo, que se utiliza para enlazar de una página a otra.
        href es el atributo, que indica el destino del enlace.-->
        
        <a href="https://medac.es/fp-madrid/calle-brasil-18-fuenlabrada">THEPOWER</a>
        
    <body>
</html>
` },
    {  title:"Etiquetas <ul></ul> | <ol></ol> | <li></li>",  url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730720191/3_phya4i.png", code: `
      <!-- El DOCTYPE que debe iniciar cualquier archivo HTML puede contener lo que a algunas personas les parece una declaración de 
idioma. No obstante, indica el idioma del esquema asociado con este documento, no tiene nada que ver con el idioma del 
documento mismo.-->

<!DOCTYPE html>

<!--
Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
Click nbfs://nbhost/SystemFileSystem/Templates/Other/html.html to edit this template
-->

<html lang="es" dir="ltr">

    <!-- El atributo lang para establecer el idioma del documento o un rango de texto. Por ejemplo, lo siguiente establece 
    el idioma predeterminado en Español -->

    <!-- El atributo global dir es un atributo enumerado que indica la direccionalidad del texto de los elementos. 
    Puede tener los siguientes valores : ltr , significa izquierda a derecha y es usado para los lenguajes que son 
    escritos de izquierda a derecha ( como el Inglés ) -->

    <head>

        <!--La cabecera se inicia con la etiqueta <head> es la primera de las dos partes en que se estructura un documento HTML. 
        En la cabecera reside información acerca del documento, y generalmente no se ve cuando se navega por él. -->

        <title>Iniciandonos en HTML</title>    <!-- En la cabecera se pone el elemento lleno <title> que es una breve 
                                               descripción que identifica la página -->

        <meta charset="UTF-8">
        <!-- El elemento meta con atributo charset en un documento HTML está el destinado a indicar la codificación de 
        caracteres utilizada (charset).UTF-8 es el sistema de codificación más extendido -->

        <meta name="copyright" content="Propietario del copyright" />
        <!--Estos dos meta tags anteriores, de uso opcional desde el punto legal, permiten hacer referencia al diseñador de una 
        página web y al propietario de los derechos del código fuente de una página HTML. En algunos sistemas de gestión de 
        contenido (CMS), las etiquetas de autor se generan automáticamente y en ellas se nombra a la persona que ha trabajado 
        la página en último lugar. De esta forma, los administradores pueden extraer del directorio quién gestiona cada 
        página.. -->

        
    </head>    <!--Este es el cierre de la cabecera </head>  -->
    
    <body>
        <!-- La etiqueta HTLM <body> se utiliza para definir el cuerpo del documento HTML. Específicamente, es la parte en donde
        se describe el contenido de la página, colores, forma, estructura, texto, imágenes -->


        <!-----------------  LISTA ORDENADA    ------------------>
        
        <!-- La etiqueta <li> identifica cada uno de los elementos por lista -->
        <!-- La etiqueta <ol> identifica una lista ordenada -->
        
        <ol>
            <li>Despertar</li>
            <li>Desayunar</li>
            <li>Ducharse</li>
            <li>Vestirse</li>
            <li>Transporte</li>

        </ol>
            <hr> <!--<hr> representa un cambio de tema entre párrafos-->
            
        <!-----------------  LISTA NO ORDENADA   ------------------>

        <!-- La etiqueta <li> identifica cada uno de los elementos por lista -->
        <!-- La etiqueta <ul> identifica una lista no ordenada -->

        <ul>
            <li>Lunes</li>
            <li>Martes</li>
            <li>Miercoles</li>
            <li>Jueves</li>
            <li>Viernes</li>
        </ul>
            <hr><!--<hr> representa un cambio de tema entre párrafos-->
            
        <!-----------------  LISTA NO OREDENADA CON VALOR ASIGNADO   ------------------>
        
        <!-- <data> contiene el valor asignado al elemento -->

        <ul>
            <li>Ingresos anuales: <data value="">12345</data></li>
            <li>Número de unidades: <data value="">54321</data></li>
            <li>Vendedor del año: <data value="">José David Ventura</data></li>
            <li>Número de empleado: <data value="">1</data></li>
        </ul>
        <hr><!--<hr> representa un cambio de tema entre párrafos-->

        <!-----------------  MARCADO DE DATOS   ------------------>

        <!-- <mark> resalta el texto marcándolo en color amarillo, tal y como se hace con un rotulador en un papel-->
        <P>El contenido de este <mark>manual</mark> está <mark>actualizado</mark></p>
     
            <hr><!--<hr> representa un cambio de tema entre párrafos-->


        <!-----------------  PIË DE PÄGINA   ------------------>
        <footer>
            <p>pié de página</p>
            <hr><!--<hr> representa un cambio de tema entre párrafos-->

        </footer>

    </body>


        
</html>
` },

    { url: "", code: `` },
    { url: "", code: `` },
  ],

  basicoForm: [
    {  title:"Form básico",  url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730730228/4_nzbfdp.png", code: `<!-- Error Carácteres -->

        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Formulario de Ejemplo</title>
        </head>
        <body>
            <h1>Formulario de Ejemplo</h1>
            <form action="procesar.php" method="POST">
                
                <!-- Etiqueta y campo para el nombre -->
                <label for="nombre">Nombre:</label>
                <!--  La etiqueta <label> en HTML se utiliza para asociar un texto descriptivo con un elemento de formulario, -->
                
                <input type="text" id="nombre" name="nombre" required><br><br>
                <!-- Atributo 'type' especifica el tipo de entrada (texto) -->
                <!-- Atributo 'id' proporciona una identificación única para el campo -->
                <!-- Atributo 'name' es el nombre que se enviará con el formulario -->
                <!-- Atributo 'required' indica que este campo es obligatorio -->
        
                <!-- Etiqueta y campo para el correo electrónico -->
                <label for="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" required><br><br>
        
                <!-- Etiqueta y campo para la edad -->
                <label for="edad">Edad:</label>
                <input type="number" id="edad" name="edad" min="16" required><br><br>
                <!-- Atributo 'min' establece el valor mínimo permitido -->
                <!-- Atributo 'required' indica que este campo es obligatorio -->
        
                <!-- Etiqueta y menú desplegable para el sexo -->
                <label for="sexo">Sexo:</label>
                <!-- Atributo 'id' proporciona una identificación única para el menú desplegable -->
                <!-- Atributo 'name' es el nombre que se enviará con el formulario -->
                <!-- Atributo 'required' indica que este campo es obligatorio -->
                <select id="sexo" name="sexo" required>
                    <!-- 'value' establece el valor que se enviará si se selecciona esta opción -->
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otros">Otros</option>
                </select><br><br>
        
                <!-- Etiqueta y campo de texto grande para comentarios -->
                <label for="comentarios">Comentarios:</label><br>
                <!-- Atributo 'id' proporciona una identificación única para el campo -->
                <!-- Atributo 'name' es el nombre que se enviará con el formulario -->
                <!-- Atributos 'rows' y 'cols' controlan el tamaño visual del área de texto -->
                <textarea id="comentarios" name="comentarios" rows="4" cols="50"></textarea><br><br>
                
                <!-- La etiqueta <textarea> en HTML se utiliza para crear un área de texto multi línea en un formulario web -->
                <!-- Botón de envío con atributos type y value -->
                <!-- Atributo 'type' especifica el tipo de botón (envío) -->
                <!-- Atributo 'value' establece el texto en el botón -->
                
                <input type="submit" value="Enviar">
            </form>
        </body>
        </html>
            ` },
    {title:"Form CV",  url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730736598/5_xetzoh.png", code: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html lang="es" xml:lang="es">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Rellena tu CV</title>
</head>

<body>

<h3>Rellena tu CV</h3>

<!-- La etiqueta form representa una sección de un documento que contiene controles interactivos 
que permite a un usuario enviar información a un servidor web-->
<form action="  " method="post" enctype="multipart/form-data">
    
Nombre <br>

<!-- La etiqueta input muestra una caja donde se introduce texto -->
<input type="text" name="nombre" value="" size="20" maxlength="30" />

<br>

Apellidos <br>
<input type="text" name="apellidos" value="" size="50" maxlength="80" />

<br>

Contraseña <br>
<input type="password" name="contrasena" value="" maxlength="10" />

<br>

DNI <br/>
<input type="text" name="dni" value="" size="10" maxlength="9" />

<br/>

Sexo <br/>

<!--El Atributo checked se usa para indicar que el elemnto esta marcado -->
<input type="radio" name="sexo" value="hombre" checked="checked" />Hombre<br/>
<input type="radio" name="sexo" value="mujer" /> Mujer

<br/><br/>

Incluir mi foto <input type="file" name="foto" />

<br/><br/>

<!-- checkbox es un elemento de entrada que te permite insertar un vector o array de valores -->
<!-- <input name="suscribir" type="checkbox" value="suscribir" checked="checked"/> Suscribirme al boletín de novedades -->


<br/><br/>

<input type="submit" name="enviar" value="Guardar cambios" />
<input type="reset" name="limpiar" value="Borrar los datos introducidos" />


</form>

</body>

</html>` },
    {title:"Tabla gastos 1/2",  url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730736552/6.1_x0oodp.png", code: `<!-- El DOCTYPE que debe iniciar cualquier archivo HTML puede contener lo que a algunas personas les parece una declaración de 
idioma. No obstante, indica el idioma del esquema asociado con este documento, no tiene nada que ver con el idioma del 
documento mismo.-->

<!DOCTYPE html>



<html lang="es" dir="ltr">

    <!-- El atributo lang para establecer el idioma del documento o un rango de texto. Por ejemplo, lo siguiente establece 
    el idioma predeterminado en Español -->

    <!-- El atributo global dir es un atributo enumerado que indica la direccionalidad del texto de los elementos. 
    Puede tener los siguientes valores : ltr , significa izquierda a derecha y es usado para los lenguajes que son 
    escritos de izquierda a derecha ( como el Inglés ) -->

    <head>

        <!--La cabecera se inicia con la etiqueta <head> es la primera de las dos partes en que se estructura un documento HTML. 
        En la cabecera reside información acerca del documento, y generalmente no se ve cuando se navega por él. -->

        <title>Iniciandonos en HTML</title>    <!-- En la cabecera se pone el elemento lleno <title> que es una breve 
        descripción que identifica la página -->

        <meta charset="UTF-8">
        <!-- El elemento meta con atributo charset en un documento HTML está el destinado a indicar la codificación de 
        caracteres utilizada (charset).UTF-8 es el sistema de codificación más extendido -->

        <meta name="copyright" content="Propietario del copyright" />
        <!--Estos dos meta tags anteriores, de uso opcional desde el punto legal, permiten hacer referencia al diseñador de una 
        página web y al propietario de los derechos del código fuente de una página HTML. En algunos sistemas de gestión de 
        contenido (CMS), las etiquetas de autor se generan automáticamente y en ellas se nombra a la persona que ha trabajado 
        la página en último lugar. De esta forma, los administradores pueden extraer del directorio quién gestiona cada 
        página.. -->

        
    </head>    <!--Este es el cierre de la cabecera </head>  -->
    
        <!-----------------  TABLAS HTML:ESTRUCTURAS Y ELEMENTOS    ------------------>

    <body>
        <!-- La etiqueta HTLM <body> se utiliza para definir el cuerpo del documento HTML. Específicamente, es la parte en donde
        se describe el contenido de la página, colores, forma, estructura, texto, imágenes -->


        <!-----------------  <CAPTION>   ------------------>
        
        <!-- <Ccaption> proporciona un título descriptivo a una tabla. Debe se declarado una sola vez al comienzo de la 
        tabla-->
        <caption>Gastos Anuales</caption>
            <hr> <!--<hr> representa un cambio de tema entre párrafos-->
            
        <!-----------------  ENCABEZADO   ------------------>

        <!-- La etiqueta <thead> contiene el conjunto de filas que forman el encabezado de una tabla. Solo debe incluirse una 
        vez por tabla y tiene que ubicarse inmediatamente antes del cuerpo (elemento <tbody>-->
        
        <!-- La etiqueta <th> delimita una celda del encabezado de la tabla. Los elementos <tr> -->
        <!-- Los elementos <tr> define una fila de celdas en una tabla-->   
        <table>
            <colgroup><!-- <colgroup> Permite crear grupos de una o más columnas. También permite asignar atributos comunes
                a todas las columnas agrupadas. La agrupacion se realiza de izauierda a derecha de manera consecutiva utilizando el
                atributo span o agragando elementos <col> --> 
                
                
                <col span="1" style="background-color: white;">
                
        <!-- Los elementos <col> deben estar contenidos dentro de un elemento <colgroup> --> 
                <col span="1" style="background-color: khaki;"> 

                <col span="1" style="background-color: greenyellow;"> 
            </colgroup>

        <!-- El elemento HTML thead define una sección de encabezado en una tabla (elemento HTML table)-->            
                
        <thead>
            <tr><!-- Elemento que representa una fila de una tabla--> 
            <th>Consola</th>
        <!-- <th> delimita una celda del encabezado de la tabla. Estos elementos suelen ubicarse en elementos <tr> que se 
        encuentran, a su vez, en la sección de encabezado <thead> a de pie <tfoot>. Los textos marcados con estas etiquetas 
        se muestran en negrita -->  
        
            <th>Año de Lanzamiento</th>
            <th>Año de retirada</th>
            </tr>
        </thead>

        <tbody> <!-- El elemento tbody contiene a un bloque de filas (tr) que representaa a la sección del cuerpo de una tabla 
                (table). Este elemento puede ser útil para especificar qué filas proveen información de contenido en la tabla, 
                en contraste con aquellas que son parte del encabezado (header) o el pie (footer). -->
            <tr><!-- Elemento que representa una fila de una tabla--> 
                <th>Play Station 1</th>
                <th>1994</th>
                <th>2000</th>
            </tr>
            <tr><!-- Elemento que representa una fila de una tabla--> 
                <th>Play Station 2</th>
                <th>2000</th>
                <th>2004</th>
            </tr>
            <tr><!-- Elemento que representa una fila de una tabla--> 
                <th>Play Station 3</th>
                <th>2006</th>
                <th>2010</th>
            </tr>
            <tr>
                <th>PS4</th>
                <th>2013</th>
                <th>2017</th>
            </tr>
            <tr>
                <th>PS5</th>
                <th>2020</th>
                <th>En venta</th>
            </tr>
        </tbody>
     </table>
    <body>
</html>
` },
    {title:"Tabla gastos 2/2", url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730736594/6.2_vgil6e.png", code: `<!-- El DOCTYPE que debe iniciar cualquier archivo HTML puede contener lo que a algunas personas les parece una declaración de 
idioma. No obstante, indica el idioma del esquema asociado con este documento, no tiene nada que ver con el idioma del 
documento mismo.-->

<!DOCTYPE html>



<html lang="es" dir="ltr">

    <!-- El atributo lang para establecer el idioma del documento o un rango de texto. Por ejemplo, lo siguiente establece 
    el idioma predeterminado en Español -->

    <!-- El atributo global dir es un atributo enumerado que indica la direccionalidad del texto de los elementos. 
    Puede tener los siguientes valores : ltr , significa izquierda a derecha y es usado para los lenguajes que son 
    escritos de izquierda a derecha ( como el Inglés ) -->

    <head>

        <!--La cabecera se inicia con la etiqueta <head> es la primera de las dos partes en que se estructura un documento HTML. 
        En la cabecera reside información acerca del documento, y generalmente no se ve cuando se navega por él. -->

        <title>Iniciandonos en HTML</title>    <!-- En la cabecera se pone el elemento lleno <title> que es una breve 
        descripción que identifica la página -->

        <meta charset="UTF-8">
        <!-- El elemento meta con atributo charset en un documento HTML está el destinado a indicar la codificación de 
        caracteres utilizada (charset).UTF-8 es el sistema de codificación más extendido -->

        <meta name="copyright" content="Propietario del copyright" />
        <!--Estos dos meta tags anteriores, de uso opcional desde el punto legal, permiten hacer referencia al diseñador de una 
        página web y al propietario de los derechos del código fuente de una página HTML. En algunos sistemas de gestión de 
        contenido (CMS), las etiquetas de autor se generan automáticamente y en ellas se nombra a la persona que ha trabajado 
        la página en último lugar. De esta forma, los administradores pueden extraer del directorio quién gestiona cada 
        página.. -->

        
    </head>    <!--Este es el cierre de la cabecera </head>  -->
    
        <!-----------------  TABLAS HTML:ESTRUCTURAS Y ELEMENTOS    ------------------>

    <body>
        <!-- La etiqueta HTLM <body> se utiliza para definir el cuerpo del documento HTML. Específicamente, es la parte en donde
        se describe el contenido de la página, colores, forma, estructura, texto, imágenes -->


        <!-----------------  <CAPTION>   ------------------>
        
        <!-- <Ccaption> proporciona un título descriptivo a una tabla. Debe se declarado una sola vez al comienzo de la 
        tabla-->
        <caption>Gastos Anuales</caption>
            <hr> <!--<hr> representa un cambio de tema entre párrafos-->
            
        <!-----------------  ENCABEZADO   ------------------>

        <!-- La etiqueta <thead> contiene el conjunto de filas que forman el encabezado de una tabla. Solo debe incluirse una 
        vez por tabla y tiene que ubicarse inmediatamente antes del cuerpo (elemento <tbody>-->
        
        <!-- La etiqueta <th> delimita una celda del encabezado de la tabla. Los elementos <tr> -->
        <!-- Los elementos <tr> define una fila de celdas en una tabla-->   
        <table>
            <colgroup><!-- <colgroup> Permite crear grupos de una o más columnas. También permite asignar atributos comunes
                a todas las columnas agrupadas. La agrupacion se realiza de izauierda a derecha de manera consecutiva utilizando el
                atributo span o agragando elementos <col> --> 
                
                
                <col span="1" style="background-color: white;">
                
        <!-- Los elementos <col> deben estar contenidos dentro de un elemento <colgroup> --> 
                <col span="1" style="background-color: khaki;"> 

                <col span="1" style="background-color: greenyellow;"> 
            </colgroup>

        <!-- El elemento HTML thead define una sección de encabezado en una tabla (elemento HTML table)-->            
                
        <thead>
            <tr><!-- Elemento que representa una fila de una tabla--> 
            <th>Consola</th>
        <!-- <th> delimita una celda del encabezado de la tabla. Estos elementos suelen ubicarse en elementos <tr> que se 
        encuentran, a su vez, en la sección de encabezado <thead> a de pie <tfoot>. Los textos marcados con estas etiquetas 
        se muestran en negrita -->  
        
            <th>Año de Lanzamiento</th>
            <th>Año de retirada</th>
            </tr>
        </thead>

        <tbody> <!-- El elemento tbody contiene a un bloque de filas (tr) que representaa a la sección del cuerpo de una tabla 
                (table). Este elemento puede ser útil para especificar qué filas proveen información de contenido en la tabla, 
                en contraste con aquellas que son parte del encabezado (header) o el pie (footer). -->
            <tr><!-- Elemento que representa una fila de una tabla--> 
                <th>Play Station 1</th>
                <th>1994</th>
                <th>2000</th>
            </tr>
            <tr><!-- Elemento que representa una fila de una tabla--> 
                <th>Play Station 2</th>
                <th>2000</th>
                <th>2004</th>
            </tr>
            <tr><!-- Elemento que representa una fila de una tabla--> 
                <th>Play Station 3</th>
                <th>2006</th>
                <th>2010</th>
            </tr>
            <tr>
                <th>PS4</th>
                <th>2013</th>
                <th>2017</th>
            </tr>
            <tr>
                <th>PS5</th>
                <th>2020</th>
                <th>En venta</th>
            </tr>
        </tbody>
     </table>
    <body>
</html>
` },
{  title:"Script de JavaScript",  url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730736550/7_uy0250.png", code: `<!-- El DOCTYPE que debe iniciar cualquier archivo HTML puede contener lo que a algunas personas les parece una declaración de 
idioma. No obstante, indica el idioma del esquema asociado con este documento, no tiene nada que ver con el idioma del 
documento mismo.-->

<!DOCTYPE html>

<!--
Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
Click nbfs://nbhost/SystemFileSystem/Templates/Other/html.html to edit this template
-->

<html lang="es" dir="ltr">

    <!-- El atributo lang para establecer el idioma del documento o un rango de texto. Por ejemplo, lo siguiente establece 
    el idioma predeterminado en Español -->

    <!-- El atributo global dir es un atributo enumerado que indica la direccionalidad del texto de los elementos. 
    Puede tener los siguientes valores : ltr , significa izquierda a derecha y es usado para los lenguajes que son 
    escritos de izquierda a derecha ( como el Inglés ) -->

    <head>

        <!--La cabecera se inicia con la etiqueta <head> es la primera de las dos partes en que se estructura un documento HTML. 
        En la cabecera reside información acerca del documento, y generalmente no se ve cuando se navega por él. -->

        <title>Nuestro primer script en JavaScript</title>    <!-- En la cabecera se pone el elemento lleno <title> que es una breve 
                                               descripción que identifica la página -->

        <meta charset="UTF-8">
        <!-- El elemento meta con atributo charset en un documento HTML está el destinado a indicar la codificación de 
        caracteres utilizada (charset).UTF-8 es el sistema de codificación más extendido -->

        <meta name="copyright" content="Propietario del copyright" />
        <!--Estos dos meta tags anteriores, de uso opcional desde el punto legal, permiten hacer referencia al diseñador de una 
        página web y al propietario de los derechos del código fuente de una página HTML. En algunos sistemas de gestión de 
        contenido (CMS), las etiquetas de autor se generan automáticamente y en ellas se nombra a la persona que ha trabajado 
        la página en último lugar. De esta forma, los administradores pueden extraer del directorio quién gestiona cada 
        página.. -->


    </head>    <!--Este es el cierre de la cabecera </head>  -->

    <body>
        <!-- La etiqueta HTLM <body> se utiliza para definir el cuerpo del documento HTML. Específicamente, es la parte en donde
        se describe el contenido de la página, colores, forma, estructura, texto, imágenes -->
        <script>
            alert("¡Hola Mundo!");
        </script>
    </body>

</html>
` },
{  title:"Form CV  Desplegables 1/2",  url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730736550/8.1_kdikjh.png", code: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="es" xml:lang="es">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Rellena tu CV</title>
</head>

<body>

<h3>Rellena tu CV</h3>

<form action="/php/insertar_cv.php" method="post" enctype="multipart/form-data">

<!-- El <fieldset> define un conjunto de campos de formulario relacionados, mientras que <legend> se usa para describir o etiquetar 
ese conjunto de campos. Usualmente, se encuentra dentro del elemento <fieldset> -->
<fieldset>
    
  <!-- La etiqueta <legend> se utiliza en HTML en combinación con el elemento <fieldset> para proporcionar un título o una descripción 
  para un grupo de elementos relacionados en un formulario -->
  <legend>Datos personales</legend>

  <label for="provincia">Provincia</label> <br/>
  <!-- La etiqueta <label> en HTML se utiliza para asociar un texto descriptivo con un elemento de formulario -->
  
  <select id="provincia" name="provincia">
    <option value="" selected="selected">- selecciona -</option>
    
   <!-- "value" está vacío es para indicar que esta opción no tiene un valor específico asociado a ella. Por lo tanto, si un usuario 
   selecciona esta opción predeterminada y envía el formulario, no se enviará ningún valor correspondiente a esa opción. -->
    
    <option value="01">Álava/Araba</option>
    <!-- Estos valores pueden ser útiles en el procesamiento de formularios en el lado del servidor. Cuando el formulario se envía,
    el servidor web puede recibir el valor seleccionado y realizar acciones basadas en ese valor. Por ejemplo, el servidor podría usar 
    el valor "01" para identificar la provincia de Álava/Araba en lugar de tener que analizar el texto completo "Álava/Araba" -->
    
    <option value="02">Albacete</option>
    <option value="03">Alicante/Alacant</option>
    <option value="04">Almería</option>
    <option value="33">Asturias</option>
    <option value="05">Ávila</option>
    <option value="06">Badajoz</option>
    <option value="07">Balears (Illes)</option>
    <option value="08">Barcelona</option>
    <option value="09">Burgos</option>
    <option value="10">Cáceres</option>
    <option value="11">Cádiz</option>
    <option value="12">Cantabria</option>
    <option value="13">Castellón/Castelló</option>
    <option value="14">Ceuta</option>
    <option value="15">Ciudad Real</option>
    <option value="16">Córdoba</option>
    <option value="17">Coruña (A)</option>
    <option value="18">Cuenca</option>
    <option value="19">Girona</option>
    <option value="20">Granada</option>
    <option value="21">Guadalajara</option>
    <option value="22">Guipúzcoa/Gipuzkoa</option>
    <option value="23">Huelva</option>
    <option value="24">Huesca</option>
    <option value="25">Jaén</option>
    <option value="26">León</option>
    <option value="27">Lugo</option>
    <option value="28">Lleida</option>
    <option value="29">Madrid</option>
    <option value="30">Málaga</option>
    <option value="31">Melilla</option>
    <option value="32">Murcia</option>
    <option value="33">Navarra</option>
    <option value="34">Ourense</option>
    <option value="35">Palencia</option>
    <option value="36">Palmas (Las)</option>
    <option value="37">Pontevedra</option>
    <option value="38">Rioja (La)</option>
    <option value="39">Salamanca</option>
    <option value="40">Santa Cruz de Tenerife</option>
    <option value="41">Segovia</option>
    <option value="42">Sevilla</option>
    <option value="43">Soria</option>
    <option value="44">Tarragona</option>
    <option value="45">Teruel</option>
    <option value="46">Toledo</option>
    <option value="47">Valencia/València</option>
    <option value="48">Valladolid</option>
    <option value="49">Vizcaya/Bizkaia</option>
    <option value="50">Zamora</option>
    <option value="51">Zaragoza</option>
  </select>

  <br/><br/> <!-- Saltos de Línea -->

  <label for="fecha_dia">Fecha de nacimiento</label> <br/>
  
  <input type="text" size="3" maxlength="2" id="fecha_dia" name="fecha_dia" />
  <!-- type="text": Este atributo "type" especifica que se trata de un campo de entrada de texto, lo que significa que el usuario 
  puede ingresar texto o números en este campo.
  size="3": El atributo "size" determina el ancho visual del campo de entrada en caracteres. En este caso, se establece en 3 
  maxlength="2": El atributo "maxlength" establece la longitud máxima de caracteres que el usuario puede ingresar en el campo de entrada.
  En este caso, se limita a 2 caracteres-->
  
  de
  <select id="fecha_mes" name="fecha_mes">
    <option value="1">Enero</option>
    <option value="2">Febrero</option>
    <option value="3">Marzo</option>
    <option value="4">Abril</option>
    <option value="5">Mayo</option>
    <option value="6">Junio</option>
    <option value="7">Julio</option>
    <option value="8">Agosto</option>
    <option value="9">Septiembre</option>
    <option value="10">Octubre</option>
    <option value="11">Noviembre</option>
    <option value="12">Diciembre</option>
  </select>
  de
  <input type="text" size="5" maxlength="4" id="fecha_ano" name="fecha_ano" />

  <br/><br/>

  <label for="temasDeInteres">Temas de interés</label> <br/>
  
  <select multiple="multiple" size="5" id="temasDeInteres" name="temasDeInteres">
  <!-- multiple="multiple": El atributo "multiple" se utiliza para permitir que se seleccionen múltiples opciones en el menú 
  desplegable -->   
   
    <option value="3105">Administración de bases de datos</option>
    <option value="3106">Análisis y programación</option>
    <option value="3107">Arquitectura</option>
    <option value="3108">Calidad</option>
    <option value="3109">ERP, CRM, Business Intelligence</option>
    <option value="3110">Gestión de proyectos</option>
    <option value="3111">Hardware, redes y seguridad</option>
    <option value="3112">Helpdesk</option>
    <option value="3113">Sistemas</option>
    <option value="3114">Telecomunicaciones</option>
  </select>
</fieldset>

</form>

</body>

</html>` },
{  title:"Form CV  Desplegables 2/2",  url: `https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730736592/8.2_yqboa2.png`, 
code: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="es" xml:lang="es">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Rellena tu CV</title>
</head>

<body>

<h3>Rellena tu CV</h3>

<form action="/php/insertar_cv.php" method="post" enctype="multipart/form-data">

<!-- El <fieldset> define un conjunto de campos de formulario relacionados, mientras que <legend> se usa para describir o etiquetar 
ese conjunto de campos. Usualmente, se encuentra dentro del elemento <fieldset> -->
<fieldset>
    
  <!-- La etiqueta <legend> se utiliza en HTML en combinación con el elemento <fieldset> para proporcionar un título o una descripción 
  para un grupo de elementos relacionados en un formulario -->
  <legend>Datos personales</legend>

  <label for="provincia">Provincia</label> <br/>
  <!-- La etiqueta <label> en HTML se utiliza para asociar un texto descriptivo con un elemento de formulario -->
  
  <select id="provincia" name="provincia">
    <option value="" selected="selected">- selecciona -</option>
    
   <!-- "value" está vacío es para indicar que esta opción no tiene un valor específico asociado a ella. Por lo tanto, si un usuario 
   selecciona esta opción predeterminada y envía el formulario, no se enviará ningún valor correspondiente a esa opción. -->
    
    <option value="01">Álava/Araba</option>
    <!-- Estos valores pueden ser útiles en el procesamiento de formularios en el lado del servidor. Cuando el formulario se envía,
    el servidor web puede recibir el valor seleccionado y realizar acciones basadas en ese valor. Por ejemplo, el servidor podría usar 
    el valor "01" para identificar la provincia de Álava/Araba en lugar de tener que analizar el texto completo "Álava/Araba" -->
    
    <option value="02">Albacete</option>
    <option value="03">Alicante/Alacant</option>
    <option value="04">Almería</option>
    <option value="33">Asturias</option>
    <option value="05">Ávila</option>
    <option value="06">Badajoz</option>
    <option value="07">Balears (Illes)</option>
    <option value="08">Barcelona</option>
    <option value="09">Burgos</option>
    <option value="10">Cáceres</option>
    <option value="11">Cádiz</option>
    <option value="12">Cantabria</option>
    <option value="13">Castellón/Castelló</option>
    <option value="14">Ceuta</option>
    <option value="15">Ciudad Real</option>
    <option value="16">Córdoba</option>
    <option value="17">Coruña (A)</option>
    <option value="18">Cuenca</option>
    <option value="19">Girona</option>
    <option value="20">Granada</option>
    <option value="21">Guadalajara</option>
    <option value="22">Guipúzcoa/Gipuzkoa</option>
    <option value="23">Huelva</option>
    <option value="24">Huesca</option>
    <option value="25">Jaén</option>
    <option value="26">León</option>
    <option value="27">Lugo</option>
    <option value="28">Lleida</option>
    <option value="29">Madrid</option>
    <option value="30">Málaga</option>
    <option value="31">Melilla</option>
    <option value="32">Murcia</option>
    <option value="33">Navarra</option>
    <option value="34">Ourense</option>
    <option value="35">Palencia</option>
    <option value="36">Palmas (Las)</option>
    <option value="37">Pontevedra</option>
    <option value="38">Rioja (La)</option>
    <option value="39">Salamanca</option>
    <option value="40">Santa Cruz de Tenerife</option>
    <option value="41">Segovia</option>
    <option value="42">Sevilla</option>
    <option value="43">Soria</option>
    <option value="44">Tarragona</option>
    <option value="45">Teruel</option>
    <option value="46">Toledo</option>
    <option value="47">Valencia/València</option>
    <option value="48">Valladolid</option>
    <option value="49">Vizcaya/Bizkaia</option>
    <option value="50">Zamora</option>
    <option value="51">Zaragoza</option>
  </select>

  <br/><br/> <!-- Saltos de Línea -->

  <label for="fecha_dia">Fecha de nacimiento</label> <br/>
  
  <input type="text" size="3" maxlength="2" id="fecha_dia" name="fecha_dia" />
  <!-- type="text": Este atributo "type" especifica que se trata de un campo de entrada de texto, lo que significa que el usuario 
  puede ingresar texto o números en este campo.
  size="3": El atributo "size" determina el ancho visual del campo de entrada en caracteres. En este caso, se establece en 3 
  maxlength="2": El atributo "maxlength" establece la longitud máxima de caracteres que el usuario puede ingresar en el campo de entrada.
  En este caso, se limita a 2 caracteres-->
  
  de
  <select id="fecha_mes" name="fecha_mes">
    <option value="1">Enero</option>
    <option value="2">Febrero</option>
    <option value="3">Marzo</option>
    <option value="4">Abril</option>
    <option value="5">Mayo</option>
    <option value="6">Junio</option>
    <option value="7">Julio</option>
    <option value="8">Agosto</option>
    <option value="9">Septiembre</option>
    <option value="10">Octubre</option>
    <option value="11">Noviembre</option>
    <option value="12">Diciembre</option>
  </select>
  de
  <input type="text" size="5" maxlength="4" id="fecha_ano" name="fecha_ano" />

  <br/><br/>

  <label for="temasDeInteres">Temas de interés</label> <br/>
  
  <select multiple="multiple" size="5" id="temasDeInteres" name="temasDeInteres">
  <!-- multiple="multiple": El atributo "multiple" se utiliza para permitir que se seleccionen múltiples opciones en el menú 
  desplegable -->   
   
    <option value="3105">Administración de bases de datos</option>
    <option value="3106">Análisis y programación</option>
    <option value="3107">Arquitectura</option>
    <option value="3108">Calidad</option>
    <option value="3109">ERP, CRM, Business Intelligence</option>
    <option value="3110">Gestión de proyectos</option>
    <option value="3111">Hardware, redes y seguridad</option>
    <option value="3112">Helpdesk</option>
    <option value="3113">Sistemas</option>
    <option value="3114">Telecomunicaciones</option>
  </select>
</fieldset>

</form>

</body>

</html>`, 
 },
],
complexForm: [
    {  title:"Post",  url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730763351/post3_g5gzfx.png", code: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejemplo de Formulario POST</title>
</head>
<body>
    <h1>Formulario con Método POST</h1>
    <p>Este formulario enviará los datos a través del método POST, por lo que los datos no serán visibles en la URL.</p>
    
    <form action="/buscar" method="POST">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre"><br><br>
        
        <label for="edad">Edad:</label>
        <input type="number" id="edad" name="edad"><br><br>
        
        <button type="submit">Enviar con POST</button>
    </form>
</body>
</html>
` },
    {  title:"Get",  url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730763348/get3_ysmszk.png", code: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejemplo de Formulario GET</title>
</head>
<body>
    <h1>Formulario con Método GET</h1>
    <p>Este formulario enviará los datos a través del método GET, por lo que los datos serán visibles en la URL.</p>
    
    <form action="/buscar" method="GET">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre"><br><br>
        
        <label for="edad">Edad:</label>
        <input type="number" id="edad" name="edad"><br><br>
        
        <button type="submit">Enviar con GET</button>
    </form>
</body>
</html>
` },
    {  title:"Encuesta pelis",  url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730763364/encuesta_pelis_xkpsm3.png", code: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Encuesta de Películas</title>

</head>
<body>
    <h2>Encuesta de Preferencias de Películas</h2>
    <form action="">
        <fieldset>
            <legend>Información Básica</legend>

            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required><br><br>

            <label for="edad">Edad:</label>
            <input type="number" id="edad" name="edad" min="10" max="100" required><br><br>

            <label for="genero">Género Favorito:</label>
            <select id="genero" name="genero">
                <option value="accion">Acción</option>
                <option value="comedia">Comedia</option>
                <option value="drama">Drama</option>
                <option value="terror">Terror</option>
            </select><br><br>
        </fieldset>

        <fieldset>
            <legend>Preferencias de Películas</legend>
            
            <label>¿Te gustan las películas en 3D?</label><br>
            <input type="radio" id="si3d" name="3d" value="si">
            <label for="si3d">Sí</label><br>
            <input type="radio" id="no3d" name="3d" value="no">
            <label for="no3d">No</label><br><br>

            <label for="comentarios">Comentarios:</label><br>
            <textarea id="comentarios" name="comentarios" rows="4" cols="50"></textarea><br><br>
        </fieldset>

        <button type="submit">Enviar Encuesta</button>
    </form>

    <div class="center">
        <h3>Trailer de una Película Reciente</h3>
        <video width="320" height="240" controls>
            <source src="video/236893_small.mp4" type="video/mp4">
            Tu navegador no soporta el elemento de video.
        </video>

        <h3>Imagen relacionada</h3>
        <img src="img/turtle-9144782_1280.jpg" alt="Imagen de tortuga" width="320" height="240">
        <img src="imagen2/copyright-6114655_1280.jpg" alt="Imagen" width="320" height="240">
    </div>
</body>
</html>

` },
    {  title:"Controles de video",  url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730763360/getpost4_pl6zaa.png", code: `<!DOCTYPE html>
<!--
Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/html.html to edit this template
-->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Control de Video</title>
    <style>
        /* Estilos para simular el ajuste de brillo */
        #videoContainer {
            filter: brightness(1);
            transition: filter 0.3s;
        }
    </style>
</head>
<body>
    <h2>Control de Volumen y Brillo del Video</h2>

    <div id="videoContainer">
        <video id="miVideo" width="320" height="240" controls>
            <source src="video/236893_small.mp4" type="video/mp4">
            Tu navegador no soporta el elemento de video.
        </video>
    </div>

    <h3>Ajustes de Video</h3>
    <form>
        <label for="volumen">Nivel de Volumen:</label>
        <input type="range" id="volumen" min="0" max="1" step="0.1" value="1" oninput="ajustarVolumen()">
        <span id="volDisplay">100%</span><br><br>

        <label for="brillo">Nivel de Brillo:</label>
        <input type="range" id="brillo" min="0" max="1" step="0.1" value="1" oninput="ajustarBrillo()">
        <span id="brilloDisplay">100%</span><br><br>
    </form>

    <script>
        // Función para ajustar el volumen del video
        function ajustarVolumen() {
            const video = document.getElementById("miVideo");
            const volumen = document.getElementById("volumen").value;
            video.volume = volumen;
            document.getElementById("volDisplay").innerText = Math.round(volumen * 100) + "%";
        }

        // Función para ajustar el brillo del video
        function ajustarBrillo() {
            const brillo = document.getElementById("brillo").value;
            document.getElementById("videoContainer").style.filter =    AQUI FALTA   brightness(simbolo de dolar y luego (brillo)});
            document.getElementById("brilloDisplay").innerText = Math.round(brillo * 100) + "%";
        }
    </script>
</body>
</html>
` },
    {  title:"Formulario de registro",  url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730763358/formulario_de_registro_p05ysr.png", code: `<!DOCTYPE html>
<!--
Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
Click nbfs://nbhost/SystemFileSystem/Templates/Other/html.html to edit this template
-->

<html lang="es" dir="ltr">
<head>
    <meta charset="UTF-8">
    <title>Formulario de Registro</title>
</head>
<body>
    <h2>Formulario de Registro</h2>
    <form action="" >
        <fieldset>
            <legend>Información Personal</legend>
            
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required><br><br>

            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required><br><br>

            <label for="telefono">Teléfono:</label>
            <input type="tel" id="telefono" name="telefono" maxlength="10"><br><br>

            <label for="genero">Género:</label>
            <select id="genero" name="genero">
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
            </select><br><br>
        </fieldset>
        <br><br>
        <fieldset>
            <legend>Información de Cuenta</legend>

            <label for="usuario">Nombre de Usuario:</label>
            <input type="text" id="usuario" name="usuario" required><br><br>

            <label for="contrasena">Contraseña:</label>
            <input type="password" id="contrasena" name="contraseña" required minlength="8"><br><br>

            <label for="foto">Foto de Perfil:</label>
            <input type="file" id="foto" name="foto" accept=".pdf"><br><br>
        </fieldset>

        <button type="submit">Registrarse</button>
    </form>
</body>
</html>
` },
    {  title:"Configuración de preferencias",  url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730763354/configuracion_de_preferencias_b8tppc.png", code: `<!DOCTYPE html>
<!--
Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/html.html to edit this template
-->
<html lang="es" dir="ltr">
<head>
    <meta charset="UTF-8">
    <title>Configuración de Preferencias</title>
</head>
<body>
    <h2>Configuración de Preferencias</h2>
    <form action="archivo.php" method="post">
        <fieldset>
            <legend>Información Personal</legend>
            
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required><br><br>

            <label for="edad">Edad:</label>
            <input type="number" id="edad" name="edad" min="18" max="99" required><br><br>
        </fieldset>
        
        <br>

        <fieldset>
            <legend>Preferencias de Uso</legend>

            <label for="volumen">Nivel de Volumen:</label>
            <input type="range" id="volumen" name="volumen" min="0" max="100" value="0">
            <span id="volDisplay">0</span>%<br><br>

            <label for="brillo">Nivel de Brillo de Pantalla:</label>
            <input type="range" id="brillo" name="brillo" min="0" max="100" value="0">
            <span id="brilloDisplay">0</span>%<br><br>
        </fieldset>

        <button type="submit">Guardar Configuración</button>
    </form>
</body>
</html>
` },
],
das: [
    {  title:"Form básico",  url: "", code: `` },
    {  title:"Form básico",  url: "", code: `` },
],
 indice:["Aula General","Unidad1", "Unidad2", "Unidad3", "Unidad4","unidad5","unidad6"]
};

export default lenguajeNotas;
