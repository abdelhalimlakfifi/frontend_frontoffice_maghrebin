import React, { useState, useEffect } from "react";
import BtnGlobal from "./BtnGlobal";

const Card = ({ id, title, price, mainImg, secondaryImg }) => {
  const [isHovered, setIsHovered] = useState(false);

  
  const getInitialWishlist = () => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist"));
    return storedWishlist || [];
  };

  const [wishlist, setWishlist] = useState(getInitialWishlist);

  const addProductToStorage = () => {
    console.log("Adding product to storage", id, title, price, mainImg);

    // Check if the product is already in the wishlist
    const isProductInWishlist = wishlist.some((product) => product.id === id);

    if (!isProductInWishlist) {
      // Update the state as a callBack Function
      setWishlist((prevWishlist) => [
        ...prevWishlist,
        { id, title, price, mainImg },
      ]);

      // Update localStorage only if the product's id is not already present
      if (!getInitialWishlist().some((product) => product.id === id)) {
        localStorage.setItem(
          "wishlist",
          JSON.stringify([...getInitialWishlist(), { id, title, price, mainImg }])
        );
      }
    }
  };

  return (
    <div
      className="flex flex-col w-[8rem] md:w-[12rem] lg:w-[13rem] xl:w-[17rem]"
    >
      <div className="relative" onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
        <img
          src={isHovered ? secondaryImg : mainImg}
          alt={title}
          className="border-blackV border-2"
          
        />
        {isHovered && (
          <button
            className="absolute p-3 lg:p-5 top-1 lg:top-3 right-1 lg:right-4 bg-white rounded-full h-3 lg:h-1 w-3 lg:w-1 flex justify-center items-center"
            onClick={addProductToStorage}
          >
            <i className="pi pi-heart text-blackV hover:text-pink-600 text-sm lg:text-lg  "></i>
          </button>
        )}
      </div>
      <div className="flex flex-start justify-between my-2 text-sm md:text-base  font-medium">
        <h2>{title}</h2>
        <h2>{price}</h2>
      </div>
      <div className="">
        <BtnGlobal
          className="w-full border-2 border-blackV p-1 md:p-2 font-medium"
          content="View Details"
        />
        <BtnGlobal
          className="w-full border-2 border-blackV bg-blackV text-white font-medium p-1 md:p-2 my-2"
          content="Add To Cart "
        />
      </div>
    </div>
  );
};

export { Card };
