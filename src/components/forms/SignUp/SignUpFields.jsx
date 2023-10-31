
import { inputsConfig } from './formInputsConfig';

const SignUpFields = () => {
  return (
    <>
      {inputsConfig.map(({type, placeholder, name}, index) => (
        <div key={index}>
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            className="border-b border-solid border-gray-500 pb-2 mb-8 outline-none w-full"
          />
        </div>
      ))}

    
    </>
  );
};

export default SignUpFields;
