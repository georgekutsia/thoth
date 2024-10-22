import { useEffect, useState } from 'react';
import * as monaco from 'monaco-editor';

function MonacoComponent() {
  const [editor, setEditor] = useState(null);
  const [output, setOutput] = useState('');

  useEffect(() => {
    // Inicializar el editor de Monaco
    const monacoEditor = monaco.editor.create(document.getElementById('editor'), {
      value: `// Escribe tu código Java aquí\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println("Hola, Mundo!");\n  }\n}`,
      language: 'java',
      theme: 'vs-dark',
    });
    setEditor(monacoEditor);

    // Limpiar el editor cuando el componente se desmonte
    return () => {
      if (monacoEditor) {
        monacoEditor.dispose();
      }
    };
  }, []);

  // Función para ejecutar el código Java
  const ejecutarCodigo = async () => {
    if (editor) {
      const codigo = editor.getValue();  // Obtener el código desde el editor

      try {
        // Hacer una solicitud a la API de JDoodle usando el proxy de Vite
        const response = await fetch('/api/v1/execute', {  // Usar el proxy '/api'
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Client-Id': import.meta.env.VITE_JDOODLE_CLIENT_ID,  // Usar variables de entorno
            'Client-Secret': import.meta.env.VITE_JDOODLE_CLIENT_SECRET,  // Usar variables de entorno
          },
          body: JSON.stringify({
            script: codigo,
            language: 'java',
            versionIndex: '4',
          }),
        });

        // Verificar si la respuesta fue exitosa
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Obtener los datos de la respuesta
        const data = await response.json();
        setOutput(data.output || 'Código ejecutado sin errores.');
      } catch (error) {
        // Manejar errores y mostrar el mensaje
        setOutput('Error en el código: ' + error.message);
      }
    }
  };

  return (
    <div>
      {/* Editor de Monaco */}
      <div id="editor" style={{ width: '800px', height: '400px', border: '1px solid grey' }}></div>
      
      {/* Botón para ejecutar el código */}
      <button onClick={ejecutarCodigo} style={{ marginTop: '20px', padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer' }}>
        Ejecutar Código
      </button>

      {/* Área para mostrar el resultado */}
      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid grey', backgroundColor: 'black', whiteSpace: 'pre-wrap', color: 'white' }}>
        <h3>Resultado:</h3>
        <h5>{output}</h5>
      </div>
    </div>
  );
}

export default MonacoComponent;
