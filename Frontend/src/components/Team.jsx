import brahmaImg from "../assets/brahma.jpeg";
import madanImg from "../assets/Madan Lal Sharma.jpeg";
import gulshanImg from "../assets/Gulshan Singh.jpeg";
import bhuwanImg from "../assets/Bhuwan Joshi.jpeg";

const team = [
  {
    img: brahmaImg,
    name: "Mr. Silbhadra Brahma",
    role: "CEO",
    bio: "Mr. Silbhadra Brahma is an accredited expert in Ecology and Biodiversity with extensive experience in the construction and erection of hydropower projects across the Himalayan region. His professional background spans business development, project coordination, and tourism-related initiatives, giving him a versatile skill set suited to both corporate and field environments. With hands-on operational experience in corporate management as well as hospitality ventures, he brings a practical, organised, and outcome-oriented approach to every project. Mr. Brahma has played an active role in supporting the growth of Golden Venture Pvt. Ltd., Sikkim Sanjeevani, and Himalayan Little Monk Homestay, contributing significantly to branding, communication strategies, administrative planning, and operational streamlining.",
  },
  {
    img: madanImg,
    name: "Sh. Madan Lal Sharma",
    role: "Engineer (Civil), Hydropower Projects",
    bio: "M. L. Sharma is a veteran Civil Engineer with over 30 years of experience in hydropower development. Formerly with the HPSEB Project Wing, he has led survey, investigation, tunnelling, and execution works for major government and private hydroelectric projects across Himachal Pradesh, Uttarakhand, Haryana, and beyond. His expertise spans water conductor systems, powerhouse construction, quality control, and transmission works, delivering end-to-end \"water-to-wire\" solutions in challenging terrains.",
  },
  {
    img: gulshanImg,
    name: "Gulshan Singh",
    role: "Senior Civil Foreman | Hydropower, Tunnelling & Infrastructure Projects",
    bio: "Highly experienced Civil Construction Professional with over 35+ years of hands-on experience in hydropower projects, tunnel construction, railways, metro, bridges, and barrages across India and Bhutan. Proven expertise in executing large-scale infrastructure projects in challenging Himalayan terrains, including tunnel-based hydroelectric projects and railway link works. Strong leadership in site supervision, workforce coordination, and execution of civil works to quality and safety standards. His Core Competencies are Tunnel Construction (Hydropower & Railways), Civil Works Supervision, Bridge & Barrage Construction, Workforce & Contractor Coordination, Hill Area & Himalayan Project Execution, Quality Control & On-site Safety.",
  },
  {
    img: bhuwanImg,
    name: "Mr. Bhuwan Joshi",
    role: "Hydro-Geologist",
    bio: "Bhuwan Joshi is a senior Geologist and Environmental Consultant with 25+ years of experience in the Himalayan region. He specializes in geological, geotechnical, groundwater, and environmental studies for government, public sector, and private infrastructure projects. He currently serves as Chief Geologist at Progressive Geological & Geotechnical Services (PG2S), Dehradun, a government-accredited consultancy firm. He is expert in Engineering & Structural Geology, Geotechnical Investigations, Groundwater & Hydro-geological Studies, Environmental Impact Assessment (EIA), Landslide & Disaster Risk Assessment.",
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
        <div className="overflow-auto" id="teamScrollRow" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          <div className="d-flex gap-4" style={{ width: "max-content" }}>
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
                    <p className="small text-warning text-uppercase fw-semibold mb-3" style={{ fontSize: '0.75rem', lineHeight: '1.2' }}>{member.role}</p>
                    <p className="text-secondary mb-0">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;