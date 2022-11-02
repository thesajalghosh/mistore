import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import '../styles/Slider.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
  return (
    <div className="slider">
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src="https://i02.appmifile.com/173_operator_in/09/06/2021/fde866737ea0357305c2d1c852541460.gif" alt="new"/></SwiperSlide>
      <SwiperSlide><img src="https://i02.appmifile.com/615_operator_in/05/07/2021/a4b26d6b2ad2d6d2edbfb23a8482328e.jpg" alt="new"/></SwiperSlide>
      <SwiperSlide><img src="https://i02.appmifile.com/762_operator_in/05/07/2021/4c90dda893b43e0153950f36ee37dc03.jpg" alt="new"/></SwiperSlide>
      <SwiperSlide><img src="https://i02.appmifile.com/645_operator_in/02/06/2021/4e32c24cfdf8c48ad1bc911807cac09e.jpg" alt="new"/></SwiperSlide>
      <SwiperSlide><img src="https://i02.appmifile.com/232_operator_in/04/06/2021/568c8fd7c3c4368c14c8ef64cda7866b.jpg" alt="new"/></SwiperSlide>
      <SwiperSlide><img src="https://i02.appmifile.com/3_operator_in/08/06/2021/3e2d6457a1e569145f66318a17ea1e03.jpg" alt="new"/></SwiperSlide>
      <SwiperSlide><img src="https://i02.appmifile.com/417_operator_in/04/06/2021/36c1c9f10ac411c5ba304d30d60ca234.jpg" alt="new"/></SwiperSlide>
      
    </Swiper>
    </div>
  )
}

export default Slider
