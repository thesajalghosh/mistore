import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "../styles/Presscomp.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Presscomp = () => {
  return (
    <div>
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
      <SwiperSlide><img src="https://i02.appmifile.com/500_operator_in/23/02/2022/7dd77194a09db35f46aa82541d30a6f2.jpg" alt="new"/></SwiperSlide>
      <SwiperSlide><img src="https://i02.appmifile.com/794_operator_in/23/02/2022/29f71b53b9eeba2c95f4ca2ca39b48f8.jpg" alt="new"/></SwiperSlide>
      <SwiperSlide><img src="https://i02.appmifile.com/154_operator_in/23/02/2022/6402f385dba2e95d1d5a9d250cbf7c8d.jpg" alt="new"/></SwiperSlide>
      <SwiperSlide><img src="https://i02.appmifile.com/395_operator_in/01/02/2022/89c7d2292f1bafd3b403439df9bd874f.jpg" alt="new"/></SwiperSlide>
      <SwiperSlide><img src="https://i02.appmifile.com/8_operator_in/01/02/2022/e9853b271494b6f3e9d73ff0cbd65aa6.jpg" alt="new"/></SwiperSlide>
      <SwiperSlide><img src="https://i02.appmifile.com/842_operator_in/01/02/2022/1353c99ab0e8da2ce9f620b5819995c8.jpg" alt="new"/></SwiperSlide>
      <SwiperSlide><img src="https://i02.appmifile.com/57_operator_in/01/02/2022/eb24c958c37f58076921f5b94637a4d3.jpg" alt="new"/></SwiperSlide>
      <SwiperSlide><img src="https://i02.appmifile.com/629_operator_in/01/02/2022/50f678d4f9eab8235ecc51ca730e9eac.jpg" alt="new"/></SwiperSlide>
      <SwiperSlide><img src="https://i02.appmifile.com/82_operator_in/01/02/2022/43ddb357e5451d4285810e1825af1fbd.jpg" alt="new"/></SwiperSlide>
      <SwiperSlide><img src="https://i02.appmifile.com/971_operator_in/05/10/2021/e979ce79722b581c8f2c7c37b607fff6.jpg" alt="new"/></SwiperSlide>
      
    </Swiper>
    </div>
    </div>
  )
}

export default Presscomp
