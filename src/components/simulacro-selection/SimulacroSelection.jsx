import React from "react";
import PropTypes from "prop-types";

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
