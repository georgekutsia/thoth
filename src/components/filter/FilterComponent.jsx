import { useRef, useState } from "react";
import "./filter.css";

function FilterComponent({ searchTerm, setSearchTerm }) {
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
    <>
      <i className="fa-solid fa-magnifying-glass search-icon"></i>
      <input
        ref={inputRef}
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el valor del estado
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="search-input"
        style={{ width: inputBorder, transition: "0.4s ease-in-out" }}
        data-aos="slide-left"
      />
      {searchTerm && (
        <i
          className="fa-solid fa-x delete-input-info"
          onMouseDown={clearInput} // Usa onMouseDown en lugar de onClick
          style={{ cursor: "pointer" }}
        ></i>
      )}
    </>
  );
}

export default FilterComponent;
