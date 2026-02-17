import React from 'react'

function Impact() {
  const impactStats = [
    {
      number: '4K+',
      label: 'Lives Transformed',
      icon: '👥',
      description: 'Students, families, and communities directly impacted'
    },
    {
      number: '20+',
      label: 'Programs Delivered',
      icon: '🎯',
      description: 'Education, healthcare, and development initiatives'
    },
    {
      number: '50+',
      label: 'Villages Reached',
      icon: '🌍',
      description: 'Communities across multiple regions'
    },
    {
      number: '95%',
      label: 'Success Rate',
      icon: '⭐',
      description: 'Program completion and satisfaction rate'
    }
  ];

  const impactAreas = [
    {
      title: 'Education',
      icon: '📚',
      description: 'Providing quality education and learning resources to underserved communities',
      metrics: ['50+ Students', '5+ Schools'],
      color: 'bg-blue-50'
    },
    {
      title: 'Healthcare',
      icon: '❤️',
      description: 'Delivering accessible medical services and health awareness programs',
      metrics: ['20+ Patients', '3+ Medical Camps', '2+ Communities'],
      color: 'bg-red-50'
    },
    {
      title: 'Livelihood',
      icon: '💼',
      description: 'Creating sustainable income opportunities through skills training',
      metrics: ['40+ Trained', '20+ Jobs Created', '5+ Entrepreneurs'],
      color: 'bg-green-50'
    },
    {
      title: 'Infrastructure',
      icon: '🏗️',
      description: 'Building essential infrastructure for community development',
      metrics: ['50+ Projects', '5+ Water Wells'],
      color: 'bg-purple-50'
    }
  ];

  const testimonials = [
    {
      quote: "This program changed my life. I got the skills to start my own business.",
      author: 'Mercy Kollie',
      role: 'Entrepreneur, Skill Training Graduate'
    },
    {
      quote: "My daughter now attends school thanks to their scholarship program.",
      author: 'Mamie Doe',
      role: 'Parent, Education Program'
    },
    {
      quote: "The medical camp saved my mother's life. We are forever grateful.",
      author: 'David Johnson',
      role: 'Patient, Healthcare Initiative'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Impact</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Transforming lives and communities through dedicated action and sustainable development.
          </p>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center p-8 rounded-xl bg-gray-50 hover:shadow-lg transition">
                <div className="text-6xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Areas of Impact</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our work spans multiple critical areas, creating comprehensive change
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className={`${area.color} p-8 rounded-2xl`}>
                <div className="text-5xl mb-4">{area.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-700 mb-6">{area.description}</p>
                <div className="space-y-2">
                  {area.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-gray-600 text-lg">Real lives changed through our programs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-600">
                <div className="text-4xl mb-4">💬</div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Be Part of the Change</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your support drives our mission forward. Together, we can transform more lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition">
              View Programs
            </button>
            <button className="bg-transparent text-white font-bold px-8 py-4 rounded-lg border-2 border-white hover:bg-blue-800 transition">
              Donate Now
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Impact
