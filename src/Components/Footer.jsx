import React from 'react'
import {
    FaFacebook,
    FaInstagramSquare,
    FaLinkedin,
    FaYoutube
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className=' bg-black text-white py-[10rem] px-7 md:px-5 '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-7 md:gap-[80px]'>
            <div>
            <div className="sm:w-full text-[35px]">
            Data <span className=" text-[#1DBF73]">Finance</span>
          </div>
            <p className='my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, earum. Numquam mollitia dignissimos officia inventore</p>
            <div className='flex my-6'>
                <FaFacebook size={25} className='mr-6 hover:text-[#1DBF73] cursor-pointer rounded-full duration-300' />
                <FaInstagramSquare size={25} className='mx-5 hover:text-[#1DBF73] cursor-pointer rounded-full duration-300' />
                <FaLinkedin size={25} className='mx-5 hover:text-[#1DBF73] cursor-pointer rounded-full duration-300' />
                <FaYoutube size={25} className='mx-5 hover:text-[#1DBF73] cursor-pointer rounded-full duration-300' />
            </div>
            </div>
            <div className='col-span-2 grid grid-cols-2 md:grid-cols-4 gap-5'>
                <div className=' pt-2 '>
                    <h5 className='text-3xl pb-5 text-gray-400'>Solution</h5>
                    <ul>
                        <li>Aanalytics</li>
                        <li>marketing</li>
                        <li>commerece</li>
                        <li>insights</li>
                    </ul>
                </div>

                <div className=' pt-2 '>
                    <h5 className=' text-3xl pb-5 text-gray-400'>Solution</h5>
                    <ul>
                        <li>Aanalytics</li>
                        <li>marketing</li>
                        <li>commerece</li>
                        <li>insights</li>
                    </ul>
                </div>

                <div className=' pt-2 '>
                    <h5 className=' text-3xl pb-5 text-gray-400'>Solution</h5>
                    <ul>
                        <li>Aanalytics</li>
                        <li>marketing</li>
                        <li>commerece</li>
                        <li>insights</li>
                    </ul>
                </div>

                <div className=' pt-2 '>
                    <h5 className=' text-3xl pb-5 text-gray-400'>Solution</h5>
                    <ul>
                        <li>Aanalytics</li>
                        <li>marketing</li>
                        <li>commerece</li>
                        <li>insights</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer