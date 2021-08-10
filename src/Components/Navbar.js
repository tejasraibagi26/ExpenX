import { Link } from "react-router-dom";

const Navbar = ({ navOpen, setNavOpen }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          ExpenX.
        </Link>
        <ul
          className={navOpen ? "nav-menu active" : "nav-menu"}
          id="nav-mobile-menu"
        >
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup">
              <div className="btn">
                <div className="btn-title">Sign Up</div>
              </div>
            </Link>
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
