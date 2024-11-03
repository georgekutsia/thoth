import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./slider.css";
import { Pagination } from 'swiper/modules';
import CardSlider from './CardSlider';
import { useState } from 'react';
import NavigationSliderComponent from './NavigationSliderComponent';
import DpfDownloaderComponent from '../pdf-downloader/DpfDownloaderComponent';
import { programacionNotas } from "../../data";
import ButtonSliderSidesComponent from '../button-slider-sides/ButtonSliderSidesComponent';

export default function ProgramacionSliderComponent() {
  const [swiperRef, setSwiperRef] = useState(null); 

  // Funciones para pasar al ButtonSliderSidesComponent
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
    <NavigationSliderComponent slideTo={slideTo} fromData='indice' navData={programacionNotas}/>
      <ButtonSliderSidesComponent handle={prevSlide} btnNumb={"1"}  angle='left'/>
      <ButtonSliderSidesComponent handle={nextSlide} btnNumb={"2"}  angle='right'/>
      
      <Swiper
        className="mySwiper swiper-h"
        spaceBetween={50}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        onSwiper={setSwiperRef}
      >
        <SwiperSlide>
          <CardSlider fromData={programacionNotas.ejemplo} text='Programación (java)' />
          <div className='pdf-downloader'>
            <DpfDownloaderComponent text='Ir a la sala principal en Alexia ' url={"https://thepowerfp.alexiaclassroom.com/course/view.php?id=594&section=1"} nav />   
            <DpfDownloaderComponent text='Programación didáctica Programación ' textPlus={"y sistemas de gestión de información"} url={"https://thepowerfp.alexiaclassroom.com/pluginfile.php/26093/mod_resource/content/1/Programacio%CC%81n%20dida%CC%81ctica%20Programacio%CC%81n.pdf"} />       
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <Swiper className="mySwiper2 swiper-v" direction={'vertical'} spaceBetween={50} pagination={{ clickable: true }} modules={[Pagination]}>
            <SwiperSlide>          
              <CardSlider fromData={programacionNotas.basicJava} text='Básico Programación (java)' />
              <div className='pdf-downloader'>
                <DpfDownloaderComponent text='Inicio a la Programación' url={"https://thepowerfp.alexiaclassroom.com/pluginfile.php/26102/mod_resource/content/1/UD1.%20Inicio%20a%20la%20Programaci%C3%B3n.pdf"} />
                <DpfDownloaderComponent text='Configuración de Netbeans y XAMPP ' url={"https://thepowerfp.alexiaclassroom.com/pluginfile.php/29572/mod_resource/content/1/Netbeans%20%20XAMPP.pdf"} />       
              </div>
            </SwiperSlide>
            <SwiperSlide>          
              <CardSlider fromData={programacionNotas.conditionalJava} text='Condicionales (java)' />
              <div className='pdf-downloader'>
                {/* <DpfDownloaderComponent text='Inicio a la Programación' url={"https://thepowerfp.alexiaclassroom.com/pluginfile.php/26102/mod_resource/content/1/UD1.%20Inicio%20a%20la%20Programaci%C3%B3n.pdf"} /> */}
                {/* <DpfDownloaderComponent text='Configuración de Netbeans y XAMPP ' url={"https://thepowerfp.alexiaclassroom.com/pluginfile.php/29572/mod_resource/content/1/Netbeans%20%20XAMPP.pdf"} />        */}
              </div>
            </SwiperSlide>
            <SwiperSlide>          
              <CardSlider fromData={programacionNotas.conditional2Java} text='Condicionales complejos (java)' />
              <div className='pdf-downloader'>
                {/* <DpfDownloaderComponent text='Inicio a la Programación' url={"https://thepowerfp.alexiaclassroom.com/pluginfile.php/26102/mod_resource/content/1/UD1.%20Inicio%20a%20la%20Programaci%C3%B3n.pdf"} /> */}
                {/* <DpfDownloaderComponent text='Configuración de Netbeans y XAMPP ' url={"https://thepowerfp.alexiaclassroom.com/pluginfile.php/29572/mod_resource/content/1/Netbeans%20%20XAMPP.pdf"} />        */}
              </div>
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>

        {/* Más Slides */}
        {/* Tu otro contenido de SwiperSlide */}
      </Swiper>
    </div>
  );
}
