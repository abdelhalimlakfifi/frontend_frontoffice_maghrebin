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

  const productColors = ["Green", "Blue", "Yellow", "violet"]

  return (
      <div className="w-full  order-2 lg:order-1 flex flex-col justify-between">
        <h2 className="font-NewYork text-3xl font-bold my-8">{title}</h2>
        <p className="font-NewYork text-sm text-gray-600 mb-8">{price}</p>
        <p className="font-NewYork text-base mt-2 mb-8">{description}</p>
        <div className="text-base mb-8 flex items-center">

        {productColors.map((currentColor, index) => (
        <BtnGlobal
          key={index}
          className="mr-2 text-sm border-[0.5px] border-black p-3 font-NewYork"
          content={currentColor}
          // onClick={}
        />
      ))}
      </div>

        <div className="flex items-center mt-2 mb-8">
          <label htmlFor="sizeInput" className="mr-2 text-sm">
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
          className="w-full border border-black-border p-3 mt-28  font-semibold text-base uppercase"
          content=" Add to cart"
        />
      </div>
  );
};

export default Product;
