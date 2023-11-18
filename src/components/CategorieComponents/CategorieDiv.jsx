import React from "react";
import BtnGlobal from "../GlobalComponents/BtnGlobal"

const CategorieDiv = ({ imgSrc }) => {
  return (
    <div className="w-1/3 border border-black border-solid relative">
      <div className="absolute inset-0 bg-black opacity-20 noisy-overlay"></div>
      <img className="w-full h-full object-cover" src={imgSrc} alt="Image" />
      <BtnGlobal
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-white border p-4 uppercase font-NewYork tracking-widest"
        content="View More"
      />
    </div>
  );
};

export default CategorieDiv;
