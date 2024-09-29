import { useState, useEffect, useRef } from "react";
import "./filter.css";

// eslint-disable-next-line react/prop-types
function FilterComponent({ searchTerm, setSearchTerm }) {
  const [search, setSearch] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (search && inputRef.current && !inputRef.current.contains(event.target)) {
        setSearch(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [search]);

  return (
    <>
      {search ? (
        <input
          ref={inputRef} 
          type="text"
          placeholder="Filtrar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
          data-aos="slide-left"
        />
      ) : (
        <i onClick={() => setSearch(true)} className="fa-solid fa-magnifying-glass search-input" data-aos="slide-left"
        ></i>
      )}
    </>
  );
}

export default FilterComponent;
