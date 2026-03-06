import React from 'react'
import SectionHeading from '../Components/SectionHeading'

function About () {
  return (
    <div className="w-full bg-gradient-to-b from-slate-50 via-blue-50 to-slate-50">
      {/* Hero Section */}
      <section className="w-full py-32 bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">Who We Are</h1>
          <p className="text-xl md:text-2xl max-w-3xl text-blue-50 leading-relaxed">
            Building stronger communities through meaningful partnerships and collaborative action.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-28 bg-white relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full -mr-32 -mt-32 opacity-40"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20 pb-16 border-b-2 border-gray-100">
            <div>
              <h3 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">Our Purpose</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                We are dedicated to fostering positive social change and improving quality of life in underserved communities. Our work focuses on creating pathways for growth, opportunity, and sustainable development.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By working closely with local communities and stakeholders, we identify challenges and develop solutions that create real, measurable impact for those we serve.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl p-1 h-80 shadow-xl">
              <div className="bg-gray-100 rounded-xl w-full h-full flex items-center justify-center text-gray-400">
                <img src="" alt="Mission" className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-indigo-400 to-blue-500 rounded-2xl p-1 h-80 shadow-xl order-2 md:order-1">
              <div className="bg-gray-100 rounded-xl w-full h-full flex items-center justify-center text-gray-400">
                <img src="" alt="Vision" className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">Our Approach</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                We believe in sustainable, long-term solutions that address root causes and empower communities to take ownership of their development.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through transparent operations, community engagement, and data-driven strategies, we work to create lasting change that benefits generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-28 bg-gradient-to-b from-slate-100 to-slate-50 relative overflow-hidden">
        <div className="absolute top-20 left-0 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <SectionHeading 
              title="Our Core Values" 
              subtitle="Guiding principles that define everything we do"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Community-Centered",
                description: "We place communities at the heart of everything we do, listening to their needs and working collaboratively for sustainable solutions.",
                icon: "👥",
                color: "from-blue-400 to-blue-600"
              },
              {
                title: "Integrity",
                description: "We operate with transparency, accountability, and ethical standards in all our operations and partnerships.",
                icon: "✓",
                color: "from-indigo-400 to-indigo-600"
              },
              {
                title: "Empowerment",
                description: "We believe in empowering individuals and communities to take charge of their own development and futures.",
                icon: "⚡",
                color: "from-cyan-400 to-blue-600"
              },
              {
                title: "Sustainability",
                description: "We focus on creating long-term, sustainable solutions that generate lasting impact for generations to come.",
                icon: "🌱",
                color: "from-green-400 to-emerald-600"
              },
              {
                title: "Inclusivity",
                description: "We celebrate diversity and ensure our programs are accessible and inclusive for all community members.",
                icon: "🤝",
                color: "from-purple-400 to-pink-600"
              },
              {
                title: "Impact-Driven",
                description: "Every initiative is guided by measurable outcomes and a commitment to creating meaningful, tangible change.",
                icon: "🎯",
                color: "from-orange-400 to-red-600"
              }
            ].map((value, index) => (
              <div key={index} className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`text-5xl mb-4 transform group-hover:scale-125 transition-transform duration-300`}>{value.icon}</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-28 bg-white relative">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full -mb-48 -mr-48 opacity-30"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <SectionHeading 
              title="What We Do" 
              subtitle="Our focus areas and impact initiatives"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:grid-cols-3">
            {[
              {
                title: "Education & Skill Development",
                items: [
                  "Scholarship programs for underprivileged students",
                  "Vocational training and capacity building",
                  "Digital literacy programs",
                  "Mentorship and career guidance"
                ],
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Community Health & Wellness",
                items: [
                  "Healthcare awareness campaigns",
                  "Mobile health clinics",
                  "Nutrition and health education",
                  "Mental health support services"
                ],
                color: "from-emerald-500 to-emerald-600"
              },
              {
                title: "Hope With Action",
                items: [
                  "We pair compassion with action, working to create real change in the lives of those we serve.",
                  "Our programs are designed to address immediate needs while also building long-term resilience and opportunity.",
                  "Women economic empowerment programs",
                  "Job creation initiatives"
                ],
                color: "from-purple-500 to-purple-600"
              }
              
            ].map((area, index) => (
              <div key={index} className={`bg-gradient-to-br ${area.color} rounded-xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                <h4 className="text-2xl font-bold mb-6">{area.title}</h4>
                <ul className="space-y-3">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-white font-bold mr-3 flex-shrink-0">✓</span>
                      <span className="text-blue-50 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-28 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">Our Impact</h2>
            <p className="text-xl text-blue-100">Making a difference in communities across regions</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Lives Impacted" },
              { number: "3+", label: "Projects Completed" },
              { number: "5+", label: "Community Partners" },
              { number: "1+", label: "Years of Service" }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                <div className="text-6xl font-bold mb-3 text-blue-50">{stat.number}</div>
                <p className="text-blue-100 text-lg font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Leadership */}
      <section className="py-28 bg-white relative">
        <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-100 rounded-full -ml-40 -mt-40 opacity-40"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <SectionHeading 
              title="Our Leadership" 
              subtitle="Dedicated professionals committed to social impact"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Founder & CEO", role: "Executive Leadership", initial: "FC" },
              { name: "Program Director", role: "Operations & Programs", initial: "PD" },
              { name: "Finance Manager", role: "Financial Management", initial: "FM" }
            ].map((member, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-full h-56 bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-5xl font-bold text-white shadow-inner">
                  {member.initial}
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-blue-600 font-semibold mb-4 text-lg">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">
                    Dedicated to creating sustainable impact and empowering communities through strategic initiatives.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 leading-tight">Join Our Mission</h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
           To keep vulnerable children in school and provide them with the resources they need to succeed, we rely on the support of compassionate individuals like you. Your contribution can make a real difference in the lives of these children and their communities.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold px-10 py-4 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg">
              Support a Child
            </button>
            <button className="border-2 border-white text-white font-bold px-10 py-4 rounded-xl hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105 text-lg">
              Get Involved
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
