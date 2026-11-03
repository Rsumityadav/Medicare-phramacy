
function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <p className="about-label">ABOUT MEDICARE</p>

        <h2>Your Health Matters to Us</h2>

        <p className="about-description">
          Welcome to MediCare, your convenient destination
          for exploring everyday healthcare essentials.
          Our goal is to make browsing healthcare products
          simple and accessible.
        </p>

        <p className="about-description">
          We believe customers should be able to find
          product information easily and make informed
          choices about their healthcare needs.
        </p>

        <a href="#products" className="primary-button">
          Explore Our Products
        </a>
      </div>

      <div className="about-visual">
        <div className="about-symbol">✚</div>

        <h3>Care. Comfort. Convenience.</h3>

        <p>
          Everyday healthcare essentials in one place.
        </p>
      </div>
    </section>
  );
}

export default About;
