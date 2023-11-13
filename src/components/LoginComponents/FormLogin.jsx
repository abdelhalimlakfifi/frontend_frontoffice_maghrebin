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
    <div className="h-[78vh] flex justify-center items-center mx-auto w-9/12 sm:w-6/12 md:w-10/12 xl:w-8/12">
      <form className="my-auto w-full sm:w-10/12 md:w-8/12 lg:w-6/12">
        <h2 className="tracking-wider font-sans text-3xl uppercase mb-10 font-thin">
          LOG IN TO YOUR ACCOUNT
        </h2>
        <InputField
          // className="border-b border-solid border-gray-500 pb-2 mb-8 outline-none w-full border-0 rounded-none"
          placeholder="Enter your email"
          id="email"
          type="email"
          value={email}
          onChange={(e) => handleInputChange(e, setEmail)}
        />
        <InputField
          // className="border-b border-solid border-gray-500 pb-2 mb-8 outline-none w-full border-0 rounded-none"
          placeholder="Enter your password"
          id="password"
          type="password"
          value={password}
          onChange={(e) => handleInputChange(e, setPassword)}
        />

        <div className="flex justify-between">
          <Link to="#">
            <p className="text-center">Have you forgotten your password?</p>
          </Link>
          <div className="card flex justify-content-center">
            <p className="mr-2">Remember Me</p>
            <InputSwitch
              checked={checked}
              onChange={(e) => setChecked(e.value)}
            />
          </div>
        </div>

        <BtnGlobal
          className="w-full border border-gray-500 p-2 mt-4"
          content="LOG IN"
        />
      </form>
    </div>
  );
};

export default FormLogin;





