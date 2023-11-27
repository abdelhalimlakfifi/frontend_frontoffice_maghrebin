import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { Slider } from "primereact/slider";
import { Card } from "../components/GlobalComponents/ProductCard";

//import card image
import Kaftan1 from "../assets/Kaftan1.jpg";
import Kaftan2 from "../assets/Kaftan2.jpg";
import lavendarJellaba from "../assets/WomenMain.webp";
import lavendarJellaba2 from "../assets/ProductImages/jelaba/MauveJellaba.webp";
import BeigeJellaba2 from "../assets/ProductImages/jelaba/BeigeJellaba.jpg";
import BeigeJellaba from "../assets/ProductImages/jelaba/beigeJellaba.webp";
import JellabaBlue from "../assets/ProductImages/jelaba/jellabablue.webp";
import JellabaBlue2 from "../assets/ProductImages/jelaba/jellabablue2.webp";

function WomenCategory() {
  const colorTypes = [
    "white",
    "red-900",
    "blue-900",
    "green-900",
    "pink-400",
    "orange-600",
    "purple-700",
    "rose-800",
    "orange-300",
    "stone-950",
  ];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const cardData = [
    {
      id: 1,
      title: "Product 1",
      price: "20.00$",
      mainImg: Kaftan1,
      secondaryImg: Kaftan2,
      color: "white",
    },
    {
      id: 2,
      title: "Product 2",
      price: "25.00$",
      mainImg: lavendarJellaba,
      secondaryImg: lavendarJellaba2,
      color: "purple-700",
    },
    {
      id: 3,
      title: "Product 3",
      price: "30.00$",
      mainImg: BeigeJellaba,
      secondaryImg: BeigeJellaba2,
      color: "orange-300",
    },
    {
      id: 4,
      title: "Product 4",
      price: "20.00$",
      mainImg: JellabaBlue,
      secondaryImg: JellabaBlue2,
      color: "blue-900",
    },
  ];

  const [mobileFilter, setMobileFilter] = useState(false);

  const handleFilterButtonClick = (e) => {
    setMobileFilter(!mobileFilter);
  };

  //Filter Products
  const [selectedColor, setSelectedColor] = useState(null);
  const handleColorFilter = (selectedColor) => {
    setSelectedColor(selectedColor);
  };

  const filterProducts = () => {
    return cardData.filter((product) => {
      if (selectedColor && product.color !== selectedColor) {
        return false;
      }
      return true; // this indicates that Product passed all filters
    });
  };

  const filteredProducts = filterProducts();

  return (
    <Layout>
      <div className="flex h-full font-DIN">
        <div
          className={
            mobileFilter
              ? ` w-[85%] h-full border-r-2 border-blackV p-5 `
              : ` hidden md:block md:w-[25%] xl:w-[15%] h-screen border-r-2 border-blackV  md:p-5 xl:p-3`
          }
        >
          <div className="mb-9 lg:mb-11">
            <h1 className="font-extrabold text-2xl  w-full">Filter</h1>
          </div>
          <div className="my-9 lg:my-5 flex flex-col">
            <h1 className="font-semibold text-base  border-b text-blackV border-blackV w-full">
              Color
            </h1>
            <div className="my-3 grid grid-cols-3 lg:grid-cols-5 place-items-center gap-3">
              {colorTypes.map((colorType) => (
                <button
                  key={colorType}
                  className={`bg-${colorType} h-6 w-6 lg:h-5 lg:w-5 border-blackV border hover:shadow-amber-200 hover:shadow-xl`}
                  type={colorType}
                  onClick={() => handleColorFilter(colorType)} 
                ></button>
              ))}
            </div>
          </div>

          <div className="my-9 lg:my-5 flex flex-col">
            <h1 className="font-semibold text-base  border-b text-blackV border-blackV w-full">
              Size
            </h1>
            <div className="my-4 grid grid-cols-2 lg:grid-cols-3 place-items-center gap-4 lg:gap-3">
              {sizes.map((size, index) => (
                <button
                  key={index}
                  className="lg:h-11 lg:w-11 h-11 w-16 border border-blackV hover:bg-blackV hover:text-white"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="my-9 lg:my-5 flex flex-col">
            <h1 className="font-semibold text-base  border-b text-blackV border-blackV w-full">
              Stock
            </h1>
            <div className="my-2 flex flex-col items-start gap-3 p-3 ">
              <button className="hover:underline">Best Selling</button>
              <button className="hover:underline">New in Stock</button>
              <button className="hover:underline">old in Stock</button>
            </div>
          </div>

          <div className="my-9 lg:my-5 flex flex-col">
            <h1 className="font-semibold text-base  border-b text-blackV border-blackV w-full">
              Price
            </h1>
            <div className="py-7 rounded-lg flex justify-center "></div>
          </div>
        </div>

        <div className=" w-full md:w-full h-full ">
          <div className="m-3 md:hidden flex justify-end ">
            <button
              className="w-24 h-9 border-2 border-blackV hover:bg-blackV hover:text-white font-semibold "
              onClick={handleFilterButtonClick}
            >
              Filter
            </button>
          </div>
          <div className="w-full h-full">
            <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 place-items-center">
              {filteredProducts.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default WomenCategory;
