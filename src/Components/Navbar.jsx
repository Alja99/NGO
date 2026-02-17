import React from 'react'
import { Link } from 'react-router-dom'



function Navbar () {
   
  return (
    <>
      <nav className="sticky top-0 z-50 w-full px-8 py-4 bg-[#3a9aff] shadow-sm border-b h-25 border-gray-100">
        <div className="flex items-center justify-between">
          <div className=''>
            <Link className='rounded-lg' to="/">
              <img src="/Image/LOGO.jpg" alt="NGO Logo" className="w-24 rounded-lg md:h-22 object-contain" />
            </Link>
          </div>
          <div className="flex items-center gap-12 flex-1 justify-center">
            <Link className="text-bold text-gray-700 hover:text-blue-600 hover:underline transition-all duration-300 font-medium" to="/">Home</Link>
            <Link className="text-bold text-gray-700 hover:text-blue-600 hover:underline transition-all duration-300 font-medium" to="/about">About Us</Link>
            <Link className="text-bold text-gray-700 hover:text-blue-600 hover:underline transition-all duration-300 font-medium" to="/programs">Programs</Link>
            <Link className="text-bold text-gray-700 hover:text-blue-600 hover:underline transition-all duration-300 font-medium" to="/impact">Impact</Link>
            <a className="text-bold text-gray-700 hover:text-blue-600 hover:underline transition-all duration-300 font-medium" href="#contact">Contact</a>
          </div>
          <div>
            <Link to="/donate" className="bg-blue-600 text-white font-semibold px-10 py-4 rounded-full hover:bg-blue-700 transition-colors text-sm inline-block">Donate</Link>
          </div>
        </div>
      </nav>
    </>
  )  
}

export default Navbar