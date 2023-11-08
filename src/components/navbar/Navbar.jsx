import { Link } from 'react-router-dom';
import MyLogo from '../../assets/Icons/Maghrebin_logo.svg';
import iconLinks from './iconLinks';
import links from './links';

function Navbar() {
  return (
    <div className="flex justify-around m-1 my-3 md:w-[95vw]">
      {/* Menu div */}
      <nav className="md:mx-6 lg:mx-10 md:visible">
        <ul className="flex justify-between md:w-72 p-4">
          {links.map(link => (
            <li className="w-fit hover:underline" key={link.name}>
              <Link to={link.path} className="text-neutral-900 uppercase font-normal m-0">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* <nav className="flex justify-center ml-10">
        <ul className="flex justify-between overflow-hidden w-72 p-4">
          {links.map(link => (
            <li className="w-fit hover:underline" key={link.name}>
              <Link to={link.path} className="text-neutral-900 uppercase font-normal m-0">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav> */}

      {/* Logo div */}
      <div>
        <Link to="/ " className="md:mx-2 flex items-center justify-center flex-1">
          <img src={MyLogo} alt="MyLogo" className="h-[52px]" />
        </Link>
      </div>

      {/* Icons div */}
      <div className="flex items-center space-x-3 justify-center md:mx-6">
        {iconLinks.map((iconLink, index) => (
          <Link key={index} to={iconLink.path} className="w-8">
            <img src={iconLink.icon} alt={iconLink.alt} className="h-6 m-0 p-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
