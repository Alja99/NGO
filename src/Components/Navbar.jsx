import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 shadow-lg border-b border-blue-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" onClick={closeMenu}>
                <img src="/Image/LOGO.jpg" alt="NGO Logo" className="h-16 w-auto rounded-lg object-contain hover:scale-105 transition-transform duration-300" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
              <Link className="text-white font-semibold hover:text-blue-100 transition-all duration-300 relative group" to="/">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link className="text-white font-semibold hover:text-blue-100 transition-all duration-300 relative group" to="/about">
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link className="text-white font-semibold hover:text-blue-100 transition-all duration-300 relative group" to="/programs">
                Programs
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link className="text-white font-semibold hover:text-blue-100 transition-all duration-300 relative group" to="/impact">
                Impact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link className="text-white font-semibold hover:text-blue-100 transition-all duration-300 relative group" to="/contact">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link className="text-white font-semibold hover:text-blue-100 transition-all duration-300 relative group" to="/blog-dashboard">
                Dashboard
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            {/* Desktop Donate Button */}
            <div className="hidden md:block">
              <Link to="/donate" className="bg-white text-purple-600 font-bold px-8 py-2 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                Donate
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white p-2 rounded-md transition-all duration-300"
                aria-expanded="false"
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-gradient-to-b from-blue-600 via-purple-600 to-pink-500 border-t border-blue-400">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <Link
                to="/"
                onClick={closeMenu}
                className="text-white block px-4 py-3 rounded-md hover:bg-blue-700 transition-all duration-300 font-semibold"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={closeMenu}
                className="text-white block px-4 py-3 rounded-md hover:bg-blue-700 transition-all duration-300 font-semibold"
              >
                About Us
              </Link>
              <Link
                to="/programs"
                onClick={closeMenu}
                className="text-white block px-4 py-3 rounded-md hover:bg-blue-700 transition-all duration-300 font-semibold"
              >
                Programs
              </Link>
              <Link
                to="/impact"
                onClick={closeMenu}
                className="text-white block px-4 py-3 rounded-md hover:bg-blue-700 transition-all duration-300 font-semibold"
              >
                Impact
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="text-white block px-4 py-3 rounded-md hover:bg-blue-700 transition-all duration-300 font-semibold"
              >
                Contact
              </Link>
              <Link
                to="/blog-dashboard"
                onClick={closeMenu}
                className="text-white block px-4 py-3 rounded-md hover:bg-blue-700 transition-all duration-300 font-semibold"
              >
                Dashboard
              </Link>
              <div className="pt-2 border-t border-blue-400">
                <Link
                  to="/donate"
                  onClick={closeMenu}
                  className="text-purple-600 bg-white block text-center px-4 py-3 rounded-md font-bold hover:bg-blue-50 transition-all duration-300 mt-2"
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar