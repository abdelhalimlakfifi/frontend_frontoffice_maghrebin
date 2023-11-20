import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import BtnGlobal from "../components/GlobalComponents/BtnGlobal";

const Card = ({ id, title, price, mainImg, onRemoveFromWishlist}) => {
  return (
    <div className="flex flex-col w-[17rem] md:w-[17rem] lg:w-[15rem] mx-4 my-9 ">
      <div className="relative">
        <img src={mainImg} alt={title} className="border-blackV border-2" />
        <div
          className="absolute top-3 right-4 bg-white rounded-full h-7 w-7 flex justify-center items-center"
          onClick={() => onRemoveFromWishlist(id)}
        >
          <i className="pi pi-heart text-pink-600 text-lg mt-1"></i>
        </div>
      </div>
      <div className="flex flex-start justify-between my-2 font-medium">
        <h2>{title}</h2>
        <h2>{price}</h2>
      </div>
      <div className="">
        <BtnGlobal
          className="w-full border-2 border-blackV p-2 font-medium"
          content="View Details"
        />
        <BtnGlobal
          className="w-full border-2 border-blackV bg-blackV text-white font-medium p-2 my-2"
          content="Add To Cart "
        />
      </div>
    </div>
  );
};

function WishListPage() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter(
      (product) => product.id !== productId);
      console.log('Original Wishlist:', updatedWishlist);

    setWishlist(updatedWishlist);

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <Layout>
      <div className="flex justify-center my-5">
        <i className="pi pi-heart text-blackV text-[50px]"></i>
      </div>

      <div className="flex justify-center my-5">
        <h1 className="text-2xl font-semibold text-blackV">Your Wish List</h1>
      </div>

      <div className=" ">
        <section className="flex flex-row flex-wrap justify-center mx-10 ">
          {wishlist.map((product, index) => (
            <Card
              key={index}
              onRemoveFromWishlist={removeFromWishlist}
              {...product}
            />
          ))}
        </section>
      </div>
    </Layout>
  );
}

export default WishListPage;
