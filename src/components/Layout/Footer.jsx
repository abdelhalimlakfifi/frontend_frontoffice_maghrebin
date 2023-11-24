import React from 'react';
import { Link } from 'react-router-dom';
import MyLogo from '/Icons/Maghrebin_logo.svg';
import igIcon from '../../assets/icons/igIcon.svg';
import fbIcon from '../../assets/icons/fbIcon.svg';
import xIcon from '../../assets/icons/xIcon.svg';
import BtnGlobal from '../GlobalComponents/BtnGlobal';
import InputField from '../GlobalComponents/InputField';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section className="mx-12 my-6 flex flex-col lg:flex-row justify-between items-center lg:mx-44 bg-white">
        {/* Stay in touch Section */}
        <div className=" lg:order-2">
          <div>
            <h1 className="flex justify-start uppercase text-left font-bold text-lg">Stay in touch</h1>
            <p className="text-sm">Maghrebin Moments: Stay Styled with Our Latest Fashion Chronicles!</p>
          </div>
          <InputField placeholder="E-mail" className="my-3 border-b-[2px]" />
        </div>

        {/* Logo and Navigation Section */}
        <div className="x-12 my-3 flex flex-col items-center md:order-1">
          <Link to="/">
            <img src={MyLogo} className="w-[225px]" alt="Maghrebin Logo" />
          </Link>
          {/* <ul className="flex justify-center space-x-4">
            {NavMenu.map((link) => (
              <li className="w-fit  hover:underline" key={link.name}>
                <Link
                  to={link.path}
                  className="text-neutral-900 uppercase font-normal text-sm"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul> */}
        </div>
        {/* let's connect */}
        <div className="md:flex flex-col justify-start order-3">
          <h1 className="hidden lg:block text-left font-bold text-lg uppercase mb-2">Let's connect</h1>

          <div className="hidden lg:block flex-col items-start">
            <Link to="#" className="text-left">
              <h3>maghrebin@contact.ma</h3>
            </Link>
            <Link to="#">
              <h3 className="text-left">+212 537 534 235</h3>
            </Link>
          </div>

          <div className="flex justify-center space-x-4 my-8 md:my-5 md:flex md:justify-start">
            <Link to="#">
              <img src={igIcon} alt="igIcon" className="w-8" />
            </Link>
            <Link to="#">
              <img src={xIcon} alt="xIcon" className="w-8" />
            </Link>
            <Link to="#">
              <img src={fbIcon} alt="fbIcon" className="w-8" />
            </Link>
          </div>
        </div>
      </section>
      <section className="mb-60">
        {/* Copyright Section md:hidden */}
        <div className="h-9  flex justify-center border-blackV border-t-2 `">
          <p className="my-2 text-sm">@{currentYear} MAGHREBIN</p>
        </div>
        <div className="lg:hidden h-12"></div>
      </section>
    </>
  );
};

export default Footer;
