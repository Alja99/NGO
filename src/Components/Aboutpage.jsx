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
              Join us in making a difference — volunteer, donate, or partner with our programs to create lasting change.<br/> Together, we can transform lives.
              <br /> Lupron (leuprolide) is a prescription gonadotropin-releasing hormone (GnRH) agonist used to treat advanced <br /> prostate cancer, endometriosis, uterine fibroids, and central precocious puberty by suppressing sex hormones. <br /> Administered via injection, it reduces testosterone in men and estrogen in women. Common side effects include hot flashes, headaches, joint pain, mood changes, and site reactions. 
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