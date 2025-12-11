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
            <h2 className="h1 fw-bold mb-4">Building a stronger Himalaya</h2>
            <p className="lead text-secondary mb-4 lh-base">
              The Golden Venture Private Limited is a dynamic and rapidly growing construction company based in Rumtek, Sikkim, India. Established in 2011, the company was founded with a clear vision—to contribute meaningfully to the infrastructural development of the Himalayan region through quality, innovation, and sustainable engineering practices.
            </p>
            <p className="text-secondary mb-4 lh-base">
              Over the years, Golden Venture Pvt. Ltd. has built a strong reputation as a trusted partner in the construction sector, delivering a diverse range of high-quality infrastructure services across Sikkim. From civil engineering works and road construction to structural development and allied infrastructural projects, the company has consistently demonstrated technical expertise, timely execution, and a commitment to excellence.
            </p>
            <p className="text-secondary mb-4 lh-base">
              Backed by a highly experienced and dedicated team, the organization combines practical knowledge with modern construction technologies to ensure efficient project delivery even in the challenging terrains of the Himalayas. The team's collective experience strengthens the company's capability to undertake complex projects while maintaining the highest standards of safety, quality, and environmental responsibility.
            </p>
            <p className="text-secondary mb-4 lh-base">
              At Golden Venture Pvt. Ltd., innovation and sustainability form the core of every project. With an emphasis on enhancing regional connectivity, supporting community development, and building resilient infrastructure, the company continues to play a vital role in shaping a stronger and more connected future for Sikkim.
            </p>
            <p className="text-secondary mb-0 lh-base">
              Driven by integrity, professionalism, and long-term vision, The Golden Venture Private Limited remains committed to contributing to the region’s growth and emerging as a leading name in infrastructure development across the Himalayan belt. 
            </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex flex-column gap-4">
              <div className="mini-feature card border-0 shadow-sm">
                <div className="card-body">
                  <span className="badge bg-warning text-dark mb-2">Core Services</span>
                  <p className="fw-semibold mb-0">Hydropower & civil construction with specialized engineering.</p>
                </div>
              </div>
              <div className="mini-feature card border-0 shadow-sm">
                <div className="card-body">
                  <span className="badge bg-warning text-dark mb-2">Specialised</span>
                  <p className="fw-semibold mb-0">Terrain-adaptive solutions for challenging geographies.</p>
                </div>
              </div>
              <div className="mini-feature card border-0 shadow-sm">
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
    </section>
  );
}

export default Overview;