import React from 'react';
import InputNum from '../GlobalComponents/InputNum';

const CartProductDescription = () => {
  return (
    <>
      <div className="w-2/5 flex flex-col">
        <div>
          <h3 className="md:text-lg lg:text-xl font-semibold mb-2">Product Description</h3>
          <p className="text-gray-600 text-sm lg:text-xl ">Additional details about the product.</p>
        </div>
        <div className="flex flex-col items-start my-1 mt-auto">
          <h3 className="mb-2 font-semibold md:text-lg">Quantity</h3>
          <InputNum />
          {/* Error Props InputNum */}
        </div>
      </div>
    </>
  );
};
export default CartProductDescription;
