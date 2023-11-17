import React from "react";
import Product from "./Product";
import ProductImage from "./ProductImage";
import BreadCrum from "../GlobalComponents/BreadCrum";
import ProductsSwiper from "./ProductsSwiper";
import Layout from "../Layout/Layout";

const MainProductDetail = () => {
  // BreadCrum
  const items = [{ label: "Men" }, { label: "Djelaba" }];
  return (
    // test data
    <Layout>
      <div className="mb-6 lg:px-20 px-12 mt-8">
        <BreadCrum items={items} />
      </div>
      <section className="w-full lg:px-20 px-12 flex lg:flex-row lg:gap-12 flex-col justify-between mb-16">
        <Product
          title="Product Title"
          price="$00.00"
          description="Lorem ipsum refers to a placeholder text commonly used in the publishing and graphic design industries. It's a string of Latin-looking words that have no actual meaning. "
          color="Blue"
        />
        <ProductImage />
      </section>
    </Layout>
  );
};

export default MainProductDetail;
