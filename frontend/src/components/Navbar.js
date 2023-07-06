import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="nav__header">
      <div className="nav__container container">
        <Link to="/" className="home__logo">
          <i className="bx bxs-objects-horizontal-center"></i>
          <h1>
            <span className="stroke-text">We</span>Fitn
            <span className="stroke-text">e</span>ss
          </h1>
        </Link>
        <nav className="nav__links">
          {/* <div>
                <span></span>
                <button>Log out</button>
            </div> */}
          <div className="nav__loginAndSignup">
            <Link to="/login">Login</Link>
            <span>|</span>
            <Link to="/signup">Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
