// FormSignUp.jsx
import React, { useState, useRef } from 'react';
import { Toast } from 'primereact/toast';
import { Checkbox } from 'primereact/checkbox';
import PassField from '../GlobalComponents/PassField';
import InputField from '../GlobalComponents/InputField';
import BtnGlobal from '../GlobalComponents/BtnGlobal';

const FormSign = () => {
  const [formFields, setFormFields] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [checked, setChecked] = useState(false);
  const toast = useRef(null);

  const handleInputChange = (e, fieldName) => {
    setFormFields({ ...formFields, [fieldName]: e.target.value });
  };

  const handleFormSubmit = async e => {
    e.preventDefault();

    const { firstname, lastname, email, password, confirmPassword } = formFields;

    // Validation checks
    if (!firstname || !lastname || !email || !password || !confirmPassword) {
      // showWarningMessage('All fields are required');
      showToast('error', 'Error', 'All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      showToast('error', 'Error', 'Password and confirmation do not match');
      return;
    }

    if (password.length < 6) {
      showToast('warn', 'Warn', 'Password must be at least 6 characters long');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('warn', 'Warn', 'Invalid email format');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/customers/customer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${password}`, // Send the password in the Authorization header
        },
        body: JSON.stringify({
          first_name: firstname,
          last_name: lastname,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        showToast('success', 'Success', data.message);
        // Clear all fields on successful submission
        setFormFields({
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
      } else {
        // Clear password field on error
        setFormFields({ ...formFields, password: '' });
        showToast('error', 'Error', data.message);
      }
    } catch (error) {
      // Clear password field on error
      setFormFields({ ...formFields, password: '' });
      showToast('error', 'Error', 'Failed to make the request');
    } finally {
      // Clear sensitive data after the form submission (optional)
      setFormFields({ ...formFields, password: '' });
    }
  };

  const showToast = (severity, summary, detail) => {
    toast.current.show({ severity, summary, detail, life: 3000 });
  };

  return (
    <div className="h-[78vh] flex justify-center items-center mx-auto w-full md:w-10/12 xl:w-8/12">
      <form className="my-auto flex-col items-center w-full sm:w-10/12 md:w-8/12 lg:w-6/12" onSubmit={handleFormSubmit}>
        <h2 className="tracking-wider text-blackA font-sans text-lg text-center lg:text-start font-base md:font-semibold lg:font-semibold md:text-3xl lg:text-3xl uppercase mb-10">
          CREATE YOUR ACCOUNT
        </h2>

        {[
          {
            placeholder: 'First Name',
            id: 'firstname',
            type: 'text',
            value: formFields.firstname,
            setter: 'firstname',
          },
          {
            placeholder: 'Last Name',
            id: 'lastname',
            type: 'text',
            value: formFields.lastname,
            setter: 'lastname',
          },
          {
            placeholder: 'Email',
            id: 'email',
            type: 'email',
            value: formFields.email,
            setter: 'email',
          },
        ].map((field, index) => (
          <div className="flex justify-center">
            <InputField key={index} {...field} onChange={e => handleInputChange(e, field.setter)} />
          </div>
        ))}

        <div className="flex justify-center">
          <PassField
            placeholder="Password"
            className="border-b border-solid border-gray-500 w-8/12 sm:w-full mb-6 xs:w-10/12"
            value={formFields.password}
            onChange={e => handleInputChange(e, 'password')}
          />
        </div>
        <div className="flex justify-center">
          <PassField
            placeholder="Confirm Password"
            className="border-b border-solid border-gray-500 w-8/12 sm:w-full mb-6 xs:w-10/12"
            value={formFields.confirmPassword}
            onChange={e => handleInputChange(e, 'confirmPassword')}
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="card flex justify-content-center">
            <Checkbox className="mr-2 h-5 w-5 text-indigo-600" onChange={e => setChecked(e.checked)} checked={checked} />
          </div>

          <label htmlFor="acceptTerms" className="border-none text-sm xsm:text-[12px] text-center w-auto">
            I accept the terms and conditions
          </label>
        </div>
        <div className="flex justify-center">
          <BtnGlobal
            type="submit"
            className="w-full xsm:w-8/12 xs:w-10/12 sm:w-full border border-gray-500 p-2 mt-4 bg-blackA text-white"
            content="CREATE ACCOUNT"
            disabled={!checked}
          />
        </div>
      </form>
      <Toast ref={toast} position="center" />
    </div>
  );
};

export default FormSign;

// screens : {
//   'xsm' : '320px',
//   'xs' : '375px',
//   'sm' : '425px',
//   'md' : '768px',
//   'lg' : '1024px',
//   'xl' : '1440px',
// },
