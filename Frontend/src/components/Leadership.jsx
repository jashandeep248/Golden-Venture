const leadership = [
  {
    name: "Mr. Ugen Dorjee Bhutia",
    role: "Managing Director",
    bio: "Strategic oversight of multi-year connectivity programmes across North Sikkim.",
  },
  {
    name: "Ms. Chunki Doma Bhutia",
    role: "Director",
    bio: "Drives project controls, scheduling, and stakeholder coordination across districts.",
  },
  {
    name: "Ms. Dichen Ongmu Bhutia",
    role: "Director",
    bio: "Leads compliance, procurement, and quality systems for every site mobilisation.",
  },
  {
    name: "Mr. Tenzing Lepcha",
    role: "Director",
    bio: "On-ground command for bridge launches and landslide mitigation crews.",
  },
];

function Leadership() {
  return (
    <section className="py-5 bg-white" id="leadership">
      <div className="container">
        <div className="text-center mb-5" data-reveal>
          <span className="section-label">Leadership</span>
          <h2 className="h1 fw-bold">Guided by local knowledge</h2>
          <p className="text-secondary mx-auto col-lg-8">
            A multidisciplinary board that navigates terrain, community expectations, and regulatory checkpoints with
            confidence.
          </p>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          {leadership.map((leader) => (
            <div className="col" key={leader.name} data-reveal>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h3 className="h5 fw-bold mb-1">{leader.name}</h3>
                  <p className="small text-warning text-uppercase fw-semibold mb-3">{leader.role}</p>
                  <p className="text-secondary mb-0">{leader.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leadership;