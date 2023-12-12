import React from "react";
import KidsCards from "./KidsCards";

const Kids = () => {
  return (
    <div className="flex flex-col font-DIN ">
        <h1 className="uppercase text-3xl font-medium flex justify-center  mt-20 font-NewYork text-blackV">New In Kids Wear</h1>
        <KidsCards />
    </div>
    
  );
};

export default Kids;