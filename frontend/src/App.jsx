import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Results from './pages/Results'
import Overview from './pages/Overview'
import Recommendations from './pages/Recommendations'
import References from './pages/References'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/results" element={<Results />} />
        <Route path="/references" element={<References />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
