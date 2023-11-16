import React from "react";
import ProductsSwiper from "./ProductsSwiper";

const ProductImage = () => {
  return (
    <div className="w-full lg:flex flex  ">
      <div className="border mr-3 lg:w-9/12">
        <img src="https://via.placeholder.com/552x616" alt="" />
      </div>

      <ProductsSwiper />
    </div>
  );
};

export default ProductImage;
