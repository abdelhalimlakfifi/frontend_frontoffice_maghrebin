import React from "react";
import { InputText } from "primereact/inputtext";

const InputField = ({ placeholder, id, value, onChange, className, type }) => {
  return (
    <InputText
      className={`border-b border-solid border-gray-500 p-2 mb-6 outline-none w-full border-0 rounded-none !shadow-none  ${className}`}
      placeholder={placeholder}
      id={id}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;

