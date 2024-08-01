
import React, {  useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import Logo from '.././assets/Logo.png';

function Category() {
    let{cid}=useParams()
    let [data,setData]=useState([''])
    useEffect(()=>{
fetch(`https://newsapi.org/v2/top-headlines?category=${cid}&apiKey=f65a67959a694a7390d762df23098fa9`).then((a)=>a.json()).then((b)=>setData(b.articles))
    },[cid])
  return (
    <>
      <section className="container mx-auto ">
        <h2 className="text-2xl font-bold uppercase">Category {cid}</h2>
        <div className="md:flex gap-5 justify-between flex-wrap my-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:mx-6 md:mx-6 lg:mx-0">
          {data.map((a) => (
            <div
              key={a}
              className="md:w-[32%] my-5 flex-auto max-w[1240px]    justify-between "
            >
              <img
                src={a.urlToImage ? a.urlToImage : Logo}
                className="h-[220px] w-[100%] my-5 shadow-lg rounded-lg"
                alt=""
              />
              <h4 className="py-5 text-center ">{a.title}</h4>
              {/* <Link to={''}> Read More  </Link> */}
              <div className=" justify-between text-center ">
                {/* <Link to={a.url} target='_blank'>Read More  </Link> */}
                <Link
                  to={a.url}
                  target="_blank"
                  className="py-3 bg-[#000] text-lime-50 text-center px-3 rounded-md"
                >
                  {" "}
                  Read More{" "}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Category;
