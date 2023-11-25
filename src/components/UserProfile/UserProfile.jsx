import React from 'react';
import Layout from '../Layout/Layout';

export default function UserProfile() {
  return (
    <Layout>
      <div className='max-w-[82rem] mx-auto'>
        {/* Edit profile Banner */}
        <section className="flex justify-center items-center h-16 my-8 relative">
          <div className="bg-userProfile absolute inset-0 opacity-70"></div>
          <h1 className="uppercase font-NewYork text-4xl tracking-wide z-20">Edit profile</h1>
        </section>

        {/* Inputs */}
        <section className="bg-zinc-200 h-72 flex flex-row ">
          {/* Settings section */}
          <div className="flex justify-center items-center mb-10 bg-zinc-300 h-56 w-8/12">
            <div className="bg-orange-500 h-56 w-6/12"></div>
            <div className="bg-blue-500 h-56 w-6/12"></div>
          </div>

          {/* Userprofile section */}
          <div className="bg-zinc-400 h-56 w-4/12 flex justify-center items-center">{/* <h1>Here goes Profile Image</h1> */}</div>
        </section>
      </div>
    </Layout>
  );
}

// max-w-[82rem] mx-auto
// container mx-auto
