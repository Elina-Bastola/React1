import React from "react";
import img1 from "../../assets/world_class_support.png";
import img2 from "../../assets/Document.png";
import img3 from "../../assets/Built.png";
import img4 from "../../assets/Update.jpg";

function Selling() {
  return (
    <>
      <section className="website-sell  my-24">
        <div className="container">
          <div className="website-sellheading text-center">
            <h2>
              955,340 Website Owners <br />
              Trust Avada{" "}
            </h2>
          </div>
          <div className="website-sellsubheading">
            <p className=" text-xl  text-center mb-20">
              The #1 selling Website Builder on Themeforest for 11+ years.
            </p>
          </div>
          <div className="website-builder  text-center justify-between gap-8 py-8 max-w[1300px] grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 sm:m-5 md:m-5 lg:m-0">
            <div className="selling shadow-lg  py-4 bg-[#65BD7D] rounded-md text-center overflow-hidden hover:scale-105 duration-1000 hover:opacity-90">
              <div className="selling-img overflow-hidden ">
                <img
                  src={img1}
                  alt=""
                  className=" w-[70px] h-[70px] mx-auto py-2 hover:scale-105 duration-1000 "
                />
              </div>

              <div className="sell-content ">
                <h3 className="text-2xl py-2"> World-Class Support</h3>

                <p className=" leading-6">
                  We build long-term professional relationships with our
                  customers that you can rely on & trust.
                </p>
              </div>
            </div>
            <div className="selling shadow-lg px-8 py-4 bg-[#65BD7D] rounded-md overflow-hidden hover:scale-105 duration-1000 hover:opacity-90">
              <div className="selling-img overflow-hidden">
                <img
                  src={img2}
                  alt=""
                  className=" w-[70px] h-[70px] mx-auto py-2 rounded-md shadow-sm hover:scale-105 duration-1000"
                />
              </div>

              <div className="sell-content ">
                <h3 className="text-2xl py-2">Documentation & Tutorials</h3>
                <p className=" leading-6">
                  Over 550 help files & 200 tutorial videos will make building
                  websites with Avada even easier.
                </p>
              </div>
            </div>
            <div className="selling shadow-lg px-8 py-4 bg-[#65BD7D] rounded-md overflow-hidden hover:scale-105 duration-1000 hover:opacity-90">
              <div className="selling-img overflow-hidden">
                <img
                  src={img3}
                  alt=""
                  className=" w-[70px] h-[70px] mx-auto py-2 rounded-md shadow-sm hover:scale-105 duration-1000"
                />
              </div>

              <div className="sell-content ">
                <h3 className="text-2xl py-2"> 100% Built In-House</h3>
                <p className=" leading-6">
                  Avada is not reliant on 3rd party tools to deliver a reliable
                  & stable website building experience.
                </p>
              </div>
            </div>
            <div className="selling shadow-lg px-8 py-4 bg-[#65BD7D] rounded-md overflow-hidden hover:scale-105 duration-1000 hover:opacity-90">
              <div className="selling-img overflow-hidden">
                <img
                  src={img4}
                  alt=""
                  className=" w-[70px] h-[70px] mx-auto py-2 rounded-md shadow-sm hover:scale-105 duration-1000 "
                />
              </div>

              <div className="sell-content">
                <h3 className="text-2xl py-2"> Free Lifetime Updates</h3>
                <p className=" leading-6">
                  Your website will receive free & regular updates, compatible
                  with industry standards & trends, for life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Selling;
