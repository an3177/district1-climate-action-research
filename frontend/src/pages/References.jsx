const REFERENCES = [
  'Bedsworth, Louise, and Ellen Hanak. "Climate Policy at the Local Level: Insights from California." Global Environmental Change, ScienceDirect, June 2013, www.sciencedirect.com/science/article/abs/pii/S0959378013000344.',
  '"A Brief History of Climate Change Discoveries." UK Research and Innovation, www.discover.ukri.org/a-brief-history-of-climate-change-discoveries/index.html. Accessed 25 July 2026.',
  '"CAP Implementation Dashboard — Dublin." Rincon Consultants, cap.rinconconsultants.com/Dublin. Accessed June 2026.',
  '"CAP Implementation Dashboard — Livermore." Rincon Consultants, cap.rinconconsultants.com/Livermore. Accessed June 2026.',
  '"Climate Action Dashboard." City of Fremont, fremont.gov/government/citywide-initiatives/data-dashboards/climate-action. Accessed June 2026.',
  '"Climate Action Plan 2.0." City of Pleasanton, pleasantonca.gov/sustainability. Accessed June 2026.',
  '"Climate Action Plan 2030 and Beyond." City of Dublin, 2020, dublin.ca.gov/2635/Climate-Action-Plan. Accessed June 2026.',
  '"Climate Action Plan Progress Report 2025." City of Livermore, cityoflivermore.net/sustainability. Accessed June 2026.',
  '"Climate Action Resource Guide." CoolCalifornia, California Air Resources Board, coolcalifornia.arb.ca.gov/local-government/toolkit. Accessed 25 July 2026.',
  '"Climate Ready Fremont." City of Fremont, 2023, fremont.gov/about/sustainability/climate-action-plan. Accessed June 2026.',
  'CoolClimate Network, UC Berkeley. "ClimatePlans.org — Climate Action Planning Data for California Communities." ClimatePlans.org, climateplans.org. Accessed June 2026.',
  '"Dublin, CA Population — 2023 Stats and Trends." Neilsberg, www.neilsberg.com/insights/topic/dublin-ca-population/. Accessed 25 July 2026.',
  '"Fremont, California Population." World Population Review, worldpopulationreview.com/us-cities/california/fremont. Accessed 25 July 2026.',
  '"History of Climate Science Research." Center for Science Education, UCAR, scied.ucar.edu/learning-zone/how-climate-works/history-climate-science-research. Accessed 25 July 2026.',
  'Leahy, Ian. "Why We No Longer Recommend a 40 Percent Urban Tree Canopy Goal." American Forests, 12 Jan. 2017, www.americanforests.org/article/why-we-no-longer-recommend-a-40-percent-urban-tree-canopy-goal/.',
  '"Livermore Climate Action Plan 2022." City of Livermore, 2022, cityoflivermore.net/sustainability. Accessed June 2026.',
  '"Livermore, CA Population by Year — 2024 Update." Neilsberg, www.neilsberg.com/insights/livermore-ca-population-by-year/. Accessed 25 July 2026.',
  'Lundgren, Kim. "22 Standard Metrics That Drive Climate Action." KLA Perspectives, 30 Aug. 2021, www.kimlundgrenassociates.com/en-us/blog/standard-metrics.',
  '"Pleasanton, CA Population by Year — 2024 Update." Neilsberg, www.neilsberg.com/insights/pleasanton-ca-population-by-year/. Accessed 25 July 2026.',
  'Solomon, Matthew, et al. "California Landscape of Climate Finance." Climate Policy Initiative, 24 Jan. 2024, www.climatepolicyinitiative.org/publication/california-landscape-of-climate-finance/.',
  '"Tree Equity Score National Explorer." American Forests, www.treeequityscore.org/map. Accessed June 2026.',
  '"What Is Climate Change?" United Nations, www.un.org/en/climatechange/what-is-climate-change. Accessed 25 July 2026.',
]

const IMAGE_CREDITS = [
  'Alameda County District 1 Map. District Map, https://district1.alamedacountyca.gov/district-map/.',
  'A person using a gas pump. 19 Sept. 2022. https://unsplash.com/photos/a-person-using-a-gas-pump-Eq0gng4wGzE.',
  'Blue Painting. 10 Nov. 2025. Unsplash, https://unsplash.com/illustrations/abstract-blue-swirls-and-patterns-4jQ2AhZnoT0.',
  'Classical building with columns and triangular pediment. 15 May 2026. Unsplash, https://unsplash.com/illustrations/classical-building-with-columns-and-triangular-pediment-AC_goxVwKdE.',
  'Plenio, Johannes. Picture of fumes coming out of a factory. 27 June 2019. https://unsplash.com/photos/smoking-factory-during-daytime-5_9inhy4NSE.',
  'Ridley, Matt. White paper plane on white background. 18 May 2020. Unsplash, https://unsplash.com/photos/white-paper-plane-on-white-background-Lyl8RL7imrw.',
  "Sikkema, Kelly. UX Work: Woman's hands drawing a wireframe. 9 Feb. 2020. Unsplash, https://unsplash.com/photos/person-writing-on-white-paper-v9FQR4tbIq8.",
  'Spratt, Annie. Eucalyptus branch illustration on a neutral background. 11 May 2020. Unsplash, https://unsplash.com/illustrations/eucalyptus-branch-illustration-on-a-neutral-background-7-E5o8Uu1iI.',
]


function References() {
    return (
        <div className="references details">
            <h1>References</h1>
            <div>
                {REFERENCES.map((ref,i) => (
                    <p key={i}>{ref}</p>
                ))}
            </div>
            <div className="images">Images</div>
            <div>
                {IMAGE_CREDITS.map((credit,i) => (
                    <p key={i}>{credit}</p>
                )
            )}
            </div>

        </div>
    )
    
}

export default References;