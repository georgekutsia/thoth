import PropTypes from "prop-types";

const FormattedTextComponent = ({ text }) => {
  if (!text) return null;

  // Cambia la expresión regular para que detecte solo fragmentos entre un solo `*` a cada lado
  const colors = text.split(/(\*[^*]*\*)/);

  return colors.map((colorPart, index) => {
    // Si el fragmento está entre un solo `*`, aplicar el color azul
    if (colorPart.startsWith("*") && colorPart.endsWith("*")) {
      const innerText = colorPart.replace(/\*/g, ""); // Quita los `*`
      const parts = innerText.split(/("[^"]*")/);

      return (
        <span key={index} style={{ color: "var(--blue)" }}>
          {parts.map((part, subIndex) => {
            // Aplicar negrita si está entre comillas
            if (part.startsWith('"') && part.endsWith('"')) {
              return <strong key={subIndex}>{part.replace(/"/g, "")}</strong>;
            } else {
              return <span key={subIndex}>{part}</span>;
            }
          })}
        </span>
      );
    } else {
      // Para las partes fuera de `*`, dividir usando `"` para aplicar negrita en comillas
      const parts = colorPart.split(/("[^"]*")/);

      return parts.map((part, subIndex) => {
        if (part.startsWith('"') && part.endsWith('"')) {
          return <strong key={subIndex}>{part.replace(/"/g, "")}</strong>;
        } else {
          return <span key={subIndex}>{part}</span>;
        }
      });
    }
  });
};

FormattedTextComponent.propTypes = {
  text: PropTypes.string,
};

export default FormattedTextComponent;
