import React from "react";
import BtnGlobal from "../GlobalComponents/BtnGlobal";

const Product = ({ title, price, description, color }) => {
  let colors = [];

  // If multiple colors are provided, split them and create color circles for each
  if (color.includes(",")) {
    colors = color
      .split(",")
      .map((color, index) => (
        <div
          key={index}
          className="inline-block h-6 w-6 rounded-full mr-2"
          style={{ backgroundColor: color }}
        ></div>
      ));
  } else {
    // If only one color is provided
    colors = (
      <div
        className="inline-block h-6 w-6 rounded-full"
        style={{ backgroundColor: color }}
      ></div>
    );
  }

  return (
    <>
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <p className="text-sm text-gray-600 mb-8">{price}</p>
        <p className="text-base mt-2 mb-8">{description}</p>
        <div className="text-base mb-8 flex items-center">
          <span className="mr-2">COLOR:</span>
          <span className="flex items-center">{colors}</span>
        </div>
        <div className="flex items-center mt-2 mb-8">
          <label htmlFor="sizeInput" className="mr-2">
            SIZE:
          </label>
          <select
            id="sizeInput"
            className="border-b border-gray-400 cursor-pointer"
          >
            <option value="XXL">XXL</option>
            <option value="XL">XL</option>
            <option value="L">L</option>
            <option value="M">M</option>
            <option value="S">S</option>
          </select>
        </div>

        <BtnGlobal
          className="w-full border border-black p-2 mt-4 mb-8"
          content=" ADD TO CART"
        />
      </div>
    </>
  );
};

export default Product;
