import React from "react";
import Product from "./Product";
import ProductImage from "./ProductImage";
import BreadCrum from "../GlobalComponents/BreadCrum";
import ProductsSwiper from "./ProductsSwiper";

const MainProductDetail = () => {
  // BreadCrum
  const items = [{ label: "Men" }, { label: "Djelaba" }];
  return (
    // test data
    <>
      <div className="mb-4 lg:px-20 px-12 mt-8">
        <BreadCrum items={items} />
      </div>
      <section className="w-full lg:px-20 px-12 pb-7 flex lg:flex-row lg:gap-12 flex-col justify-between">
        <Product
          title="Product Title"
          price="$00.00"
          description="Lorem ipsum refers to a placeholder text commonly used in the publishing and graphic design industries. It's a string of Latin-looking words that have no actual meaning. "
          color="Blue"
        />
        <ProductImage />
      </section>
    </>
  );
};

export default MainProductDetail;
