import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [climateData, setClimateData] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/climate-data')
      .then((response) => response.json())
      .then((data) => setClimateData(data))
  }, [])

  return (
    <div>
      {climateData.map((city) => (
        <div key={city.city}>
          <h2>{city.city}</h2>
          <p>Average Rank: {city.average_rank}</p>
          <p>Tier: {city.tier}</p>
        </div>
      ))
      }
    </div>
    /*<div>
      <Navbar />
      <main>
          <h1>
          Overview
        </h1>
      </main>
      <Footer />
    </div>*/
  )
}

export default App
