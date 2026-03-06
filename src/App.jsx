import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'
import './App.css'
import Hero from './Components/Hero'
import Program from './Components/Program'
import BlogSection from './Components/BlogSection'
import ImpactSection from './Components/ImpactSection'
import Aboutpage from './Components/Aboutpage'
import Gallery from './Components/Gallery'
import Donate from './Pages/Donate'
import Impact from './Pages/Impact'
import Programs from './Pages/Programs'
import Contact from './Pages/Contact'
import BlogDashboard from './Pages/BlogDashboard'
import BlogPost from './Components/BlogPost'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Program /> 
            <ImpactSection />
            <BlogSection />
            <Gallery />
          </>
        } />
        <Route path="/programs" element={<Programs />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog-dashboard" element={<BlogDashboard />} />
        <Route path="/blog/:postId" element={<BlogPost />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
