import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("Slide changed")}
      onSwiper={(swiper: SwiperType) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src="sample.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="dining.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="living.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="bedrom.png" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
