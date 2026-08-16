import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <header className="nav-content">
        <div className="title-section">
            <h2>
                Alameda County District 1 Climate Action Research
            </h2>
            <h4>
                Which District 1 cities are leading or lagging in climate action?
            </h4>
        </div>
        <nav>
            <Link to="/">Overview</Link>
            <Link to="/results">Results and Analysis</Link>
            <Link to="/recommendations">Recommendations</Link>
            <Link to="/references">References</Link>
        </nav>
    </header>
  );
}

export default Navbar;