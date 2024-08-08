import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

function News(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?category=${props.cat}&apiKey=f65a67959a694a7390d762df23098fa9`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result.articles);
      } catch (error) {
        console.error("Fetch error: ", error);
      }
    };

    fetchData();
  }, [props.cat]);

  return (
    <>
      <section>
        <div className="container mx-auto py-8">
          <div className="flex border-b pb-5 justify-between my-5">
            <h4 className="font-bold text-2xl uppercase">{props.cat}</h4>
            {/* <Link to="/" className="py-2 bg-[#000] text-lime-50"> Read More </Link> */}
          </div>
          <div className="md:flex gap-5 justify-between grid sm:grid-cols-1 md:grid-cols-3 sm:mx-6 md:mx-0 ">
            {data.slice(5, 9).map((article) => (
              <div key={article.url} className="md:w-[32%]">
                <img
                  src={article.urlToImage ? article.urlToImage : Logo}
                  className="h-[220px] w-[100%] my-5 shadow-lg rounded-lg"
                  alt={article.title || "News Image"}
                />
                <p className="py-5 text-center text-[16px]">{article.title}</p>
                <div className="justify-between text-center">
                  <Link
                    to={article.url}
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
