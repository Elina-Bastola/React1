import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import "./Header.css";
import { useClickAway } from "react-use";

function Header() {
  let [scrollNav, setScrollNav] = useState();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 100) {
        setScrollNav("sticky");
      } else {
        setScrollNav();
      }
    });
  });
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setIsOpen(false));

  return (
    <>
      <section className="top bg-[white] justify-between lg:mx-0 md:mx-3 sm:mr-2">
        <div className={scrollNav}>
          <div className="container py-6 mx-auto justify-between items-center flex ">
            <div className="logo sm:mx-8 md:mx-0">
              <Link to="/">
                <img
                  src="https://avada.com/wp-content/uploads/2021/07/avada-logo-svg.svg"
                  alt=""
                />
              </Link>
            </div>
            <nav className="">
              <div className="nav  duration-500 flex gap-5 justify-between items-center">
                <ul className=" gap-5 text-xl text-center lg:flex  lg:block links px-8 hidden ">
                  <li className="hover:text-[#65BD7D] hover:bg-[#F6F6F6]  rounded-md p-2">
                    <Link to="/cat/business"> Business </Link>
                  </li>
                  <li className="hover:text-[#65BD7D] hover:bg-[#F6F6F6] rounded-md p-2">
                    <Link to="/cat/entertainment"> Entertainment </Link>
                  </li>
                  <li className="hover:text-[#65BD7D] hover:bg-[#F6F6F6]  rounded-md p-2">
                    <Link to="/cat/general"> General </Link>
                  </li>
                  <li className="hover:text-[#65BD7D] hover:bg-[#F6F6F6]  rounded-md p-2">
                    <Link to="/cat/health"> Health</Link>
                  </li>
                  <li className="hover:text-[#65BD7D] hover:bg-[#F6F6F6]  rounded-md p-2">
                    <Link to="/cat/science"> Science</Link>
                  </li>
                </ul>

                {/* </div> */}

                <div className=" border-b bg-[#65BD7D] py-2 px-3 rounded-md buttum sm:hidden lg:block hidden ">
                  <p className="  text-xl text-black "> My Avada </p>
                </div>
                <div ref={ref} className="lg:hidden ">
                  <Hamburger toggled={isOpen} size={20} toggle={setIsOpen} />
                  {isOpen && (
                    <div className="nav  duration-500 flex  justify-between items-center bg-black text-white">
                      <ul className=" gap-7 text-xl text-center   lg:block links px-8 hidden ">
                        <li className="hover:text-[#65BD7D] hover:bg-[#F6F6F6]  rounded-md p-2">
                          <Link to="/cat/business"> Avada </Link>
                        </li>
                        <li className="hover:text-[#65BD7D] hover:bg-[#F6F6F6] rounded-md p-2">
                          <Link to="/cat/entertainment"> Avada For </Link>
                        </li>
                        <li className="hover:text-[#65BD7D] hover:bg-[#F6F6F6]  rounded-md p-2">
                          <Link to="/cat/general"> Hosting </Link>
                        </li>
                        <li className="hover:text-[#65BD7D] hover:bg-[#F6F6F6]  rounded-md p-2">
                          <Link to="/cat/health"> Customization</Link>
                        </li>
                        <li className="hover:text-[#65BD7D] hover:bg-[#F6F6F6]  rounded-md p-2">
                          <Link to="/cat/science"> Resources</Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
