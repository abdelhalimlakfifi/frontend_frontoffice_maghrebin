import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
//import card image
import Man1 from "../../../../assets/Man1.jpg";
import { Card } from "../../../GlobalComponents/ProductCard";

const MenCards = () => {
  // Example data for three cards
  const cardData = [
    { title: "Product 1", price: "20.00$", imageSrc: Man1 },
    { title: "Product 2", price: "25.00$", imageSrc: Man1 },
    { title: "Product 3", price: "30.00$", imageSrc: Man1 },
    { title: "Product 4", price: "20.00$", imageSrc: Man1 },
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

export default MenCards;
