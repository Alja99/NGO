import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // POST to backend API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!response.ok) throw new Error('Network response was not ok')

      console.log('Form submitted:', formData)
      setSubmitted(true)
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
        setSubmitted(false)
      }, 3000)
    } catch (err) {
      console.error('Error submitting form', err)
      alert('Sorry, something went wrong. Please try again later.')
    }
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            We'd love to hear from you. Reach out with any questions or inquiries.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">
                Liberia<br />
                West Africa
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-lg mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">
                <a href="contact@risinghopeglobal.org" className="hover:text-blue-600 transition-colors">
                  contact@risinghopeglobal.org
                </a>
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">
                <a href="tel:+231777165663" className="hover:text-blue-600 transition-colors">
                  +231 880291399 <br/> +231 773222618
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have a question or feedback? We're here to help. Fill out the form and we'll get back to you as soon as possible.
              </p>

              {submitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-800 font-semibold">✓ Message sent successfully!</p>
                  <p className="text-green-700 text-sm">We'll be in touch shortly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                    rows="6"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Side Info */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 5:00 PM</p>
                  <p><span className="font-semibold">Saturday:</span> 10:00 AM - 3:00 PM</p>
                  <p><span className="font-semibold">Sunday:</span> Closed</p>
                </div>
              </div>

              <div className="mb-8 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a href="https://www.facebook.com/share/183d5eLrv1/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                    f
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                    𝕏
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                    in
                  </a>
                  <a href="#" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow">
                    📷
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Response Time</h4>
                <p className="text-gray-600 text-sm">
                  We aim to respond to all inquiries within 48 hours. Thank you for your patience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Location</h2>
          <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen=""
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000000!2d-10.7!3d6.315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf4d812c5e1d4b89%3A0x1d1c!2sLiberia!5e0!3m2!1sen!2sus!4v1234567890"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
