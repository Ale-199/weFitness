import { Link } from "react-router-dom";
import "./Navbar.css";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

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
          <div className={showMenu ? "small__nav show-nav" : "small__nav"}>
            {user && (
              <div className="loggout">
                <p>{user.userName.toUpperCase()}</p>
                <button onClick={handleClick} className="loggout__btn btn">
                  Log out
                </button>
              </div>
            )}
            {!user && (
              <div className="nav__loginAndSignup">
                <Link to="/login">Login</Link>
                <span>|</span>
                <Link to="/signup">Signup</Link>
              </div>
            )}
            <i
              className="bx bx-cross nav__close"
              onClick={() => setShowMenu(!showMenu)}
            ></i>
          </div>
        </nav>

        <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
          <i className="bx bx-menu"></i>
        </div>
      </div>
    </header>
  );
}
