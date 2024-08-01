import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

function News(props) {
  let [data, setData] = useState([""]);
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?category=${props.cat}&apiKey=f65a67959a694a7390d762df23098fa9`
    )
      .then((a) => a.json())
      .then((b) => setData(b.articles));
  }, []);
  return (
    <>
      <section>
        <div className="container mx-auto py-8 ">
          <div className="flex border-b pb-5 justify-between my-5 ">
            <h4 className="font-bold text-2xl uppercase ">{props.cat} </h4>
            {/* <Link to="/" className='py-2 bg-[#000] text-lime-50'> Read More  </Link> */}
          </div>
          <div className="md:flex gap-5 justify-between grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:mx-6 md:mx-0">
            {data.slice(5, 9).map((a) => (
              <div key={a} className="md:w-[32%] ">
                <img
                  src={a.urlToImage ? a.urlToImage : Logo}
                  className="h-[220px] w-[100%] my-5 shadow-lg rounded-lg "
                  alt=""
                />

                <h4 className="py-5 text-center">{a.title}</h4>
                {/* <Link to={''}> Read More  </Link>  */}
                {/* <Link to={a.url} target='_blank'>Read More  </Link>  */}
                <div className=" justify-between text-center  ">
                  <Link
                    to={a.url}
                    target="_blank"
                    className="py-3 bg-[#000] text-lime-50 text-center px-3 rounded-md"
                  >
                   
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default News;
