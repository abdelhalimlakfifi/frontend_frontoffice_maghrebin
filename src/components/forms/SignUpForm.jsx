import '../../styles/SignUpForm.css';

const SignUpForm = () => {
  const inputsConfig = [
    { type: 'text', placeholder: 'E-MAIL', name: 'email' },
    { type: 'password', placeholder: 'PASSWORD', name: 'password' },
    { type: 'text', placeholder: 'USERNAME', name: 'username' },
    { type: 'tel', placeholder: 'PHONE', name: 'phone' },
  ];

  return (
    // Container
    <div className="h-[78vh] flex justify-center items-center mx-auto w-9/12 sm:w-6/12 md:w-10/12 xl:w-8/12 ">
      <form className="my-auto w-full sm:w-10/12 md:w-8/12 lg:w-6/12">
        <h2 className=" tracking-wider font-sans text-3xl uppercase mb-10 font-thin ">Create your account</h2>
      {/* SignUp form */}
        {inputsConfig.map(({ type, placeholder, name }, index) => (
          <div key={index}>
            <input
              type={type}
              placeholder={placeholder}
              name={name}
              className="border-b border-solid border-gray-500 pb-2 mb-8 outline-none w-full"
            />
          </div>
        ))}

        {/* TERMS AND CONDITIONS */}
        <div className="flex items-center justify-center">
          <input type="checkbox" name="acceptTerms" id="acceptTerms" className="h-4 w-4" />
          <label htmlFor="acceptTerms" className=' border-none text-sm text-center w-auto pl-4 '>I accept the terms and conditions</label>
        </div>
        
        {/* Create Account */}
        <div className=" flex justify-center items-center mt-10 border border-solid border-gray-500 mx-auto py-2 px-5 cursor-pointer w-full">
          <button className="border-none uppercase">Create account</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
