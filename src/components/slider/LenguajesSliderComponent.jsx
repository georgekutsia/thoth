import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./slider.css";
import { Pagination } from 'swiper/modules';
import CardSlider from './CardSlider';
import { useState } from 'react';
import NavigationSliderComponent from './NavigationSliderComponent';
import DpfDownloaderComponent from '../pdf-downloader/DpfDownloaderComponent';
import { lenguajesNotas } from "../../data";
import ButtonSliderSidesComponent from '../button-slider-sides/ButtonSliderSidesComponent';

export default function LenguajesSliderComponent() {
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
      <NavigationSliderComponent changeNextData={slideTo} fromData='indice' navData={lenguajesNotas}/>
      <ButtonSliderSidesComponent handle={prevSlide} btnNumb={"1"}  angle='left'/>
      <ButtonSliderSidesComponent handle={nextSlide} btnNumb={"2"}  angle='right'/>
      
      <Swiper className="mySwiper swiper-h" spaceBetween={50} pagination={{ clickable: true }} modules={[Pagination]} onSwiper={setSwiperRef}>
        {/* Primer Slide */}
        <SwiperSlide>
          <>
            {/* Asegúrate de que 'lenguajesNotas.indicacionesHtml' sea un array */}
            <CardSlider fromData={lenguajesNotas.introHtml} text='Lenguajes de Marcas'/>
            <div className='pdf-downloader'>
              <DpfDownloaderComponent text='Ir a la sala principal en Alexia' url="https://thepowerfp.alexiaclassroom.com/course/view.php?id=607&section=1" nav/>
              <DpfDownloaderComponent text='Contenido lenguaje de marcas' url="https://thepowerfp.alexiaclassroom.com/pluginfile.php/26044/mod_resource/content/1/CONTENIDO%20LENGUAJE%20DE%20MARCAS.pdf" />
              <DpfDownloaderComponent text='Programación didáctica Lenguaje de marcas y sistemas de gestión de información' url="https://thepowerfp.alexiaclassroom.com/pluginfile.php/26047/mod_resource/content/1/Programacio%CC%81n%20dida%CC%81ctica%20Lenguaje%20de%20marcas%20y%20sistemas%20de%20gestio%CC%81n%20de%20informacio%CC%81n.pdf" />
            </div>
          </>
        </SwiperSlide>
        {/* Segundo Slide */}
        <SwiperSlide>
          <Swiper className="mySwiper2 swiper-v" direction={'vertical'} spaceBetween={50} pagination={{ clickable: true }} modules={[Pagination]}>
            <SwiperSlide>          
            <CardSlider fromData={lenguajesNotas.basicoHtml} text={"Etiquetas y atributos básicos"}/>
            </SwiperSlide>
            <SwiperSlide>
              <CardSlider fromData={lenguajesNotas.basicoForm} text={"Form Básico"}/>
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>

        {/* Otro Slide con CardSlider */}
        <SwiperSlide>

        </SwiperSlide>
      <SwiperSlide>
          <>
          {/* <CardSlider fromData={lenguajesNotas.basicoHtml} text={"Etiquetas y atributos básicos"}/> */}
            <div className='pdf-downloader'>
              <DpfDownloaderComponent text='Ir a unidad 1 en Alexia' url="https://thepowerfp.alexiaclassroom.com/course/view.php?id=607&section=2" />
              <DpfDownloaderComponent text='Presentación de la asignatura' url="https://thepowerfp.alexiaclassroom.com/pluginfile.php/21965/mod_resource/content/1/PRESENTACION%20ASIGNATURA.pdf" />
              <DpfDownloaderComponent text='Configuración de Netbeans y XAMPP' url="https://thepowerfp.alexiaclassroom.com/pluginfile.php/21966/mod_resource/content/1/Netbeans%20%20XAMPP.pdf" />
            </div>
          </>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
