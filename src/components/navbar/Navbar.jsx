import { Link } from 'react-router-dom';
import MyLogo from '../../assets/Maghrebin_logo.svg';

// NavBar.jsx
function NavBar() {
  return (
    <nav>
      <ul>
        <Link to="/home">
          <img src={MyLogo} alt="MyLogo" className="MyLogo" />
        </Link>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="/men">Men</Link>
        </li>
        <li>
          <Link to="/woman">Woman</Link>
        </li>
        <li>
          <Link to="/kids">Kids</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
