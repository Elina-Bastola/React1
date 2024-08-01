import React from "react";
import "./Testinomials.css";

function Testinomials() {
  return (
    <>
      <section className="testinomials ">
        {/* <div className=' flex-auto  text-center  pt-14 max-w[1300px] grid  md:grid-cols-1 sm:grid-cols-1  sm:mx-4 sm:px-4 sm:my-4'> */}
        <div>
          <div className=" lg:flex grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div className="md:w-[full] images sm:rounded-lg md:rounded-lg md:m-6 sm:m-6">
              <img
                src="https://avada.com/wp-content/uploads/2021/08/testimonial.jpg"
                alt=""
                className="w-full h-full  md:h[300px] shadow-lg  hover:opacity-90 hover:duration-1000"
              />
            </div>

            <div className="w-[full] h-[] bg-[#FFE979] rounded-sm shadow-lg sm:rounded-lg md:rounded-lg md:m-6 sm:m-6">
              <div className="testinomials-content  ">
                <p className="text-black text-3xl mx-16 my-16 sm:py-8 md:p-0">
                  “We choose to specialise in Avada because it is both
                  functional and practical, and our clients simply love it! It
                  has stood the test of time and continues to evolve – an
                  excellent solution for our talented design team, who continue
                  to push the boundaries.”
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
}

export default Testinomials;
