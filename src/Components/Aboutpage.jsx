import React from 'react'

function Aboutpage()  {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading - centered at top */}
        <h2 className="text-8xl font-extrabold mb-10 text-center">About Us</h2>
        
        {/* Image and Text - flex display */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Text - left on wide screens */}
          <div className="md:w-5/12">
            <p className="text-gray-700 mb-3 text-2xl">
              We build stronger communities through education, healthcare, and sustainable programs. Our work focuses on creating opportunities and long-term impact.
            </p>
            <p className="text-gray-700 mb-3  text-2xl">
             Rising Hope Global Network is a nonprofit organization founded in 2025 in Liberia to respond to urgent <br/> barriers facing school-going children, especially in rural communities. Many children attend classes hungry. Many parents lack the income to provide food, learning materials, basic health needs, and care. These pressures weaken attendance, learning outcomes, and child development.
Rising Hope uses education as the entry point for change. We combine direct support to learners with strong community partnership, and transparent storytelling through digital media to mobilize local and international support.
</p>
          </div>

          {/* Image - right on wide screens */}
          <div className="md:w-7/12">
            <img
              src="/Image/blogpic2.jpg"
              alt="Community program"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutpage