import React from "react";
import CartTitle from "../components/MyCartComponents/CartTitle"
import CartProductImg from "../components/MyCartComponents/CartProductImg";
import CartProductDescription from "../components/MyCartComponents/CartProductDescription";
import CartTrashIcon from "../components/MyCartComponents/CartTrashIcon";
// import Layout from '../components/Layout/Layout';

const MyCartPage = () => {
  return (
    <>
     <section className="flex flex-col mx-10 md:flex-row lg:w-[90vw] py-7">
      <div className="w-full md:px-28 md:pr-20">
        {/* Cart Title */}
        <CartTitle />

        <div className="flex lg:block mt-8" style={{ height: "300px" }}>
          {/* First Div with an Image */}
          <CartProductImg />

          {/* Second Div with Description and Button */}
          <CartProductDescription />

          {/* Third Div with a Trash Icon */}
          <CartTrashIcon />
        </div>
      </div>
    </section>
    </>
  );
};

export default MyCartPage;
