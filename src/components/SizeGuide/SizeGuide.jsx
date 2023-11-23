import heightSections from './heightSectionsData';
// import SizeImg from '/SizeGuideImg/SizeImg-Scroped.jpg';
import womenSpecialLengths from './womenSpecialLengthsData';
import PinImg from '/SizeGuideImg/PinIcon.svg';

import DynamicColumnsDemo from './DynamicColumnsDemo';

export default function SizeGuide() {
  return (
    <section className="w-full flex justify-center">
      <div className="w-[80%]">
        {/* Upper Section... */}
        <div className="h-[100px] lg:h-[290px] py-14">
          <h1 className="uppercase main-black text-2xl md:text-3xl lg:text-4xl font-semibold">SIZE GUIDE</h1>
          <h1 className="uppercase main-black md:text-xl lg:text-2xl font-semibold">Take your measurements carefully!</h1>

          <div className="main-black text-left text-sm md:text-base mt-6 mx-5 lg:mx-10 lg:px-12 lg:uppercase">
            For accurate sizing, follow these steps: Position the tape measure as close to your body as possible, without applying pressure.
            Take measurements over lightweight clothing, like underwear, while standing straight and relaxed. If you want more precise
            measurements, consider enlisting the help of a third party.
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col lg:flex lg:justify-center lg:flex-row">
          <ul className="h-[500px] order-2 lg:order-1 lg:w-[70%]">
            {heightSections.map((section, index) => (
              <li key={index} className="mb-6">
                <h1 className="font-semibold text-xl lg:px-12">{section.title}</h1>
                <p className="font-regular text-sm md:text-base md:tex lg:px-12 ml-10 w-[70%]">{section.content}</p>
              </li>
            ))}
          </ul>
          <div className="h-10/12 w-10/12 lg:flex lg:items-center md:mt-26 md:mb-26 md:h-10/12 md:w-10/12 lg:w-[60%] lg:h-[550px] order-1 lg:order-2 mx-auto mt-52 mb-5 lg:mt-0 lg:mb-0">
            <img src="https://images.unsplash.com/photo-1610359028422-e5a6fa73cf91?q=80&w=3430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        </div>
        

        {/* Pre table section */}
        <section className="mt-32 md:my-8 md:14 lg:my-0">
          <h1 className="mt-8 md:my-8 mb-2 bg-black text-white text-center lg:bg-transparent lg:text-black lg:text-start lg:mb-8 uppercase font-semibold text-xl">
            Special lengths for women
          </h1>
          {/* Desktop View */}
          <div className="hidden md:flex lg:flex justify-around mb-8">
            {womenSpecialLengths.flatMap((item, index) => [
              <div key={index} className="w-[400px] ml-2 lg:ml-6">
                <h1 className=" mb-3 uppercase font-semibold">{item.title}</h1>
                {item.description.map((desc, idx) => (
                  <h1 className="text-start text-sm " key={idx}>
                    {desc}
                  </h1>
                ))}
              </div>,
              index !== womenSpecialLengths.length - 1 && <div key={`divider-${index}`} className="bg-black w-[3px] lg:w-[2px] mx-2"></div>,
            ])}
          </div>

          {/* Mobile view */}
          <div className="flex flex-col mb-6 md:hidden lg:hidden uppercase">

            {/*  */}
            <div>
              <h1 className="font-bold text-center text-base mt-4 mb-2 lg:px-12">Size C (short):</h1>
              <p className="font-regular text-sm mb-2 md:text-base lg:px-12 ml-4 w-full">
                1 - Ideal for heights between <b>165 cm</b> and <b className="ml-5">172 cm.</b>
              </p>
              <p className="font-regular text-sm mb-2 md:text-base lg:px-12 ml-4 w-full">5 - Inseam length approximately 81 cm.</p>
            </div>

            {/*  */}
            <div>
              <h1 className="font-bold text-center text-base mt-4 mb-2 lg:px-12">Size N (Normal):</h1>
              <p className="font-regular text-sm mb-2 md:text-base lg:px-12 ml-4 w-full">
                1 - Ideal for heights over <b>172 cm.</b>
              </p>
              <p className="font-regular text-sm mb-2 md:text-base lg:px-12 ml-4 w-full">
                5 - Inseam length approximately <b>88 cm.</b>
              </p>
            </div>

            {/*  */}
            <div>
              <h1 className="font-bold text-center text-base mt-4 mb-2 lg:px-12">Size L (long):</h1>
              <p className="font-regular text-sm mb-2 md:text-base lg:px-12 ml-4 w-full">
                1 - Ideal for heights over <b>172 cm.</b>
              </p>
              <p className="font-regular text-sm mb-2 md:text-base lg:px-12 ml-4 w-full">
                5 - Inseam length approximately <b>88 cm.</b>
              </p>
            </div>
          </div>

          <div className="flex items-start lg:items-center space-x-2 ">
            <img src={PinImg} className="h-8 lg:h-[34px] w-auto" />
            <p className="text-sm uppercase font-medium ">Tip: If your measurements fall between two sizes, always order the larger size.</p>
          </div>
        </section>
        <DynamicColumnsDemo />
      </div>
    </section>
  );
}

// export default function SizeGuide() {
//   return (
//     <section className="w-full flex justify-center">
//       <div className=" w-[80%] ">
//         {/* upper Section */}
//         <div className=" h-[290px] uppercase py-14">
//           <h1 className="main-black text-4xl font-semibold">SIZE GUIDE</h1>
//           <h1 className="main-black text-2xl font-semibold">Take your measurements carefully!</h1>
//           <div className="main-black mt-6 mx-10 px-12">
//             For accurate sizing, follow these steps: Position the tape measure as close to your body as possible, without applying pressure.
//             Take measurements over lightweight clothing, like underwear, while standing straight and relaxed. If you want more precise
//             measurements, consider enlisting the help of a third party.
//           </div>
//         </div>
//         {/* middle Section */}
//         <div className="flex justify-center">
//           <div className="w-3/4 h-[700px]">
//             <div className="uppercase">
//               <h1 className="font-semibold text-xl">1 - Height</h1>
//               <p>Without shoes, from the top of the head to the soles of the feet (for assistance, a door frame is perfect).</p>
//             </div>
//             <div className="uppercase">
//               <h1 className="font-semibold text-xl">2 - Height</h1>
//               <p>Without shoes, from the top of the head to the soles of the feet (for assistance, a door frame is perfect).</p>
//             </div>
//             <div className="uppercase">
//               <h1 className="font-semibold text-xl">2A - Height</h1>
//               <p>Without shoes, from the top of the head to the soles of the feet (for assistance, a door frame is perfect).</p>
//             </div>
//             <div className="uppercase">
//               <h1 className="font-semibold text-xl">3 - Height</h1>
//               <p>Without shoes, from the top of the head to the soles of the feet (for assistance, a door frame is perfect).</p>
//             </div>
//             <div className="uppercase">
//               <h1 className="font-semibold text-xl">4 - Height</h1>
//               <p>Without shoes, from the top of the head to the soles of the feet (for assistance, a door frame is perfect).</p>
//             </div>
//             <div className="uppercase">
//               <h1 className="font-semibold text-xl">5 - Height</h1>
//               <p>Without shoes, from the top of the head to the soles of the feet (for assistance, a door frame is perfect).</p>
//             </div>
//           </div>
//           <div className="w-1/4 h-[700px]"></div>
//         </div>
//       </div>
//     </section>
//   );
// }

{
  /* <div className="border border-red-700 w-3/4 h-[700px]"></div>
<div className="border border-red-300 w-1/4 h-[700px]"></div> */
}
