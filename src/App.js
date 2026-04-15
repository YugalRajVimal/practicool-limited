import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import ProductPage from './Components/ProductPage'
import AboutPage from './Components/AboutPage'
import ContactUsPage from './Components/ContactUsPage'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App