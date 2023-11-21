import React, {useState} from "react";
import { Link } from "react-router-dom";
import MyLogo from "/Icons/Maghrebin_logo.svg";
import { InputText } from "primereact/inputtext";
import 'primeicons/primeicons.css';


//import icons
import searchIcon from '../../assets/icons/searchIcon.svg'
import favIcon from '../../assets/icons/favIcon.svg'
import cartIcon from '../../assets/icons/cartIcon.svg'
import navLineDivider from '../../assets/icons/navLine_divider.svg'
import userIcon from '../../assets/icons/userIcon.svg'
// import burgerMenu from '../../assets/icons/Bugermenu.svg'
// import closeMenu from '../../assets/icons/closeMenu.svg'

function NavBar({updateMenuClick, menuClick}) {
    const [searchClick, setSearchClick] = useState(false)

  const handleSearchClick = () => {
    setSearchClick(!searchClick)
  }

  const handleMenuClick = () => {
    updateMenuClick((menuClick) => !menuClick);
  };

  
  const links = [
    {
      path: '/home',
      name: 'Home',
    },
    {
      path: '/men',
      name: 'Men',
    },
    {
      path: '/women',
      name: 'Women',
    },
    {
      path: '/kids',
      name: 'Kids',
    },
  ]

  return (
    <>
    {/* className="h-6 w-8" */}
      <div className="mx-3 lg:mx-28 flex justify-between">
      <div className="flex items-center lg:hidden"    onClick={handleMenuClick}>
        {menuClick ? <span className="pi pi-times w-5 text-xl"></span> : <span className="pi pi-bars w-5 text-xl"></span>
          }
          
      </div>
      <div className="hidden lg:block ">
         {/* Menu div */}
         <ul className="flex justify-between items-center md:w-72 p-4">
          {links.map((link) => (
            <li className="w-fit hover:underline" key={link.name}>
              <Link
                to={link.path}
                className="text-neutral-900 uppercase font-normal m-0"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      
      
      {/* Logo div */}
        <Link
          to="/"
          className=""
        >
          <img src={MyLogo} alt="MyLogo" className="h-12 my-1 " />
        </Link>
        

      {/* Icons div */}
      <div className="flex items-center lg:space-x-3  ">
        
          <Link to=''>
            <img
              src={searchIcon}
              alt='searchIcon'
              className="h-6 w-8"
              onClick={handleSearchClick}
            />
          </Link>
          <Link to='/'>
            <img
              src={favIcon}
              alt='searchIcon'
              className="h-6 w-8 hidden lg:block"
            />
          </Link>
          <Link to='/'>
            <img
              src={cartIcon}
              alt='cartIcon'
              className="h-6 w-8 hidden lg:block"
            />
          </Link>
          <Link to='/'>
            <img
              src={navLineDivider}
              alt='navLineDivider'
              className="h-6 w-8 hidden lg:block"
            />
          </Link>
          <Link to='/'>
            <img
              src={userIcon}
              alt='userIcon'
              className="h-6 w-8 hidden lg:block"
            />
          </Link>
      
      </div>
    </div> 

    {searchClick && <div className="h-14 border-blackV border-t-2 bg-white w-full">
    <span className="p-input-icon-left mx-3 ease-in-out">
      <i className="pi pi-search " />
      <InputText placeholder="Search..." className='outline-none w-full border-0 mx-2 rounded-none !shadow-none' />
    </span>
    </div>}
    </>
    
  );
}

export default NavBar;
