import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./slider.css";
import { Pagination } from 'swiper/modules';
import CardSlider from './CardSlider';
import { useState } from 'react';
import NavigationSliderComponent from './NavigationSliderComponent';
import DpfDownloaderComponent from '../pdf-downloader/DpfDownloaderComponent';
import { dbsNotas } from "../../data";
import ButtonSliderSidesComponent from '../button-slider-sides/ButtonSliderSidesComponent';

export default function DbsSliderComponent() {
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
    <NavigationSliderComponent changeNextData={slideTo} fromData='indice' navData={dbsNotas}/>
    <ButtonSliderSidesComponent handle={prevSlide} btnNumb={"1"}  angle='left'/>
    <ButtonSliderSidesComponent handle={nextSlide} btnNumb={"2"}  angle='right'/>
      <Swiper className="mySwiper swiper-h" spaceBetween={50} pagination={{ clickable: true }} modules={[Pagination]} onSwiper={setSwiperRef} >
        <SwiperSlide>
            <CardSlider fromData={dbsNotas.ejemplo} text='Programación (java)' />
            <div className='pdf-downloader'>
            <DpfDownloaderComponent text='Ir a la sala principal en Alexia '  url={"https://thepowerfp.alexiaclassroom.com/course/view.php?id=566"} nav/>   
            <DpfDownloaderComponent text='Guía de instalación mysql ' textPlus={"y sistemas de gestión de información"} url={"https://thepowerfp.alexiaclassroom.com/pluginfile.php/25724/mod_folder/content/0/guia%20de%20instalacion%20mysql%208.pdf?forcedownload=1"}/>       
            <DpfDownloaderComponent text='sakila-db ' textPlus={"y sistemas de gestión de información"} url={"https://thepowerfp.alexiaclassroom.com/pluginfile.php/25724/mod_folder/content/0/sakila-db%20%282%29.zip?forcedownload=1"}/>       
            <DpfDownloaderComponent text='Unidad 1. 1 ' textPlus={"y sistemas de gestión de información"} url={"https://thepowerfp.alexiaclassroom.com/pluginfile.php/25724/mod_folder/content/0/Unidad%201.1.pdf?forcedownload=1"}/>       
            <DpfDownloaderComponent text='Unidad 2. 1 ' textPlus={"y sistemas de gestión de información"} url={"https://thepowerfp.alexiaclassroom.com/pluginfile.php/25724/mod_folder/content/0/Unidad%202.1.pdf?forcedownload=1"}/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <Swiper className="mySwiper2 swiper-v" direction={'vertical'} spaceBetween={50} pagination={{ clickable: true }} modules={[Pagination]}>
              <SwiperSlide>          
                <CardSlider fromData={dbsNotas.basicJava} text='Básico Programación (java)' />
                  <div className='pdf-downloader'>
                  <DpfDownloaderComponent text='Inicio a la Programación' url={"https://thepowerfp.alexiaclassroom.com/pluginfile.php/26102/mod_resource/content/1/UD1.%20Inicio%20a%20la%20Programaci%C3%B3n.pdf"}/>
                  <DpfDownloaderComponent text='Configuración de Netbeans y XAMPP '  url={"https://thepowerfp.alexiaclassroom.com/pluginfile.php/29572/mod_resource/content/1/Netbeans%20%20XAMPP.pdf"}/>       
                  </div>
                  </SwiperSlide>
              <SwiperSlide>          
                <CardSlider fromData={dbsNotas.conditionalJava} text='Condicionales (java)' />
                  <div className='pdf-downloader'>
                  <DpfDownloaderComponent text='Inicio a la Programación' url={"https://thepowerfp.alexiaclassroom.com/pluginfile.php/26102/mod_resource/content/1/UD1.%20Inicio%20a%20la%20Programaci%C3%B3n.pdf"}/>
                  <DpfDownloaderComponent text='Configuración de Netbeans y XAMPP '  url={"https://thepowerfp.alexiaclassroom.com/pluginfile.php/29572/mod_resource/content/1/Netbeans%20%20XAMPP.pdf"}/>       
                  </div>
            </SwiperSlide>
        </Swiper>
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
