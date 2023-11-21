import React, { useState, useRef } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';

import '../DropMenuStyle.css';

export default function DropMenu() {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);

  const [checked, setChecked] = useState(false);

  const Sizes = [{ name: 'S' }, { name: 'M' }, { name: 'L' }, { name: 'XL' }, { name: 'XXL' }];
  const Colors = [{ name: 'Blue' }, { name: 'Cream' }, { name: 'Light-blue' }, { name: 'Lime' }];
  const Filter = [{ name: 'Men' }, { name: 'Women' }, { name: 'Kids' }];

  const sizeRef = useRef()
  const customItemTemplate = option => {
    return (
      <div className="flex items-center">
        <Checkbox onChange={e => setChecked(e.checked)} name={option.name} checked={checked}></Checkbox>
        <span className="ml-2">{option.name}</span>
      </div>
    );
  };

  return (
    <div className="flex justify-around items-center h-[50px] w-full border-y-[1px] border-blackV">
      <section className="flex justify-start tracking-widest text-black">
        <form action="" ref={sizeRef}>
          <Dropdown
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.value)}
            options={Sizes}
            optionLabel="name"
            placeholder="Size"
            className="w-40 uppercase" // Set a fixed width (adjust as needed)
            itemTemplate={customItemTemplate}
          />

        </form>
  
        <Dropdown
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.value)}
          options={Colors}
          optionLabel="name"
          placeholder="Color"
          className="w-40 mx-6 uppercase" // Set a fixed width (adjust as needed)
          itemTemplate={customItemTemplate}
        />
      </section>
  
      <section className="tracking-widest">
        <Dropdown
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.value)}
          options={Filter}
          optionLabel="name"
          placeholder="Filter"
          className="w-40 uppercase text-sm" // Set a fixed width (adjust as needed)
          itemTemplate={customItemTemplate}
        />
      </section>
    </div>
  );
}
