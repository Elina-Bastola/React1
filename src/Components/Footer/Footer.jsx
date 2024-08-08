import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="bg-[#141414] text-[#fff] mt-8 footer grid md:grid-cols-2 lg:grid-cols-1 rounded-md ">
        <div className="container py-20 flex justify-between ">
          <div className=" shadow-lg grid lg:grid-cols-4 md:grid-cols-2  md:mt-5  sm:grid-cols-1">
            <div className="footer-logo">
              <img
                src="https://avada.com/wp-content/uploads/2021/11/avada-logo-light-svg.svg"
                alt=""
              />
            </div>
            <div className="footer-service  ">
              <ul>
                <li>Help Center</li>
                <li>Avada Studio</li>
                <li>Prebuilt Websites</li>
                <li>Reviews</li>
                <li>Submit A Ticket</li>
              </ul>
            </div>
            <div className="footer-service ">
              <ul className="  ">
                <li>About Us</li>
                <li>Careers</li>
                <li>Support Policy</li>
                <li>Terms And Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="footer-form ">
              <h6>
                Sign up to our newsletter and get all of{" "}
                <span> the latest news and updates.</span>
              </h6>
             
              <form action="" className="py-6 ">
                <input
                  type="text"
                  placeholder="your email*"
                  className="py-4 footerform md:w-[280px] rounded-md px-3 outline-none text-black w-full "
                />
                <button className="py-2 bg-[#141414]] px-3 mt-2 bottom rounded-lg hover:bg-[#65BD7D] border-2 md:border-white md:text-white hover:border-[#65BD7D]  block xs:hidden">
                  Subscribe
                </button>
              </form>
              </div>
         
          </div>
        </div>
        {/* <div className="copyrights border-b-4 py-8 ">

</div> */}
      </footer>
    </>
  );
}

export default Footer;
