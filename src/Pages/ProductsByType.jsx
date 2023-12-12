import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { Card } from "../components/GlobalComponents/ProductCard";
import SidebarFilter from "../components/Filter/SideBarFilter";
import FilterBar from "../components/Filter/FilterBar";

//import card image
import Kaftan1 from "../assets/Kaftan1.jpg";
import Kaftan2 from "../assets/Kaftan2.jpg";
import lavendarJellaba from "../assets/WomenMain.webp";
import lavendarJellaba2 from "../assets/ProductImages/jelaba/MauveJellaba.webp";
import BeigeJellaba2 from "../assets/ProductImages/jelaba/BeigeJellaba.jpg";
import BeigeJellaba from "../assets/ProductImages/jelaba/beigeJellaba.webp";
import JellabaBlue from "../assets/ProductImages/jelaba/jellabablue.webp";
import JellabaBlue2 from "../assets/ProductImages/jelaba/jellabablue2.webp";

function ProductsByType() {
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

  const [visible, setVisible] = useState(false);

  //Filter Products
  const [selectedColor, setSelectedColor] = useState(null);
  const [activeColor, setActiveColor] = useState(null);

  const [selectedSize, setSelectedSize] = useState(null);
  const [activeSize, setActiveSize] = useState(null);

  const [selectedStockStatus, setSelectedStockStatus] = useState(null);
  const [activeStockStatus, setActiveStockStatus] = useState(null);

  const handleColorFilter = (selectedColor) => {
    setSelectedColor(selectedColor);
    setActiveColor(selectedColor);
  };

  const handleSizeButtonClick = (size) => {
    setSelectedSize(size);
    setActiveSize(size);
  };

  const handleStockStatusFilter = (status) => {
    setSelectedStockStatus(status);
    setActiveStockStatus(status);
  };

  const filterProducts = () => {
    const filteredProducts = cardData.filter((product) => {
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

    return filteredProducts.length > 0 ? filteredProducts : null;
  };

  const filteredProducts = filterProducts();

  const resetFilters = () => {
    setSelectedColor(null);
    setSelectedSize(null);
    setSelectedStockStatus(null);
  };

  return (
    <Layout>
      <div className="flex w-full h-full font-DIN ">
        
        <SidebarFilter
          visible={visible}
          setVisible={setVisible}
          colorTypes={colorTypes}
          sizes={sizes}
          activeColor={activeColor}
          activeSize={activeSize}
          activeStockStatus={activeStockStatus}
          handleColorFilter={handleColorFilter}
          handleSizeButtonClick={handleSizeButtonClick}
          handleStockStatusFilter={handleStockStatusFilter}
        />

        <FilterBar
          colorTypes={colorTypes}
          sizes={sizes}
          activeColor={activeColor}
          activeSize={activeSize}
          activeStockStatus={activeStockStatus}
          handleColorFilter={handleColorFilter}
          handleSizeButtonClick={handleSizeButtonClick}
          handleStockStatusFilter={handleStockStatusFilter}
        />

        <div className=" w-full h-full md:w-full  ">
          <div className="m-3 md:hidden flex justify-end">
            <button
              className="w-24 h-9 border-2 border-blackV hover:bg-blackV hover:text-white font-semibold "
              onClick={() => setVisible(true)}
            >
              Filter
            </button>
          </div>
          <div className="w-full h-full py-7 px-9 ">
            {filteredProducts ? (
              <section className="grid place-items-center gap-7 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredProducts.map((card, index) => (
                  <Card key={index} {...card} />
                ))}
              </section>
            ) : (
              <div className="text-center h-screen text-blackV flex flex-col items-center gap-5">
                No products match the selected filters.
                <button
                  className="w-20 h-9 border border-blackV font-medium"
                  onClick={resetFilters}
                >
                  Reset
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductsByType;
