import React from "react";

const Review = ({ imagePath, productTitle, productPrice, shippingCost, totalPrice }) => {
  return (
    <div className="lg:w-2/5 lg:pl-20 w-full px-8 my-6">
      <div className="w-full md:border-0 border-b border-blackV mb-6">
        <h2 className="pb-1 md:border-b-[3px] border-blackV inline-block font-medium text-xl pr-4">
          Review
        </h2>
      </div>
      <div className="flex justify-between items-start w-full">
        <div className="w-full">
          <div className="bg-slate-500 lg:h-64 h-60 lg:w-52 w-52">
            <img
              src={imagePath}
              alt="Product Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-end w-full">
          <h3 className="mx-2">
            {productTitle} <span className="invisible md:visible">:</span>
          </h3>
          <p className="mx-2">${productPrice}</p>
        </div>
      </div>

      <div className="w-full mt-8 space-y-2.5">
        <div className="w-full flex items-center justify-between">
          <p className="">SHIPPING</p>
          <p>${shippingCost}</p>
        </div>
        <div className="w-full h-[1.5px] bg-blackV" />
        <div className="w-full flex items-center justify-between">
          <p>TOTAL :</p>
          <span>${totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default Review;
