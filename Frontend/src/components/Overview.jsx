import logoImage from "../assets/logo.jpg";

function Overview() {
  return (
    <section className="py-5 bg-white" id="overview">
      <div className="container" data-reveal>
        <div className="row g-4 align-items-center">
          <div className="col-lg-6" style={{
            backgroundImage: `url(${logoImage})`,
            backgroundSize: "300px 300px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            position: "relative",
            padding: "40px 20px"
          }}>
            <div style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              padding: "20px",
              borderRadius: "8px",
              position: "relative",
              zIndex: 1
            }}>
            <h2 className="h1 fw-bold mb-3">Building a stronger Himalaya</h2>
            <p className="lead text-secondary mb-4">
              Golden Venture Private Limited is a dynamic and rapidly growing construction and engineering company headquartered in Rumtek, Sikkim, India.
            </p>
            <p className="text-secondary mb-3">
              Driven by a commitment to excellence, innovation, and environmental responsibility, we specialize in terrain-adaptive engineering and complex construction projects in challenging geographies.
            </p>
            <p className="text-secondary mb-3">
              Our core expertise lies in hydropower civil construction, including intake structures, penstocks, turbine foundations, and powerhouse buildings.
            </p>
            <p className="text-secondary">
              With a growing portfolio of successful projects, we continue to shape resilient infrastructure for the Himalayan region.
            </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6">
                <div className="mini-feature card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <span className="badge bg-warning text-dark mb-2">Core Services</span>
                    <p className="fw-semibold mb-0">Hydropower & civil construction with specialized engineering.</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="mini-feature card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <span className="badge bg-warning text-dark mb-2">Specialised</span>
                    <p className="fw-semibold mb-0">Terrain-adaptive solutions for challenging geographies.</p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="mini-feature card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <span className="badge bg-warning text-dark mb-2">Promise</span>
                    <p className="fw-semibold mb-0">
                      End-to-end delivery: planning, execution, and lasting maintenance support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;