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
  const swiperRef = useRef(null); 

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
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  return (
    <>
      <Swiper effect="cards" grabCursor={true} modules={[EffectCards]} className={showFull} nested={true} onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <h4>{text}</h4>
        {gallery.length > 0 ? (
          gallery.map((ans, index) => (
            <SwiperSlide key={index}>
            <div>
                <i className="btn-expand-position">
                <BtnExpandComponent handleExpand={handleShowFull}  colorExpand={"var(--white)"}/> 
                {/* tengo que especificar el color en este comoponente del btnexpandcomponent para que siempre se vea blacno aunque cabie dia/noche */}
              </i>
              <h5>{ans.title}</h5>
              <div className='btn-copy-slider'>
                <BtnCopyComponent copiarTexto={ans.code} />
              </div>
              <img src={ans.url} alt={`slide-${index}`} />
            </div>
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
