
function Navbar() {
  return (
    <nav className="navbar">
      {/* Website logo and name */}
      <a href="#home" className="logo">
        <div className="logo-img"><img src="/Dr.logo.png" alt="Medicare-logo" /></div>
        <span> YadavMedical </span>
      </a>

      {/* Navigation links */}
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#products">Medicines</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Shopping cart link */}
      <a href="#cart" className="cart-link">
        🛒 Cart
      </a>
    </nav>
  );
}

export default Navbar;
