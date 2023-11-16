import React from "react";
import MainCheckout from "../components/CheckoutComponents/MainCheckout";
import Layout from "../components/Layout/Layout";

const CheckoutPage = ({children}) => {
  return(
    <Layout>
      <MainCheckout />
    </Layout>
  ) 
};

export default CheckoutPage;
