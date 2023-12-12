import React from "react";
import BtnGlobal from "../GlobalComponents/BtnGlobal";
// import images
import SubCategoryImg from "../../assets/berber.jpg";
import Litem from "../../assets/Litem.jpg";
import sahara from "../../assets/sahara.jpg";
import wedding from "../../assets/wedding.jpg";

function MainCards() {
  return (
    <div className="w-full flex justify-center">
      <div className=" w-full max-w-7xl h-full">
        <h1 className="uppercase text-2xl md:text-3xl font-medium flex justify-center font-NewYork text-blackV mt-11 mb-5 h-auto">
          Explore Moroccan Traditions
        </h1>
        <div className="flex flex-col mb-11 h-full w-full  font-DIN ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-5 md:mx-11 lg:mx-10 place-items-center">
          {/* w-[15rem] md:w-[20rem] lg:w-[30rem] xl:w-[38rem] */}
              
            <div className="relative lg:w-full w-full md:w-[80%] h-[35rem] md:h-[40rem]  lg:h-[38rem] xl:h-[48rem]">
              <img
                className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300 ease-in-out cursor-pointer"
                src={SubCategoryImg}
                alt="Image"
              />
              <BtnGlobal
                className="absolute bottom-10 border-2 left-1/2 p-3 w-56 md:p-5 md:w-80 lg:p-4 lg:w-96 transform -translate-x-1/2 bg-white hover:bg-blackV border-blackV hover:border-white hover:text-white   font-medium text-xl "
                content="Amazigh"
              />
            </div>
            <div className="relative lg:w-full w-full md:w-[80%] h-[35rem] md:h-[40rem]   lg:h-[38rem] xl:h-[48rem]">
              <img
                className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300 ease-in-out cursor-pointer"
                src={sahara}
                alt="Image"
              />
              <BtnGlobal
                className="absolute bottom-10 border-2 left-1/2 p-3 w-56 md:p-5 md:w-80  lg:p-4 lg:w-96 transform -translate-x-1/2 bg-white hover:bg-blackV border-blackV hover:border-white hover:text-white  font-medium text-xl "
                content="Sahraoui"
              />
            </div>
            <div className="relative lg:w-full w-full md:w-[80%] h-[35rem] md:h-[40rem]  lg:h-[38rem] xl:h-[48rem]">
              <img
                className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300 ease-in-out cursor-pointer"
                src={wedding}
                alt="Image"
              />
              <BtnGlobal
                className="absolute bottom-10 border-2 left-1/2 p-3 w-56 md:p-5 md:w-80  lg:p-4 lg:w-96 transform -translate-x-1/2 bg-white hover:bg-blackV border-blackV hover:border-white hover:text-white  font-medium text-xl "
                content="Wedding"
              />
            </div>
            <div className="relative lg:w-full w-full md:w-[80%] h-[35rem] md:h-[40rem]  lg:h-[38rem] xl:h-[48rem]">
              <img
                className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300 ease-in-out cursor-pointer"
                src={Litem}
                alt="Image"
              />
              <BtnGlobal
                className="absolute bottom-10 border-2 left-1/2 p-3 w-56 md:p-5 md:w-80  lg:p-4 lg:w-96transform -translate-x-1/2 bg-white hover:bg-blackV border-blackV hover:border-white hover:text-white  font-medium text-xl "
                content="E-litem  "
              />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default MainCards;
