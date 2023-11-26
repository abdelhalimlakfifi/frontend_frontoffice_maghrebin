import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { Slider } from "primereact/slider";
import { Card } from "../components/GlobalComponents/ProductCard";

//import card image
import Kaftan1 from "../assets/Kaftan1.jpg";
import Kaftan2 from "../assets/Kaftan2.jpg";

function WomenCategory() {
  const [filterPrice, setFilterPrice] = useState(0);
  const handleSlideChange = (event) => {
    setFilterPrice(event.index);
  };

  const [mobileFilter, setMobileFilter] = useState(false);

  const handleFilterButtonClick = (e) => {
    setMobileFilter(!mobileFilter);
  };

  const cardData = [
    {id:1 ,title: "Product 1", price: "20.00$", mainImg: Kaftan1, secondaryImg:Kaftan2 },
    {id:2 ,title: "Product 2", price: "25.00$", mainImg: Kaftan1, secondaryImg:Kaftan2 },
    {id:3 ,title: "Product 3", price: "30.00$", mainImg: Kaftan1, secondaryImg:Kaftan2 },
    {id:4 ,title: "Product 4", price: "20.00$", mainImg: Kaftan1, secondaryImg:Kaftan2 },
    {id:1 ,title: "Product 1", price: "20.00$", mainImg: Kaftan1, secondaryImg:Kaftan2 },
    {id:2 ,title: "Product 2", price: "25.00$", mainImg: Kaftan1, secondaryImg:Kaftan2 },
    {id:3 ,title: "Product 3", price: "30.00$", mainImg: Kaftan1, secondaryImg:Kaftan2 },
    {id:4 ,title: "Product 4", price: "20.00$", mainImg: Kaftan1, secondaryImg:Kaftan2 },
  ];

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
              <button
                className="bg-yellow-400 h-6 w-6 lg:h-5 lg:w-5 border-blackV border hover:shadow-amber-200 hover:shadow-xl"
                type="yellow"
              ></button>
              <button
                className="bg-red-900 h-6 w-6 lg:h-5 lg:w-5 border-blackV border hover:shadow-amber-200 hover:shadow-xl"
                type="red"
              ></button>
              <button
                className="bg-blue-900 h-6 w-6 lg:h-5 lg:w-5 border-blackV border hover:shadow-amber-200 hover:shadow-xl"
                type="blue"
              ></button>
              <button
                className="bg-green-900  h-6 w-6 lg:h-5 lg:w-5 border-blackV border hover:shadow-amber-200 hover:shadow-xl"
                type="green"
              ></button>
              <button
                className="bg-pink-400  h-6 w-6 lg:h-5 lg:w-5 border-blackV border hover:shadow-amber-200 hover:shadow-xl"
                type="pink"
              ></button>
              <button
                className="bg-orange-600  h-6 w-6 lg:h-5 lg:w-5 border-blackV border hover:shadow-amber-200 hover:shadow-xl"
                type="orange"
              ></button>
              <button
                className="bg-purple-700  h-6 w-6 lg:h-5 lg:w-5 border-blackV border hover:shadow-amber-200 hover:shadow-xl"
                type="purple"
              ></button>
              <button
                className="bg-rose-800  h-6 w-6 lg:h-5 lg:w-5 border-blackV border hover:shadow-amber-200 hover:shadow-xl"
                type="rose"
              ></button>
              <button
                className="bg-orange-300  h-6 w-6 lg:h-5 lg:w-5 border-blackV border hover:shadow-amber-200 hover:shadow-xl"
                type="beige"
              ></button>
              <button
                className="bg-stone-950  h-6 w-6 lg:h-5 lg:w-5 border-blackV border hover:shadow-amber-200 hover:shadow-xl"
                type="black"
              ></button>
            </div>
          </div>

          <div className="my-9 lg:my-5 flex flex-col">
            <h1 className="font-semibold text-base  border-b text-blackV border-blackV w-full">
              Size
            </h1>
            <div className="my-4 grid grid-cols-2  lg:grid-cols-3 place-items-center gap-4 lg:gap-3">
              <button className="lg:h-11 lg:w-11 h-11 w-16  border border-blackV   hover:bg-blackV  hover:text-white">
                XS
              </button>
              <button className="lg:h-11 lg:w-11 h-11 w-16 border border-blackV   hover:bg-blackV  hover:text-white">
                S
              </button>
              <button className="lg:h-11 lg:w-11 h-11 w-16 border border-blackV   hover:bg-blackV  hover:text-white">
                M
              </button>
              <button className="lg:h-11 lg:w-11 h-11 w-16 border border-blackV   hover:bg-blackV hover:text-white">
                L
              </button>
              <button className="lg:h-11 lg:w-11 h-11 w-16 border border-blackV  hover:bg-blackV  hover:text-white">
                XL
              </button>
              <button className="lg:h-11 lg:w-11 h-11 w-16 border border-blackV  hover:bg-blackV  hover:text-white ">
                XXL
              </button>
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
            <div className="py-7 rounded-lg flex justify-center ">
              <Slider
                activeIndex={filterPrice}
                onSlideChange={handleSlideChange}
                className="w-40"
              />
            </div>
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
            <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4   place-items-center  ">
              {cardData.map((card, index) => (
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
