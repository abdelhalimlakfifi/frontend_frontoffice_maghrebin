import React from "react";
import KidsCards from "./KidsCards";

const Kids = () => {
  return (
    <div className="flex flex-col">
        <h1 className="text-3xl font-medium flex justify-center my-5">New In Kids Wear</h1>
        <KidsCards />
    </div>
    
  );
};

export default Kids;