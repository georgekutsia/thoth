import React from "react";
import PropTypes from "prop-types";

/**
 * @typedef {Object} SimulacroOption
 * @property {string} id - Identificador único de la opción.
 * @property {string} name - Nombre de la opción a mostrar.
 */

/**
 * Componente que muestra una selección de opciones para un simulacro.
 *
 * @component
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.title - El título a mostrar para la selección.
 * @param {SimulacroOption[]} props.options - Array de opciones disponibles para seleccionar.
 * @param {Function} props.onSelect - Función a llamar cuando se selecciona una opción. Recibe el id de la opción seleccionada.
 *
 * @returns {React.Element} Un elemento React que representa la selección de simulacro.
 *
 * @example
 * <SimulacroSelection
 *   title="Selecciona un simulacro"
 *   options={[
 *     { id: "sim1", name: "Simulacro 1" },
 *     { id: "sim2", name: "Simulacro 2" },
 *     { id: "mixed", name: "Simulacro Mixto" }
 *   ]}
 *   onSelect={(id) => console.log(`Opción seleccionada: ${id}`)}
 * />
 */
const SimulacroSelection = ({ title, options, onSelect }) => {
  return (
    <div className="simulacro-selection">
      <h2>{title}</h2>
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelect(option.id)}
          className={option.id === "mixed" ? "mix-button" : ""}
        >
          {option.name}
        </button>
      ))}
    </div>
  );
};

SimulacroSelection.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default SimulacroSelection;
