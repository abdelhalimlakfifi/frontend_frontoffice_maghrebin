import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
//import card image
import BoyKid1 from "../../../../assets/BoyKid1.jpeg";
import BoyKid2 from "../../../../assets/BoyKid1.jpeg";

import zelija from '../../../../assets/Zelija.svg';

import { Card } from "../../../GlobalComponents/ProductCard";

const MenCards = () => {
  // Example data for three cards
  const cardData = [
    { title: "Product 1", price: "20.00$", mainImg: BoyKid1, secondaryImg:BoyKid2  },
    { title: "Product 2", price: "25.00$", mainImg: BoyKid1, secondaryImg:BoyKid2  },
    { title: "Product 3", price: "30.00$", mainImg: BoyKid1, secondaryImg:BoyKid2 },
    { title: "Product 4", price: "20.00$", mainImg: BoyKid1, secondaryImg:BoyKid2  },
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
    <section className="flex flex-row flex-wrap justify-center gap-9 py-4">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
      <img
        src={zelija}
        alt="zelija"
        className="xl:right-[11.2rem] xl:top-[139.4rem] lg:h-[8rem] lg:top-[53.9rem] lg:right-[180px] h-40 absolute top-[400px] right-[165px] -z-10 opacity-20 "
      />
    </section>
    </div>
  </>
  );
};

export default MenCards;