import React, { useState } from "react";
import Takchita1 from "../../assets/Kaftan1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Takchita from "../../assets/Kaftan2.jpg";
import lavendarJellaba from "../../assets/WomenMain.webp";
import lavendarJellaba2 from "../../assets/ProductImages/jelaba/MauveJellaba.webp";
import BeigeJellaba2 from "../../assets/ProductImages/jelaba/BeigeJellaba.jpg";
import BeigeJellaba from "../../assets/ProductImages/jelaba/beigeJellaba.webp";
import JellabaBlue from "../../assets/ProductImages/jelaba/jellabablue.webp";
import JellabaBlue2 from "../../assets/ProductImages/jelaba/jellabablue2.webp";

const imageSources = [
  Takchita,
  lavendarJellaba,
  lavendarJellaba2,
  BeigeJellaba2,
  BeigeJellaba,
  JellabaBlue,
  JellabaBlue2,
  Takchita,
  Takchita,
];

const ProductImage = (Props) => {
  const { selectedImage } = Props;
  const [SelectedImagePrimaire, setSelectedImagePrimaire] = useState(
    "http://localhost:3000/api/" + selectedImage[0].image_id.path
  ); // Set the initial selected image
  const handleImageClick = (index) => {
    setSelectedImagePrimaire(
      "http://localhost:3000/api/" + selectedImage[index].image_id.path
    );
  };

  return (
    <div className="w-full lg:flex flex lg:order-2 h-[45rem]">
      <div className="border-2 border-black  mr-3 ">
        <img
          src={SelectedImagePrimaire}
          alt=""
          className="mainImg w-full h-full object-cover"
        />
      </div>
      <div className="">
        <Swiper
          direction={"vertical"}
          slidesPerView={3}
          spaceBetween={10}
          mousewheel={true}
          modules={[Mousewheel]}
          className="w-full h-full"
        >
          {selectedImage.map((image, index) => (
            <SwiperSlide key={index} className="border-2 border-black">
              <img
                src={"http://localhost:3000/api/" + image.image_id.path}
                alt={`maghrebin-${index}`}
                className="w-full h-full object-cover hover:opacity-60 transition-opacity duration-300 ease-in-out cursor-pointer"
                onClick={() => handleImageClick(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductImage;
