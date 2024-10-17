import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./slider.css";
import { Pagination } from 'swiper/modules';
import CardSlider from './CardSlider';

export default function EmpleabilidadSliderComponent() {
  return (
    <div data-aos="zoom-out-down">
      <Swiper className="mySwiper swiper-h" spaceBetween={50} pagination={{   clickable: true, }} modules={[Pagination]}>
        <SwiperSlide><CardSlider fromData={"ejemplo"}/></SwiperSlide>
        <SwiperSlide>
          <Swiper className="mySwiper2 swiper-v" direction={'vertical'} spaceBetween={50} pagination={{ clickable: true,}} modules={[Pagination]}>
            <SwiperSlide>Vertical Slide 1</SwiperSlide>
            <SwiperSlide>Vertical Slide 2</SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <CardSlider fromData='ejemplo'/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
