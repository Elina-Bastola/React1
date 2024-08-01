import React from "react";
import img5 from "../../assets/prebuild.jpg";
import img6 from "../../assets/Design.jpg";
import img7 from "../../assets/Performance.jpg";
import img8 from "../../assets/Mobile_friendly.jpg";
import img9 from "../../assets/Dynamic_Content.jpg";
import img10 from "../../assets/Online_store.jpg";

function Builder() {
  return (
    <>
      <section>
        <div className="container">
          <div className="Builder-Heading text-center mt-20 ">
            <h1 className=" fs-1 ">All-In-One Website Builder</h1>
          </div>
          <div className="Builder-subheading text-center py-2 text-2xl">
            <p className="text-xl pb-10 ">
              Experience total control over your website creation process.
            </p>
          </div>

          <div className="  flex-auto  text-center justify-between gap-8 mt-14 max-w[1300px] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  sm:m-5 md:m-0 sm:p-5  ">
            <div className="Builders shadow-lg px-6 py-4 rounded-md ">
              <div className="Builder-img overflow-hidden">
                <img
                  src={img5}
                  alt=""
                  className="w-[70%] h-[180px] mx-auto pb-2 rounded-md hover:scale-105 duration-1000"
                />
              </div>
              <div className="Builder-content md:my-0 py-3 ">
                <h3 className="text-2xl ">103 Prebuilt Websites</h3>
                <p>
                  Prebuilt websites are designed to save you time. Import with a
                  few clicks & customize it to suit your requirements.
                </p>
              </div>
            </div>
            <div className="Builders shadow-lg px-6 py-4  rounded-md">
              <div className="Builder-img overflow-hidden">
                <img
                  src={img6}
                  alt=""
                  className="w-[70%] h-[180px] mx-auto pb-2 rounded-md hover:scale-105 duration-1000"
                />
              </div>
              <div className="Builder-content  py-3">
                <h3 className="text-2xl ">120+ Design Elements</h3>
                <p className="leading-6 text-center">
                  Packed with options, they are highly flexible for any design &
                  for any purpose. The only limit is your imagination.
                </p>
              </div>
            </div>
            <div className="Builders shadow-lg px-6 py-4  rounded-md">
              <div className="Builder-img overflow-hidden ">
                <img
                  src={img7}
                  alt=""
                  className="w-[70%] h-[180px] mx-auto pb-2 rounded-md hover:scale-105 duration-1000"
                />
              </div>
              <div className="Builder-content py-3">
                <h3 className="text-2xl ">Built For Performance</h3>
                <p className="leading-6 text-center">
                  Experience total control of your website’s features that will
                  empower you to make superior performance-related decisions.
                </p>
              </div>
            </div>
            <div className="Builders shadow-lg px-6 py-4  rounded-md mt-4">
              <div className="Builder-img overflow-hidden">
                <img
                  src={img8}
                  alt=""
                  className="w-[70%] h-[180px] mx-auto pb-2 rounded-md hover:scale-105 duration-1000"
                />
              </div>
              <div className="Builder-content py-3 ">
                <h3 className="text-2xl ">Dynamic Content</h3>
                <p className="leading-6 text-center">
                  Build unique pages & post layouts for your website by
                  harnessing the power of Avada’s dynamic content functionality.
                </p>
              </div>
            </div>
            <div className="Builders shadow-lg px-6 py-4  rounded-md mt-4">
              <div className="Builder-img overflow-hidden">
                <img
                  src={img9}
                  alt=""
                  className="w-[70%] h-[180px] mx-auto pb-2 rounded-md justify-between hover:scale-105 duration-1000"
                />
              </div>
              <div className="Builder-content py-3">
                <h3 className="text-2xl ">Dynamic Content</h3>
                <p className="leading-6 text-center">
                  Build unique pages & post layouts for your website by
                  harnessing the power of Avada’s dynamic content functionality.
                </p>
              </div>
            </div>

            <div className="Builders  px-6 py-4 shadow-lg   rounded-md mt-4">
              <div className="Builder-img overflow-hidden">
                <img
                  src={img10}
                  alt=""
                  className="w-[70%] h-[180px] mx-auto pb-2 rounded-md hover:scale-105 duration-1000"
                />
              </div>
              <div className="Builder-content py-3">
                <h3 className="text-2xl">Online Store Builder</h3>
                <p className="text-center">
                  Avada is integrated with WooCommerce, allowing you to build
                  successful online stores to sell anything online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Builder;
