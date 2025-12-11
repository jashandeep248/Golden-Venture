function Footer() {
  return (
    <footer className="py-5 bg-dark text-white-50">
      <div className="container d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center gap-4">
        <div className="flex-grow-1">
          <strong className="text-white d-block mb-2">The Golden Venture Private Limited</strong>
          <p className="mb-1 small">CIN: U51909GJ1995PTC025525 · Incorporation Year: 2011</p>
          <p className="mb-0 small">Registered Office: Himalayan Little Monk Home Stay, Sazong, Near IHM, Rumtek, East Sikkim – 737135</p>
        </div>
        <div className="text-lg-end mt-3 mt-lg-0">
          <p className="mb-0 small">© {new Date().getFullYear()} The Golden Venture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;