import React from "react";
import PersonalCardInfo from "./PersonalCardInfo";
import Review from "./Review";

const MainCheckout = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full lg:px-20 py-7 px-12 my-14">
      <PersonalCardInfo />
      <Review
        imagePath="your-image-path.jpg"
        productTitle="Product Title"
        productPrice="XX.XX"
        shippingCost="XX.XX"
        totalPrice="XX.XX"
      />
    </section>
  );
};

export default MainCheckout;
