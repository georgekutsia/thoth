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
    { url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730716355/1_euurby.png", code: `
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
    { url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730716444/2_h0m2fe.png", code: `
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
    { url: "", code: `` },
    { url: "", code: `` },
    { url: "", code: `` },
    { url: "", code: `` },
  ],

  basicoForm: [
    { url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729202995/html7_ari7op.png", code: "html_form_code1" },
    { url: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729202990/html8_mszbwu.png", code: "html_form_code2" },
  ],

  indice:["Aula General","Unidad1", "Unidad2", "Unidad3", "Unidad4","unidad5","unidad6"]
};

export default lenguajeNotas;
