import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ProductsSwiper() {
  const swiperStyle = {
    height: '100%',
    width: '100%',
  };

  const slideStyle = {
    textAlign: 'center',
    fontSize: '18px',
    background: '#ccc',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imageStyle = {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const paginationBulletStyle = {
    backgroundColor: '#3B3B3B',
  };

  return (
    <div style={{ height: '21rem', width: '10rem', maxHeight: '38rem' }}>
      <Swiper
        direction={'vertical'}
        slidesPerView={3}
        spaceBetween={10}
        mousewheel={true}
        modules={[Mousewheel]}
        className="mySwiper"
        style={swiperStyle}
      >
        <SwiperSlide style={slideStyle}>Image 1</SwiperSlide>
        <SwiperSlide style={slideStyle}>Image 2</SwiperSlide>
        <SwiperSlide style={slideStyle}>Image 3</SwiperSlide>
        <SwiperSlide style={slideStyle}>Image 4</SwiperSlide>
        <SwiperSlide style={slideStyle}>Image 5</SwiperSlide>
        <SwiperSlide style={slideStyle}>Image 6</SwiperSlide>
        <SwiperSlide style={slideStyle}>Image 7</SwiperSlide>
        <SwiperSlide style={slideStyle}>Image 8</SwiperSlide>
        <SwiperSlide style={slideStyle}>Image 9</SwiperSlide>
      </Swiper>
    </div>
  );
}
