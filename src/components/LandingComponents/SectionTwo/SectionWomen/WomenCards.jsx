import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
//import card image
import Kaftan1 from "../../../../assets/Kaftan1.jpg";
import Kaftan2 from "../../../../assets/Kaftan2.jpg";
import lavendarJellaba from "../../../../assets/WomenMain.webp"
import lavendarJellaba2 from "../../../../assets/ProductImages/jelaba/MauveJellaba.webp"
import BeigeJellaba2 from "../../../../assets/ProductImages/jelaba/BeigeJellaba.jpg"
import BeigeJellaba  from "../../../../assets/ProductImages/jelaba/beigeJellaba.webp"
import JellabaBlue from "../../../../assets/ProductImages/jelaba/jellabablue.webp"
import JellabaBlue2 from "../../../../assets/ProductImages/jelaba/jellabablue2.webp"


import zelija from '../../../../assets/Zelija.svg';

import { Card } from "../../../GlobalComponents/ProductCard";

const WomenCards = () => {
  const cardData = [
    {id:1 ,title: "Product 1", price: "20.00$", mainImg: Kaftan1, secondaryImg:Kaftan2, color:"white", },
    {id:2 ,title: "Product 2", price: "25.00$", mainImg: lavendarJellaba, secondaryImg:lavendarJellaba2, color:"purple" },
    {id:3 ,title: "Product 3", price: "30.00$", mainImg: BeigeJellaba, secondaryImg:BeigeJellaba2, color:"beige" },
    {id:4 ,title: "Product 4", price: "20.00$", mainImg: JellabaBlue, secondaryImg:JellabaBlue2, color:"blue" },
  ];

  return (
    <>
      {/* Show swiper in mobile */}
      <div className="px-2 md:px-9">
      <Swiper
        slidesPerView={2.5}
        spaceBetween={7}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="lg:hidden"

      >
        <section className="">
          {cardData.map((card, index) => (
            <SwiperSlide key={index} className="swiper-background py-7 md:py-9 ">
              <Card {...card} />
            </SwiperSlide>
          ))}
        </section>
      </Swiper>
      </div>
      
      
      {/* Show in Web without swiper */}
      <div className="hidden lg:block">
      <section className="flex flex-row flex-wrap justify-center gap-9 py-4" >
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
        <img
        src={zelija}
        alt="zelija"
        className="2xl:right-[5.2rem] xl:right-[11.2rem] xl:top-[53.9rem] lg:h-[8rem] lg:top-[53.9rem] lg:right-[3.8rem] h-40 absolute top-[400px] right-[165px] -z-10 opacity-20 "
      />
      </section>
      </div>
    </>
  );
};

export default WomenCards;


