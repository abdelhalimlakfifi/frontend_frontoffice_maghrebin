import React from "react";

const BtnGlobal = ({ className, content, onClick, showIcon, disabled }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
      {showIcon && (
        <i className="ml-2">
          <img src="LandingPage/next.png" alt="Next" className="w-6 h-6" />
        </i>
      )}
    </button>
  );
};

export default BtnGlobal;
