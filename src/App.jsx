import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import AboutUs from './pages/About/AboutUs'
import Header from './components/Header/Header'
import ContactUs from './pages/Contact/Contact'
import ConstructionService from './pages/Servcies/newConstruction'
import RenovationService from './pages/Servcies/renovation'
import UpgradationService from './pages/Servcies/upgradation'
import MaintenanceService from './pages/Servcies/maintenance'
import FacilitiesAssetManagement from './pages/Servcies/facilities'
import NRIPropertyManagement from './pages/Servcies/nriProperty'

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
        <Route path="/services/maintenance" element={<MaintenanceService />} />
        <Route path="/services/facilities" element={<FacilitiesAssetManagement />} />
        <Route path="/services/nri-property" element={<NRIPropertyManagement />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  )
}