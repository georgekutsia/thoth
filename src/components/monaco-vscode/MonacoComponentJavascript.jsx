import  { useEffect, useState } from 'react';
import * as monaco from 'monaco-editor';   // why de fuck asteristco
import "./monaco.css"

function MonacoComponent() {
  const [editor, setEditor] = useState(null);
  const [output, setOutput] = useState('');   

  useEffect(() => {
    const monacoEditor = monaco.editor.create(document.getElementById('editor'), {
      value: `// Define la función holamundo\nfunction holamundo(texto) {\n  console.log(texto);\n}\n\n// Llama a la función con diferentes valores\nholamundo("Hello");\nholamundo("Hola");`,
      language: 'javascript',     
      theme: 'vs-dark'
    });
    setEditor(monacoEditor);

    return () => {
      if (monacoEditor) {
        monacoEditor.dispose();
      }
    };
  }, []);

  const ejecutarCodigo = () => {
    if (editor) {
      const codigo = editor.getValue(); 
      
      try {
        const originalConsoleLog = console.log;
        let resultado = '';
        
        console.log = function(...args) {
          resultado += args.join(' ') + '\n';
          originalConsoleLog.apply(console, args); 
        };

        eval(codigo);
        console.log = originalConsoleLog;

        setOutput(resultado || 'Código ejecutado sin errores.');
      } catch (error) {
        setOutput('Error en el código: ' + error.message);
      }
    }
  };

  return (
    <div>
      <div id="editor"   className='monaco-editor-input'></div>
      <button onClick={ejecutarCodigo} style={{ marginTop: '20px', padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer' }}>
        Ejecutar Código
      </button>

      <div className='monaco-editor-output' style={{ marginTop: '20px', padding: '10px', border: '1px solid grey', backgroundColor: 'black', whiteSpace: 'pre-wrap', color: 'white' }}>
        <h3>Resultado:</h3>
        <h5>{output}</h5>
      </div>
    </div>
  );
}

export default MonacoComponent;
