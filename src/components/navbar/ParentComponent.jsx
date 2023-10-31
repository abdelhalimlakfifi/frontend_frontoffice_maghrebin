// ParentComponent.js

import React, { useState } from 'react';
import iconLinks from '../navbar/iconLinks';
import SignUpForm from './SignUpForm';

const ParentComponent = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const handleUserIconClick = () => {
    setShowSignUpForm(!showSignUpForm);
  };

  return (
    <div>
    <div className="icons-container">
      {iconLinks.map((icon, index) => (
        <img
          key={index}
          src={icon.icon}
          alt={icon.alt}
          onClick={icon.alt === 'userIcon' ? handleUserIconClick : null}
        />
      )}
    </div>
    {showSignUpForm && <SignUpForm />}
  </div>
  )
};

export default ParentComponent;
