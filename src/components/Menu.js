import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";


export default function Menu() {
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();


  const handleItemClick = (index) => {
    setActiveItem(index);
    
  };

  const handleLogoClick = () => {
    navigate("/")
    scrollToTop();
  }

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <nav className="bg-[#1F1F1F] flex justify-between items-center w-full p-4 fixed z-10">
        <a href="#" className="h-10 w-10 invert ml-20 cursor-pointer" onClick={handleLogoClick}>
          <img src="/logo.png" alt="logo" />
        </a>
        <div className="mr-10 font-bold">
          <ul className="text-gray-200 flex space-x-4">
            <li>
            <Link
                to="Home"
                smooth={true}
                offset={-200}
                duration={500}
                className={`hover:text-red-400 cursor-pointer ${
                  activeItem === 0 ? "text-red-400" : ""
                }`}
                onClick={() => handleItemClick(0)}
              >
                Home
              </Link>
            </li>

            <li>
            <Link
                to="About"
                smooth={true}
                offset={-300}
                duration={500}
                className={`hover:text-red-400 cursor-pointer ${
                  activeItem === 1 ? "text-red-400" : ""
                }`}
                onClick={() => handleItemClick(1)}
              >
                About
              </Link>
            </li>
            <li>
            <Link
                to="Skills"
                smooth={true}
                offset={-200}
                duration={500}
                className={`hover:text-red-400 cursor-pointer ${
                  activeItem === 2 ? "text-red-400" : ""
                }`}
                onClick={() => handleItemClick(2)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="Projects"
                smooth={true}
                offset={-200}
                duration={500}
                className={`hover:text-red-400 cursor-pointer ${
                  activeItem === 3 ? "text-red-400" : ""
                }`}
                onClick={() => handleItemClick(3)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="Contact"
                smooth={true}
                offset={-70}
                duration={500}
                className={`hover:text-red-400 cursor-pointer ${
                  activeItem === 4 ? "text-red-400" : ""
                }`}
                onClick={() => handleItemClick(4)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

/* changer <a> avec Link */