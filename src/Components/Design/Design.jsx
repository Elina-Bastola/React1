import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import live_visual from "../../assets/live_visual.jpg";

function Design() {
  return (
    <>
      <section className="Design py-14 ">
        <div className="container  ">
          <div className="title">
            <h2 className=" text-center  py-2  animate__animated animate__fadeInRight duration-1000npm">
              <Typewriter
                options={{
                  strings: [" Design Anything, Build Everything"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
          </div>
          <div className="subtitle">
            <p className="text-center ">
              Design and launch your website fast & no coding knowledge is
              required.
            </p>
          </div>
          <div className="builder md:flex my-16 justify-between grid lg:grid-cols-2 md:grid-cols-1 ">
            <div className="builder-point  text-2xl leading-[4rem] sm:ml-5 md:ml-5 ">
              <h3>
                {" "}
                <Link to="">
                  {" "}
                  <i className="bi bi-clipboard-check-fill pr-2"></i> Live
                  Visual Builder{" "}
                </Link>
              </h3>
              <h3>
                {" "}
                <Link to="">
                  {" "}
                  <i className="bi bi-window-sidebar pr-2"></i> Layout Builder{" "}
                </Link>
              </h3>
              <h3>
                {" "}
                <Link to="">
                  {" "}
                  <i className="bi bi-archive-fill pr-2"></i> Header Builder{" "}
                </Link>
              </h3>
              <h3>
                {" "}
                <Link to="">
                  {" "}
                  <i className="bi bi-journal-album pr-2"></i> Mega Builder{" "}
                </Link>
              </h3>
              <h3>
                {" "}
                <Link to="">
                  {" "}
                  <i className="bi bi-archive-fill pr-2"></i> Footer Builder{" "}
                </Link>
              </h3>
              <h3>
                {" "}
                <Link to="">
                  {" "}
                  <i className="bi bi-ui-checks-grid pr-2"></i> Form Builder{" "}
                </Link>
              </h3>
              <h3>
                {" "}
                <Link to="">
                  {" "}
                  <i className="bi bi-grid-fill pr-2"></i> Off Canvas{" "}
                </Link>
              </h3>
              <h3>
                {" "}
                <Link to="">
                  {" "}
                  <i className="bi bi-check-square-fill pr-2"></i> Setup Wizard{" "}
                </Link>
              </h3>
              <h3>
                {" "}
                <Link to="">
                  {" "}
                  <i className="bi bi-border-width pr-2"></i> Performance Wizard{" "}
                </Link>
              </h3>
              <h3></h3>
            </div>
            <div className="live-visual overflow-hidden  ">
              <img
                src={live_visual}
                alt=""
                className="lg:w-[700px] h-[550px] md:w-[600px] md:justify-center ms-8 sm:w-[400px] sm:mx-9 sm:my-6  md:mx-0   duration-1000 hover:scale-95 "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Design;
