import React, { useState } from "react";
import { Link } from "react-router-dom";

const MegaMenu = ({ links }) => {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <div className="hidden lg:block">
      {/* Menu div */}
      <ul className="flex justify-between items-center gap-5 md:w-72 p-4">
        {links.map((link) => (
          <li
            className="w-full hover:underline relative"
            key={link.name}
            onMouseEnter={() => setActiveLink(link.path)}
            onMouseLeave={() => setActiveLink(link.path)}
          >
            <Link
              to={link.path}
              className="text-neutral-900 uppercase font-normal m-0"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mega menu outside of the ul */}
      {activeLink &&
        links.find((link) => link.path === activeLink)?.subcategories && (
          <div
            className="border-blackV border-t-2 bg-red-200 p-4 absolute top-full left-0 w-full h-64"
            onMouseLeave={() => setActiveLink(null)}
          >
            <ul>
              {links
                .find((link) => link.path === activeLink)
                ?.subcategories.map((subcategory) => (
                  <li key={subcategory.path}>
                    <Link to={subcategory.path}>{subcategory.name}</Link>
                  </li>
                ))}
            </ul>
          </div>
        )}
    </div>
  );
};

export default MegaMenu;
