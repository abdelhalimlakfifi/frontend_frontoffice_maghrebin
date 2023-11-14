import React from "react";
import BtnGlobal from "../GlobalComponents/BtnGlobal"

const CategorieDiv = ({ imgSrc }) => {
  return (
    <div className="w-1/3 border border-black border-solid relative">
      <img className="w-full h-full object-cover" src={imgSrc} alt="Image" />
      <BtnGlobal
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-transparent border border-black p-2"
        content="View More"
      />
    </div>
  );
};

export default CategorieDiv;
