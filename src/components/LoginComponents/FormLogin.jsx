// FormLogin.jsx
// ---------Should Use Formik-----------
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { InputSwitch } from "primereact/inputswitch";
import InputField from "../GlobalComponents/InputField";
import BtnGlobal from "../GlobalComponents/BtnGlobal";
import { Toast } from "primereact/toast";
import { loginUser } from "../../ReduxStateManagement/auth/authActions";

const FormLogin = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const toast = useRef(null);

  const showError = (message) => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: message,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      return setPasswordError("Password must be at least 8 characters long.");
    }
    dispatch(loginUser({ email, password }))
      .then((res) => {
        if (res.payload.status === 200) {
          setPasswordError("");
          navigate("/");
        } else {
          showError("Wrong credentials");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  return (
    <div className="h-[78vh] flex justify-center items-center mx-auto w-full sm:w-6/12 md:w-10/12 xl:w-8/12">
      <form
        className="my-auto w-full md:w-8/12 lg:w-6/12"
        onSubmit={handleLogin}
      >
        <Toast ref={toast} position="bottom-right" />

        <h2 className="tracking-wider font-sans text-3xl uppercase mb-10 font-thin">
          LOG IN TO YOUR ACCOUNT
        </h2>
        <InputField
          className="pb-2 mb-8 outline-none w-full border-0 rounded-none"
          placeholder="E-mail"
          id="email"
          type="email"
          value={email}
          onChange={(e) => handleInputChange(e, setEmail)}
        />
        <div>
          <InputField
            className="pb-2 mb-8 outline-none w-full border-0 rounded-none"
            placeholder="Password"
            id="password"
            required={true}
            type="password"
            value={password}
            onChange={(e) => handleInputChange(e, setPassword)}
          />
          {passwordError && <div className="text-red-500">{passwordError}</div>}
        </div>

        <div className="flex justify-between">
          <Link to="#">
            <p className="text-left text-sm">
              Have you forgotten your password?
            </p>
          </Link>
          <div className="card flex justify-content lg:flex lg:items-center">
            <p className="mr-2 text-sm">Remember Me</p>
            <InputSwitch
              checked={checked}
              onChange={(e) => setChecked(e.value)}
            />
          </div>
        </div>

        <button
          className="w-full border border-gray-500 p-2 mt-8"
          type="submit"
        >
          LOG IN
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
