// components/SidebarFilter.js
import React,{useState} from "react";
import { Sidebar } from "primereact/sidebar";
import { Slider } from "primereact/slider";

const SidebarFilter = ({
  visible,
  setVisible,
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
    console.log(e.value[1] - e.value[0]);

    if (e.value[1] - e.value[0] >= 10) {
      setValue(e.value);
    }
  };
  return (
    <div className="card flex justify-content-center">
      <Sidebar
        visible={visible}
        position="top"
        onHide={() => setVisible(false)}
        style={{ marginTop: "3rem", height: "20rem" }}
      >
        <div className=" flex flex-col">
          <h1 className="font-semibold text-base  border-b text-blackV border-blackV w-full">
            Color
          </h1>
          <div className="my-3 grid grid-cols-5 place-items-center gap-3">
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

        <div className="my-5 flex flex-col ">
          <h1 className="font-semibold text-base  border-b text-blackV border-blackV w-full">
            Size
          </h1>
          <div className="my-3  grid grid-cols-3 place-items-center gap-4">
            {sizes.map((size, index) => (
              <button
                key={index}
                className={` h-9 w-20 border border-blackV hover:bg-blackV hover:text-white ${
                  activeSize === size ? "bg-blackV text-white" : ""
                }`}
                onClick={() => handleSizeButtonClick(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="my-5 flex flex-col">
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

        <div className="my-5 flex flex-col">
          <h1 className="font-semibold text-base  border-b text-blackV border-blackV w-full">
            Price
          </h1>
          <div className="py-7 rounded-lg flex justify-center ">
            <Slider
              value={value}
              onChange={(e) => sliderChange(e)}
              className="w-full"
              range
              max={2000}
              min={500}
            />
          </div>
          <p>{value}</p>
        </div>
      </Sidebar>
    </div>
  );
};

export default SidebarFilter;
