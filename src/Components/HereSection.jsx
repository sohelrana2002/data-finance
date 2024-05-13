import React from 'react'
import Typed from "typed.js"
import { useEffect, useRef } from "react"

const HereSection = () => {
    // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["BTB", "BTC", "SASS"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      loop: true,
      startDelay: 400,
      typeSpeed: 200,
      backSpeed: 100,
      backDelay: 100
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <div className="justify-center max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col">
            <p className=" text-[#1DBF73] uppercase font-bold p-2">grow with data analityics</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl uppercase font-bold md:py-6 py-3'>grow with data</h1>
            <p className='md:text-4xl sm:text-3xl text-md uppercase font-bold'>fast, flexiable finance for <span className='text-[#1DBF73]' ref={el}></span></p>
            <button type='button' className=' bg-[#1DBF73] px-5 py-2 text-[#000000] text-md md:w-[200px] w-[150px] mx-auto mt-6 font-bold rounded'>Get started</button>
            
      </div>
    </div>
  )
}

export default HereSection
