import React from 'react'

function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-4xl md:text-7xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      <p className="text-xl text-gray-600">
        {subtitle}
      </p>
    </div>
  )
}

export default SectionHeading
