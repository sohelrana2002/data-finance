import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

function Navbar() {

  const [nav, setNav] = useState(false);
  const handleNav = () =>{
    setNav(!nav)
  }

  return (
    <div className=" text-white">
        <div className="flex items-center justify-between h-24 max-w-[1240px] px-4 m-auto">
          <div className="pl-[20px] sm:w-full text-[25px]">
            Data <span className=" text-[#1DBF73]">Finance</span>
          </div>
          <div>
            <ul className="hidden md:flex items-center pr-[20px] nlg:pr-0">
              <li className="mr-6 font-bold"><a href="#home">home</a></li>
              <li className="mr-6 font-bold"><a href="#service">company</a></li>
              <li className="mr-6 font-bold"><a href="#blogs">resources</a></li>
              <li className="mr-6 font-bold"><a href="#about us">about</a></li>
              <li className="font-bold"><a href="#contact">contact</a></li>
            </ul>
          </div>
          <div onClick={handleNav} className="cursor-pointer mr-[30px]  duration-700 block md:hidden fixed right-0">
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} /> }
            
          </div>
          <div  className={(nav) ? "fixed left-0 top-0 w-[70%] border-r h-[80%] border-r-gray-900 bg-[#5e5c5c] rounded-br-lg ease-in-out duration-500 md:hidden" : "fixed left-[-100%]"}>
              <h1 className=" mt-[37px] pl-[50px] text-2xl">Data <span className=" text-[#1DBF73]">Finance</span></h1>
            <ul className="pt-[30px]">
              <li className="p-4 pl-[50px] mx-4  border-b border-b-gray-800 font-bold"><a href="#home">home</a></li>
              <li className="p-4 pl-[50px] mx-4 border-b border-b-gray-800 font-bold"><a href="#service">company</a></li>
              <li className="p-4 pl-[50px] mx-4 border-b border-b-gray-800 font-bold"><a href="#blogs">resources</a></li>
              <li className="p-4 pl-[50px] mx-4 border-b border-b-gray-800 font-bold"><a href="#about us">about</a></li>
              <li className="p-4 pl-[50px] mx-4 border-b border-b-gray-800 font-bold"><a href="#contact">contact</a></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar