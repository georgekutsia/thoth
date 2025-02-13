import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./slider.css";
import { Pagination } from 'swiper/modules';
import CardSlider from './CardSlider';
import { useState } from 'react';
import NavigationSliderComponent from './NavigationSliderComponent';
import DpfDownloaderComponent from '../pdf-downloader/DpfDownloaderComponent';
import { entornosNotas } from "../../data";
import ButtonSliderSidesComponent from '../button-slider-sides/ButtonSliderSidesComponent';

export default function EntornosSliderComponent() {
  const [swiperRef, setSwiperRef] = useState(null); 

  const nextSlide = () => {
    if (swiperRef) swiperRef.slideNext();
  };

  const prevSlide = () => {
    if (swiperRef) swiperRef.slidePrev();
  };
  const slideTo = (index) => {
    if (swiperRef) {
      swiperRef.slideTo(index, 0); 
    }
  };
  return (
    <div className='sliders-box' data-aos="zoom-out-down">
    <NavigationSliderComponent changeNextData={slideTo} fromData='indice' navData={entornosNotas}/>
    <ButtonSliderSidesComponent handle={prevSlide} btnNumb={"1"}  angle='left'/>
    <ButtonSliderSidesComponent handle={nextSlide} btnNumb={"2"}  angle='right'/>
      <Swiper
        className="mySwiper swiper-h"
        spaceBetween={50}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        onSwiper={setSwiperRef} 
      >
      <DpfDownloaderComponent text='Instalar cacafuti'/>
        <SwiperSlide><CardSlider fromData={"ejemplo"} /></SwiperSlide>
        <SwiperSlide>
          <Swiper className="mySwiper2 swiper-v" direction={'vertical'} spaceBetween={50} pagination={{ clickable: true }} modules={[Pagination]}>
            <SwiperSlide>Vertical Slide 1</SwiperSlide>
            <SwiperSlide>Vertical Slide 2</SwiperSlide>
            <SwiperSlide>Vertical Slide 2</SwiperSlide>
            <SwiperSlide>Vertical Slide 2</SwiperSlide>
            <SwiperSlide>Vertical Slide 2</SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <CardSlider fromData='bulala' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
