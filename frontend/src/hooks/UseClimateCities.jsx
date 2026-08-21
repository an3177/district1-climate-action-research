import { useState, useEffect } from 'react'

function useClimateCities() {
    const [cities, setCities] = useState([])
    const apiBase = import.meta.env.VITE_API_URL || ''

    useEffect(() => {
        fetch(`${apiBase}/cities`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`)
                }
                return response.json()
            })
            .then((data) => setCities(data))
            .catch((error) => {
                console.error('Failed to load climate data', error)
                setCities([])
            })
    }, [apiBase])

    return {
        cities
    }
}

export default useClimateCities