import { useState } from "react";
import heroImage from "../assets/mountain-road.jpg";
import bridgeImage from "../assets/cable-bridge.jpg";

const focusAreas = [
  {
    id: "roads",
    title: "Mountain Road Corridors",
    summary: "Designing cliff-hugging roads that stay open through every season.",
    detail:
      "Resilient alignments, terraced retaining walls, and responsive drainage keep lifeline roads open across North Sikkim.",
    image: heroImage,
    statLabel: "Kilometres reinforced",
    statValue: "180+",
  },
  {
    id: "buildings",
    title: "Climate-Smart Buildings",
    summary: "Raising public and residential hubs that shrug off seismic shocks.",
    detail:
      "Hybrid concrete-steel frames, geotechnical anchoring, and local craft finishes for schools, clinics, and high-altitude housing.",
    image: bridgeImage,
    statLabel: "Structures delivered",
    statValue: "65",
  },
  {
    id: "bridges",
    title: "Bridge Connectivity",
    summary: "Spanning valleys with modular steel and fast-set concrete systems.",
    detail:
      "Modular spans, micro-pile foundations, and accelerated launch sequences restore inter-district links within weeks.",
    image: bridgeImage,
    statLabel: "Bridges activated",
    statValue: "27",
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
          <span className="section-label">Focus Areas</span>
          <h2 className="h1 fw-bold">Where we create impact</h2>
          <p className="text-secondary mx-auto col-lg-8">
            Three pillars steer our delivery roadmap across the state—from remote mountain passes to fast-growing
            urban districts.
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