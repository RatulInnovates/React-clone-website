import React from 'react'
import Navbar from '../Navbar'
import PriceCard from '../PriceCard'
import Footer from '../Footer'

function Services() {
  return (
   <>
    <Navbar/>
    <div className='flex  justify-center items-center flex-col m-10'>
      <p className='font-semibold text-[#ffffff72] text-2xl'>Pricing</p>
      <h1 className='text-5xl font-bold'>MEMBERSHIP </h1>
      <h1 className='text-5xl font-bold'>PLANS </h1>
    </div>
    <div className='flex flex-col justify-center items-center md:flex-row'>
      <PriceCard/>
      <PriceCard/>
      <PriceCard/>
    </div>
    <Footer/>
   </>
  )
}

export default Services