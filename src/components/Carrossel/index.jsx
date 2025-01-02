import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  Zoom,
} from 'swiper/modules';
import 'swiper/css/zoom';

import loadImagePaths from '../../helpers/imageImport';

import './style.css';
import 'swiper/swiper-bundle.css';

const Carrossel = () => {
  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    // Carrega as imagens dinamicamente
    const loadImages = async () => {
      const paths = await loadImagePaths();
      setImagePaths(paths);
    };

    loadImages();
  }, []);

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Zoom, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        autoplay={{
          delay: 3000,
        }}
        centeredSlides={true}
        initialSlide={0}
        loop={true}
        pagination
        zoom
        slideActiveClass="swiper-slide-active"
        breakpoints={{
          // Pequenos dispositivos (ex: smartphones)
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // Tablets
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // Telas médias (ex: laptops pequenos)
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          // Telas maiores (ex: desktops)
          1440: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {imagePaths.map((path, index) => (
          <SwiperSlide key={index}>
            <img className="image-carrossel" src={path.default} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrossel;
