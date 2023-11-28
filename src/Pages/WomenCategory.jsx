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
    "bg-[#fff]",
    "bg-red-900",
    "bg-blue-900",
    "bg-green-900",
    "bg-pink-400",
    "bg-orange-600",
    "bg-purple-700",
    "bg-rose-800",
    "bg-orange-300",
    "bg-stone-950",
  ];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const cardData = [
    {
      id: 1,
      title: "Product 1",
      price: "20.00$",
      mainImg: Kaftan1,
      secondaryImg: Kaftan2,
      color: "bg-[#fff]",
      size: ["S", "M", "L"],
      stock: "New Selling",
    },
    {
      id: 2,
      title: "Product 2",
      price: "25.00$",
      mainImg: lavendarJellaba,
      secondaryImg: lavendarJellaba2,
      color: "bg-purple-700",
      size: ["M", "L", "XL"],
      stock: "New Selling",
    },
    {
      id: 3,
      title: "Product 3",
      price: "30.00$",
      mainImg: BeigeJellaba,
      secondaryImg: BeigeJellaba2,
      color: "bg-orange-300",
      size: ["L", "XL", "XXL"],
      stock: "Best Selling",
    },
    {
      id: 4,
      title: "Product 4",
      price: "20.00$",
      mainImg: JellabaBlue,
      secondaryImg: JellabaBlue2,
      color: "bg-blue-900",
      size: ["XS", "S", "M"],
      stock: "Old in Stock",
    },
    {
      id: 5,
      title: "Product 1",
      price: "20.00$",
      mainImg: Kaftan1,
      secondaryImg: Kaftan2,
      color: "bg-[#fff]",
      size: ["M", "L", "XL"],
      stock: "Best Selling",
    },
    {
      id: 2,
      title: "Product 2",
      price: "25.00$",
      mainImg: lavendarJellaba,
      secondaryImg: lavendarJellaba2,
      color: "bg-purple-700",
      size: ["XS", "S", "M"],
      stock: "old in Stock",
    },
    {
      id: 3,
      title: "Product 3",
      price: "30.00$",
      mainImg: BeigeJellaba,
      secondaryImg: BeigeJellaba2,
      color: "bg-orange-300",
      size: ["M", "L", "XL"],
      stock: "New in Stock",
    },
    {
      id: 4,
      title: "Product 4",
      price: "20.00$",
      mainImg: JellabaBlue,
      secondaryImg: JellabaBlue2,
      color: "bg-blue-900",
      size: ["XS", "S", "M"],
      stock: "New in Stock",
    },
  ];

  const [mobileFilter, setMobileFilter] = useState(false);

  const handleFilterButtonClick = (e) => {
    setMobileFilter(!mobileFilter);
  };

  //Filter Products
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedStockStatus, setSelectedStockStatus] = useState(null);

  const handleColorFilter = (selectedColor) => {
    setSelectedColor(selectedColor);
  };

  const handleSizeButtonClick = (size) => {
    setSelectedSize(size);
  };

  const handleStockStatusFilter = (e) => {
    setSelectedStockStatus(e);
  };

  const filterProducts = () => {
    return cardData.filter((product) => {
      if (selectedColor && product.color !== selectedColor) {
        return false;
      }
      if (selectedSize && !product.size.includes(selectedSize)) {
        return false;
      }
      if (selectedStockStatus && product.stock !== selectedStockStatus) {
        return false;
      }

      return true; // this indicates that Product passed all filters
    });
  };

  const filteredProducts = filterProducts();

  return (
    <Layout>
      <div className="flex font-DIN">
        <div
          className={
            mobileFilter
              ? `  w-[85%]  border-r-2 border-blackV p-5 `
              : ` hidden md:block md:w-[25%] xl:w-[15%] border-r-2 border-blackV  md:p-5 xl:p-3`
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
                  className={`${colorType} h-6 w-6 lg:h-5 lg:w-5 border-blackV border hover:shadow-amber-200 hover:shadow-xl`}
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
                  onClick={() => handleSizeButtonClick(size)}
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
              <button
                className="hover:underline"
                onClick={() => handleStockStatusFilter("Best Selling")}
              >
                Best Selling
              </button>
              <button
                className="hover:underline"
                onClick={() => handleStockStatusFilter("New in Stock")}
              >
                New in Stock
              </button>
              <button
                className="hover:underline"
                onClick={() => handleStockStatusFilter("Old in Stock")}
              >
                Old in Stock
              </button>
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
          <div className="w-full h-full py-7 px-9">
            <section className="grid place-items-center gap-7 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
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
