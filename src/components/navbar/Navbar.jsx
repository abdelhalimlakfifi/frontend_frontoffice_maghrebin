import { Link } from 'react-router-dom';
import MyLogo from '../../assets/Maghrebin_logo.svg';

function NavBar() {
  return (
    <div className="flex jus m-6">
    {/* Menu div */}
      <div m-0>
        <nav>
          <ul className="flex items-center justify-around mx-auto max-w-6xl p-4">
            <li>
              <Link to="/home" className="text-neutral-900 hover:text-neutral-700 uppercase font-semibold ml-4 underline-offset-1">
                Home
              </Link>
            </li>
            <li>
              <Link to="/men" className="text-neutral-900 hover:text-neutral-700 uppercase font-semibold ml-4 underline-offset-1">
                Men
              </Link>
            </li>
            <li>
              <Link to="/woman" className="text-neutral-900 hover:text-neutral-700 uppercase font-semibold ml-4 underline-offset-1">
                Woman
              </Link>
            </li>
            <li>
              <Link to="/kids" className="text-neutral-900 hover:text-neutral-700 uppercase font-semibold ml-4 underline-offset-1">
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
      <div className="flex items-center space-x-3 justify-center"> {/* Adjusted the spacing here */}
        <Link to="#" className='w-8'>
          <img src="/src/assets/searchIcon.svg" alt="searchIcon" className="h-5 m-0 p-0" />
        </Link>
        <Link to="#" className='w-8'>
          <img src="/src/assets/favIcon.svg" alt="favIcon" className="h-5" />
        </Link>
        <Link to="#" className='w-8'>
          <img src="/src/assets/cartIcon.svg" alt="searchIcon" className="h-5" />
        </Link >
        <div className='w-8'>
          <img src="/src/assets/navLine_separator.svg" alt="navLine_separator" className="h-5" />
        </div>
        <Link to="#"  className='w-8'>
          <img src="/src/assets/userIcon.svg" alt="userIcon" className="h-5" />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
