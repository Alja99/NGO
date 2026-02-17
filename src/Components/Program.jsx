import React from 'react'

import { 
  FaGraduationCap, 
  FaHeartbeat, 
  FaHandsHelping, 
  FaWater 

} from "react-icons/fa";

function Program () {
  return (
    <div className="py-12 w-full">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">Our Programs</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden bg-[#F2F7FF] hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                   <div className="h-40 sm:h-48 flex items-center justify-center bg-green-50">
  <FaGraduationCap className="text-[#1A3263] text-4xl sm:text-6xl" />
</div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Education Initiative</h3>
              <p className="text-gray-600 text-sm">Providing quality education and skill development to underprivileged communities through scholarships and training programs.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#EAF2FF] rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                 <div className="h-40 sm:h-48 flex items-center justify-center bg-green-50">
  <FaHeartbeat className="text-[#1A3263] text-4xl sm:text-6xl" />
</div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">School Nutrition Support</h3>
              <p className="text-gray-600 text-sm">Delivering accessible healthcare services and medical awareness to remote and underserved communities.</p>
            </div>
          </div>

          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="h-40 sm:h-48 flex items-center justify-center bg-green-50">
  <FaHandsHelping className="text-[#1A3263] text-4xl sm:text-6xl" />
</div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Rural Girls Retention Program</h3>
              <p className="text-gray-600 text-sm">Supporting community development projects including infrastructure, livelihood, and environmental sustainability.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="h-40 sm:h-48 flex items-center justify-center bg-green-50">
  <FaWater className="text-[#1A3263] text-4xl sm:text-6xl" />
</div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Inclusion & Child Development Support</h3>
              <p className="text-gray-600 text-sm">Providing quality education and skill development to underprivileged communities through scholarships and training programs.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Program
