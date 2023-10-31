
const TermsAndConditions = () => {
  return (
    <div className="flex items-center justify-center">
      <input type="checkbox" name="acceptTerms" id="acceptTerms" className="h-4 w-4" />
      <label htmlFor="acceptTerms" className="border-none text-sm text-center w-auto pl-4">
        I accept the terms and conditions
      </label>
    </div>
  );
};

export default TermsAndConditions;

