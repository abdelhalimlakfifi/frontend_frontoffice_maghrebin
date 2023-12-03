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
        inputClassName="h-3 lg:h-5 w-[5rem] rounded-none text-center"
        incrementButtonClassName=" rounded-none "
        decrementButtonClassName=" rounded-none "
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-minus"
      />
    </>
  );
}
