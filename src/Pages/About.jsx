import React from 'react'
import Navbar from '../Navbar'
import Works from '../Works'
import Footer from '../Footer'

function About() {
  return (
   <>
    <Navbar />
    <div className="featured-txt text-4xl font-bold text-center p-[4rem]">
      <p className='text-gray-500 text-[15px]'>(2021-2024)</p>
      <h2 className='text-[50px]' >Selected <br /> WORKS</h2>
    </div>
    <Works/>
    <Footer/>
    </>
  )
}

export default About