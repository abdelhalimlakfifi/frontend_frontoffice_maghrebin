import { InputTypes } from '../login/InputTypes';

const LoginUpFields = () => {
  const filteredInputs = InputTypes.filter(input => input.name === 'email' || input.name === 'password');

  return (
    <>
      {InputTypes.map(({ type, placeholder, name }, index) => (
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

export default LoginUpFields;
