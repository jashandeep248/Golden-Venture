import img  from "../assets/ugenDorjeeBhutia.jpeg";
import img2 from "../assets/chuki.jpeg";
import img3 from "../assets/DichenOngmuBhutia.jpeg";
import img4 from "../assets/Tenzing.jpeg";
import img5 from "../assets/brahma.jpeg";
import img6 from "../assets/Nima.jpeg";

const leadership = [
  {
    img: img,
    name: "Mr. Ugen Dorjee Bhutia",
    role: "Managing Director",
    bio: "Strategic oversight of multi-year connectivity programmes across North Sikkim.",
  },
  {
    img: img2,
    name: "Ms. Chunki Doma Bhutia",
    role: "Director",
    bio: "Drives project controls, scheduling, and stakeholder coordination across districts.",
  },
  {
    img: img3,
    name: "Ms. Dichen Ongmu Bhutia",
    role: "Director",
    bio: "Leads compliance, procurement, and quality systems for every site mobilisation.",
  },
  {
    img: img4,
    name: "Mr. Tenzing Lepcha",
    role: "Director",
    bio: "On-ground command for bridge launches and landslide mitigation crews.",
  },
  {
    img: img5,
    name: "Mr. Silbhadra Brahma",
    role: "CEO",
    bio: "environmental consultant who leads EIA and biodiversity projects with QCI-NABET accreditation.",
  },
  
    
  {
    img: img6,
    name: "Mr.Nima Tshering Bhutia",
    role: "Accountant Assistant",
    bio: "financial record management and administrative support..",
  },
];

function Leadership() {
  const scrollLeft = () => {
    document.getElementById("scrollRow").scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    document.getElementById("scrollRow").scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="py-5 bg-white" id="leadership">
      <div className="container">

        <div className="text-center mb-5" data-reveal>
          <span className="section-label">Leadership</span>
          <h2 className="h1 fw-bold">Guided by local knowledge</h2>
          <p className="text-secondary mx-auto col-lg-8">
            A multidisciplinary board that navigates terrain, community expectations, and regulatory checkpoints with confidence.
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
        <div
          id="scrollRow"
          className="d-flex gap-4"
          style={{
            overflowX: "auto",
            scrollBehavior: "smooth",
            gap: "30px",               // bigger space between cards
           padding: "10px 20px",
          }}
        >
          {leadership.map((leader) => (
            <div key={leader.name} style={{ minWidth: "260px" }}>
              <div className="card h-100 shadow-sm border-0">

                <img
                  src={leader.img}
                  alt={leader.name}
                  className="card-img-top"
                  style={{ height: "90%", width: "97%", objectFit: "cover" }}
                />

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
