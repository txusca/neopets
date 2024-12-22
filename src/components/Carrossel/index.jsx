import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  Zoom,
} from "swiper/modules";

import img1 from "../../assets/carrossel-imagens/img1.png";
import img2 from "../../assets/carrossel-imagens/img2.png";
import img3 from "../../assets/carrossel-imagens/img3.png";

const Carrossel = () => {
  return (
    <div>
      <Swiper
        modules={[A11y, Navigation, Pagination, Scrollbar, Zoom, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        autoplay={{
          delay: 2000,
        }}
        centeredSlides={true}
        initialSlide={0}
        loop={true}
        pagination
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Carrossel;
