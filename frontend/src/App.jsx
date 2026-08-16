import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Results from './pages/Results'
import Overview from './pages/Overview'
import Recommendations from './pages/Recommendations'
import References from './pages/References'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [climateData, setClimateData] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/climate-data')
      .then((response) => response.json())
      .then((data) => setClimateData(data))
  }, [])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/results" element={<Results />} />
        <Route path="/references" element={<References />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
