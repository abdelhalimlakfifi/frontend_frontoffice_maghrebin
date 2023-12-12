import React from "react";
import PersonalCardInfo from "../components/CheckoutComponents/PersonalCardInfo";
import Review from "../components/CheckoutComponents/Review";
import Layout from "../components/Layout/Layout";
import { useLocation } from "react-router";

const CheckoutPage = () => {
  // // {/* const additionalData = location.stat e; */}
  const location = useLocation();

  const additionalData = location.state;
  console.log("additionalData ", additionalData);
  return (
    <Layout>
      <section className="flex flex-col lg:flex-row w-full lg:px-20 py-7 px-12 my-14">
        <PersonalCardInfo
          Price={additionalData.price}
          productId={additionalData.idProduct}
        />
        <Review
          imagePath={additionalData.selectedImage[0].image_id.path}
          // imagePath="Product Title"
          productTitle={additionalData.title}
          productPrice={additionalData.price}
          shippingCost={additionalData.price}
          totalPrice={additionalData.price}
        />
      </section>
    </Layout>
  );
};

export default CheckoutPage;
