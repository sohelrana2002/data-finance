import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 px-7 md:px-5'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2'>
            <div className='lg:w-[95%] w-full pb-10'>
                <h1 className='md:text-3xl sm:text-2xl text-xl font-bold pb-6 pt-4 leading-8 md:leading-[50px]'>want tips and trics to optimize your DATA FINANCE?</h1>
                <p className=' text-lg sm:text-xl lg:text-xl'> <span className='text-[#1DBF73]'>sign up</span> to our newsletter and stay up to data</p>
            </div>
            <div className='my-4 '>
                <input type="text" placeholder='Enter Email' className='h-[55px] px-7 outline-none text-black sm:w-[70%] w-full rounded text-md' />
                <button type='button' className='h-[55px] bg-[#1DBF73] my-4 px-2 rounded sm:mx-2 sm:w-[25%] font-bold w-full'>Notify Now</button>
                <p className=' text-md md:text-xl'>we care bout the protection of your data</p>
                <a href="#" className=' text-md md:text-lg text-[#1DBF73]'>privacy policy</a>
            </div>
        </div>
    </div>
  )
}

export default Newsletter