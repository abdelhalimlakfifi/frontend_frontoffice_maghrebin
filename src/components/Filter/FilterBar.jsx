// components/FilterBar.js
import React, { useState } from "react";
import { Slider } from "primereact/slider";

const FilterBar = ({
  colorTypes,
  sizes,
  activeColor,
  activeSize,
  activeStockStatus,
  handleColorFilter,
  handleSizeButtonClick,
  handleStockStatusFilter,
}) => {
  const [value, setValue] = useState(null);

  const sliderChange = (e) => {
    
    if(e.value[1] - e.value[0] >= 10)
    {
      setValue(e.value)
    }
  }
  return (
      <div
        className={
          " hidden md:block md:w-[25%] xl:w-[15%] border-r-2 border-blackV  md:p-5 xl:p-3"
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
                className={`${colorType} h-6 w-6 lg:h-5 lg:w-5 border-blackV border hover:shadow-amber-200 hover:shadow-xl ${
                  activeColor === colorType ? "border-fuchsia-200" : ""
                } `}
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
                className={`lg:h-11 lg:w-11 h-11 w-16 border border-blackV hover:bg-blackV hover:text-white ${
                  activeSize === size ? "bg-blackV text-white" : ""
                }`}
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
            {["Best Selling", "New in Stock", "Old in Stock"].map((status) => (
              <button
                key={status}
                className={`hover:underline ${
                  activeStockStatus === status ? "font-bold" : ""
                }`}
                onClick={() => handleStockStatusFilter(status)}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className="my-9 lg:my-5 flex flex-col">
          <h1 className="font-semibold text-base  border-b text-blackV border-blackV w-full">
            Price
          </h1>
          <div className="py-7 rounded-lg flex justify-center ">
            <Slider value={value} onChange={(e) => sliderChange(e)} className="w-full" range max={2000} min={500} />
          </div>
          <p>{value}</p>
        </div>
      </div>
  );
};

export default FilterBar;
