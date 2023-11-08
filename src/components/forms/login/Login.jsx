
import { inputsConfig } from '../SignUp/formInputsConfig';
import SignUpFields from '../SignUp/SignUpFields';

const Login = () => {
  // Filter the inputsConfig array to only include email and password inputs
  const filteredInputsConfig = inputsConfig.filter(
    (input) => input.type === 'email' || input.type === 'password'
  );

  return (
    <div className="h-[78vh] flex justify-center items-center mx-auto w-9/12 sm:w-6/12 md:w-10/12 xl:w-8/12">
      <form className="my-auto w-full sm:w-10/12 md:w-8/12 lg:w-6/12">
        <h2 className="tracking-wider font-sans text-3xl uppercase mb-10 font-thin">
          Log In to your account
        </h2>

        {/* Pass the filtered inputsConfig array to SignUpFields */}
        <SignUpFields inputsConfig={filteredInputsConfig} />

        {/* Log In Button */}
        <div className="flex justify-center items-center mt-10 border border-solid border-gray-500 mx-auto py-2 px-5 cursor-pointer w-full">
          <button className="border-none uppercase">Log In</button>
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
