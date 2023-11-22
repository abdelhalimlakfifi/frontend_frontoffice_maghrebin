import React from "react";
import BtnGlobal from "../GlobalComponents/BtnGlobal";
// import images
import SubCategoryImg from '../../assets/berber.jpg'
import Litem from '../../assets/Litem.jpg'
import sahara from '../../assets/sahara.jpg'
import wedding from '../../assets/wedding.jpg'



function MainCards() {
  return (
    <div className=" w-full h-full">
      <h1 className=" text-3xl font-medium flex justify-center font-NewYork text-blackV mt-11 mb-5 h-auto">Explore Moroccan Traditions</h1>
      <div className="flex flex-col mb-11 h-full w-full">
        <div className="mx-11 md:mx-20 lg:mx-80 flex justify-between h-[25rem] md:h-[35rem] lg:h-[45rem] ">
        <div className="  border-2 border-blackV relative w-[15rem] md:w-[25rem] lg:w-[35rem]">
          <img
            className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300 ease-in-out cursor-pointer"
            src={SubCategoryImg}
            alt="Image"
          />
          <BtnGlobal
            className="absolute bottom-10 border-2 left-1/2 p-2 w-40 md:p-3 md:w-72 lg:p-4 lg:w-96 transform -translate-x-1/2 bg-white hover:bg-blackV border-blackV hover:border-white hover:text-white   font-medium text-lg "
            content="Amazigh"
          />
        </div>
        <div className=" border-2 border-blackV relative w-[15rem]  md:w-[25rem] lg:w-[35rem]  ">
          <img
            className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300 ease-in-out cursor-pointer"
            src={sahara}
            alt="Image"
          />
          <BtnGlobal
            className="absolute bottom-10 border-2 left-1/2 p-2 w-40 md:p-3 md:w-72 lg:p-4 lg:w-96 transform -translate-x-1/2 bg-white hover:bg-blackV border-blackV hover:border-white hover:text-white  font-medium text-lg "
            content="Sahraoui"
          />
        </div>
        </div>
        
        <div className="mx-11 mt-11 lg:mt-20 md:mx-20 lg:mx-80 flex justify-between h-[25rem] md:h-[35rem] lg:h-[45rem] ">
        <div className="border-2 border-blackV relative w-[15rem]  md:w-[25rem] lg:w-[35rem] ">
          <img
            className="w-full h-full    object-cover hover:opacity-90 transition-opacity duration-300 ease-in-out cursor-pointer"
            src={wedding}
            alt="Image"
          />
          <BtnGlobal
            className="absolute bottom-10 border-2 left-1/2 p-2 w-40 md:p-3 md:w-72 lg:p-4 lg:w-96 transform -translate-x-1/2 bg-white hover:bg-blackV border-blackV hover:border-white hover:text-white  font-medium text-lg "
            content="Wedding"
          />
        </div>
        <div className="border-2 border-blackV relative w-[15rem]  md:w-[25rem] lg:w-[35rem]">
          <img
            className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300 ease-in-out cursor-pointer"
            src={Litem}
            alt="Image"
          />
          <BtnGlobal
            className="absolute bottom-10 border-2 left-1/2 p-2 w-40 md:p-3 md:w-72 lg:p-4 lg:w-96transform -translate-x-1/2 bg-white hover:bg-blackV border-blackV hover:border-white hover:text-white  font-medium text-lg "
            content="E-litem  "
          />
        </div>
        </div>
        
        
      </div>
    </div>
  );
}

export default MainCards;
