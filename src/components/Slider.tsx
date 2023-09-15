import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/autoplay'

export default () => {
  return (
    <div className="slider">
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay
      
    >
      <SwiperSlide><img src="Frame 2.svg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="baner1.svg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="baner2.svg" alt="" /></SwiperSlide>
      
      ...
    </Swiper>
    </div>
  );
};