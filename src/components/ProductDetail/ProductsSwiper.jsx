import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../swiperStyle.css';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';
// import { Navigation } from 'swiper/modules';

export default function ProductsSwiper() {
  return (
    //h-[38rem] w-[10rem]
    <div className="h-[21rem] w-[10rem] lg:h-[38rem] lg:w-[10rem] md:h-[37rem]">
      <Swiper
        direction={'vertical'}
        //* scroll controllers
        slidesPerView={3}
        spaceBetween={10}
        mousewheel={true}
        Pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>Image 1</SwiperSlide>
        <SwiperSlide>Image 2</SwiperSlide>
        <SwiperSlide>Image 3</SwiperSlide>
        <SwiperSlide>Image 4</SwiperSlide>
        <SwiperSlide>Image 5</SwiperSlide>
        <SwiperSlide>Image 6</SwiperSlide>
        <SwiperSlide>Image 7</SwiperSlide>
        <SwiperSlide>Image 8</SwiperSlide>
        <SwiperSlide>Image 9</SwiperSlide>
      </Swiper>
    </div>
  );
}

// old img swiper
// import React, { useState, useEffect } from "react";
// import { Galleria } from "primereact/galleria";
// import { PhotoService } from "./PhotoService";

// export default function ProductsSwiper() {
//   const [images, setImages] = useState(PhotoService.getImages());
//   const responsiveOptions = [
//     {
//       breakpoint: "991px",
//       numVisible: 4,
//     },
//     {
//       breakpoint: "767px",
//       numVisible: 3,
//     },
//     {
//       breakpoint: "575px",
//       numVisible: 1,
//     },
//   ];

//   const itemTemplate = (item) => {
//     return (
//       <img
//         src={item.itemImageSrc}
//         alt={item.alt}
//         style={{ width: "100%", display: "block" }}
//       />
//     );
//   };

//   const thumbnailTemplate = (item) => {
//     return (
//       <img
//         src={item.thumbnailImageSrc}
//         alt={item.alt}
//         style={{ display: "block" }}
//       />
//     );
//   };

//   return (
//     <section className="lg:hidden block">
//       <Galleria
//         value={images}
//         responsiveOptions={responsiveOptions}
//         numVisible={5}
//         circular
//         style={{ maxWidth: "640px" }}
//         showItemNavigators
//         showItemNavigatorsOnHover
//         item={itemTemplate}
//         thumbnail={thumbnailTemplate}
//       />
//     </section>
//   );
// }

// ignore
// export default function ProductsSwiper() {
//   return (
//    <section className="lg:hidden block">
//      <div className="text-7xl">ProductsSwiper</div>
//    </section>
//   )
// }
