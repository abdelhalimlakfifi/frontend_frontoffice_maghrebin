import React from "react";
import PersonalCardInfo from "./PersonalCardInfo";
import Review from "./Review";

const MainCheckout = () => {
  return (
    <section className="flex flex-col md:flex-row w-full md:px-20 py-7">
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
