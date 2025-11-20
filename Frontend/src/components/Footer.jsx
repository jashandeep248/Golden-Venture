function Footer() {
  return (
    <footer className="py-4 bg-dark text-white-50">
      <div className="container d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center gap-3">
        <div>
          <strong className="text-white">The Golden Venture Private Limited</strong>
          <p className="mb-0">GST No. 11AAECG5866H1ZN</p>
        </div>
        <p className="mb-0">© {new Date().getFullYear()} The Golden Venture. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;