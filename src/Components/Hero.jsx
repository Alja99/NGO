import React from 'react'
import { Link } from 'react-router-dom'
const heroPic = '/Image/Hero%20pic.jpg'

function Hero ()  {
  return (
    <div className="w-full min-h-[60vh] md:min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroPic})`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4">Every Child Deserves to Learn with Dignity.</h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8">Supporting rural children and girls in Liberia with education, nutrition, and protection.</p>
        <div className="flex items-center justify-center gap-4">
          <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition-colors border-4 text-sm">
            Support a Child
          </button>

          <Link
            to="/about"
            className="bg-white text-blue-600 font-semibold h-12 px-6 py-4 rounded-md hover:bg-gray-100 transition-colors text-sm"
          >
           Partner With Us
          </Link>
        </div>
      </div> 
    </div>
  )
}

export default Hero
