import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './Header.css'
import Home from '../Home'
import Category from '../Category/Category'
import live_visual from '../../assets/live_visual.jpg'
import 'animate.css';
import { FiMenu } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import Typewriter from 'typewriter-effect';



function Header() {
    
    let [scrollNav, setScrollNav]=useState()
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(scrollY > 100){
        setScrollNav('sticky')
      }
      else{
        setScrollNav()
      }
    })
  })
    let [toggle, setToggle]=useState(false)
   let handleToggle = () => {
        setToggle(!toggle);
      };
  return (
    <>
  
    <section className='top bg-[white] justify-between lg:mx-0 md:mx-3 sm:mr-2'>
    <div className={scrollNav} >
<div className="container py-6 mx-auto justify-between items-center flex ">
  
    <div className="logo sm:mx-8 md:mx-0">
  <Link to="/">  <img  src="https://avada.com/wp-content/uploads/2021/07/avada-logo-svg.svg"  alt="" />
  </Link>
</div>

<nav className={toggle? 'navbar expanded' : 'navbar'}>
    
    <div className="nav  duration-500 flex  justify-between items-center" >
   
    <ul className=  ' gap-7 text-xl text-center lg:flex   links px-8 md:hidden sm:hidden '  >
        <li className='hover:text-[#65BD7D] hover:bg-[#F6F6F6]  rounded-md p-2'> <Link to="/cat/business"> Avada </Link></li>
        <li className='hover:text-[#65BD7D] hover:bg-[#F6F6F6] rounded-md p-2'> <Link to="/cat/entertainment"> Avada For </Link></li>
        <li className='hover:text-[#65BD7D] hover:bg-[#F6F6F6]  rounded-md p-2'> <Link to="/cat/general"> Hosting </Link></li>
        <li className='hover:text-[#65BD7D] hover:bg-[#F6F6F6]  rounded-md p-2'> <Link to="/cat/health"> Customization</Link></li>
        <li className='hover:text-[#65BD7D] hover:bg-[#F6F6F6]  rounded-md p-2'> <Link to="/cat/science"> Resources</Link></li>
    </ul>
 
    {/* </div> */}
   





<div className=" border-b bg-[#65BD7D] py-2 px-3 rounded-md buttum sm:hidden lg:block hidden ">
    <p className='  text-xl text-black '> My Avada </p>
</div>

   {/* <div class=" menu flex items-center gap-6"> 
               
                  
                  <button onClick={()=> setMenu(!menu)} className=' w-[50px] h-[50px]  lg:hidden flex px-0  gap-2 text-xl  text-black font-bold'> <i class="bi bi-list text-2xl text-black font-bold" ></i>  </button>
           
            </div>  */}
            <button className='toogle-icon text-2xl font-extrabold lg:hidden md:block mr-3 ' onClick={handleToggle}> 
            {toggle ? <ImCross />:<FiMenu />}
          
            </button>
            </div>
           
               
</nav>
</div>
</div>
    </section>

    <section className='News sm:mx-8 '>
<div className="container md:flex justify-between py-8   ">
    <div className='max-w[1240px] grid lg:grid-cols-2 md:grid-cols-1 sm:ml-5 md:block'></div>
   <div className="title ">

<h1>
    <Typewriter
  options={{
    strings: ['The Ultimate Creative Website Builder'],
    autoStart: true,
    loop: true,
  }}
/>
</h1> 
   <div className="content ">
    <p className=' py-8 display-block ' >Trusted by beginners, marketers & professionals; <span>Built with usability and performance in mind.</span></p>
   <button className='py-5 px-5 border-b bg-[#141414] text-[#fff] button'> Start Building  <i class="bi bi-arrow-right-short"></i></button>
   </div>
   </div>
   
    <div className="images my-8  sm:m-auto overflow-hidden mx-auto">
        <img className='md:w-[700px] h-[500px] sm:full hover:scale-105 duration-1000 sm:my-8 sm:mx-auto ' src="https://avada.com/wp-content/uploads/2021/07/home-hero-20@2x.jpg"  alt="" />
    </div>
</div>
   
    </section>

    <section className='Design py-14 '>
<div className="container  ">
    <div className="title">
        <h2 className=' text-center  py-2  animate__animated animate__fadeInRight duration-1000npm'>
        <Typewriter
  options={{
    strings: [' Design Anything, Build Everything'],
    autoStart:true,
    loop: true,
  }}
/>
           </h2>
    </div>
    <div className="subtitle">
        <p className='text-center '>
            Design and launch your website fast & no coding knowledge is required.</p>
    </div>
<div className="builder md:flex my-16 justify-between grid lg:grid-cols-2 md:grid-cols-1 ">
    <div className="builder-point  text-2xl leading-[4rem] sm:ml-5 md:ml-5 ">
        <h3 > <Link to=''> <i class="bi bi-clipboard-check-fill pr-2"></i> Live Visual Builder </Link></h3>
        <h3> <Link to=''> <i class="bi bi-window-sidebar pr-2"></i>  Layout Builder </Link></h3>
        <h3> <Link to=''> <i class="bi bi-archive-fill pr-2"></i> Header Builder </Link></h3>
        <h3> <Link to=''> <i class="bi bi-journal-album pr-2"></i> Mega Builder </Link></h3>
        <h3> <Link to=''> <i class="bi bi-archive-fill pr-2"></i> Footer Builder </Link></h3>
        <h3> <Link to=''> <i class="bi bi-ui-checks-grid pr-2"></i> Form Builder </Link></h3>
        <h3> <Link to=''> <i class="bi bi-grid-fill pr-2"></i> Off Canvas </Link></h3>
        <h3> <Link to=''> <i class="bi bi-check-square-fill pr-2"></i> Setup Wizard </Link></h3>
        <h3> <Link to=''> <i class="bi bi-border-width pr-2"></i> Performance Wizard </Link></h3>
        <h3></h3>
        </div>
<div className="live-visual overflow-hidden  ">
    <img src={live_visual} alt="" className='lg:w-[700px] h-[550px] md:w-[600px] md:justify-center ms-8 sm:w-[400px] sm:mx-9 sm:my-6  md:mx-0   duration-1000 hover:scale-95 '/>
    </div>
</div>
    </div>

    </section>
    <script>
        document.queryselector('#menuToogle' .)
    </script>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cat/:cid" element={<Category/>} />
       
     </Routes>
    </>
    
  )
}

export default Header
