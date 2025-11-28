const strengths = [
  {
    title: "Skilled and Experienced Team",
    detail:
      "Skilled and experienced team familiar with Himalayan terrain and challenging construction environments.",
  },
  {
    title: "Quality and Sustainability",
    detail:
      "Commitment to quality, sustainability, and timely delivery in all our construction projects.",
  },
  {
    title: "Strong Local Network",
    detail:
      "Strong local network and government collaboration ensuring smooth project execution.",
  },
  {
    title: "Modern Technology",
    detail:
      "Use of modern technology and equipment in construction to ensure efficiency and quality.",
  },
];

function Strengths() {
  return (
    <section className="py-5 bg-light" id="strengths">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5" data-reveal>
            <span className="section-label fs-4 fw-bold">Why choose us</span>
            <h2 className="h1 fw-bold mb-3">Strengths that stay on site</h2>
            <p className="text-secondary">
              Beyond blueprints, we bring systems and culture that keep projects resilient—from the first survey to
              post-handover support.
            </p>
          </div>
          <div className="col-lg-7" data-reveal>
            <div className="row g-4">
              {strengths.map((item) => (
                <div className="col-md-6" key={item.title}>
                  <div className="card h-100 border-0 shadow strength-card">
                    <div className="card-body">
                      <h3 className="h5 fw-semibold mb-2">{item.title}</h3>
                      <p className="text-secondary mb-0">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Strengths;