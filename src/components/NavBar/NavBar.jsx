import { Link } from "react-router-dom";
import MyLogo from "/Icons/Maghrebin_logo.svg";
import iconLinks from "./iconLinks";
import links from "./links";

function NavBar() {
  return (
    <div className="flex justify-around my-0 w-full">
      {/* Menu div */}
      <nav className="md:mx-6 lg:mx-0 md:visible">
        <ul className="flex justify-between md:w-72 p-4">
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
      </nav>

      {/* Logo div */}
      <div className="flex justify-center items-center">
        <Link
          to="/home"
        >
          <img src={MyLogo} alt="MyLogo" className="h-[55px]" />
        </Link>
      </div>

      {/* Icons div */}
      <div className="flex justify-center items-center space-x-3  md:mx-6">
        {iconLinks.map((iconLink, index) => (
          <Link key={index} to={iconLink.path}>
            <img
              src={iconLink.icon}
              alt={iconLink.alt}
              className="h-6 w-8"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
