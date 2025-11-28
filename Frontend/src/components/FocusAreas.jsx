import { useState } from "react";
import heroImage from "../assets/mountain-road.jpg";
import bridgeImage from "../assets/cable-bridge.jpg";

const focusAreas = [
  {
    id: "roads",
    title: "Road Construction in North Sikkim",
    summary: "Development and upgradation of mountain roadways with landslide protection.",
    detail:
      "Development and upgradation of mountain roadways, landslide protection and slope stabilization, infrastructure projects in remote and high-altitude regions.",
    image: heroImage,
    statLabel: "Projects Completed",
    statValue: "25+",
  },
  {
    id: "buildings",
    title: "Building Construction in South and East Sikkim",
    summary: "Government and residential building projects with earthquake-resilient design.",
    detail:
      "Government and residential building projects, institutional and commercial structures, earthquake-resilient design and construction practices.",
    image: bridgeImage,
    statLabel: "Structures Built",
    statValue: "40+",
  },
  {
    id: "bridges",
    title: "Road and Bridge Construction Across Sikkim",
    summary: "Construction of steel and concrete bridges with multi-span systems.",
    detail:
      "Construction of steel and concrete bridges, multi-span and modular bridge systems, integrated road and bridge infrastructure development.",
    image: bridgeImage,
    statLabel: "Bridges Built",
    statValue: "15+",
  },
];

function FocusAreas() {
  const [activeFocus, setActiveFocus] = useState(focusAreas[0].id);

  const handleFocusChange = (id) => {
    setActiveFocus(id);
  };

  const activeFocusItem = focusAreas.find((item) => item.id === activeFocus) ?? focusAreas[0];

  return (
    <section className="py-5 bg-light" id="focus-areas">
      <div className="container">
        <div className="text-center mb-5" data-reveal>
          <span className="section-label fs-4 fw-bold">Core Areas of Work</span>
          <h2 className="h1 fw-bold">Our Specialized Services</h2>
          <p className="text-secondary mx-auto col-lg-8">
            Three core areas define our expertise across Sikkim—from North Sikkim road construction to comprehensive infrastructure development.
          </p>
        </div>
        <div className="row g-5 align-items-center">
          <div className="col-lg-5" data-reveal>
            <div className="list-group">
              {focusAreas.map((area) => (
                <button
                  type="button"
                  key={area.id}
                  className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center focus-tab ${
                    activeFocus === area.id ? "active" : ""
                  }`}
                  onClick={() => handleFocusChange(area.id)}
                >
                  <div>
                    <h3 className="h5 mb-1">{area.title}</h3>
                    <p className="small text-secondary mb-0">{area.summary}</p>
                  </div>
                  <span className="badge bg-warning text-dark">{area.statValue}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="col-lg-7" data-reveal>
            <div className="card border-0 shadow-lg overflow-hidden">
              <div
                className="focus-image"
                style={{ backgroundImage: `linear-gradient(rgba(8, 15, 25, 0.35), rgba(8, 15, 25, 0.35)), url(${activeFocusItem.image})` }}
              />
              <div className="card-body p-4 p-lg-5">
                <span className="badge bg-dark-subtle text-uppercase text-secondary-emphasis mb-3">
                  {activeFocusItem.statLabel}
                </span>
                <h3 className="h4 fw-bold mb-3">{activeFocusItem.title}</h3>
                <p className="mb-0 text-secondary">{activeFocusItem.detail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FocusAreas;