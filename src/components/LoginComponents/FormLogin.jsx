// FormLogin.jsx
// ---------Should Use FormIk-----------
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InputSwitch } from "primereact/inputswitch";
import InputField from "../GlobalComponents/InputField";
import BtnGlobal from "../GlobalComponents/BtnGlobal";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  return (
    <div className="h-[78vh] flex justify-center items-center mx-auto w-full sm:w-10/12 md:w-10/12 xl:w-8/12">
      <form className="my-auto w-10/12 md:w-8/12 lg:w-6/12">
        <h2 className="tracking-wider text-blackA font-sans text-lg text-center lg:text-start font-base md:font-semibold lg:font-semibold md:text-3xl lg:text-3xl uppercase mb-10 ">LOG IN TO YOUR ACCOUNT</h2>
        
        <div className="flex flex-col w-full items-center">
          <InputField
          className="pb-2 mb-8 outline-none w-10/12 border-0 rounded-none"
          placeholder="E-mail"
          id="email"
          type="email"
          value={email}
          onChange={e => handleInputChange(e, setEmail)}
        />
        <InputField
          className="pb-2 mb-8 outline-none w-full border-0 rounded-none"
          placeholder="Password"
          id="password"
          type="password"
          value={password}
          onChange={e => handleInputChange(e, setPassword)}
        />

        </div>
        
        <div className="flex justify-between">
          <Link to="#">
            <p className="text-left text-xs md:text-sm lg:text-sm">Have you forgotten your password?</p>
          </Link>
          <div className="card flex justify-content lg:flex lg:items-center">
            <p className="mr-2 text-xs md:text-sm lg:text-sm">Remember Me</p>
            <InputSwitch checked={checked} onChange={e => setChecked(e.value)} />
          </div>
        </div>

      <BtnGlobal className="w-full bg-[#2A2A2A] text-white border border-gray-500 p-2 mt-8 tracking-wide" content="LOGIN" />
      </form>
    </div>
  );
};

export default FormLogin;





