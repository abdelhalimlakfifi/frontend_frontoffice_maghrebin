import React from "react";
import { Password } from "primereact/password";
import { Divider } from 'primereact/divider';

const PassField = ({ className, value, onChange }) => {
  const header = <div className="font-bold mb-3">Pick a password</div>;
  const footer = (
      <>
          <Divider />
          <p className="mt-2">Suggestions</p>
          <ul className="pl-2 ml-2 mt-0 line-height-3">
              <li>At least one lowercase</li>
              <li>At least one uppercase</li>
              <li>At least one numeric</li>
              <li>Minimum 8 characters</li>
          </ul>
      </>
  );
  return (
    <Password
      placeholder="Password"
      inputClassName="p-2 m-0 outline-none border-0 rounded-none m-0 !shadow-none"
      className={className}
      value={value}
      onChange={onChange}
      header={header} 
      footer={footer}
      toggleMask
    />
  );
};

export default PassField;
