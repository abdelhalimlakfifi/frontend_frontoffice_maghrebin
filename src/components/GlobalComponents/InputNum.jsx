import React, { useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import '../../InputNumber.css';

export default function InputNum() {
  const [quantity, setQuantity] = useState(0);

  return (
    <>
      <InputNumber
        inputId="horizontal-buttons"
        value={quantity}
        onValueChange={(e) => setQuantity(e.value)}
        showButtons
        buttonLayout="horizontal"
        step={1}
        inputClassName="h-3 lg:h-4 w-32 bg-gray-100 text-black rounded-none text-center"
        incrementButtonClassName="bg-ray-200 text-black rounded-none h-6 w-12"
        decrementButtonClassName="bg-gray-200 text-black rounded-none h-6 w-12"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-minus"
      />
    </>
  );
}
