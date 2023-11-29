import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import MobileMenu from './MobileMenu';

const iconLinks = [
  { path: '#', icon: '/src/assets/Icons/HomeIcon.svg', alt: 'HomeIcon' },
  { path: '#', icon: '/src/assets/Icons/favIcon.svg', alt: 'favIcon' },
  { path: '#', icon: '/src/assets/Icons/cartIcon.svg', alt: 'cartIcon' },
  { path: '#', icon: '/src/assets/Icons/userIcon.svg', alt: 'userIcon' },
];

function Layout({ children }) {
  const [menuClick, setMenuClick] = useState(false);

  // Callback function to update searchClick state
  const updateMenuClick = value => {
    setMenuClick(value);
  };

  return (
    <div className="w-full h-screen ">
      <div className="w-full border-blackV border-b-2 fixed  top-0 left-0 bg-white z-[2000]">
        <NavBar updateMenuClick={updateMenuClick} menuClick={menuClick} />
      </div>

      {/* Mobile Menu */}

      {menuClick ? (
        <div className="w-full h-full">
          <MobileMenu />
        </div>
      ) : (
        <div className="">
          {/* call all child components */}
          <div className="w-full  mt-14">{children}</div>

          <div className="w-full h-auto mt-auto hidden sm:block border-blackV border-t ">
            <Footer />
          </div>

          {/* bottom navMenu */}
          <div className="flex justify-between items-center mt-auto  sm:hidden h-12 px-4 md:px-7 md:h-11 fixed bottom-0 left-0 w-full bg-white  border-blackV border-t-2  z-50">
            {iconLinks.map((iconLink, index) => (
              <Link key={index} to={iconLink.path} className="w-8">
                <img src={iconLink.icon} alt={iconLink.alt} className="h-6 md:h-7 m-0 p-0" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Layout;
