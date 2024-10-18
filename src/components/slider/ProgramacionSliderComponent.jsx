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

export default function ProgramacionSliderComponent() {
  const [swiperRef, setSwiperRef] = useState(null); 

  const slideTo = (index) => {
    if (swiperRef) {
      swiperRef.slideTo(index, 0); 
    }
  };

  return (
    <div data-aos="zoom-out-down">
    <NavigationSliderComponent slideTo={slideTo} fromData='indice' navData={programacionNotas}/>
      <Swiper className="mySwiper swiper-h" spaceBetween={50} pagination={{ clickable: true }} modules={[Pagination]} onSwiper={setSwiperRef} >
        <SwiperSlide>
        <>
            <CardSlider fromData={"ejemplo"} class />
            <div className='pdf-downloader'>
            <DpfDownloaderComponent text='Ir a la sala principal en Alexia '  url={"https://thepowerfp.alexiaclassroom.com/course/view.php?id=607&section=1"} nav/>   
            <DpfDownloaderComponent text='Contenido lenguaje de marcas' url={"https://thepowerfp.alexiaclassroom.com/pluginfile.php/26044/mod_resource/content/1/CONTENIDO%20LENGUAJE%20DE%20MARCAS.pdf"}/>
            <DpfDownloaderComponent text='Programación didáctica Lenguaje de marcas ' textPlus={"y sistemas de gestión de información"} url={"https://thepowerfp.alexiaclassroom.com/pluginfile.php/26047/mod_resource/content/1/Programacio%CC%81n%20dida%CC%81ctica%20Lenguaje%20de%20marcas%20y%20sistemas%20de%20gestio%CC%81n%20de%20informacio%CC%81n.pdf"}/>       
            </div>
        </>
            </SwiperSlide>
        <SwiperSlide>
        <>
            <CardSlider fromData={"ejemplo"} class />
            <div className='pdf-downloader'>
            <DpfDownloaderComponent text='Ir a unidad 1 en Alexia '  url={"https://thepowerfp.alexiaclassroom.com/course/view.php?id=607&section=2"} nav/>   
            <DpfDownloaderComponent text='Presentación de la asignatura' url={"https://thepowerfp.alexiaclassroom.com/pluginfile.php/21965/mod_resource/content/1/PRESENTACION%20ASIGNATURA.pdf"}/>
            <DpfDownloaderComponent text='Configuración de Netbeans y XAMPP '  url={"https://thepowerfp.alexiaclassroom.com/pluginfile.php/21966/mod_resource/content/1/Netbeans%20%20XAMPP.pdf"}/>       
            </div>
        </>
            </SwiperSlide>
        <SwiperSlide>
          <Swiper className="mySwiper2 swiper-v" direction={'vertical'} spaceBetween={50} pagination={{ clickable: true }} modules={[Pagination]}>
            <SwiperSlide>Vertical Slide 1</SwiperSlide>
            <SwiperSlide>Vertical Slide 2</SwiperSlide>
          </Swiper>
          <Swiper className="mySwiper2 swiper-v" direction={'vertical'} spaceBetween={50} pagination={{ clickable: true }} modules={[Pagination]}>
            <SwiperSlide>Vertical Slide 1</SwiperSlide>
            <SwiperSlide>Vertical Slide 2</SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <Swiper className="mySwiper2 swiper-v" direction={'vertical'} spaceBetween={50} pagination={{ clickable: true }} modules={[Pagination]}>
            <SwiperSlide>Vertical Slide 1</SwiperSlide>
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
