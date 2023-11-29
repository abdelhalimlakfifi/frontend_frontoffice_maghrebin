import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Card } from "../../../GlobalComponents/ProductCard";

//import card image
import Man1 from "../../../../assets/Man1.jpg";
import Man2 from "../../../../assets/Man2.jpg"
import whiteJabadour2 from "../../../../assets/ProductImages/Men/whiteJabadour2.jpg"
import whiteJabadour from "../../../../assets/ProductImages/Men/whiteJabadour.jpg"
import emerald_Green2 from "../../../../assets/ProductImages/Men/emerald_Green2.webp"
import emerald_Green from "../../../../assets/ProductImages/Men/emerald_Green.webp"
import BrownJabadour2 from "../../../../assets/ProductImages/Men/BrownJabadour2.jpg"
import BrownJabadour from "../../../../assets/ProductImages/Men/BrownJabadour.jpg"
import amerlad_black2 from "../../../../assets/ProductImages/Men/amerlad_black2.avif"
import amerlad_black from "../../../../assets/ProductImages/Men/amerlad_black.avif"






const MenCards = () => {
  // Example data for three cards
  const cardData = [
    { title: "Product 1", price: "20.00$", mainImg: Man1, secondaryImg:Man2},
    { title: "Product 2", price: "25.00$", mainImg: whiteJabadour2 , secondaryImg:whiteJabadour},
    { title: "Product 3", price: "30.00$", mainImg: amerlad_black , secondaryImg:amerlad_black2},
    { title: "Product 4", price: "20.00$", mainImg: BrownJabadour , secondaryImg:BrownJabadour2},
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
      </section>
      </div>
    </>
  );
};

export default MenCards;
