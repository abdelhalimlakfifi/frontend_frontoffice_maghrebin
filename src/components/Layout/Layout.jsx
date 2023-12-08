import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "primereact/sidebar";
import NavBar from "./NavBar";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import MyCartPage from "../../Pages/MyCartPage";


const iconLinks = [
  { path: "/", icon: "/src/assets/Icons/HomeIcon.svg", alt: "HomeIcon" },
  { path: "/wish-list", icon: "/src/assets/Icons/favIcon.svg", alt: "favIcon" },
  { icon: "/src/assets/Icons/cartIcon.svg", alt: "cartIcon" },
  {
    path: "/user-profile",
    icon: "/src/assets/Icons/userIcon.svg",
    alt: "userIcon",
  },
];

function Layout({ children }) {
  const [menuClick, setMenuClick] = useState(false);

  const [visibleBottom, setVisibleBottom] = useState(false);  // State for the cart sidebar


  // Callback function to update searchClick state
  const updateMenuClick = (value) => {
    setMenuClick(value);
  };

    // Function to handle the click on the cart icon in the bottom navigation
    const handleCartIconClick = () => {
      setVisibleBottom(!visibleBottom);
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

          <div className="w-full h-auto mt-auto block border-blackV border-t ">
            <Footer />
          </div>

          {/* bottom navMenu */}
          <div className="flex justify-between items-center mt-auto lg:hidden    h-12 px-4 md:px-7 md:h-11 fixed bottom-0 left-0 w-full bg-white  border-blackV border-t-2  z-50">
            {iconLinks.map((iconLink, index) => (
              <Link
                key={index}
                to={iconLink.path}
                className="w-8"
                onClick={
                  iconLink.alt === "cartIcon" ? handleCartIconClick : null
                }
              >
                <img
                  src={iconLink.icon}
                  alt={iconLink.alt}
                  className="h-6 md:h-7 m-0 p-0"
                />
              </Link>
            ))}
          </div>

            {/* Sidebar for MyCartPage */}
            <Sidebar visible={visibleBottom} position="bottom" onHide={handleCartIconClick} className="w-full h-[90vw]  md:h-[40vw] ">
            <MyCartPage />
          </Sidebar>
        </div>
      )}
    </div>
  );
}

export default Layout;
