import React from "react";
import BtnGlobal from "../GlobalComponents/BtnGlobal";

const Review = (Props) => {
  const { imagePath, productTitle, productPrice, shippingCost, totalPrice } =
    Props;
    
  // useEffect(() => {
  //   post("http://localhost:3000/api/order/order", token, {
  //     city,
  //     address,
  //     postalCode,
  //     order_items: [
  //       {
  //         product_id: productId,
  //         quantity: "1",
  //         unit_price: Price,
  //       },
  //     ],
  //   })
  //     .then((response) => {
  //       console.log("Response:", response.data);
  //       // Handle success, update state, or perform other actions
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //       // Handle error, display an error message, or perform other actions
  //     });
  // }, []);
  return (
    <div className="lg:w-2/5 lg:pl-20 w-full px-8 my-8">
      <div className="w-full md:border-0 border-b border-blackV mb-6">
        <h2 className="uppercase pb-1 md:border-b-[2px] border-blackV inline-block font-medium text-lg pr-4">
          Review
        </h2>
      </div>
      <div className="flex justify-between items-start w-full">
        <div className="w-full">
          <div className="bg-slate-500 lg:h-64 h-60 lg:w-52 w-52">
            <img
              // src="https://via.placeholder.com/208x240"
              src={"http://localhost:3000/api/" + imagePath}
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
      <BtnGlobal
        className="w-full border border-gray-500 p-3 my-6"
        content="SAVE AND CONTINUE"
      />
    </div>
  );
};

export default Review;
