import React from "react";
import CartTitle from "../components/MyCartComponents/CartTitle";
import CartProductDescription from "../components/MyCartComponents/CartProductDescription";
import takchita from "../assets/ProductImages/jelaba/BeigeJellaba.jpg"

const MyCartPage = () => {
  return (
    <section className="flex flex-col lg:w-[20rem]  ">
      {/* Cart Title */}
      <CartTitle />

      <div className="flex flex-row mt-8 w-full gap-3">
        {/* First Div with an Image */}
        <div className="h-[9rem] ">
          <img
            src={takchita}
            alt="Product"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Second Div with Description and Button */}
        <CartProductDescription />

        {/* Third Div with a Trash Icon */}
        <div className="w-[10%] flex justify-end p-1">
          <i className="pi pi-trash text-xl cursor-pointer"></i>
        </div>
      </div>
    </section>
  );
};

export default MyCartPage;
