import React from 'react';

export default function Filter() {
  return (
    <div className='h-16 bg-slate-300'>
      <div className="w-[auto] h-16 flex justify-center items-center mx-80">
      {/* left container */}
      <section className="flex items-center border-red-100 h-14 w-2/4 ">
        <div className="w-1/4 h-8 mx-4">
          <select name="" id="" className="w-full h-full">
            <option value="">Test</option>
            <option value="">Test</option>
            <option value="">Test</option>
          </select>
        </div>
        <div className="w-1/4 h-8 mx-4">
          <select name="" id="" className="w-full h-full">
            <option value="">XXX</option>
            <option value="">XXX</option>
            <option value="">XXX</option>
          </select>
        </div>
      </section>

      {/* right container */}

      <section className="h-14 w-2/4 flex justify-end items-center">
        <div className="w-1/4 h-8 mx-4">
          <select name="" id="" className="w-full h-full">
            <option value="">ZZZ</option>
            <option value="">ZZZ</option>
            <option value="">ZZZ</option>
          </select>
        </div>
      </section>
    </div>
    </div>
    

    // <div className="flex justify-center items-center gap-48">
    //   <section className="flex justify-around border border-blackV space-x-36">
    //     <div className='border border-blackV'>
    //       {/* Size Section */}
    //       <select>
    //         <option value="">Size</option>

    //         <option value="red">Red</option>
    //         <option value="blue">Blue</option>
    //         <option value="green">Green</option>
    //         {/* Add more colors as needed */}
    //       </select>
    //     </div>

    //     {/* Color Section */}
    //     <div className='border border-blackV'>
    //       <select>
    //         <option value="">Size</option>

    //         <option value="red">S</option>
    //         <option value="blue">M</option>
    //         <option value="green">L</option>
    //         {/* Add more Sizes as needed */}
    //       </select>
    //     </div>
    //   </section>

    //   <section>
    //     <div>
    //       <select>
    //         <option value="">Size</option>
    //         <option value="red">S</option>
    //         <option value="blue">M</option>
    //         <option value="green">L</option>
    //         {/* Add more Sizes as needed */}
    //       </select>
    //     </div>
    //   </section>
    // </div>
  );
}

{
  /* <div>

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
</div> */
}

// export default function Filter({ onFilterChange }) {
//   const handleColorChange = (event) => {
//     const selectedColor = event.target.value;
//     onFilterChange({ color: selectedColor });
//   };

//   const handleSizeChange = (event) => {
//     const selectedSize = event.target.value;
//     onFilterChange({ size: selectedSize });
//   };
