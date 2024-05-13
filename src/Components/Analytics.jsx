import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className=' bg-white w-full py-16 px-4'>
        <div className=' max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='md:w-[800px] w-full mx-auto my-4 object-fill' src={Laptop} alt="/" />
        <div className=' text-[#000000] flex items-center flex-col mx-auto md:items-start justify-center'>
            <p className=' text-[#1DBF73] font-bold py-4'>Data analytics DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-xl  pb-4 font-bold '>manage data anylytics centrally</h1>
            <p className='text-lg md:text-2xl mb-5 px-4 md:px-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sapiente, atque error perspiciatis debitis nesciunt, esse sed omnis fuga suscipit neque doloribus nostrum aliquam aspernatur dolore enim alias pariatur beatae.</p>
            <button type='button' className=' text-[#fff] px-5 py-2 bg-[#000000] text-md md:w-[200px] w-[150px] mt-6 font-bold rounded'>Get started</button>
        </div>
        </div>
    </div>
  )
}

export default Analytics