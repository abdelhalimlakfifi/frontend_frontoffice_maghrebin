import React from "react";
import MenCards from "./MenCards";

const Men = () => {
  return (
    <div className="flex flex-col font-DIN ">
        <h1 className="text-3xl font-medium flex justify-center mt-20 font-NewYork text-blackV">New In Men Wear</h1>
        <MenCards />
    </div>
    
  );
};

export default Men;
