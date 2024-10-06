import { useRef } from "react";
import "./carouselGallery.css";

function CarouselGalleryGallery() {
  const spinnerRef = useRef(null);
  var angle = 0;

  // Arreglo de URLs de tus imágenes
  const imageUrls = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
    "https://example.com/image4.jpg",
    "https://example.com/image5.jpg",
    "https://example.com/image6.jpg"
  ];

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
        <figure id="spinner" ref={spinnerRef}>
          {imageUrls.map((url, index) => (
            <img key={index} src={url} alt={`carousel-img-${index}`} />
          ))}
        </figure>
      </div>
      <span style={{ float: "left" }} className="ss-icon" onClick={() => galleryspin("-")}>
        &lt;
      </span>
      <span style={{ float: "right" }} className="ss-icon" onClick={() => galleryspin("")}>
        &gt;
      </span>
    </>
  );
}

export default CarouselGalleryGallery;
