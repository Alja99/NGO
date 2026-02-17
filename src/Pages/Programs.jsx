import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Programs() {
  const [expandedProgram, setExpandedProgram] = useState(null);

  const programs = [
    {
      id: 1,
      title: 'Quality Education Initiative',
      category: 'Education',
      image: '/Image/blogpic1.jpeg',
      description: 'Empowering youth through comprehensive education programs',
      overview: 'Our education initiative focuses on providing quality learning opportunities to underprivileged communities. We work with schools to improve infrastructure, train teachers, and provide scholarships to deserving students.',
      objectives: [
        'Improve school enrollment rates in underserved areas',
        'Enhance teacher capacity and teaching methodologies',
        'Provide scholarships to talented but economically disadvantaged students',
        'Develop vocational and skill-based training programs'
      ],
      impact: {
        beneficiaries: '8,000+ students',
        institutions: '120+ schools',
        reach: '150+ villages'
      },
      duration: '2015 - Ongoing',
      budget: '$1.2M annually',
      activities: [
        'School infrastructure development and renovation',
        'Teacher training workshops and capacity building',
        'Scholarship distribution and student mentoring',
        'Curriculum development for skill training',
        'Parent engagement and community mobilization'
      ]
    },
    {
      id: 2,
      title: 'Healthcare & Wellness Program',
      category: 'Healthcare',
      image: '/Image/blogpic2.jpg',
      description: 'Providing accessible healthcare and promoting community health',
      overview: 'We provide comprehensive healthcare services including medical camps, health awareness programs, maternal health services, and nutrition support to remote and underserved communities.',
      objectives: [
        'Increase access to preventive and curative healthcare',
        'Promote health awareness and disease prevention',
        'Strengthen maternal and child health services',
        'Build community health worker capacity'
      ],
      impact: {
        beneficiaries: '25,000+ individuals',
        camps: '80+ medical camps annually',
        reach: '150+ villages'
      },
      duration: '2016 - Ongoing',
      budget: '$850K annually',
      activities: [
        'Monthly medical camps and health screening',
        'Health awareness campaigns and workshops',
        'Maternal and child health programs',
        'Nutrition support for vulnerable groups',
        'First aid and basic health training'
      ]
    },
    {
      id: 3,
      title: 'Livelihood & Entrepreneurship',
      category: 'Livelihood',
      image: '/Image/blogpic3.jpg',
      description: 'Creating sustainable income opportunities and economic independence',
      overview: 'We provide skills training, microfinance support, and market linkage assistance to help individuals and communities achieve economic independence through self-employment and entrepreneurship.',
      objectives: [
        'Develop marketable skills for income generation',
        'Support women entrepreneurs and microenterprises',
        'Facilitate access to microfinance and business mentoring',
        'Create market linkages for products and services'
      ],
      impact: {
        beneficiaries: '5,000+ individuals trained',
        businesses: '800+ businesses established',
        women: '3,000+ women entrepreneurs'
      },
      duration: '2017 - Ongoing',
      budget: '$950K annually',
      activities: [
        'Vocational and skills training programs',
        'Entrepreneurship development workshops',
        'Microfinance facilitation and loan disbursement',
        'Business plan development and mentoring',
        'Market linkage and e-commerce support'
      ]
    },
    {
      id: 4,
      title: 'Water & Sanitation Project',
      category: 'Infrastructure',
      image: '/Image/IMG-20260124-WA0002.jpg',
      description: 'Building essential water and sanitation infrastructure',
      overview: 'We construct and maintain water supply systems, sanitation facilities, and promote hygiene practices to improve public health and quality of life in rural communities.',
      objectives: [
        'Provide clean drinking water to all villages',
        'Build and maintain community sanitation facilities',
        'Promote hygiene practices and behavior change',
        'Ensure sustainable water resource management'
      ],
      impact: {
        beneficiaries: '35,000+ individuals',
        wells: '80+ water wells constructed',
        reach: '120+ villages'
      },
      duration: '2014 - Ongoing',
      budget: '$1.1M annually',
      activities: [
        'Community water supply system construction',
        'Sanitation facility development and maintenance',
        'Hygiene awareness and training programs',
        'Water quality monitoring',
        'Rainwater harvesting and watershed management'
      ]
    }
  ];

  const programStats = [
    { label: 'Active Programs', value: '4' },
    { label: 'Communities Served', value: '500+' },
    { label: 'Total Beneficiaries', value: '73,000+' },
    { label: 'Annual Budget', value: '$4.1M' }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Programs</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-slate-200 leading-relaxed">
            Comprehensive initiatives creating sustainable change across education, healthcare, livelihood, and infrastructure
          </p>
        </div>
      </section>

      {/* Program Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programStats.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <p className="text-gray-700 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Portfolio</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Click on any program to learn more about our work, impact, and how we're creating lasting change
            </p>
          </div>

          <div className="space-y-8">
            {programs.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition cursor-pointer"
                onClick={() => setExpandedProgram(expandedProgram === program.id ? null : program.id)}
              >
                {/* Program Header */}
                <div className="md:flex">
                  {/* Image Section */}
                  <div className="md:w-2/5 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-64 md:h-80 object-cover hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                        {program.category}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{program.title}</h3>
                    <p className="text-gray-700 text-lg mb-6">{program.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4 bg-slate-50 rounded">
                        <p className="text-sm text-gray-600 mb-1">Duration</p>
                        <p className="text-lg font-semibold text-gray-900">{program.duration}</p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded">
                        <p className="text-sm text-gray-600 mb-1">Annual Budget</p>
                        <p className="text-lg font-semibold text-gray-900">{program.budget}</p>
                      </div>
                    </div>

                    <div className="flex items-center text-blue-600 font-semibold hover:text-blue-700">
                      <span>{expandedProgram === program.id ? 'Show Less' : 'Learn More'}</span>
                      <svg className={`w-5 h-5 ml-2 transition-transform ${expandedProgram === program.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedProgram === program.id && (
                  <div className="border-t border-gray-200 px-8 md:px-10 py-10 bg-slate-50">
                    <div className="grid md:grid-cols-2 gap-12">
                      {/* Overview */}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Program Overview</h4>
                        <p className="text-gray-700 leading-relaxed mb-8">{program.overview}</p>

                        <h4 className="text-xl font-bold text-gray-900 mb-4">Key Objectives</h4>
                        <ul className="space-y-3">
                          {program.objectives.map((objective, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">✓</span>
                              <span className="text-gray-700">{objective}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Impact & Activities */}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Program Impact</h4>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          {Object.entries(program.impact).map(([key, value]) => (
                            <div key={key} className="p-4 bg-white rounded-lg border border-gray-200">
                              <p className="text-sm text-gray-600 capitalize mb-1">{key}</p>
                              <p className="text-lg font-bold text-blue-600">{value}</p>
                            </div>
                          ))}
                        </div>

                        <h4 className="text-xl font-bold text-gray-900 mb-4">Key Activities</h4>
                        <ul className="space-y-3">
                          {program.activities.map((activity, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0 mt-2"></span>
                              <span className="text-gray-700">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How You Can Help</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple ways to support our programs and create lasting impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Donate Now',
                description: 'Your financial contribution directly supports our programs and reaches communities in need.',
                icon: '💰'
              },
              {
                title: 'Volunteer',
                description: 'Share your skills and time with our team and communities. Join our volunteer network.',
                icon: '🤝'
              },
              {
                title: 'Partner With Us',
                description: 'Corporate partnerships and collaborations help us scale impact and reach more communities.',
                icon: '🏢'
              }
            ].map((way, index) => (
              <div key={index} className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition">
                <div className="text-5xl mb-4">{way.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{way.title}</h3>
                <p className="text-gray-700 mb-6">{way.description}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
                  Learn More <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-10 text-blue-100">
            Support our programs and help us create sustainable change in communities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="inline-block bg-white text-blue-600 font-bold px-10 py-4 rounded-lg hover:bg-gray-100 transition"
            >
              Donate Now
            </Link>
            <Link
              to="/impact"
              className="inline-block bg-transparent text-white font-bold px-10 py-4 rounded-lg border-2 border-white hover:bg-blue-800 transition"
            >
              View Our Impact
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Programs
