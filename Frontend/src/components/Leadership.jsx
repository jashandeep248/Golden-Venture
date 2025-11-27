import img  from "../assets/ugenDorjeeBhutia.jpeg";
import img2 from "../assets/chuki.jpeg";
import img3 from "../assets/DichenOngmuBhutia.jpeg";
import img4 from "../assets/Tenzing.jpeg";
import img5 from "../assets/brahma.jpeg";

const leadership = [
  {
    img: img,
    name: "Mr. Ugen Dorje Bhutia",
    role: "Managing Director",
    bio: "An experienced and visionary leader, Mr. Ugen Dorje Bhutia leads the company with strategic insight and a deep understanding of the construction industry in the Himalayan region.",
  },
  {
    img: img2,
    name: "Ms. Chong Dolma Bhutia",
    role: "Director",
    bio: "With a strong background in project management and organizational leadership, Ms. Chong Dolma Bhutia plays a key role in the execution and delivery of company projects.",
  },
  {
    img: img3,
    name: "Ms. Dichen Angmo Bhutia",
    role: "Director",
    bio: "Ms. Dichen Angmo Bhutia brings in her expertise in planning, compliance, and resource coordination, ensuring that all projects adhere to the highest quality and safety standards.",
  },
  {
    img: img4,
    name: "Mr. Tenzin Lepcha",
    role: "Director",
    bio: "Mr. Tenzin Lepcha contributes significantly in field operations and project execution, particularly in challenging terrains, upholding the company's standard for timely and efficient completion.",
  },
  {
    img: img5,
    name: "Mr. Silbhadra Brahma",
    role: "CEO",
    bio: "Worked for construction and erection of two hydel power projects namely Kurhed 4.5 MW and Tulang 3.5 MW SHEP in Chamba Himachal Pradesh. And canal based Small Hydroelectric Power project of 5.0 MW on Madhopur Beas Link canal at Pathankot, Punjab.",
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
