import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyLogo from "/Icons/Maghrebin_logo.svg";
import { InputText } from "primereact/inputtext";
import { Sidebar } from "primereact/sidebar";
import "primeicons/primeicons.css";

//import icons
import searchIcon from "../../assets/icons/searchIcon.svg";
import favIcon from "../../assets/icons/favIcon.svg";
import cartIcon from "../../assets/icons/cartIcon.svg";
import navLineDivider from "../../assets/icons/navLine_divider.svg";
import userIcon from "../../assets/icons/userIcon.svg";
import MegaMenu from "./MegaMenu";
// import burgerMenu from '../../assets/icons/Bugermenu.svg'
// import closeMenu from '../../assets/icons/closeMenu.svg'

function NavBar({ updateMenuClick, menuClick }) {
  const [searchClick, setSearchClick] = useState(false);

  //Show my cart sidebar
  const [visibleRight, setVisibleRight] = useState(false);

  const handleSearchClick = () => {
    setSearchClick(!searchClick);
  };

  const handleMenuClick = () => {
    updateMenuClick((menuClick) => !menuClick);
  };

  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/men-products",
      name: "Men",
      subcategories: [
        { name: "New In", path: "/new-in-men" },
        { name: "View All Womenswear", path: "/men-products" },
        { name: "Gandoura", path: "/Gandoura" },
        { name: "Moroccan Djellaba", path: "/Men-Moroccan-Djellaba" },
        { name: "Lebssa", path: "/Men-Lebssa" },
      ],
    },
    {
      path: "/women-products",
      name: "Women",
      subcategories: [
        { name: "New In", path: "/new-in-women" },
        { name: "View All Womenswear", path: "/women-products" },
        { name: "Kaftan & Gandoura", path: "/Kaftan-Gandoura" },
        { name: "Moroccan Djellaba", path: "/Moroccan-Djellaba" },
        { name: "Takchita & Lebssa", path: "/Takchita-Lebssa" },
      ],
    },
    {
      path: "/kids-products",
      name: "Kids",
      subcategories: [
        { name: "New In", path: "/new-in-kids" },
        { name: "View All Womenswear", path: "/kids-products" },
        { name: "Kaftan & Gandoura", path: "/kids-Kaftan-Gandoura" },
        { name: "Moroccan Djellaba", path: "/kids-Moroccan-Djellaba" },
        { name: "Lebssa", path: "/kids-Lebssa" },
      ],
    },
  ];

  return (
    <>
      {/* className="h-6 w-8" */}
      <div className="mx-3 lg:mx-28 flex justify-between">
        <div className="flex items-center lg:hidden" onClick={handleMenuClick}>
          {menuClick ? (
            <span className="pi pi-times w-5 text-xl"></span>
          ) : (
            <span className="pi pi-bars w-5 text-xl"></span>
          )}
        </div>

        {/* SHOW MEGA MENU WHEN RESPECTIVE LINK IS HOVERED */}
        <MegaMenu links={links} />

        {/* Logo div */}
        <Link to="/" className="">
          <img src={MyLogo} alt="MyLogo" className="h-12 my-1 " />
        </Link>

        {/* Icons div */}
        <div className="flex items-center lg:space-x-3  ">
          <button>
            <img
              src={searchIcon}
              alt="searchIcon"
              className="h-6 w-8"
              onClick={handleSearchClick}
            />
          </button>
          <Link to="/wish-list">
            <img
              src={favIcon}
              alt="searchIcon"
              className="h-6 w-8 hidden lg:block"
            />
          </Link>
          <button>
            <img
              src={cartIcon}
              alt="cartIcon"
              className="h-6 w-8 hidden lg:block"
              onClick={() => setVisibleRight(true)}
            />
          </button>

          <img
            src={navLineDivider}
            alt="navLineDivider"
            className="h-6 w-8 hidden lg:block"
          />

          <Link to="/user-profile">
            <img
              src={userIcon}
              alt="userIcon"
              className="h-6 w-8 hidden lg:block"
            />
          </Link>
        </div>
      </div>

      {searchClick && (
        <div className="h-14 border-blackV border-t-2 bg-white w-full">
          <span className="p-input-icon-left mx-3 ease-in-out">
            <i className="pi pi-search " />
            <InputText
              placeholder="Search..."
              className="outline-none w-full border-0 mx-2 rounded-none !shadow-none"
            />
          </span>
        </div>
      )}
      <Sidebar
        visible={visibleRight}
        position="right"
        onHide={() => setVisibleRight(false)}
      >
        <h2>Right Sidebar</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Sidebar>
    </>
  );
}

export default NavBar;
