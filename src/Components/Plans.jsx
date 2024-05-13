import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Plans = () => {
  return (
    <div className=' bg-white w-full py-[10rem] px-7 md:px-5 text-black'>
        <div className=' max-w-[1240px] grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8'>
            <div className='pb-10 my-8 w-full shadow-xl flex flex-col rounded-lg p-4 hover:scale-105 duration-300'>
                <img className='w-[60px] mt-[-3rem] mx-auto' src={Single} alt="/" />
                <h2 className='pt-5 pb-3 text-[1.7rem] font-bold text-center'>Single user</h2>
                <h3 className=' font-bold text-[1.5rem] text-center'>$200</h3>
                <div className='mt-5 text-center'>
                  <p className=' text-lg mx-8 border-b-2 border-gray-200 py-1 my-2'>200 GB storage</p>
                  <p className=' text-lg mx-8 border-b-2 border-gray-200 py-1 my-2'>1 garanted user</p>
                  <p className=' text-lg mx-8 border-b-2 border-gray-200 py-1'>send up with 2 GB</p>
                </div>
                <button type='button' className=' text-[#fff] px-5 py-2 bg-[#1DBF73] text-md md:w-[200px] w-[150px] mx-auto mt-6 font-bold rounded'>Start trail</button>
            </div>

            <div className='pb-10 my-10 md:my-4 w-full shadow-xl flex flex-col rounded-lg p-4 hover:scale-105 duration-300'>
                <img className='w-[60px] mt-[-3rem] mx-auto' src={Double} alt="/" />
                <h2 className='pt-5 pb-3 text-[1.7rem] font-bold text-center'>Single user</h2>
                <h3 className=' font-bold text-[1.5rem] text-center'>$200</h3>
                <div className='mt-5 text-center'>
                  <p className=' text-lg mx-8 border-b-2 border-gray-200 py-1 my-2'>200 GB storage</p>
                  <p className=' text-lg mx-8 border-b-2 border-gray-200 py-1 my-2'>1 garanted user</p>
                  <p className=' text-lg mx-8 border-b-2 border-gray-200 py-1'>send up with 2 GB</p>
                </div>
                <button type='button' className=' text-[#fff] px-5 py-2 bg-[#000000] text-md md:w-[200px] w-[150px] mx-auto mt-6 font-bold rounded'>Start trail</button>
            </div>

            <div className='pb-10 my-8 w-full shadow-xl flex flex-col rounded-lg p-4 hover:scale-105 duration-300'>
                <img className='w-[60px] mt-[-3rem] mx-auto' src={Triple} alt="/" />
                <h2 className='pt-5 pb-3 text-[1.7rem] font-bold text-center'>Single user</h2>
                <h3 className=' font-bold text-[1.5rem] text-center'>$200</h3>
                <div className='mt-5 text-center'>
                  <p className=' text-lg mx-8 border-b-2 border-gray-200 py-1 my-2'>200 GB storage</p>
                  <p className=' text-lg mx-8 border-b-2 border-gray-200 py-1 my-2'>1 garanted user</p>
                  <p className=' text-lg mx-8 border-b-2 border-gray-200 py-1'>send up with 2 GB</p>
                </div>
                <button type='button' className=' text-[#fff] px-5 py-2 bg-[#1DBF73] text-md md:w-[200px] w-[150px] mx-auto mt-6 font-bold rounded'>Start trail</button>
            </div>


        </div>
    </div>
  )
}

export default Plans