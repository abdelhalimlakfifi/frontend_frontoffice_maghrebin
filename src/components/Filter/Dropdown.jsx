// import React, { useState } from 'react';

// const Dropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOptions, setSelectedOptions] = useState([]);

//   const options = [
//     { value: 'option1', label: 'Option 1' },
//     { value: 'option2', label: 'Option 2' },
//     { value: 'option3', label: 'Option 3' },
//   ];

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOptionToggle = (optionValue) => {
//     if (selectedOptions.includes(optionValue)) {
//       setSelectedOptions(selectedOptions.filter((value) => value !== optionValue));
//     } else {
//       setSelectedOptions([...selectedOptions, optionValue]);
//     }
//   };

//   const isOptionSelected = (optionValue) => {
//     return selectedOptions.includes(optionValue);
//   };

//   return (
//     <div className="relative inline-block text-left">
//       <div>
//         <button
//           type="button"
//           className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//           onClick={toggleDropdown}
//         >
//           {selectedOptions.length > 0
//             ? `${selectedOptions.length} options selected`
//             : 'Select options'}
//           <svg
//             className="-mr-1 ml-2 h-5 w-5"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//             aria-hidden="true"
//           >
//             <path
//               fillRule="evenodd"
//               d="M6 8l4 4 4-4H6z"
//             />
//           </svg>
//         </button>
//       </div>

//       {isOpen && (
//         <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//           <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//             {options.map((option) => (
//               <label
//                 key={option.value}
//                 className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                 role="menuitem"
//               >
//                 <input
//                   type="checkbox"
//                   className="form-checkbox mr-2"
//                   value={option.value}
//                   checked={isOptionSelected(option.value)}
//                   onChange={() => handleOptionToggle(option.value)}
//                 />
//                 {option.label}
//               </label>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dropdown;