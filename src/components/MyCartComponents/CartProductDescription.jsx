import React, { useState } from "react";
import InputNum from "../GlobalComponents/InputNum";
import BtnGlobal from "../GlobalComponents/BtnGlobal";

const CartProductDescription = () => {
  // State to manage the product price and selected color
  const [productPrice, setProductPrice] = useState(150);
  const [productTitle, setProductTitle] = useState("Product Description");
  const [selectedColor, setSelectedColor] = useState(null);

  const productColors = ["White", "Blue"]; // Sample of available product colors
  const productSizes = ["Small", "Medium", "Large"]; // Sample of available product sizes

  const handleColorClick = (color) => {
    // Update the selected color when a color button is clicked
    setSelectedColor(color);
  };

  return (
        <div className="w-[60%] flex flex-col gap-3 ">
          <h3 className="text-sm md:text-lg lg:text-base font-medium ">
            {productTitle}
          </h3>
          <p className="text-gray-600 text-base font-normal ">{`$ ${productPrice}`}</p>
          <div className="flex flex-row gap-2">
            {productColors.map((currentColor, index) => (
              <BtnGlobal
                key={index}
                className={`text-sm border-[0.5px] border-black p-1.5 ${
                  selectedColor === currentColor ? "bg-gray-300" : ""
                }`}
                content={currentColor}
                onClick={() => handleColorClick(currentColor)}
              />
            ))}
          </div>
          <div className="flex flex-col items-start">
            <InputNum />
          </div>
        </div>
  
  );
};

export default CartProductDescription;
