// Button.js

const Button = ({ text, showIcon }) => {
  return (
    <button className="flex">
      {text}
      {showIcon && (
        <i className="ml-2">
          <img
            src="LandingPage/next.png"
            alt="Next"
            className="w-6 h-6"
          />
        </i>
      )}
    </button>
  );
};

export default Button;
