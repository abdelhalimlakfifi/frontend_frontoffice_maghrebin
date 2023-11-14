import React from "react";
import { Link } from "react-router-dom";
import NavMenu from "../../components/NavBar/links";
import MyLogo from "/Icons/Maghrebin_logo.svg";
import igIcon from "/Icons/igIcon.svg";
import fbIcon from "/Icons/fbIcon.svg";
import xIcon from "/Icons/xIcon.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="w-full mt-8">
      <div className="grid grid-cols-3 gap-x-24 border border-x-0 border-black h-96 p-20">
        {/* About Section */}
        <div className="flex flex-col item-start py-10">
          <h1 className="w-2/5 text-xl uppercase mb-4">About</h1>
          <p className="text-sm mb-4">
            Maghrebin Moments: Stay Styled With Our Latest Fashion Chronicles!
          </p>
          <div className="flex space-around gap-2">
            <img src={igIcon} className="h-8 w-8" alt="Instagram" />
            <img src={fbIcon} className="h-8 w-8" alt="Facebook" />
            <img src={xIcon} className="h-8 w-8" alt="X Icon" />
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col item-start py-10">
          <h1 className="text-xl uppercase mb-4">Contact</h1>
          <p className="uppercase text-sm">
            <Link to="mailto:maghrebin@contact.ma">maghrebin@contact.ma</Link>
          </p>
          <p className="text-sm">
            <Link to="tel:+212537534235">+212 537 534 235</Link>
          </p>
        </div>

        {/* Logo and Navigation Section */}
        <div className="w-2/5 flex flex-col items-start py-10">
          <Link to="/">
            <img src={MyLogo} className="w-[200px]" alt="Maghrebin Logo" />
          </Link>
          <ul className="flex flex-col overflow-hidden w-72 p-4">
            {NavMenu.map((link) => (
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
      </div>

      {/* Copyright Section */}
      <div className="h-14 flex items-center">
        <p className="pl-24">@{currentYear} MAGHREBIN</p>
      </div>
    </section>
  );
};

export default Footer;
