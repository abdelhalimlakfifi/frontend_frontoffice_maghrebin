import React from "react";
import CartTitle from "./CartTitle";
import CartProductImg from "./CartProductImg";
import CartProductDescription from "./CartProductDescription";
import CartTrashIcon from "./CartTrashIcon";

const Cart = () => {
  return (
    <div className="w-full md:pl-28 md:pr-20 px-8">
      {/* Cart Title */}
      <CartTitle />

      <div className="flex mt-8" style={{ height: "300px" }}>
        {/* First Div with an Image */}
        <CartProductImg />

        {/* Second Div with Description and Button */}
        <CartProductDescription />

        {/* Third Div with a Trash Icon */}
        <CartTrashIcon />
      </div>
    </div>
  );
};

export default Cart;
