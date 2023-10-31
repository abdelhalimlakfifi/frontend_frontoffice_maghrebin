
import SignUpFields from './SignUpFields';
import TermsAndConditions from './TermsAndConditions';
import CreateAccountButton from './CreateAccountButton';

const SignUpForm = () => {
  return (
    <div className="h-[78vh] flex justify-center items-center mx-auto w-9/12 sm:w-6/12 md:w-10/12 xl:w-8/12">
      <form className="my-auto w-full sm:w-10/12 md:w-8/12 lg:w-6/12">
        <h2 className="tracking-wider font-sans text-3xl uppercase mb-10 font-thin">Create your account</h2>
        
        <SignUpFields />
        <TermsAndConditions />
        <CreateAccountButton />
      </form>
    </div>
  );
};

export default SignUpForm;
