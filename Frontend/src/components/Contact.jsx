import { useState } from "react";
import bridgeImage from "../assets/cable-bridge.jpg";

function Contact() {
  const [contactData, setContactData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState({ submitted: false, error: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
    setFormStatus((prev) => ({ ...prev, error: "", submitted: false }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const trimmed = {
      name: contactData.name.trim(),
      email: contactData.email.trim(),
      message: contactData.message.trim(),
    };

    if (!trimmed.name || !trimmed.email.includes("@") || trimmed.message.length < 10) {
      setFormStatus({ submitted: false, error: "Please share your name, a valid email, and a short project brief." });
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trimmed),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus({ submitted: true, error: "" });
        setContactData({ name: "", email: "", message: "" });
      } else {
        setFormStatus({ submitted: false, error: result.error || "Failed to send message. Please try again." });
      }
    } catch (error) {
      setFormStatus({ submitted: false, error: "Network error. Please check your connection and try again." });
    }
  };

  return (
    <section className="py-5 position-relative contact-section" id="contact">
      <div
        className="contact-backdrop"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(255, 184, 3, 0.2), rgba(11, 32, 52, 0.85)), url(${bridgeImage})`,
        }}
      />
      <div className="container position-relative">
        <div className="row g-5 align-items-start">
          <div className="col-lg-5 text-white" data-reveal>
            <span className="section-label text-warning">Let's collaborate</span>
            <h2 className="h1 fw-bold mb-3">Bring us into your next build</h2>
            <p className="text-white-50">
              Share your project goals and site conditions—our response team will align the right experts and return a
              roadmap within two working days.
            </p>
            <ul className="list-unstyled mt-4 d-grid gap-3">
              <li className="d-flex gap-3">
                <span className="badge bg-warning text-dark">Phone</span>
                <span>70635 11351 / 76027 46333</span>
              </li>
              <li className="d-flex gap-3">
                <span className="badge bg-warning text-dark">Email</span>
                <span>goldenventures2011@gmail.com</span>
              </li>
              <li className="d-flex gap-3">
                <span className="badge bg-warning text-dark">Office</span>
                <span>Himalayan Little Monk Home Stay Building, Rumtek, East Sikkim 737135</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-7" data-reveal>
            <div className="card border-0 shadow-lg">
              <div className="card-body p-4 p-lg-5">
                <h3 className="h4 fw-bold mb-4">Project discovery form</h3>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <label htmlFor="contact-name" className="form-label fw-semibold">
                      Your name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      className="form-control"
                      placeholder="Enter your full name"
                      value={contactData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="contact-email" className="form-label fw-semibold">
                      Work email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="name@organisation.com"
                      value={contactData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="contact-message" className="form-label fw-semibold">
                      Project scope
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className="form-control"
                      rows={4}
                      placeholder="Tell us about your road, bridge, or building project"
                      value={contactData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  {formStatus.error ? (
                    <div className="alert alert-warning" role="alert">
                      {formStatus.error}
                    </div>
                  ) : null}
                  {formStatus.submitted ? (
                    <div className="alert alert-success" role="alert">
                      Thanks! Our project desk will follow up within two working days.
                    </div>
                  ) : null}
                  <div className="d-grid d-sm-flex gap-3">
                    <button type="submit" className="btn btn-warning text-dark fw-semibold px-4">
                      Send message
                    </button>
                    <a className="btn btn-outline-secondary" href="tel:7063511351">
                      Call our office
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;