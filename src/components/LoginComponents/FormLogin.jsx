// FormLogin.jsx
// ---------Should Use FormIk-----------
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../ReduxStateManagement/auth/authActions";
import { Link } from "react-router-dom";
import { InputSwitch } from "primereact/inputswitch";
import InputField from "../GlobalComponents/InputField";
import BtnGlobal from "../GlobalComponents/BtnGlobal";

const FormLogin = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleLogin = () => {
    dispatch(login(email, password));
  };

  return (
    <div className="h-[78vh] flex justify-center items-center mx-auto w-full sm:w-6/12 md:w-10/12 xl:w-8/12">
      <form className="my-auto w-full md:w-8/12 lg:w-6/12">
        <h2 className="tracking-wider font-sans text-3xl uppercase mb-10 font-thin">LOG IN TO YOUR ACCOUNT</h2>
        <InputField
          className="pb-2 mb-8 outline-none w-full border-0 rounded-none"
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

        <div className="flex justify-between">
          <Link to="#">
            <p className="text-left text-sm">Have you forgotten your password?</p>
          </Link>
          <div className="card flex justify-content lg:flex lg:items-center">
            <p className="mr-2 text-sm">Remember Me</p>
            <InputSwitch checked={checked} onChange={e => setChecked(e.value)} />
          </div>
        </div>

        <BtnGlobal className="w-full border border-gray-500 p-2 mt-8" content="LOG IN" onClick={handleLogin} />
      </form>
    </div>
  );
};

export default FormLogin;





