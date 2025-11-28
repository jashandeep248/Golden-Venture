function Footer() {
  return (
    <footer className="py-4 bg-dark text-white-50">
      <div className="container d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center gap-3">
        <div>
          <strong className="text-white">Golden Venture Private Limited</strong>
          <p className="mb-0">CIN: U51909GJ1995PTC025525 · Incorporation Year: 2011</p>
          <p className="mb-0">Office Address: Himalayan Little Monk Home Stay, Sazong, Near IHM, Rumtek, East Sikkim – 737135</p>
        </div>
        <p className="mb-0">© {new Date().getFullYear()} The Golden Venture. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;