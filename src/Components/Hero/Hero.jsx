import React from "react";
import Typewriter from 'typewriter-effect';

function Hero() {
  return (
    <>
      <section className="News sm:mx-8 ">
        <div className="container md:flex justify-between py-8   ">
          <div className="max-w[1240px] grid lg:grid-cols-2 md:grid-cols-1 sm:ml-5 md:block"></div>
          <div className="title ">
            <h1>
              <Typewriter
                options={{
                  strings: ["The Ultimate Creative Website Builder"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="content ">
              <p className=" py-8 display-block ">
                Trusted by beginners, marketers & professionals;{" "}
                <span>Built with usability and performance in mind.</span>
              </p>
              <button className="py-5 px-5 border-b bg-[#141414] text-[#fff] button">
                {" "}
                Start Building <i className="bi bi-arrow-right-short"></i>
              </button>
            </div>
          </div>

          <div className="images my-8  sm:m-auto overflow-hidden mx-auto">
            <img
              className="md:w-[700px] h-[500px] sm:full hover:scale-105 duration-1000 sm:my-8 sm:mx-auto "
              src="https://avada.com/wp-content/uploads/2021/07/home-hero-20@2x.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
