import React from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Design from './Components/Design/Design'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Category from './Category/Category'
import Builder from './Components/Builder/Builder'
import Selling from './Components/Selling/Selling'
import Testinomials from './Components/Testinomials/Testinomials'

function App() {
  return (
    <>
    <Header />
    <Hero />
    <Design />
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cat/:cid" element= {<Category/>} />
       
     </Routes>
     <Builder />
     <Selling />
     {/* <Testinomials /> */}
    <Footer />
    </>
  )
}

export default App