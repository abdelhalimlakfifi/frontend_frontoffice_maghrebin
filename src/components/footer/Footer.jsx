import { Link } from 'react-router-dom';
import MyLogo from '../../assets/Icons/Maghrebin_logo.svg';
import NavMenu from '../../components/navbar/links';
import igIcon from '../../assets/Social Media icons/igIcon.svg';
import fbIcon from '../../assets/Social Media icons/fbIcon.svg';
import xIcon from '../../assets/Social Media icons/xIcon.png';
// import {igIcon, fbIcon, xIcon} from '../../components/Footer/SocialMediaIcons'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-10">
      {/* Infos Section */}
      <div className="grid grid-cols-3 gap-x-24 border border-x-0 border-black h-96 p-20">
        <div className="flex flex-col item-start py-10">
          <h1 className="w-2/5 text-xl uppercase mb-4">About</h1>
          <p className="text-sm mb-4">
            {' '}
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
          </p>
          <div className= 'flex space-around gap-2'>
            <img src={igIcon} className='h-8 w-8'/>
            <img src={fbIcon} className='h-8 w-8'/>
            <img src={xIcon} className='h-8 w-8'/>
          </div>
        </div>

        <div className="flex flex-col item-start py-10">
          <h1 className="text-xl uppercase mb-4">Contact</h1>
          <p className="uppercase text-sm">
            <Link>maghrebin@contact.ma</Link>
          </p>
          <p className="text-sm ">
            <Link>+212 537 534 235</Link>
          </p>
        </div>

        <div className="w-2/5 flex flex-col items-start ">
          {/* Logo */}
          <Link>
            <img src={MyLogo} className=" w-[200px] " />
          </Link>
          <ul className="flex flex-col overflow-hidden w-72 p-4">
            {NavMenu.map(link => (
              <li className="w-fit hover:underline" key={link.name}>
                <Link to={link.path} className="text-neutral-900 uppercase font-normal m-0">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="h-14 flex items-center">
        <p className="pl-24 ">@{currentYear} MAGHREBIN</p>
      </div>
    </footer>
  );
};

export default Footer