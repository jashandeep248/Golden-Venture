const services = [
  {
    id: "service-roads",
    title: "High-Altitude Infrastructure Development",
    blurb:
      "Route planning, grade optimisation, and slope stabilisation packages engineered for Himalayan weather extremes.",
    highlights: [
      "Integrated GIS surveying", "Retaining and avalanche mitigation", "Remote site logistics management",
    ],
  },
  {
    id: "service-buildings",
    title: "Civic & Institutional Buildings",
    blurb:
      "Earthquake-resilient facilities with passive design strategies that reduce maintenance footprint.",
    highlights: [
      "Seismic base isolation", "Rapid modular interiors", "Community-first amenities",
    ],
  },
  {
    id: "service-bridges",
    title: "Bridge & River Crossings",
    blurb:
      "Steel and RCC bridge systems delivered with accelerated launch methods and rigorous QA/QC routines.",
    highlights: [
      "Hydrological impact studies", "Pre-fabricated span assembly", "24/7 structural health monitoring",
    ],
  },
];

function Services() {
  return (
    <section className="py-5 bg-white" id="services">
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-lg-5" data-reveal>
            <span className="section-label fs-4 fw-bold">Services</span>
            <h2 className="h1 fw-bold mb-3">Full-scope delivery partners</h2>
            <p className="text-secondary">
              We take responsibility from terrain analysis through commissioning, blending agile project delivery with
              strict compliance and safety protocols.
            </p>
            <div className="card border-0 bg-dark text-white mt-4">
              <div className="card-body">
                <h3 className="h5 fw-semibold mb-2">Rapid mobilisation kits</h3>
                <p className="mb-0 text-white-50">
                  Prefabricated camps, supply chains, and machine pools prepped for remote mobilisation in under 72
                  hours.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-7" data-reveal>
            <div className="accordion" id="servicesAccordion">
              {services.map((service, index) => {
                const isFirst = index === 0;
                return (
                  <div className="accordion-item" key={service.id}>
                    <h2 className="accordion-header" id={`${service.id}-header`}>
                      <button
                        className={`accordion-button ${isFirst ? "" : "collapsed"}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${service.id}-collapse`}
                        aria-expanded={isFirst ? "true" : "false"}
                        aria-controls={`${service.id}-collapse`}
                      >
                        {service.title}
                      </button>
                    </h2>
                    <div
                      id={`${service.id}-collapse`}
                      className={`accordion-collapse collapse ${isFirst ? "show" : ""}`}
                      aria-labelledby={`${service.id}-header`}
                      data-bs-parent="#servicesAccordion"
                    >
                      <div className="accordion-body">
                        <p className="mb-3 text-secondary">{service.blurb}</p>
                        <ul className="list-unstyled mb-0 row row-cols-1 row-cols-sm-2 g-2">
                          {service.highlights.map((item) => (
                            <li key={item} className="d-flex align-items-center gap-2">
                              <span className="badge bg-warning text-dark">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;