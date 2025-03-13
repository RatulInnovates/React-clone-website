import React from 'react'
import ScrollToTop from './ScrollToTop '

function Footer() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-[50px] font-bold m-3 md:text-7xl'>BEAUREGARD</h1>
        <p className='mb-3 font-semibold'>&copy; 2024 ALL RIGHTS RESERVED</p>
        <ScrollToTop/>
    </div>
  )
}

export default Footer