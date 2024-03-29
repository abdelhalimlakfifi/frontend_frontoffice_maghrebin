import React from "react";
import BtnGlobal from "../GlobalComponents/BtnGlobal";
import { Link } from "react-router-dom";

const Product = (Props) => {
  const { idProduct, title, price, description, color, size, selectedImage } =
    Props;
  // let colors = [];

  // // If multiple colors are provided, split them and create color circles for each
  // if (color.includes(",")) {
  //   colors = color
  //     .split(",")
  //     .map((color, index) => (
  //       <div
  //         key={index}
  //         className="inline-block h-11 w-11 rounded-full mr-2"
  //         style={{ backgroundColor: color }}
  //       ></div>
  //     ));
  // } else {
  //   // If only one color is provided
  //   colors = (
  //     <div
  //       className="inline-block h-6 w-6 rounded-full"
  //       style={{ backgroundColor: color }}
  //     ></div>
  //   );
  // }

  // const productColors = ["White", "Blue", "beige", "Violet"]
  const productColors = color;
  const additional = { selectedImage, title, price, idProduct };
  console.log("additional ", additional);
  return (
    <div className="w-full  order-2 lg:order-1 flex flex-col justify-between">
      <h2 className=" text-3xl font-bold text-blackV my-8 ">{title}</h2>
      <p className=" text-lg font-medium text-gray-600 mb-8">{price}</p>
      <p className=" text-base mt-2 mb-8">{description}</p>
      <div className="text-base mb-8 flex items-center">
        {productColors.map((currentColor, index) => (
          <BtnGlobal
            key={index}
            className="mr-2 text-sm border-[0.5px] border-black p-3 "
            content={currentColor}
          />
        ))}
      </div>

      <div className="flex items-center mt-2 mb-8">
        <label htmlFor="sizeInput" className="mr-8 text-base font-medium">
          SIZE:
        </label>
        <select
          id="sizeInput"
          className="border-b border-gray-400 cursor-pointer"
        >
          {/* <option value="XXL">XXL</option>
          <option value="XL">XL</option>
          <option value="L">L</option>
          <option value="M">M</option>
          <option value="S">S</option> */}
          {size.map((s) => (
            <option key={s.id} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </div>
      {/* const additionalData = location.stat e; */}

      <Link to={"/checkout"} state={additional}>
        <BtnGlobal
          className="w-full border border-black-border p-3 mt-28 font-semibold text-lg uppercase"
          content="Add to cart"
          to="/Checkout"
        />
      </Link>
    </div>
  );
};

export default Product;
