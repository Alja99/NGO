import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Main Footer Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-gray-900 mb-3">NGO Foundation</h3>
            <p className="text-gray-600 text-sm mb-6">
              Empowering communities through education, healthcare, and sustainable development. Together, we create lasting change.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#twitter" className="text-gray-500 hover:text-blue-600 transition text-xl">𝕏</a>
              <a href="#instagram" className="text-gray-500 hover:text-pink-600 transition text-xl">📷</a>
              <a href="#linkedin" className="text-gray-500 hover:text-blue-700 transition text-xl">in</a>
              <a href="#github" className="text-gray-500 hover:text-gray-900 transition text-xl">⚙</a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-blue-600 transition text-sm">About Us</Link></li>
              <li><a href="#programs" className="text-gray-600 hover:text-blue-600 transition text-sm">Programs</a></li>
              <li><a href="#impact" className="text-gray-600 hover:text-blue-600 transition text-sm">Impact</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#blog" className="text-gray-600 hover:text-blue-600 transition text-sm">Blog</a></li>
              <li><a href="#stories" className="text-gray-600 hover:text-blue-600 transition text-sm">Success Stories</a></li>
              <li><a href="#guides" className="text-gray-600 hover:text-blue-600 transition text-sm">Guides</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-blue-600 transition text-sm">FAQ</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-600 hover:text-blue-600 transition text-sm">About</a></li>
              <li><a href="#careers" className="text-gray-600 hover:text-blue-600 transition text-sm">Careers</a></li>
              <li><Link to="/donate" className="text-gray-600 hover:text-blue-600 transition text-sm">Donate</Link></li>
              <li><a href="#contact" className="text-gray-600 hover:text-blue-600 transition text-sm">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2026 NGO Foundation. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#privacy" className="text-gray-600 hover:text-blue-600 transition text-sm">Privacy Policy</a>
              <a href="#terms" className="text-gray-600 hover:text-blue-600 transition text-sm">Terms of Service</a>
              <a href="#cookies" className="text-gray-600 hover:text-blue-600 transition text-sm">Cookies Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
