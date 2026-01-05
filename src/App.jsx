import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import AboutUs from './pages/About/AboutUs'
import Header from './components/Header/Header'
import ContactUs from './pages/Contact/Contact'
import ConstructionService from './pages/Servcies/newConstruction'
import RenovationService from './pages/Servcies/renovation'
import UpgradationService from './pages/Servcies/upgradation'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services/new-construction" element={<ConstructionService />} />
        <Route path="/services/renovation" element={<RenovationService />} />
        <Route path="/services/upgradation" element={<UpgradationService />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  )
}