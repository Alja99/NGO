import React, { useState } from 'react'

const DASHBOARD_EMAIL = 'contact@risinghopeglobal.org'
const DASHBOARD_PASSWORD = 'global231'

function BlogDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [loginError, setLoginError] = useState('')

  const [posts, setPosts] = useState(() => {
    try {
      const stored = localStorage.getItem('blogPosts')
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })
  const [newPost, setNewPost] = useState({ title: '', image: '', content: '' })

  const handleLoginChange = (e) => {
    const { name, value } = e.target
    setLoginData(prev => ({ ...prev, [name]: value }))
    setLoginError('')
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if (loginData.email === DASHBOARD_EMAIL && loginData.password === DASHBOARD_PASSWORD) {
      setIsLoggedIn(true)
      setLoginData({ email: '', password: '' })
    } else {
      setLoginError('Invalid email or password')
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setLoginData({ email: '', password: '' })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewPost(prev => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setNewPost(prev => ({ ...prev, image: event.target.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAdd = (e) => {
    e.preventDefault()
    if (!newPost.title || !newPost.content) return
    setPosts(prev => {
      const updated = [...prev, { ...newPost, id: Date.now() }]
      try { localStorage.setItem('blogPosts', JSON.stringify(updated)) } catch {}
      return updated
    })
    setNewPost({ title: '', image: '', content: '' })
  }

  const handleDelete = (id) => {
    setPosts(prev => {
      const updated = prev.filter(post => post.id !== id)
      try { localStorage.setItem('blogPosts', JSON.stringify(updated)) } catch {}
      return updated
    })
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {!isLoggedIn ? (
        // Login Page
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Dashboard Login</h1>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="contact@risinghopeglobal.org"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter password"
                  required
                />
              </div>

              {loginError && (
                <div className="bg-red-50 border border-red-200 text-red-800 p-3 rounded-lg text-sm">
                  {loginError}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      ) : (
        // Dashboard Page
        <div className="max-w-4xl mx-auto py-16 px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Blog Dashboard</h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>

          <form onSubmit={handleAdd} className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Add New Blog Post</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={newPost.title}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter blog title"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Upload Image
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="imageUpload"
                  />
                  <label htmlFor="imageUpload" className="cursor-pointer">
                    <div className="text-4xl mb-2">🖼️</div>
                    <p className="text-gray-700 font-medium">
                      {newPost.image ? 'Image selected ✓' : 'Click to upload or drag image'}
                    </p>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Content
                </label>
                <textarea
                  name="content"
                  value={newPost.content}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your blog content here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Publish Post
              </button>
            </div>
          </form>

          {posts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Published Posts ({posts.length})</h2>
              <div className="space-y-8">
                {posts.map(post => (
                  <div key={post.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{post.title}</h3>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                    {post.image && (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full max-h-64 object-cover rounded-lg mb-4"
                      />
                    )}
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{post.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default BlogDashboard
