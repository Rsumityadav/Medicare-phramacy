
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">WELCOME TO YADAVMEDICAL</p>

        <h1>
          Your Health,
          <br />
          Our Priority.
        </h1>

        <p className="hero-description">
          Discover healthcare essentials for your everyday needs.
          Shop conveniently and take care of yourself and your family.
        </p>

        <a href="#products" className="primary-button">
          Shop Products
        </a>
      </div>

      <div className="hero-image">
        <span className="medical-icon">✚</span>
        <h2>Care You Can Trust</h2>
        <p>Your health matters to us.</p>
      </div>
    </section>
  );
}

export default Hero;
