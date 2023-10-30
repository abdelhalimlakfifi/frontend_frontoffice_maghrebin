import { Link } from 'react-router-dom';
import MyLogo from '../../assets/Maghrebin_logo.svg';

function NavBar() {
  return (
    <div className="flex m-6">
      {/* Menu div */}
      <div className="flex">
        <nav>
          <ul className="flex justify-start p-4">
            <li>
              <Link to="/home" className="text-neutral-900 hover:text-neutral-800 uppercase font-medium m-0">
                Home
              </Link>
            </li>
            <li>
              <Link to="/men" className="text-neutral-900 hover:text-neutral-800 uppercase font-medium m-0">
                Men
              </Link>
            </li>
            <li>
              <Link to="/woman" className="text-neutral-900 hover:text-neutral-800 uppercase font-medium m-0">
                Woman
              </Link>
            </li>
            <li>
              <Link to="/kids" className="text-neutral-900 hover:text-neutral-800 uppercase font-medium m-0">
                Kids
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Logo div */}
      <div>
        <Link to="/home">
          <img src={MyLogo} alt="MyLogo" className="h-12" />
        </Link>
      </div>

      {/* Icons div */}
      <div className="flex items-center space-x-3 justify-center">
        {/* Adjusted the spacing here */}
        <Link to="#" className="w-8">
          <img src="/src/assets/searchIcon.svg" alt="searchIcon" className="h-6 m-0 p-0" />
        </Link>
        <Link to="#" className="w-8">
          <img src="/src/assets/favIcon.svg" alt="favIcon" className="h-6" />
        </Link>
        <Link to="#" className="w-8">
          <img src="/src/assets/cartIcon.svg" alt="searchIcon" className="h-6" />
        </Link>
        <div className="w-8">
          <img src="/src/assets/navLine_separator.svg" alt="navLine_separator" className="h-6" />
        </div>
        <Link to="#" className="w-8">
          <img src="/src/assets/userIcon.svg" alt="userIcon" className="h-6" />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
