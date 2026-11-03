
function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        {/* Brand information */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span className="footer-logo-icon">✚</span>
            MediCare
          </a>

          <p>
            Your Health, Our Priority.
            Explore everyday healthcare essentials
            with convenience.
          </p>
        </div>

        {/* Quick navigation */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#products">Our Products</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Contact information */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>📧 Email: support@medicare.example</p>
          <p>📞 Phone: +91 00000 00000</p>
          <p>📍 Location: Mumbai, India</p>
        </div>
      </div>

      {/* Copyright section */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} MediCare.
          All rights reserved.
        </p>
        <p>Made with 💚 for your healthcare shopping experience.</p>
      </div>
    </footer>
  );
}

export default Footer;
