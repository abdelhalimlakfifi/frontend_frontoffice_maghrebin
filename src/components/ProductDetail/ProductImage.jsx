import React from "react";

const ProductImage = () => {
  return (
    <div className="w-full lg:flex hidden">
      <div className="border mr-4 w-9/12">Content 1 (70%)</div>
      <div className="flex flex-col h-full w-3/12">
        <div className="border mb-4 h-full">Column 1</div>
        <div className="border mb-4 h-full">Column 2</div>
        <div className="border h-full ">Column 3</div>
      </div>
    </div>
  );
};

export default ProductImage;
