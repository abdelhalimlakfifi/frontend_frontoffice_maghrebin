import React from 'react';

export default function Filter() {
  return (
    <div className="flex justify-around items-center h-16 w-full bg-gray-50">
      <div>
        {/* Size Section */}
        <select>
          <option value="">Size</option>

          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          {/* Add more colors as needed */}
        </select>
      </div>

      {/* Color Section */}
      <div>
        <select>
          <option value="">Size</option>

          <option value="red">S</option>
          <option value="blue">M</option>
          <option value="green">L</option>
          {/* Add more Sizes as needed */}
        </select>
      </div>
      
    </div>

  );
}



{/* <div>

  Color Filter
  <div className="mx-4">
        <select
          id="colorFilter"
          onChange={handleColorChange}
          className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">All Colors</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option> 
          
          <option value="green">Green</option>
          Add more color options as needed
        </select>
      </div>

      Size Filter
      <div className="mx-4">
        <select
          id="sizeFilter"
          onChange={handleSizeChange}
          className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">All Sizes</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          Add more size options as needed
        </select>
      </div>
</div> */}


// export default function Filter({ onFilterChange }) {
//   const handleColorChange = (event) => {
//     const selectedColor = event.target.value;
//     onFilterChange({ color: selectedColor });
//   };

//   const handleSizeChange = (event) => {
//     const selectedSize = event.target.value;
//     onFilterChange({ size: selectedSize });
//   };