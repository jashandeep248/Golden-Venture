function Projects() {
  return (
    <section className="py-5 bg-light" id="projects">
      <div className="container">
        <div className="text-center mb-5" data-reveal>
          <span className="section-label">Past and Ongoing Projects</span>
          <h2 className="h1 fw-bold">Our Project Portfolio</h2>
          <p className="text-secondary mx-auto col-lg-8">
            Delivering excellence in infrastructure development across the Himalayan region.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-lg-5 text-center">
                <h3 className="h4 fw-bold mb-3">Hydro-electric Power Project 8 MW in North Sikkim</h3>
                <p className="text-secondary">
                  A significant infrastructure project contributing to the power generation capacity of North Sikkim, 
                  demonstrating our expertise in complex engineering solutions in challenging terrains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;