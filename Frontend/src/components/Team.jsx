import img5 from "../assets/brahma.jpeg";

const team = [
  {
    img: img5,
    name: "Mr. Silbhadra Brahma",
    role: "CEO",
    bio: "Mr. Silbhadra Brahma is an accredited expert in Ecology and Biodiversity with extensive experience in the construction and erection of hydropower projects across the Himalayan region. His professional background spans business development, project coordination, and tourism-related initiatives, giving him a versatile skill set suited to both corporate and field environments. With hands-on operational experience in corporate management as well as hospitality ventures, he brings a practical, organised, and outcome-oriented approach to every project. Mr. Brahma has played an active role in supporting the growth of Golden Venture Pvt. Ltd., Sikkim Sanjeevani, and Himalayan Little Monk Homestay, contributing significantly to branding, communication strategies, administrative planning, and operational streamlining.",
  },
];

function Team() {
  const scrollLeft = () => {
    document.getElementById("teamScrollRow").scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    document.getElementById("teamScrollRow").scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="py-5 bg-light" id="team">
      <div className="container">
        <div className="text-center mb-5" data-reveal>
          <span className="section-label">Team</span>
          <h2 className="h1 fw-bold">Our Professional Team</h2>
          <p className="text-secondary mx-auto col-lg-8">
            Meet our dedicated professionals who bring expertise and commitment to every project.
          </p>
        </div>

        {/* ARROWS */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <button className="btn btn-outline-secondary" onClick={scrollLeft}>
            ←
          </button>
          <button className="btn btn-outline-secondary" onClick={scrollRight}>
            →
          </button>
        </div>

        {/* SCROLL CONTAINER */}
        <div className="d-flex justify-content-center">
          {team.map((member) => (
            <div key={member.name} style={{ minWidth: "400px", maxWidth: "500px" }}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={member.img}
                  alt={member.name}
                  className="card-img-top"
                  style={{ height: "250px", width: "100%", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h3 className="h5 fw-bold mb-1">{member.name}</h3>
                  <p className="small text-warning text-uppercase fw-semibold mb-3">{member.role}</p>
                  <p className="text-secondary mb-0">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;