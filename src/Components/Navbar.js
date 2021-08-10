const Navbar = ({ navOpen, setNavOpen }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#" className="nav-logo">
          ExpenX.
        </a>
        <ul
          className={navOpen ? "nav-menu active" : "nav-menu"}
          id="nav-mobile-menu"
        >
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Sign In
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <div className="btn">
                <div className="btn-title">Sign Up</div>
              </div>
            </a>
          </li>
        </ul>
        <div
          className={navOpen ? "hamburger active" : "hamburger"}
          id="ham"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
