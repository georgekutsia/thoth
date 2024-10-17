import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './cardSlider.css';
import { EffectCards } from 'swiper/modules';
import { useState, useEffect } from 'react';
import { entornosNotas } from "../../data";
import PropTypes from "prop-types"

export default function CardSlider({ fromData }) {
  const [gallery, setGallery] = useState(entornosNotas[fromData] || []);

  useEffect(() => {
    if (entornosNotas[fromData]) {
      setGallery(entornosNotas[fromData]);
    }
  }, [fromData]);

  return (
    <>
      <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiperCard" nested={true} // Manejo correcto de sliders anidados touchStartPreventDefault={false} // Evita que el slider exterior interfiera con el interior
      >
        {gallery.map((url, index) => (
          <SwiperSlide key={index}>
            <img src={url} alt={`slide-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

CardSlider.propTypes = {
  fromData: PropTypes.string.isRequired,
};
