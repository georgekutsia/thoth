import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './cardSlider.css';
import { EffectCards } from 'swiper/modules';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import BtnExpandComponent from '../button-expand/BtnExpandComponent';

export default function CardSlider({ fromData, text }) {
  const [gallery, setGallery] = useState([]);
  const [showFull, setshowFull] = useState("mySwiperCard")
  // Efecto para actualizar la galería cuando cambia 'fromData'
  useEffect(() => {
    if (Array.isArray(fromData)) {
      setGallery(fromData);
    } else {
      console.error('fromData no es un array');
    }
  }, [fromData]);

  const handleShowFull = () => {
showFull === "mySwiperCard" ?  setshowFull("mySwiperCard-big") : setshowFull("mySwiperCard")
  }
  return (
    <>
      <Swiper effect="cards" grabCursor={true} modules={[EffectCards]} className={showFull} nested={true}>
      <h4>{text}</h4>
        {gallery.length > 0 ? (
          gallery.map((url, index) => (
            <SwiperSlide key={index}>
              <BtnExpandComponent handleExpand={handleShowFull} />
              <img src={url} alt={`slide-${index}`} />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <p>No hay imágenes disponibles</p>
          </SwiperSlide>
        )}
      </Swiper>
    </>
  );
}

CardSlider.propTypes = {
  fromData: PropTypes.array.isRequired, // fromData ahora debe ser un array
  text: PropTypes.string.isRequired, // fromData ahora debe ser un array
};
