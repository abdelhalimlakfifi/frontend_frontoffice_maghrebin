import igIcon from '../../assets/Icons/igIcon.svg';
import fbIcon from '../../assets/Icons/fbIcon.svg';
import xIcon from '../../assets/Icons/xIcon.png';
import MyLogo from '../../assets/Icons/Maghrebin_logo.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex-col col py-8 absolute bottom-0 max-w-full overflow-x-hidden">
      <div className=" text-left">
        <div className="">
          <h1 className=" text-xl uppercase font-medium my-5">Quick links</h1>
          <ul className="list-none text-left uppercase font-light">
            <li className="mb-2">
              <Link>Home</Link>
            </li>
            <li className="mb-2">
              <Link>Men</Link>
            </li>
            <li className="mb-2">
              <Link>Women</Link>
            </li>
            <li className="mb-2">
              <Link>Kids</Link>
            </li>
          </ul>
        </div>

        <div className="my-8">
          <h1 className="my-5 text-xl uppercase font-medium ">About us</h1>
          <p className="font-light">Authentic Moroccan fashion, handcrafted for you.</p>
        </div>

        <div className=" flex justify-center my-6">
          <img className="h-20" src={MyLogo} />
        </div>

        <div className="flex-col col flex items-center">
          <h2 className=" text-[28px] text-[#2B2B2B] font-light">Subscribe to our E-mail</h2>
          <div className="mt-2">
            <input placeholder="Email" className="border border-solid border-gray-500 pb-2 outline-none w-[280px] pl-4 py-2 my-2" />
          </div>
        </div>

        <div className="flex items-center justify-center my-6">
          <img src={igIcon} alt="igIcon" className="h-6 w-6 mx-2" />
          <img src={fbIcon} alt="fbIcon" className="h-6 w-6 mx-2" />
          <img src={xIcon} alt="xIcon" className="h-6 w-6 mx-2" />
        </div>

        <div className="w-full border-b border-gray-500 "></div>
        <p className="text-sm flex justify-center mt-2 ml-4 font-light">Designed with love &copy; {currentYear}, MaGhrebin</p>
      </div>
    </footer>
  );
}

// Contact form
{
  /* <div className=" my-3">
          <h1 className=" text-l uppercase font-medium ">Contact us</h1>
          <p className='font-light'>email@example.com</p>
          <p className='font-light'>+212 537 534 235</p>
        </div> */
}

// mobile responsive 


// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="flex-col col py-8 absolute bottom-0 max-w-full overflow-x-hidden">
//       <div className=" text-left">
//         <div className="">
//           <h1 className=" text-xl uppercase font-medium my-5">Quick links</h1>
//           <ul className="list-none text-left uppercase font-light">
//             <li className="mb-2">
//               <Link>Home</Link>
//             </li>
//             <li className="mb-2">
//               <Link>Men</Link>
//             </li>
//             <li className="mb-2">
//               <Link>Women</Link>
//             </li>
//             <li className="mb-2">
//               <Link>Kids</Link>
//             </li>
//           </ul>
//         </div>

//         <div className="my-8">
//           <h1 className="my-5 text-xl uppercase font-medium ">About us</h1>
//           <p className="font-light">Authentic Moroccan fashion, handcrafted for you.</p>
//         </div>

//         <div className=" flex justify-center my-6">
//           <img className="h-20" src={MyLogo} />
//         </div>

//         <div className="flex-col col flex items-center">
//           <h2 className=" text-[28px] text-[#2B2B2B] font-light">Subscribe to our E-mail</h2>
//           <div className="mt-2">
//             <input placeholder="Email" className="border border-solid border-gray-500 pb-2 outline-none w-[280px] pl-4 py-2 my-2" />
//           </div>
//         </div>

//         <div className="flex items-center justify-center my-6">
//           <img src={igIcon} alt="igIcon" className="h-6 w-6 mx-2" />
//           <img src={fbIcon} alt="fbIcon" className="h-6 w-6 mx-2" />
//           <img src={xIcon} alt="xIcon" className="h-6 w-6 mx-2" />
//         </div>

//         <div className="w-full border-b border-gray-500 "></div>
//         <p className="text-sm flex justify-center mt-2 ml-4 font-light">Designed with love &copy; {currentYear}, MaGhrebin</p>
//       </div>
//     </footer>
//   );
// }