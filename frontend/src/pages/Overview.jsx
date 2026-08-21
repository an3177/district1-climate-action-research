import useClimateCities from '../hooks/UseClimateCities'

function Overview() {
    const { cities } = useClimateCities();

    const cityLookup = Object.fromEntries(
        cities.map((city) => [city.city.toLowerCase(), city])
    );

    const dublin = cityLookup.dublin || {};
    const fremont = cityLookup.fremont || {};
    const livermore = cityLookup.livermore || {};
    const pleasanton = cityLookup.pleasanton || {};

    if (!cities.length) {
        return <p>Loading climate data</p>;
    }

    return (
        <main>
            <div className="overview-content">
                <div className="overview-text">
                    <h1>Overview</h1>
                    <p> This dashboard reports how District 1 cities, including Pleasanton, Dublin, Livermore, and Fremont, are responding to climate change and which of these cities are leading and lagging in climate action. 
                    While climate change is a heavily explored topic on the state and national level, there is not much information on comparing climate action between District 1 cities. 
                    To answer this question, data for 5 metrics, GHG emissions, CAP score, heat pump adoption, EV infrastructure progress, and tree canopy coverage, across 3 categories, policy strength, implementation progress, and outcomes, were pulled from various datasets. 
                    Based on this data, a climate action index was formulated to compare rankings and cities across the metrics. This dashboard is intended as a public civic transparency resource for residents, policymakers, and District 1 staff.
                    </p>
                </div>
                <img src="images/District1map.png" alt="Map of Alameda County District 1" width="600" height="400"/>
            </div>

            <div className = "categories-metrics">
                <div className="overlap-card">
                    <img src="images/gov-pic copy.jpg" alt="Government Policy" width="400" height="300"/>
                    <div className="card">
                        <h2>Category 1: Policy Strength</h2>
                        <p>CAP Score</p>
                        <p>
                        This evaluates each city's Climate Action Plan (CAP) based on its quality and implementation. Cities are scored on a 1–5 rubric considering the presence of measurable targets, implementation tracking, and evidence of completed actions.
                        </p>
                    </div>
                </div>
                <div className="overlap-card">
                    <img src="images/airplane copy.jpg" alt="Implementation Progress Image" width="400" height="300"/>
                    <div className="card">
                        <h2>Category 2: Implementation Progress</h2>
                        <p>Heat Pump Adoption</p>
                        <p>EV Infrastructure Progress</p>
                        <p>Tree Canopy Coverage</p>
                        <p>This evaluates how effectively each city is putting climate action into practice using three metrics: heat pump adoption per 10,000 residents, EV infrastructure progress toward recommended 2030 goals (%), and tree canopy coverage (%). Together, these metrics measure investments in building electrification, transportation, and urban greening.</p>
                    </div>
                </div>

                <div className="overlap-card">
                    <img src="images/nature.jpg" alt="GHG Emissions Image" width="400" height="300"/>
                    <div className="card">
                        <h2>Category 3: Outcomes</h2>
                        <p>GHG Emissions</p>
                        <p>This evaluates each city's progress in reducing emissions by comparing its current reduction from its baseline to the expected progress needed to reach its 2030 Climate Action Plan goal. Cities are also compared against California's benchmark of 6.0 metric tons of CO₂e per capita.</p>
                    </div>
                </div>

                <div className="overlap-card">
                    <img src="images/blue copy.jpg" alt="Normalization Image" width="400" height="300"/>
                    <div className="card">
                        <h2>Normalization</h2>
                        <p>The metrics are normalized using methods appropriate to each dataset: GHG reduction and EV infrastructure are measured as progress toward each city's target, Climate Action Plan scores are normalized with the formula (score − 1) / 4, and tree canopy coverage and heat pump adoption are normalized relative to the other cities. The normalized scores are then ranked independently to produce the final comparisons. The cities are then categorized into "Leading," "Moderate," and "Lagging," based on their average rank.</p>
                    </div>
                </div>
            </div>

            <table className="results-table">
                <tbody>
                    <tr>
                        <td>Pleasanton</td>
                        <td>
                            <ul>
                                <li>
                                    Leads on tree canopy coverage ({pleasanton.tree_canopy_coverage_percent}%) and heat pump adoption ({pleasanton.heat_pump_per_cap} per capita).
                                </li>
                                <li>
                                    However, it is the only city currently above California's 6.0 MT per capita GHG benchmark at {pleasanton.ghg_per_capita_current.toFixed(2)} MT.
                                </li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>Livermore</td>
                        <td>
                            <ul>
                                <li>Highest CAP quality score ({livermore.cap_score}) and most comprehensive implementation tracking including a 2025 Progress Report.</li>
                                <li>GHG progress at {livermore.progress_toward_target}% trails expected trajectory of {livermore.expected_progress}% despite strong planning.</li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>Dublin</td>
                        <td>
                            <ul>
                                <li>Leads in GHG emission reduction progress towards the city's 2030 goal.</li>
                                <li>However, it ranks last on tree canopy at only {dublin.tree_canopy_coverage_percent}% and is also below the 15% context benchmark.</li>
                            </ul>  
                        </td>
                    </tr>

                    <tr>
                        <td>Fremont</td>
                        <td>
                            <ul>
                                <li>One of the few cities that contains current implementation and updated regularly.</li>
                                <li>GHG progress at {fremont.progress_toward_target}% is the most significant gap from expected trajectory of any District 1 city.</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
    )
}

export default Overview