import { Link } from 'react-router-dom';
import MyLogo from '../../assets/Icons/Maghrebin_logo.svg';
import links from './links';
import iconLinks from './iconLinks';

function NavBar() {
  return (
    <div className="flex justify-between m-6 w-">
      {/* Menu div */}
      <nav className="flex justify-center">
        <ul className="flex justify-between overflow-hidden w-72 p-4">
          {links.map(link => (
            <li className="w-fit" key={link.name}>
              <Link to={link.path} className="text-neutral-900 uppercase font-normal m-0">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logo div */}
      <div>
        <Link to="/ ">
          <img src={MyLogo} alt="MyLogo" className="h-12" />
        </Link>
      </div>

      {/* Icons div */}
      <div className="flex items-center space-x-3 justify-center">
        {iconLinks.map((iconLink, index) => (
          <Link key={index} to={iconLink.path} className="w-8">
            <img src={iconLink.icon} alt={iconLink.alt} className="h-6 m-0 p-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
