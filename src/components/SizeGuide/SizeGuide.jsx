import heightSections from './heightSectionsData';
import SizeImg from '/SizeGuideImg/SizeImg-Scroped.jpg';
import womenSpecialLengths from './womenSpecialLengthsData';
import PinImg from '/SizeGuideImg/PinIcon.svg';

import DynamicColumnsDemo from './DynamicColumnsDemo';

export default function SizeGuide() {
  return (
    <section className="w-full flex justify-center">
      <div className="w-[80%]">
        {/* Upper Section... */}
        <div className="h-[100px] lg:h-[290px] py-14">
          <h1 className="uppercase main-black text-2xl lg:text-4xl font-semibold">SIZE GUIDE</h1>
          <h1 className="uppercase main-black lg:text-2xl font-semibold">Take your measurements carefully!</h1>

          <div className="lg:uppercase main-black text-left text-sm mt-6 mx-5 lg:mx-10 lg:px-12">
            For accurate sizing, follow these steps: Position the tape measure as close to your body as possible, without applying pressure.
            Take measurements over lightweight clothing, like underwear, while standing straight and relaxed. If you want more precise
            measurements, consider enlisting the help of a third party.
          </div>
        </div>

        {/* Middle Section */}
        {/* <div className="flex justify-center ">
          <ul className="w-[70%] h-[500px]">
            {heightSections.map((section, index) => (
              <li key={index} className="uppercase mb-6">
                <h1 className="font-semibold text-xl px-12">{section.title}</h1>
                <p className="font-regular text-sm px-12 ml-10 w-[70%]">{section.content}</p>
              </li>
            ))}
          </ul>
          <div className="w-[30%] h-[500px]">
            <img src={SizeImg} />
          </div>
        </div> */}

        {/* Pre table section */}
        {/* <section>
          <h1 className="mb-8 uppercase font-semibold text-xl">Special lengths for women</h1>
          <div className="flex justify-around mb-8">
            {womenSpecialLengths.flatMap((item, index) => [
              <div key={index} className="w-[400px] ml-6">
                <h1 className="mb-3 uppercase font-semibold">{item.title}</h1>
                {item.description.map((desc, idx) => (
                  <p key={idx}>{desc}</p>
                ))}
              </div>,
              index !== womenSpecialLengths.length - 1 && <div key={`divider-${index}`} className="bg-black w-[2px] h-[100px]"></div>,
            ])}
          </div>
          <div className="flex items-center space-x-2 ">
            <img src={PinImg} className="h-[34px] w-auto" />
            <p className="uppercase">Tip: If your measurements fall between two sizes, always order the larger size.</p>
          </div>
        </section> */}
        {/* <DynamicColumnsDemo /> */}
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
