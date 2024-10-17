import { useEffect, useRef, useState } from "react";
import "./carouselGallery.css";
import { entornosNotas } from "../../../data";
function CarouselGalleryGallery() {
  const spinnerRef = useRef(null);
  var angle = 0;

  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata(entornosNotas.ejemplo);
  }, [entornosNotas]);

  const handleClick = () => {
    alert("Clicked on image");
  };

  function galleryspin(sign) {
    if (spinnerRef.current) {
      if (!sign) {
        angle = angle + 45;
      } else {
        angle = angle - 45;
      }
      spinnerRef.current.style.transform = `rotateY(${angle}deg)`;
    }
  }

  return (
    <>
      <div id="carousel">
        <div className="left-right-arrow">
          <button  onClick={() => galleryspin("-")}>
          <i className="fa-solid fa-chevron-left"></i>
            
          </button>
          <button  onClick={() => galleryspin("")}>
          <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        <figure id="spinner" ref={spinnerRef}>
          {data.map((url, index) => (
            <img onClick={()=>handleClick()} key={index} src={url} alt={`carousel-img-${index}`} />
          ))}
        </figure>
      </div>
    </>
  );
}

export default CarouselGalleryGallery;
