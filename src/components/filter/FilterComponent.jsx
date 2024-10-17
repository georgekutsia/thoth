import { useRef, useState } from "react";
import "./filter.css";

// eslint-disable-next-line react/prop-types
function FilterComponent({ searchTerm, setSearchTerm }) {
  const inputRef = useRef(null);

  const [inputBorder, setInputBorder] = useState("");

  const handleFocus = () => {
    setInputBorder("300px");
  };

  const handleBlur = () => {
    setInputBorder("");
  };

  const clearInput = () => {
    setSearchTerm(""); // Limpiar el input
    inputRef.current.focus(); // Enfocar el input después de limpiar
  };

  return (
    <>
      <i className="fa-solid fa-magnifying-glass search-icon"></i>
      <input
        ref={inputRef}
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`search-input`}
        style={{ width: inputBorder, transition: "0.4s ease-in-out" }}
        data-aos="slide-left"
      />
      {searchTerm && ( // Mostrar el botón "X" solo si hay texto en el input
        <i
          className={`fa-solid fa-x delete-input-info`}
          onClick={clearInput} // Borrar el contenido del input
          style={{ cursor: "pointer" }}
        ></i>
      )}
    </>
  );
}

export default FilterComponent;
