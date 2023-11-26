import React from "react";
import Layout from "../components/Layout/Layout";
import BtnGlobal from "../components/GlobalComponents/BtnGlobal";

function WomenCategory() {
  return (
    <Layout>
      <div className="flex h-screen w-full font-DIN">
        <div className=" w-[15%] h-full border-r-2 border-blackV p-3">
          <div className=" mb-11">
            <h1 className="font-extrabold text-2xl  w-full">Filter</h1>
          </div>
          <div className="my-5 flex flex-col">
            <h1 className="font-semibold text-base  border-b text-blackV border-blackV w-full">
              Color
            </h1>
            <div className="my-3 grid grid-cols-5 place-items-center gap-3">
              <button
                className="bg-yellow-400 h-5 w-5 border-blackV border"
                type="yellow"
              ></button>
              <button
                className="bg-red-900 h-5 w-5 border-blackV border"
                type="red"
              ></button>
              <button
                className="bg-blue-900 h-5 w-5 border-blackV border"
                type="blue"
              ></button>
              <button
                className="bg-green-900 h-5 w-5 border-blackV border"
                type="green"
              ></button>
              <button
                className="bg-pink-400 h-5 w-5 border-blackV border"
                type="pink"
              ></button>
              <button
                className="bg-orange-600 h-5 w-5 border-blackV border"
                type="orange"
              ></button>
              <button
                className="bg-purple-700 h-5 w-5 border-blackV border"
                type="purple"
              ></button>
              <button
                className="bg-rose-800 h-5 w-5 border-blackV border"
                type="rose"
              ></button>
              <button
                className="bg-orange-300 h-5 w-5 border-blackV border"
                type="beige"
              ></button>
              <button
                className="bg-stone-950 h-5 w-5 border-blackV border"
                type="black"
              ></button>
            </div>
          </div>

          <div className="my-5 flex flex-col">
            <h1 className="font-semibold text-base  border-b text-blackV border-blackV w-full">
              Size
            </h1>
            <div className="my-3 grid grid-cols-3 place-items-center gap-3">
              <button className="h-11 w-16 border border-blackV   hover:bg-blackV  hover:text-white">
                XS
              </button>
              <button className="h-11 w-16 border border-blackV   hover:bg-blackV  hover:text-white">
                S
              </button>
              <button className="h-11 w-16 border border-blackV   hover:bg-blackV  hover:text-white">
                M
              </button>
              <button className="h-11 w-16 border border-blackV   hover:bg-blackV hover:text-white">
                L
              </button>
              <button className="h-11 w-16 border border-blackV  hover:bg-blackV  hover:text-white">
                XL
              </button>
              <button className="h-11 w-16 border border-blackV  hover:bg-blackV  hover:text-white ">
                XXL
              </button>
            </div>
          </div>

          <div className="my-5 flex flex-col">
            <h1 className="font-semibold text-base  border-b text-blackV border-blackV w-full">
              Stock
            </h1>
            <div className="my-2 flex flex-col items-start gap-3 p-3 ">
            <button className="hover:underline">Best Selling</button>
              <button className="hover:underline">New in Stock</button>
              <button className="hover:underline">old in Stock</button>

            </div>
          </div>

          <div className="my-5 flex flex-col">
            <h1 className="font-semibold text-base  border-b text-blackV border-blackV w-full">
              Price
            </h1>
            <div className="my-3 flex items-center justify-start">
            

            </div>
          </div>
        </div>

        <div className="bg-green-200 w-[85%] h-full ">products</div>
      </div>
    </Layout>
  );
}

export default WomenCategory;
