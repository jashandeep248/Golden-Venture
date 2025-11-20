import { useState } from "react";

const pillars = {
  mission: {
    title: "Mission",
    highlight: "Deliver resilient Himalayan infrastructure that keeps communities connected all year long.",
    description:
      "Every contract is a commitment to safe travel, inclusive development, and reliable public services for remote districts.",
    bullets: [
      "Blend modern engineering with indigenous know-how",
      "Train and employ local talent on every site",
      "Respect fragile ecosystems with regenerative practices",
    ],
  },
  vision: {
    title: "Vision",
    highlight: "Lead the eastern Himalayas in sustainable infrastructure that empowers future generations.",
    description:
      "We see smart transport corridors, resilient social infrastructure, and climate-positive operations across Sikkim.",
    bullets: [
      "Expand smart mobility corridors across the region",
      "Introduce circular material flows for construction",
      "Stand up digital twins for predictive maintenance",
    ],
  },
};

function Mission() {
  const [activePillar, setActivePillar] = useState("mission");

  const pillarContent = pillars[activePillar];

  return (
    <section className="py-5 bg-dark text-white" id="mission">
      <div className="container" data-reveal>
        <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between mb-4">
          <div>
            <span className="section-label text-warning">Purpose</span>
            <h2 className="h1 fw-bold">Our mission and vision</h2>
          </div>
          <div className="btn-group" role="group" aria-label="Mission Vision toggle">
            <button
              type="button"
              className={`btn btn-outline-light ${activePillar === "mission" ? "active" : ""}`}
              onClick={() => setActivePillar("mission")}
            >
              Mission
            </button>
            <button
              type="button"
              className={`btn btn-outline-light ${activePillar === "vision" ? "active" : ""}`}
              onClick={() => setActivePillar("vision")}
            >
              Vision
            </button>
          </div>
        </div>
        <div className="card bg-transparent border border-light-subtle">
          <div className="card-body p-4 p-lg-5">
            <h3 className="h4 text-warning fw-semibold mb-3">{pillarContent.title}</h3>
            <p className="lead text-white mb-4">{pillarContent.highlight}</p>
            <p className="text-white-50 mb-4">{pillarContent.description}</p>
            <ul className="list-unstyled d-grid gap-2 gap-lg-3">
              {pillarContent.bullets.map((item) => (
                <li key={item} className="d-flex gap-3 align-items-start">
                  <span className="badge rounded-pill bg-warning text-dark mt-1">{pillarContent.title.charAt(0)}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;