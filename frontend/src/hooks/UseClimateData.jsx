import { useState, useEffect } from 'react'

function useClimateData() {
    const [climateData, setClimateData] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/climate-data')
            .then((response) => response.json())
            .then((data) => setClimateData(data))
            .catch((error) => console.error('Failed to load climate data', error))
    }, [])

    const dublin = climateData.find((city) => city.city === "Dublin")
    const fremont = climateData.find((city) => city.city === "Fremont")
    const livermore = climateData.find((city) => city.city === "Livermore")
    const pleasanton = climateData.find((city) => city.city === "Pleasanton")

    return {
        climateData,
        dublin,
        fremont,
        livermore,
        pleasanton
    }
}

export default useClimateData