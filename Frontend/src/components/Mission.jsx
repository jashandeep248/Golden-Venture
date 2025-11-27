import { useState } from "react";

const pillars = {
  mission: {
    title: "Mission",
    highlight: "To deliver high-quality construction solutions tailored to the geographic and environmental uniqueness of Sikkim.",
    description:
      "Every contract is a commitment to safe travel, inclusive development, and reliable public services for remote districts.",
    bullets: [
      "To deliver high-quality construction solutions tailored to the geographic and environmental uniqueness of Sikkim.",
      "To ensure timely project completion with utmost safety, durability, and environmental responsibility.",
      "To foster local employment and skill development through all our operations.",
    ],
  },
  vision: {
    title: "Vision",
    highlight: "To be a trusted leader in sustainable infrastructure development across the Himalayan region, empowering communities through connectivity and construction excellence.",
    description:
      "We envision a future where our infrastructure projects serve as pillars of community development and environmental stewardship.",
    bullets: [
      "Lead sustainable infrastructure development across the Himalayan region",
      "Empower communities through enhanced connectivity",
      "Maintain construction excellence in all our endeavors",
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
                  <span className="text-light">{item}</span>
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