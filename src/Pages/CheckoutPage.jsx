import React from "react";
import PersonalCardInfo from "../components/CheckoutComponents/PersonalCardInfo";
import Review from "../components/CheckoutComponents/Review";
import Layout from "../components/Layout/Layout";

const CheckoutPage = () => {
  return (
    <Layout>
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
    </Layout>
    
  );
};

export default CheckoutPage;