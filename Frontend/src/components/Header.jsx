import heroImage from "../assets/mountain-road.jpg";
import logoImage from "../assets/logo.jpeg";

const impactStats = [
  { label: "Years in Sikkim", value: "14+" },
  { label: "Public Works Delivered", value: "120" },
  { label: "Himalayan Specialists", value: "80" },
];

function Header() {
  return (
    <header
      id="home"
      className="hero-section text-white"
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(8, 17, 30, 0.85), rgba(9, 41, 63, 0.55)), url(${heroImage})`,
      }}
    >
      <nav className="navbar navbar-expand-md navbar-dark bg-transparent">
        <div className="container">
          <a className="navbar-brand fw-semibold d-flex align-items-center gap-2" href="#home">
            <img src={logoImage} alt="The Golden Venture logo" className="navbar-logo" />
            
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto mb-2 mb-md-0 align-items-md-center gap-md-3">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#overview">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#focus-areas">Focus Areas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#leadership">Team</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-warning text-dark fw-semibold" href="#contact">Talk to us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container d-flex flex-column justify-content-center align-items-start hero-content">
        <span className="badge rounded-pill bg-warning text-dark mb-3 shadow-sm">
          Sikkim Infrastructure Experts
        </span>
        <h1 className="display-4 fw-bolder mb-4">
          Building sustainable ventures with integrity and innovation.
        </h1>
        <p className="lead text-white-50 mb-4 col-lg-7">
          From landslide-prone passes to high-altitude townships, we deliver reliable infrastructure that keeps
          communities connected and future-ready.
        </p>
        <div className="d-flex flex-wrap gap-3">
          <a className="btn btn-light btn-lg fw-semibold" href="#services">Explore our work</a>
          <a className="btn btn-outline-light btn-lg" href="#contact">Start a project</a>
        </div>
        <div className="row g-3 mt-5 w-100" data-reveal>
          {impactStats.map((stat) => (
            <div className="col-6 col-md-4" key={stat.label}>
              <div className="card glass-card text-white h-100">
                <div className="card-body">
                  <h3 className="display-6 fw-bold mb-1">{stat.value}</h3>
                  <p className="mb-0 text-white-50 small text-uppercase">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;