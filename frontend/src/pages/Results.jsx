import { useState, useEffect } from 'react';

function Results() {
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

    return (
        <main>

            <h1>Results and Analysis</h1>
            <div className="interactive-city-map">
                <div className="map-container">
                    <div className="map-overlay">
                        <h2>Interactive City Map</h2>
                        <p>Click each city marker to see detailed metric scores and overall tier classification.</p>
                    </div>
                    <iframe
                        src="district1_climate_map.html"
                        width="100%"
                        height="500px"
                        frameBorder="0"
                        title="District 1 Climate Action Map"
                    />
                </div>
            </div>

            <div className="performance-heatmap details">
                <div className="chart-header">
                    <h1>Performance Heatmap</h1>
                </div>
                <div className="analysis-content">
                    <div className="performance-text">
                        <p>
                            The heatmap below shows the performance of each District 1 city across the five metrics. The color coding indicates how well each city is performing in each metric, with green representing strong performance, yellow indicating moderate performance, and red signifying areas where improvement is needed. Scores range from 0 (lowest performing)
                            to 1 (highest performing) within this dataset.
                        </p>
                    </div>
                    <img src="charts/performance_heatmap.png" alt="Performance Heatmap of District 1 Cities" width="600" height="400" />
                    <p>
                        Pleasanton ranks as leading, driven by its strong performance in tree canopy coverage and heat pump adoption. Livermore and Dublin both rank moderate, with Livermore performing stronger on CAP quality and heat pump adoption while Dublin performs stronger on GHG progress. Fremont ranks lagging, with consistently low performance across all five metrics.
                        The performance heatmap reveals some interesting findings about District 1 cities. First, while Pleasanton leads overall, it is also the only city above the 6.0 MT per capita GHG benchmark, meaning that it could be lagging in other metrics not mentioned in this paper or its implementation has not been translated into emission reduction. Livermore has the highest CAP score and quality but ranks second to last on GHG reduction progress. Lastly, all four cities rank below their suggested EV infrastructure benchmarks.
                    </p>
                </div>
            </div>

            <div className="outcomes">
                <div className="chart-header">
                    <h1>Outcomes</h1>
                </div>
                <div>
                    <h3>GHG Emissions Analysis</h3>
                    <div className="chart-container">
                        <img src="charts/ghg_analysis.png" alt="GHG Emissions Analysis Chart" height="400" />
                        {climateData.length > 0 ? (
                            <p>
                                Dublin leads in progression, having achieved {dublin.progress_toward_target}% of its goal already,
                                while the expectation is {dublin.expected_progress}%, making it very likely the city will meet its goal soon.
                                Pleasanton ranks second at {pleasanton.progress_toward_target}%, Livermore follows at {livermore.progress_toward_target}%,
                                and Fremont ranks last at {fremont.progress_toward_target}%. Regarding the California statewide benchmark of 6.0 MT CO₂e per capita,
                                three of four cities currently fall below this threshold. Pleasanton is the only city that falls above it at {pleasanton.ghg_per_capita_current} MT CO₂e,
                                meaning that despite ranking first overall in the given metrics, there could be other confounding variables affecting Pleasanton's high emissions,
                                such as vehicle use or solar panel usage.
                            </p>
                        ) : (
                            <p>Loading GHG emissions analysis…</p>
                        )}
                    </div>
                </div>
            </div>
            
            <div className="implementation-progress details">
                <div className="chart-header">
                    <h1>Implementation Progress</h1>
                </div>
                <div>
                    <h3>Heat Pump Adoption Analysis</h3>
                    <div className="chart-container">
                        <img src="charts/heat_pump_adoption.png" alt="Heat Pump Adoption Analysis Chart"  height="400"/>
                        {climateData.length > 0 ? (
                            <p>
                                Livermore leads significantly at {livermore.heat_pump_per_cap} installations per 10,000 residents.
                                Dublin and Pleasanton follow with {dublin.heat_pump_per_cap}{" "}
                                installations and {pleasanton.heat_pump_per_cap} installations per
                                10,000 residents. While Fremont, with {fremont?.heat_pump_per_cap} installations per 10,000 residents, is
                                the only city that falls below the state average of 0.6
                                installations per 10,000 residents. Compared to other metrics, this
                                is a positive finding since most cities do have installations above
                                the state average. However, it should be noted that this only
                                contains data from installations that received incentives through
                                the TECH California program and may not reflect the total adoption
                                rate.
                            </p>
                        ) : (
                            <p>Loading heat pump adoption analysis…</p>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Results;