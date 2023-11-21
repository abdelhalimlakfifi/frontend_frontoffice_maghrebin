import React from "react";
import Takchita1 from "../../assets/Kaftan1.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import Takchita from "../../assets/Kaftan2.jpg";

const imageSources = [Takchita, Takchita, Takchita, Takchita, Takchita, Takchita, Takchita, Takchita, Takchita];

const ProductImage = () => {
  return (
    <div className="w-full lg:flex flex lg:order-2 h-[45rem]">
      <div className="border-2 border-black  mr-3 ">
        <img src={Takchita1} alt=""  className="mainImg w-full h-full object-cover"/>
      </div>
      <div className=''>
      <Swiper
        direction={'vertical'}
        slidesPerView={3}
        spaceBetween={10}
        mousewheel={true}
        modules={[Mousewheel]}
        className="w-full h-full"
      >
        {imageSources.map((src, index) => (
          <SwiperSlide key={index} className='border-2 border-black'>
            <img
              src={src}
              alt={`maghrebin-${index}`}
              className='w-full h-full object-cover hover:opacity-60 transition-opacity duration-300 ease-in-out cursor-pointer'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default ProductImage;
