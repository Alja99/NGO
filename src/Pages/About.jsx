import React from 'react'
import SectionHeading from '../Components/SectionHeading'

function About () {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Who We Are</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Building stronger communities through meaningful partnerships and collaborative action.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Purpose</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                We are dedicated to fostering positive social change and improving quality of life in underserved communities. Our work focuses on creating pathways for growth, opportunity, and sustainable development.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By working closely with local communities and stakeholders, we identify challenges and develop solutions that create real, measurable impact for those we serve.
              </p>
            </div>
            <div className="bg-blue-100 rounded-lg p-8 h-64 flex items-center justify-center">
              <img src="" alt="Mission" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-blue-100 rounded-lg p-8 h-64 flex items-center justify-center order-2 md:order-1">
              <img src="" alt="Vision" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Approach</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
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
                icon: "👥"
              },
              {
                title: "Integrity",
                description: "We operate with transparency, accountability, and ethical standards in all our operations and partnerships.",
                icon: "✓"
              },
              {
                title: "Empowerment",
                description: "We believe in empowering individuals and communities to take charge of their own development and futures.",
                icon: "⚡"
              },
              {
                title: "Sustainability",
                description: "We focus on creating long-term, sustainable solutions that generate lasting impact for generations to come.",
                icon: "🌱"
              },
              {
                title: "Inclusivity",
                description: "We celebrate diversity and ensure our programs are accessible and inclusive for all community members.",
                icon: "🤝"
              },
              {
                title: "Impact-Driven",
                description: "Every initiative is guided by measurable outcomes and a commitment to creating meaningful, tangible change.",
                icon: "🎯"
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <SectionHeading 
              title="What We Do" 
              subtitle="Our focus areas and impact initiatives"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Education & Skill Development",
                items: [
                  "Scholarship programs for underprivileged students",
                  "Vocational training and capacity building",
                  "Digital literacy programs",
                  "Mentorship and career guidance"
                ]
              },
              {
                title: "Community Health & Wellness",
                items: [
                  "Healthcare awareness campaigns",
                  "Mobile health clinics",
                  "Nutrition and health education",
                  "Mental health support services"
                ]
              },
              {
                title: "Hope With Action",
                items: [
                  "We pair compassion with action, working to create real change in the lives of those we serve.",
                  " Our programs are designed to address immediate needs while also building long-term resilience and opportunity.",
                  "Women economic empowerment programs",
                  "Job creation initiatives"
                ]
              }
              
            ].map((area, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-8 border-l-4 border-blue-600">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h4>
                <ul className="space-y-3">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-blue-100">Making a difference in communities across regions</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Lives Impacted" },
              { number: "3+", label: "Projects Completed" },
              { number: "5+", label: "Community Partners" },
              { number: "1+", label: "Years of Service" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-blue-100 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Leadership */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
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
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-full h-48 bg-blue-200 flex items-center justify-center text-4xl font-bold text-blue-600">
                  {member.initial}
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Dedicated to creating sustainable impact and empowering communities through strategic initiatives.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8">
           To keep vulnerable children in school and provide them with the resources they need to succeed, we rely on the support of compassionate individuals like you. Your contribution can make a real difference in the lives of these children and their communities.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-blue-700 transition-colors text-lg">
              Support a Child
            </button>
            <button className="border-2 border-blue-600 text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-blue-50 transition-colors text-lg">
              Get Involved
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
