import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import "./Header.css"; 
import { useClickAway } from "react-use";

function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setIsOpen(false));

  return (
    <header className="top bg-white fixed w-full z-10">
      <div className="container py-6 mx-auto flex justify-between items-center">
        <div className="logo">
          <Link to="/">
            <img
              src="https://avada.com/wp-content/uploads/2021/07/avada-logo-svg.svg"
              alt="Avada Logo"
            />
          </Link>
        </div>
        <nav className="flex items-center">
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-5 text-xl text-center px-8">
            <li className="hover:text-[#65BD7D] hover:bg-[#F6F6F6] rounded-md p-2">
              <Link to="/cat/business">Business</Link>
            </li>
            <li className="hover:text-[#65BD7D] hover:bg-[#F6F6F6] rounded-md p-2">
              <Link to="/cat/entertainment">Entertainment</Link>
            </li>
            <li className="hover:text-[#65BD7D] hover:bg-[#F6F6F6] rounded-md p-2">
              <Link to="/cat/general">General</Link>
            </li>
            <li className="hover:text-[#65BD7D] hover:bg-[#F6F6F6] rounded-md p-2">
              <Link to="/cat/health">Health</Link>
            </li>
            <li className="hover:text-[#65BD7D] hover:bg-[#F6F6F6] rounded-md p-2">
              <Link to="/cat/science">Science</Link>
            </li>
          </ul>

          {/* Desktop Button */}
          <div className="hidden lg:block border-b bg-[#65BD7D] py-2 px-3 rounded-md">
            <p className="text-xl text-black">My Avada</p>
          </div>

          {/* Mobile Hamburger Menu */}
          <div ref={ref} className="lg:hidden">
            <Hamburger toggled={isOpen} size={20} toggle={setIsOpen} />
            {isOpen && (
              <div className="absolute top-full right-0 mt-2 bg-black text-white rounded-md shadow-lg">
                <ul className="flex flex-col gap-5 text-xl text-center px-8 py-4">
                  <li className="hover:text-[#65BD7D] hover:bg-[#F6F6F6] rounded-md p-2">
                    <Link to="/cat/business">Business</Link>
                  </li>
                  <li className="hover:text-[#65BD7D] hover:bg-[#F6F6F6] rounded-md p-2">
                    <Link to="/cat/entertainment">Entertainment</Link>
                  </li>
                  <li className="hover:text-[#65BD7D] hover:bg-[#F6F6F6] rounded-md p-2">
                    <Link to="/cat/general">General</Link>
                  </li>
                  <li className="hover:text-[#65BD7D] hover:bg-[#F6F6F6] rounded-md p-2">
                    <Link to="/cat/health">Health</Link>
                  </li>
                  <li className="hover:text-[#65BD7D] hover:bg-[#F6F6F6] rounded-md p-2">
                    <Link to="/cat/science">Science</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
