import React, { useState } from 'react';
import InputNum from '../GlobalComponents/InputNum';
import BtnGlobal from '../GlobalComponents/BtnGlobal';

const CartProductDescription = () => {
  // State to manage the product price and selected color
  const [productPrice, setProductPrice] = useState(150);
  const [productTitle, setProductTitle] = useState('Product Description');
  const [selectedColor, setSelectedColor] = useState(null);

  const productColors = ['White', 'Blue']; // Sample of available product colors
  const productSizes = ['Small', 'Medium', 'Large']; // Sample of available product sizes

  const handleColorClick = (color) => {
    // Update the selected color when a color button is clicked
    setSelectedColor(color);
  };

  return (
    <>
      <div className="w-2/5 flex flex-col">
        <div>
          <h3 className="text-sm md:text-lg lg:text-xl font-semibold mb-2">{productTitle}</h3>
          <p className="text-gray-600 text-sm lg:text-xl">{`$ ${productPrice}`}</p>
        </div>

        <div className='flex'>
          {productColors.map((currentColor, index) => (
            <BtnGlobal
              key={index}
              className={`mr-2 mt-4 text-xs border-[0.5px] border-black p-1 ${selectedColor === currentColor ? 'bg-gray-300' : ''}`}
              content={currentColor}
              onClick={() => handleColorClick(currentColor)}
            />
          ))}

          <span className='text-sm border-[0.5px] border-black p-1'>removable text{selectedColor}</span>
        </div>

        <div className='[&_p]:text-red-500 [&_h1]:text-6xl'>
          <p>This is a test</p>
          <h1>hehe</h1>
        </div>

        {/* <div className="flex flex-col items-start my-1 mt-auto">
          <h3 className="mb-2 font-semibold md:text-lg">Quantity</h3>
          <InputNum />
        </div> */}
      </div>
    </>
  );
};

export default CartProductDescription;
