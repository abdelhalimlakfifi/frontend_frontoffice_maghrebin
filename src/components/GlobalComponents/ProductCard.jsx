import React from "react";
import BtnGlobal from "./BtnGlobal";


const Card = ({ title, price, imageSrc }) => {
  return (
    <div className="flex flex-col w-[13rem] md:w-[25rem] lg:w-[18rem] mx-4 my-9 ">
      <div className="relative">
        <img src={imageSrc} alt={title} className="border-blackV border-2" />
        <div className="absolute top-3 right-4 bg-white rounded-full h-7 w-7 flex justify-center items-center">
          <i className="pi pi-heart text-blackV hover:text-pink-600 text-lg mt-1"></i>
        </div>
      </div>
      <div className="flex flex-start justify-between my-2 font-medium">
        <h2>{title}</h2>
        <h2>{price}</h2>
      </div>
      <div className="">
        <BtnGlobal
          className="w-full border-2 border-blackV p-2 font-medium"
          content="View Details"
        />
        <BtnGlobal
          className="w-full border-2 border-blackV bg-blackV text-white font-medium p-2 my-2"
          content="Add To Cart "
        />
      </div>
    </div>
  );
};

export {Card}

