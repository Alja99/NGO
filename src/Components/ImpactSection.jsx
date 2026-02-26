import React from 'react'
import { Link } from 'react-router-dom'

function ImpactSection() {
  const impacts = [
    {
      number: '4K+',
      label: 'Lives Transformed',
      icon: '👥'
    },
    {
      number: '20+',
      label: 'Programs Delivered',
      icon: '🎯'
    },
    {
      number: '50+',
      label: 'Villages Reached',
      icon: '🌍'
    },
    {
      number: '95%',
      label: 'Success Rate',
      icon: '⭐'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Making a real difference in communities worldwide
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impacts.map((impact, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition text-center border-b-4 border-teal-600 transform hover:scale-105">
              <div className="text-5xl mb-4">{impact.icon}</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-2">{impact.number}</div>
              <p className="text-gray-700 font-medium">{impact.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/impact"
            className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 text-white font-bold px-8 py-4 rounded-lg hover:shadow-lg transition transform hover:scale-105"
          >
            View Our Full Impact Story →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ImpactSection
