import { Link } from 'react-router-dom';
import { inputsConfig } from '../SignUp/formInputsConfig';
import LoginUpFields from '../login/LoginUpFields';

// Prime react Imports
import React, { useState } from 'react';
import { InputSwitch } from 'primereact/inputswitch';

const Login = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="h-[78vh] flex justify-center items-center mx-auto w-9/12 sm:w-6/12 md:w-10/12 xl:w-8/12">
      <form className="my-auto w-full sm:w-10/12 md:w-8/12 lg:w-6/12">
        <h2 className="tracking-wider font-sans text-3xl uppercase mb-10 font-thin">Log In to your account</h2>
        <LoginUpFields inputsConfig={inputsConfig} />

        {/* Forgot Password Link */}
        <div className="flex justify-between">
        <Link>
        <p className='text-center'>Have you forgotten your password?</p>
        </Link>
          <div className="card flex justify-content-center">
            <InputSwitch checked={checked} onChange={e => setChecked(e.value)} />
          </div>
        </div>
        
        {/* Log In Button */}
        <div className="flex justify-center items-center mt-10 bg-[#655445] mx-auto py-2 px-5 cursor-pointer w-full">
          <button className="border-none uppercase text-white">Log In</button>
        </div>
      </form>
    </div>
  );
};

export default Login;

// export default function Login() {
//   return (
//     <div className="h-[78vh] flex justify-center items-center mx-auto w-9/12 sm:w-6/12 md:w-10/12 xl:w-8/12">
//       <form className="my-auto w-full sm:w-10/12 md:w-8/12 lg:w-6/12">
//         <h2 className="tracking-wider font-sans text-3xl uppercase mb-10 font-thin">Login to your account</h2>
//       </form>
//     </div>
//   );
// }
