import { useRef, useState } from "react";
import "./filter.css";
import PropTypes from "prop-types";

function FilterComponent({ searchTerm, setSearchTerm, filtrar }) {
  const inputRef = useRef(null);
  const [inputBorder, setInputBorder] = useState("");

  const handleFocus = () => {
    setInputBorder("300px");
  };

  const handleBlur = (e) => {
    if (e.relatedTarget?.className === "fa-solid fa-x delete-input-info") {
      return; // No colapsar el input si el objetivo es la X
    }
    setInputBorder("");
  };

  const clearInput = () => {
    setSearchTerm(""); // Limpiar el valor del input
    if (inputRef.current) {
      inputRef.current.focus(); // Enfocar el input después de limpiar
    }
  };

  return (
    <div className="filter-box">
      <i className="fa-solid fa-magnifying-glass expa-filter-icons"></i>
      <input
        ref={inputRef}
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="search-input"
        style={{ width: inputBorder, transition: "0.4s ease-in-out" }}
        data-aos="slide-left"
        placeholder={filtrar}
      />
      {searchTerm && (
        <i
          className="fa-solid fa-x delete-input-info"
          onMouseDown={clearInput} // Usa onMouseDown en lugar de onClick
          style={{ cursor: "pointer" }}
        ></i>
      )}
    </div>
  );
}
FilterComponent.propTypes = {
  searchTerm: PropTypes.string,
  filtrar: PropTypes.string,
  setSearchTerm:PropTypes.func
};

export default FilterComponent;
