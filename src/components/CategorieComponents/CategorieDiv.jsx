import React from "react";
import BtnGlobal from "../GlobalComponents/BtnGlobal"

const CategorieDiv = ({ imgSrc }) => {
  return (
    <div className="w-1/3 border-r border-2 border-blackV relative">
      <img className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300 ease-in-out cursor-pointer" src={imgSrc} alt="Image" />
      <BtnGlobal
        className="absolute bottom-10 border-2 left-1/2 p-2 w-[30vw] md:p-4 md:w-44  lg:p-4 lg:w-52 transform -translate-x-1/2 bg-white hover:bg-purple-400 border-blackV hover:border-white hover:text-white  font-medium text-base md:text-lg "
        content="View More"
      />
    </div>
  );
};

export default CategorieDiv;
