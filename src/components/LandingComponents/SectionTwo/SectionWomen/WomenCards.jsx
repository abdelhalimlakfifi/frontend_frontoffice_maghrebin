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
      <div className="">
      <Swiper
        slidesPerView={2}
        spaceBetween={50}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="lg:hidden"
   
      >
        <section className="">
          {cardData.map((card, index) => (
            <SwiperSlide key={index} className="swiper-background ">
              <Card {...card} />
            </SwiperSlide>
          ))}
        </section>
      </Swiper>
      </div>
      
      
      {/* Show in Web without swiper */}
      <div className="hidden lg:block">
      <section className="flex flex-row flex-wrap justify-center mx-10 ">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </section>
      </div>
    </>
  );
};

export default WomenCards;
