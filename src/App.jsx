import React, { useState, useEffect } from 'react'
import Home from './pages/Home/Home'
import AboutUs from './pages/About/AboutUs'
import Header from './components/Header/Header'

export default function App() {
  const [path, setPath] = useState(typeof window !== 'undefined' ? window.location.pathname : '/')

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  return (
    <>
      <Header />
      {path === '/' && <Home />}
      {path === '/about' && <AboutUs />}
    </>
  )
}