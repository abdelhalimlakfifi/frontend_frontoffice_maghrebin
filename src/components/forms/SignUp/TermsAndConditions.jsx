import React, { useState } from 'react';
import { Checkbox } from 'primereact/checkbox';

const TermsAndConditions = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="card flex justify-content-center">
          <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        </div>
        <label htmlFor="acceptTerms" className="border-none text-sm text-center w-auto pl-4">
          I accept the terms and conditions
        </label>
      </div>
    </>
  );
};

export default TermsAndConditions;
