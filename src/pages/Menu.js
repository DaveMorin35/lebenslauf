import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const handleLogoClick = () => {
    navigate("/")
  }

  return (
    <>
      <nav className="bg-[#1F1F1F] flex justify-between items-center w-full p-4">
        <a href="#" className="h-10 w-10 invert ml-20" onClick={handleLogoClick}>
          <img src="/logo.png" alt="logo" />
        </a>
        <div className="mr-10 font-bold">
          <ul className="text-gray-200 flex space-x-4">
            <li>
              <a
                href="#"
                className={`hover:text-red-400 ${
                  activeItem === 0 ? "text-red-400" : ""
                }`}
                onClick={() => handleItemClick(0)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`hover:text-red-400 ${
                  activeItem === 1 ? "text-red-400" : ""
                }`}
                onClick={() => handleItemClick(1)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`hover:text-red-400 ${
                  activeItem === 2 ? "text-red-400" : ""
                }`}
                onClick={() => handleItemClick(2)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`hover:text-red-400 ${
                  activeItem === 3 ? "text-red-400" : ""
                }`}
                onClick={() => handleItemClick(3)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`hover:text-red-400 ${
                  activeItem === 4 ? "text-red-400" : ""
                }`}
                onClick={() => handleItemClick(4)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
