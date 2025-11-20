function Overview() {
  return (
    <section className="py-5 bg-white" id="overview">
      <div className="container" data-reveal>
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <h2 className="h1 fw-bold mb-3">Building a stronger Himalaya</h2>
            <p className="lead text-secondary">
              The Golden Venture Private Limited is a Rumtek-based construction partner trusted by government and
              community leaders alike. We combine modern engineering with local insight to deliver dependable public
              works across Sikkim's toughest terrain.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6">
                <div className="mini-feature card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <span className="badge bg-warning text-dark mb-2">Core Services</span>
                    <p className="fw-semibold mb-0">Road & bridge infrastructure with slope stabilisation.</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="mini-feature card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <span className="badge bg-warning text-dark mb-2">Specialised</span>
                    <p className="fw-semibold mb-0">Seismic-safe buildings tailored for public use.</p>
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