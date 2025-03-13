import React from 'react'

function Hero() {
  return (
    <>
    
    <div className="flex flex-col h-[25rem] w-full justify-center items-center text-white">
    <h2 className="text-xl text-gray-400 flex items-center gap-2">
        <span className="text-green-500 text-[30px] animate-pulse ">●</span> AVAILABLE FOR FREELANCE
    </h2>
    <h1 className="text-5xl font-extrabold text-center">
        MECHEALE <br /> BEAUREGARD
    </h1>
    </div>
    <div className="img-container h-[30rem] w-full p-4 ">
      <img src="https://wpriverthemes.com/bronx/wp-content/uploads/2024/05/hero-full.png" alt="" className='w-full h-full object-cover rounded-2xl' />
    </div>

    <div className="featured-txt text-4xl font-bold text-center p-[4rem]">
      <h2 >FEATURED <br /> WORK</h2>
    </div>

    

</>

  )
}

export default Hero