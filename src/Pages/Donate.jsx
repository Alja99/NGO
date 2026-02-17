import React, { useState } from 'react'

function Donate() {
  const [amount, setAmount] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donation:', { amount, ...formData });
    alert(`Thank you for your donation of $${amount}!`);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setAmount('');
  };

  const [view, setView] = useState('default') // 'default' | 'mobile' | 'bank'

  const mobileNumber = '+231 880 291 399'
  const bankDetails = {
    bank: 'Sample Bank',
    accountName: 'Rising Hope Global Network',
    accountNumber: '1234567890',
    swift: 'SBINL123'
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Make a Difference</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your generosity fuels our mission to transform communities. Every donation, no matter the size, creates lasting impact.
          </p>
        </div>
      </section>

      {/* Payment Method Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Bank Transfer Card */}
            <div className="md:w-1/2 bg-gradient-to-br from-blue-50 to-blue-100 p-12 rounded-2xl shadow-lg border-2 border-blue-200">
              <div className="text-6xl mb-6">🏦</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Bank Transfer</h3>
              <p className="text-gray-700 mb-8 text-lg">
                Securely donate via bank transfer or credit card. Fast, safe, and easy.
              </p>
              <button onClick={() => setView('bank')} className="bg-blue-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg">
                Give Now
              </button>
            </div>

            {/* Mobile Donation Card */}
            <div className="md:w-1/2 bg-gradient-to-br from-green-50 to-green-100 p-12 rounded-2xl shadow-lg border-2 border-green-200">
              <div className="text-6xl mb-6">📱</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Mobile Donation</h3>
              <p className="text-gray-700 mb-8 text-lg">
                Donate quickly using your mobile phone. Convenient and instant.
              </p>
              <button onClick={() => setView('mobile')} className="bg-green-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-green-700 transition-colors text-lg">
                Donate via Mobile
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Payment Detail Views */}
      {view !== 'default' && (
        <section className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
            <button onClick={() => setView('default')} className="text-sm text-gray-500 mb-4">← Back</button>
            {view === 'mobile' && (
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Mobile Money</h3>
                <p className="text-lg font-mono bg-gray-100 p-4 rounded">{mobileNumber}</p>
                <p className="text-sm text-gray-600 mt-3">Use this number to complete your mobile payment.</p>
              </div>
            )}
            {view === 'bank' && (
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Bank Transfer Details</h3>
                <div className="text-left space-y-2">
                  <div><strong>Bank:</strong> {bankDetails.bank}</div>
                  <div><strong>Account Name:</strong> {bankDetails.accountName}</div>
                  <div><strong>Account Number:</strong> <span className="font-mono">{bankDetails.accountNumber}</span></div>
                  <div><strong>SWIFT:</strong> {bankDetails.swift}</div>
                </div>
                <p className="text-sm text-gray-600 mt-3">Use these details to transfer funds from your bank.</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Donation Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Your Information</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Donation Amount *</label>
              <input
                type="number"
                name="amount"
                value={amount}
                onChange={handleAmountChange}
                required
                placeholder="$50"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                placeholder="Tell us why this cause matters to you..."
                rows="4"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>

            <button
              type="submit"
              disabled={!amount}
              className={`w-full py-4 rounded-lg font-bold text-lg transition-colors ${
                amount
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {amount ? `Donate $${amount}` : 'Enter an Amount to Donate'}
            </button>
          </form>

          <p className="text-center text-gray-600 text-sm mt-6">
            Your donation is secure and processed safely. We respect your privacy.
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Your Impact</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-4">$10</div>
              <p className="text-gray-700">Provides educational materials for 2 students</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-4">$50</div>
              <p className="text-gray-700">Funds healthcare services for 5 families</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-4">$250</div>
              <p className="text-gray-700">Establishes a learning center for a community</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Donate;
