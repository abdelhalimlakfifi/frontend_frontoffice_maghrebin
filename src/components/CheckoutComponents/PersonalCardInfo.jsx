import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";
import InputField from "../GlobalComponents/InputField";
import axios from "axios";
import { useEffect } from "react";
import { post } from "../utils/request";

const PersonalCardInfo = (Props,props) => {
  const [checked, setChecked] = useState(false);
  const { productId, Price } = Props;
  const inputFields = [
    // {
    //   placeholder: "FIRST NAME",
    //   value: props.firstName,
    //   onChange: props.setFirstName,
    // },
    // {
    //   placeholder: "LAST NAME",
    //   value: props.lastName,
    //   onChange: props.setLastName,
    // },
    {
      placeholder: "ADDRESS",
      value: props.address,
      onChange: props.setAddress,
    },
    {
      placeholder: "POSTAL CODE",
      value: props.postalCode,
      onChange: props.setPostalCode,
    },
    { placeholder: "CITY", value: props.city, onChange: props.setCity },
    // {
    //   placeholder: "CARD HOLDER NAME",
    //   value: props.cardHolderName,
    //   onChange: props.setCardHolderName,
    // },
    // {
    //   placeholder: "CARD NUMBER",
    //   value: props.cardNumber,
    //   onChange: props.setCardNumber,
    // },
    // {
    //   placeholder: "EXPIRATION DATE",
    //   value: props.expirationDate,
    //   onChange: props.setExpirationDate,
    // },
    // {
    //   placeholder: "SECURITY CODE",
    //   value: props.securityCode,
    //   onChange: props.setSecurityCode,
    // },
  ];
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const [postalCode, setPostalCode] = useState("");
  const token = localStorage.getItem("user");

  // console.log("city, address, postalCode ",city, address, postalCode);

  return (
    <div className="lg:w-3/5 w-full lg:pl-28 lg:pr-20 px-8 lg:border-r-[2px] border-blackV">
      {/* CARD INFORMATION */}
      <div>
        <h1 className="uppercase pb-1 font-semibold  mb-6 text-xl pr-4">
          Checkout
        </h1>
        <div className="w-full md:border-0 border-b border-blackV mb-6">
          <h2 className="pb-1 md:border-b-[2px] border-blackV inline-block font-medium text-lg pr-4">
            PERSONAL INFORMATION
          </h2>
        </div>
        <div className="flex w-full items-center justify-between gap-5 mb-4">
          {inputFields.slice(0, 2).map((field, index) => (
            <InputField
              key={index}
              placeholder={field.placeholder}
              value={field.value}
              onChange={(e) => setAddress(e.target.value)}
            />
          ))}
        </div>

        {inputFields.slice(2, 4).map((field, index) => (
          <InputField
            key={index}
            placeholder={field.placeholder}
            value={field.value}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        ))}

        <div className="flex items-center justify-between gap-5 w-full mt-4">
          {inputFields.slice(4, 6).map((field, index) => (
            <InputField
              key={index}
              placeholder={field.placeholder}
              value={field.value}
              onChange={(e) => setCity(e.target.value)}
            />
          ))}
        </div>

        {/* CARD INFORMATION */}

        {/* <div className="w-full md:border-0 border-b border-blackV my-6">
          <h2 className="pb-1 md:border-b-[2px] border-blackV inline-block font-medium text-lg pr-4">CARD INFORMATION</h2>
        </div>

        <div className="mb-4">
          {inputFields.slice(6, 7).map((field, index) => (
            <InputField key={index} placeholder={field.placeholder} value={field.value} onChange={e => field.onChange(e.target.value)} />
          ))}
        </div>

        {inputFields.slice(7, 9).map((field, index) => (
          <InputField key={index} placeholder={field.placeholder} value={field.value} onChange={e => field.onChange(e.target.value)} />
        ))}
        <div className="flex items-center flex-row-reverse md:flex-row mt-4 gap-2.5 md:gap-1">
          <Checkbox className="mr-2 h-5 w-5 text-indigo-600" onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
          <p className="underline">SAVE CARD INFO FOR NEXT PURCHASE</p>
        </div> */}
      </div>
    </div>
  );
};

export default PersonalCardInfo;
