import React from 'react';
import Layout from '../Layout/Layout';
import InputField from '../GlobalComponents/InputField';
import Container from 'postcss/lib/container';

export default function UserProfile() {
  return (
    <Layout>
      <div className="">
        {/* Banner Section */}
        <div className="flex justify-center items-center h-16 my-8 relative">
          <div className="bg-userProfile absolute inset-0 opacity-70"></div>
          <h1 className="uppercase font-NewYork text-4xl tracking-wide z-20">Edit profile</h1>
        </div>

        <div className="flex justify-center">
          <div className="bg-gray-400 h-96 w-8/12">
            <div>
              <h1 className='uppercase font-bold'>Personal information</h1>
              <div className='flex flex-row ml-26 w-6/12'>
                <h2>First Name</h2>
                <InputField />
              </div>
            </div>
          </div>

          <div className="bg-gray-700 h-96 w-4/12 flex justify-center items-center">
            <h1 className="text-white uppercase text-2xl">Change picture section </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// max-w-[82rem] mx-auto
// container mx-auto

{
  /* <div className='max-w-[82rem] mx-auto'>
        Edit profile Banner
        <section className="flex justify-center items-center h-16 my-8 relative">
          <div className="bg-userProfile absolute inset-0 opacity-70"></div>
          <h1 className="uppercase font-NewYork text-4xl tracking-wide z-20">Edit profile</h1>
        </section>

        Inputs
        <section className="bg-zinc-200 h-72 flex flex-row ">
          Settings section
          <div className="flex justify-center items-center mb-10 bg-zinc-300 h-56 w-8/12">
            <div className="bg-orange-500 h-56 w-6/12">
              
            </div>
            <div className=" h-56 w-6/12 ">
              <InputField placeholder="First Name" className="mb-2 uppercase"/>
              <InputField placeholder="Last Name" className="mb-2 uppercase" />
              <InputField placeholder="address" className="mb-2 uppercase"/>
            </div>
          </div>

          Userprofile section
          <div className="bg-zinc-400 h-56 w-4/12 flex justify-center items-center">
            <h1>Here goes Profile Image</h1>
            </div>
        </section>
      </div> */
}
