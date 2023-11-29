import React, { useState, useRef } from 'react';
import Layout from '../Layout/Layout';
import InputField from '../GlobalComponents/InputField';
import BtnGlobal from '../GlobalComponents/BtnGlobal';

export default function UserProfile() {
  // State to store the selected file
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  // Handle file selection
  const handleFileChange = event => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  // Handle click on the displayed image or the "Change Image" button
  const handleImageClick = () => {
    // Trigger a click on the file input when the image or button is clicked
    fileInputRef.current.click();
  };

  // Define an array of personal information fields
  const personalInfoFields = [
    { label: 'First Name', placeholder: 'First Name' },
    { label: 'Last Name', placeholder: 'Last Name' },
    { label: 'Address', placeholder: 'Address' },
    { label: 'E-mail', placeholder: 'E-mail' },
    // Add more fields as needed
  ];

  return (
    <Layout>
      {/* Banner Section */}
      <div className="flex justify-center items-center h-16 my-8 relative">
        <div className="bg-userProfile absolute inset-0 opacity-70"></div>
        <h1 className="uppercase font-NewYork text-4xl tracking-wide z-20">Edit profile</h1>
      </div>

      {/* Main Content */}
      <div className="flex justify-center mx-56 relative">
        {/* Personal Information Section */}
        <div className="mb-8 w-8/12 relative">
          {/* Main title */}
          <div>
            <h1 className="uppercase font-medium text-xl mb-6">Personal information</h1>
          </div>

          {/* Title and inputs */}
          {personalInfoFields.map((field, index) => (
            <div key={field.label} className="flex items-center justify-center ml-20 mb-5">
              <h2 className="uppercase font-medium w-1/4 text-lg mr-3">{field.label} :</h2>
              <InputField placeholder={field.placeholder} className="w-3/4 mb-0 mr-32" />
            </div>
          ))}

          {/* Save Changes Button */}
          <div className="flex flex-1 justify-end pr-[7.8rem]">
            <BtnGlobal
              content="Save Changes"
              className="border px-5 py-2 bg-blackV hover:bg-black hover:bg-opacity-90 hover:border-white text-white"
            />
          </div>
        </div>

        {/* Change Picture Section */}
        <div className="h-96 w-4/12 flex justify-center items-center flex-col">
          <div className="uppercase text-2xl h-80 w-80 text-black mb-4" onClick={handleImageClick}>
            <img
              src={selectedFile ? URL.createObjectURL(selectedFile) : 'your-image.jpg'}
              alt="Your Image"
              className="h-full w-full object-cover cursor-pointer"
            />
          </div>
          {/* Button to trigger file input */}
          <button onClick={handleImageClick} className="px-24 py-3 mx-10 cursor-pointer border border-gray-300 bg-white text-gray-800">
            Change Image
          </button>
          {/* Input for choosing a profile picture */}
          <input type="file" accept="image/*" onChange={handleFileChange} className="p-2 cursor-pointer hidden" ref={fileInputRef} />
        </div>
      </div>
    </Layout>
  );
}

// import React from 'react';
// import Layout from '../Layout/Layout';
// import InputField from '../GlobalComponents/InputField';
// import Container from 'postcss/lib/container';
// import BtnGlobal from '../GlobalComponents/BtnGlobal';

// export default function UserProfile() {
//   return (
//     <Layout>
//       <div className="">
//         {/* Banner Section */}
//         <div className="flex justify-center items-center h-16 my-8 relative">
//           <div className="bg-userProfile absolute inset-0 opacity-70"></div>
//           <h1 className="uppercase font-NewYork text-4xl tracking-wide z-20">Edit profile</h1>
//         </div>

//         {/* Right Section */}
//         <div className="flex justify-center mx-24">
//           <div className="border-[0.5px] border-gray-400 h-96 w-8/12">

//             {/* Main title */}
//             <div>
//               <h1 className="uppercase font-medium text-xl mb-6">Personal information</h1>
//             </div>

//             {/* Title and inputs */}
//             <div className="flex items-center justify-center ml-20 mb-5">
//               <h2 className="uppercase font-medium w-1/4 text-lg mr-0">First Name :</h2>
//               <InputField placeholder="First Name" className="w-3/4 mb-0" />
//             </div>

//             {/* Save Changes Button */}
//             <div className="flex flex-1">
//               <BtnGlobal content="Save Changes" className="border border-blackV px-5 py-2" />
//             </div>
//           </div>

//           {/* Left Section */}
//           <div className="border-[1px] border-gray-700 h-96 w-4/12 flex justify-center items-center">
//             <h1 className="uppercase text-2xl text-black">Change picture section </h1>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// // max-w-[82rem] mx-auto
// // container mx-auto

// {
//   /* <div className='max-w-[82rem] mx-auto'>
//         Edit profile Banner
//         <section className="flex justify-center items-center h-16 my-8 relative">
//           <div className="bg-userProfile absolute inset-0 opacity-70"></div>
//           <h1 className="uppercase font-NewYork text-4xl tracking-wide z-20">Edit profile</h1>
//         </section>

//         Inputs
//         <section className="bg-zinc-200 h-72 flex flex-row ">
//           Settings section
//           <div className="flex justify-center items-center mb-10 bg-zinc-300 h-56 w-8/12">
//             <div className="bg-orange-500 h-56 w-6/12">
//             </div>
//             <div className=" h-56 w-6/12 ">
//               <InputField placeholder="First Name" className="mb-2 uppercase"/>
//               <InputField placeholder="Last Name" className="mb-2 uppercase" />
//               <InputField placeholder="address" className="mb-2 uppercase"/>
//             </div>
//           </div>

//           Userprofile section
//           <div className="bg-zinc-400 h-56 w-4/12 flex justify-center items-center">
//             <h1>Here goes Profile Image</h1>
//             </div>
//         </section>
//       </div> */
// }
