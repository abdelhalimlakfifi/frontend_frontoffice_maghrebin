import React, { useState } from 'react';

const CartTitle = () => {
  // State to track the number of items in the cart
  const [itemCount, setItemCount] = useState(1); // Set an initial count (e.g., 3 items)

  // Function to add an item to the cart
  const addItemToCart = () => {
    setItemCount(itemCount + 1);
  };

  return (
      <div className="flex w-full justify-between items-center border-b-2 border-blackV">
        <h2 className="text-lg font-medium text-blackV">MY CART</h2>
        <div className="flex items-center">
          <p className="text-sm font-medium">
            {`${itemCount} `}<span className="ml-1">ITEMS</span>
          </p>
        </div>
      </div>
  );
};

export default CartTitle;
