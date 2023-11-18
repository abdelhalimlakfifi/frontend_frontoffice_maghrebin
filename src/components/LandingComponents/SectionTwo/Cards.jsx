import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
//import card image
import Kaftan1 from "./../../../assets/Kaftan1.jpg";
import { Card } from "./Card";

const Cards = () => {
  // Example data for three cards
  const cardData = [
    { title: "Product 1", price: "20.00$", imageSrc: Kaftan1 },
    { title: "Product 2", price: "25.00$", imageSrc: Kaftan1 },
    { title: "Product 3", price: "30.00$", imageSrc: Kaftan1 },
    { title: "Product 4", price: "20.00$", imageSrc: Kaftan1 },
  ];

  return (
    <>
      {/* Show swiper in mobile */}
      {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper lg:hidden "

      >
        <section className="flex flex-row flex-wrap justify-center mx-10">
          {cardData.map((card, index) => (
            <SwiperSlide key={index}>
              <Card {...card} />
            </SwiperSlide>
          ))}
        </section>
      </Swiper> */}
      
      {/* Show in Web without swiper */}
      <section className="flex flex-row flex-wrap justify-center mx-10">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </section>
    </>
  );
};

export default Cards;
