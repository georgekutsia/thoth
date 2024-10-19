import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './cardSlider.css';
import { EffectCards } from 'swiper/modules';
import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {BtnExpandComponent, BtnCopyComponent, BtnNextPrevComponent} from '../index';

export default function CardSlider({ fromData, text }) {
  const [gallery, setGallery] = useState([]);
  const [showFull, setshowFull] = useState("mySwiperCard");
  const swiperRef = useRef(null); // Crear una referencia para el Swiper

  // Efecto para actualizar la galería cuando cambia 'fromData'
  useEffect(() => {
    if (Array.isArray(fromData)) {
      setGallery(fromData);
    } else {
      console.error('fromData no es un array');
    }
  }, [fromData]);

  const handleShowFull = () => {
    showFull === "mySwiperCard" ? setshowFull("mySwiperCard-big") : setshowFull("mySwiperCard");
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext(); // Ir a la siguiente diapositiva
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev(); // Ir a la diapositiva anterior
  };

  return (
    <>
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className={showFull}
        nested={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Obtener la instancia de Swiper
      >
        <h4>{text}</h4>
        {gallery.length > 0 ? (
          gallery.map((ans, index) => (
            <SwiperSlide key={index}>
              <BtnExpandComponent handleExpand={handleShowFull} />
              <div className='btn-copy-slider'>
                <BtnCopyComponent copiarTexto={ans.code} />
              </div>
              <img src={ans.url} alt={`slide-${index}`} />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <p>No hay imágenes disponibles</p>
          </SwiperSlide>
        )}
      </Swiper>
    <div className='btn-nextprev-slider'>
      <BtnNextPrevComponent handleNext={handleNext} handlePrev={handlePrev}/>
    </div>
    </>
  );
}

CardSlider.propTypes = {
  fromData: PropTypes.array.isRequired, // fromData ahora debe ser un array
  text: PropTypes.string.isRequired, // text debe ser una cadena de texto
};
