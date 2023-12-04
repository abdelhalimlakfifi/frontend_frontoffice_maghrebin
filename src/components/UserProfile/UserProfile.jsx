import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../Layout/Layout';
import InputField from '../GlobalComponents/InputField';
import BtnGlobal from '../GlobalComponents/BtnGlobal';
import arrowIcon from '../../assets/icons/arrowIcon.svg';
import { updateProfile } from '../ReduxStateManagement/userProfile/userProfileActions';


export default function UserProfile() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.userProfile.loading);
  const error = useSelector((state) => state.userProfile.error);

  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const [isPersonalInfoUnlocked, setIsPersonalInfoUnlocked] = useState(false);
  const [isSecurityUnlocked, setIsSecurityUnlocked] = useState(false);
  const [arrowRotation, setArrowRotation] = useState(false);

  const handleFileChange = event => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handlePersonalInfoToggle = () => {
    setIsPersonalInfoUnlocked(!isPersonalInfoUnlocked);
    setArrowRotation(isPersonalInfoUnlocked ? 0 : 90); // Rotate by 90 degrees when toggled
  };

  const handleSecurityToggle = () => {
    setIsSecurityUnlocked(!isSecurityUnlocked);
  };

  const personalInfoFields = [
    { label: 'First Name', placeholder: 'First Name' },
    { label: 'Last Name', placeholder: 'Last Name' },
    { label: 'Address', placeholder: 'Address' },
    { label: 'E-mail', placeholder: 'E-mail' },
  ];

  const securityFields = [
    { label: 'Password', placeholder: 'Password' },
    { label: '', placeholder: 'New Password' },
    { label: '', placeholder: 'Password Confirmation' },
  ];

  const handleSavePassword = async () => {
    // Dispatch the updatePassword action
    dispatch(updatePassword({ currentPassword, newPassword }));
  };


  return (
    <Layout>
      {/* Banner Section */}
      <div className="flex justify-center items-center h-16 md:my-2 lg:my-20 bg-userProfile inset-0 opacity-70">
        <h1 className="uppercase font-NewYork text-4xl tracking-wide z-20">Edit profile</h1>
      </div>

      {/* Personal Information and Security Section */}
      <div className="flex flex-col items-center lg:justify-center lg:flex lg:flex-row md:mx-10 lg:mx-60 relative gap-y-2">
        <div className="lg:w-8/12 w-10/12 lg:ml-8 order-2 lg:order-1">
          {/* Personal Information Section */}
          <div className="mb-8 relative">
            <div className="flex">
              <img src={arrowIcon} className={`h-6 w-6 lg:h-5 lg:w-5 md:mr-3 lg:mr-3 mt-1 cursor-pointer`} />
              <h1
                className="uppercase font-medium text-lg mb-6 underline underline-offset-4 cursor-pointer"
                onClick={handlePersonalInfoToggle}
              >
                Personal information
              </h1>
            </div>

            <div>
              {personalInfoFields.map((field, index) => (
                <div key={field.label} className="flex justify-center ml-20">
                  <h2 className="uppercase font-medium w-1/4 text-base mr-3 mt-2">{field.label}</h2>
                  <InputField placeholder={field.placeholder} className="w-3/4 mr-10" />
                </div>
              ))}

              <div className="flex justify-end pr-[2.6rem]">
                <BtnGlobal
                  content="Save Changes"
                  className="uppercase font-bold tracking-wider border px-5 py-2 bg-blackV hover:bg-black hover:bg-opacity-90 hover:border-white text-white"
                />
              </div>
            </div>
          </div>


          {/* Security Section */}
          <div className="mt-8 relative">
            <div className="flex">
              <img
                src={arrowIcon}
                onClick={handlePersonalInfoToggle}
                alt="arrowIcon"
                className={`h-5 w-5 mr-3 mt-1 cursor-pointer transform rotate-${arrowRotation}`}
              />
              <h1 className="uppercase font-medium text-lg mb-6 underline underline-offset-4 cursor-pointer" onClick={handleSecurityToggle}>
                Security
              </h1>
            </div>

            <div
              className="security-container"
              style={{
                maxHeight: isSecurityUnlocked ? '500px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.6s ease-in-out', // Added transition property
                marginBottom: isSecurityUnlocked ? '20px' : '0', // Add margin-bottom when unlocked
              }}
            >
              {securityFields.map((field, index) => (
                <div key={field.label} className="flex justify-center ml-20">
                  <h2 className="uppercase font-medium w-1/4 text-base mr-3 mt-2">{field.label}</h2>
                  <InputField placeholder={field.placeholder} className="w-3/4 mr-10" />
                </div>
              ))}

              <div className="flex justify-end pr-[2.6rem]">
                <BtnGlobal
                  content="Save Password"
                  onClick={handleSavePassword}
                  className="uppercase font-bold tracking-wider border px-5 py-2 bg-blackV hover:bg-black hover:bg-opacity-90 hover:border-white text-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Change Picture Section */}
        <div className="h-96 w-4/12 flex justify-center items-center flex-col mb-10 md:mb-0 order-1 lg:order-2">
          <div className="uppercase text-2xl h-56 w-56 text-black mb-4" onClick={handleImageClick}>
            <img
              // src={selectedFile ? URL.createObjectURL(selectedFile) : 'your-image.jpg'}
              src="https://via.placeholder.com/150x150"
              alt="Your Image"
              className="h-full w-full object-cover cursor-pointer"
            />
          </div>
          <div className="w-56 flex items-center">
            <input type="file" accept="image/*" onChange={handleFileChange} className="p-2 cursor-pointer hidden" ref={fileInputRef} />
            <BtnGlobal
              content="CHANGE IMAGE"
              onClick={handleImageClick}
              className="font-bold w-full tracking-wider py-3 cursor-pointer border border-gray-300 bg-blackV hover:bg-black hover:bg-opacity-90 hover:border-white text-white"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}










// lock icon ------------
// import React, { useState, useRef } from 'react';
// import Layout from '../Layout/Layout';
// import InputField from '../GlobalComponents/InputField';
// import BtnGlobal from '../GlobalComponents/BtnGlobal';
// import lockedIcon from '../../assets/icons/lockedIcon.svg';
// import unlockedIcon from '../../assets/icons/unlockedIcon.svg';

// export default function UserProfile() {
//   // State to store the selected file
//   const [selectedFile, setSelectedFile] = useState(null);
//   const fileInputRef = useRef(null);

//   // Handle file selection
//   const handleFileChange = event => {
//     const file = event.target.files[0];
//     setSelectedFile(file);
//   };

//   // Handle click on the displayed image or the "Change Image" button
//   const handleImageClick = () => {
//     // Trigger a click on the file input when the image or button is clicked
//     fileInputRef.current.click();
//   };

//   // Define an array of personal information fields
//   const personalInfoFields = [
//     { label: 'First Name', placeholder: 'First Name' },
//     { label: 'Last Name', placeholder: 'Last Name' },
//     { label: 'Address', placeholder: 'Address' },
//     { label: 'E-mail', placeholder: 'E-mail' },
//   ];

//   const securityFields = [
//     { label: 'Password', placeholder: 'Password' },
//     { label: '', placeholder: 'New Password' },
//     { label: '', placeholder: 'Password confirmation' },
//   ];

//   return (
//     <Layout>
//       {/* Banner Section */}
//       <div className="flex justify-center items-center h-16 my-8 relative">
//         <div className="bg-userProfile absolute inset-0 opacity-70"></div>
//         <h1 className="uppercase font-NewYork text-4xl tracking-wide z-20">Edit profile</h1>
//       </div>

//       {/* Main Content */}
//       <div className="flex justify-center mx-60 relative">
//         {/* Personal Information Section */}
//         <div className="mb-8 w-8/12 relative">
//           {/* Main title */}
//           <div className="flex">
//             <h1 className="uppercase font-medium text-lg mb-6 underline underline-offset-4 w-11/12">Personal information</h1>
//             <img src={unlockedIcon} alt="lock" className="h-7 w-2/12 cursor-pointer" />
//             <img src={lockedIcon} alt="lock" className="h-7 w-2/12 cursor-pointer" />
//           </div>

//           {/* Title and inputs */}
//           {personalInfoFields.map((field, index) => (
//             <div key={field.label} className="flex justify-center ml-20">
//               <h2 className="uppercase font-medium w-1/4 text-base mr-3 mt-2">{field.label}</h2>
//               <InputField placeholder={field.placeholder} className="w-3/4 mr-10" />
//             </div>
//           ))}

//           {/* Save Changes Button */}
//           <div className="flex justify-end pr-[2.6rem]">
//             <BtnGlobal
//               content="Save Changes"
//               className="uppercase font-bold tracking-wider border px-5 py-2 bg-blackV hover:bg-black hover:bg-opacity-90 hover:border-white text-white"
//             />
//           </div>

//           {/* -------------- */}

//           <div className="flex mt-8">
//             <h1 className="uppercase font-medium text-base mb-6 underline underline-offset-4 w-11/12">Security</h1>
//             <img src={unlockedIcon} alt="lock" className="h-7 w-2/12 cursor-pointer" />
//             <img src={lockedIcon} alt="lock" className="h-7 w-2/12 cursor-pointer" />
//           </div>

//           {/* Title and inputs */}
//           {securityFields.map((field, index) => (
//             <div key={field.label} className="flex justify-center ml-20">
//               <h2 className="uppercase font-medium w-1/4 text-base mr-3 mt-2">{field.label}</h2>
//               <InputField placeholder={field.placeholder} className="w-3/4 mr-10" />
//             </div>
//           ))}

//           {/* Save Changes Button */}
//           <div className="flex justify-end pr-[2.6rem]">
//             <BtnGlobal
//               content="Save Password"
//               className="uppercase font-bold tracking-wider border px-5 py-2 bg-blackV hover:bg-black hover:bg-opacity-90 hover:border-white text-white"
//             />
//           </div>
//         </div>

//         {/* Change Picture Section */}
//         <div className="h-96 w-4/12 flex justify-center items-center flex-col">
//           <div className="uppercase text-2xl h-80 w-80 text-black mb-4" onClick={handleImageClick}>
//             <img
//               src={selectedFile ? URL.createObjectURL(selectedFile) : 'your-image.jpg'}
//               alt="Your Image"
//               className="h-full w-full object-cover cursor-pointer"
//             />
//           </div>
//           {/* Button to trigger file input */}
//           <button onClick={handleImageClick} className="px-24 py-3 mx-10 cursor-pointer border border-gray-300 bg-white text-gray-800">
//             Change Image
//           </button>
//           {/* Input for choosing a profile picture */}
//           <input type="file" accept="image/*" onChange={handleFileChange} className="p-2 cursor-pointer hidden" ref={fileInputRef} />
//         </div>
//       </div>
//     </Layout>
//   );
// }
