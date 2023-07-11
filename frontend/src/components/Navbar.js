import { Link } from "react-router-dom";
import "./Navbar.css";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
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
          {user && (
            <div className="loggout">
              <span>Welcome, {user.userName}</span>
              <span onClick={handleClick} className="loggout__btn btn">
                Log out
              </span>
            </div>
          )}
          {!user && (
            <div className="nav__loginAndSignup">
              <Link to="/login">Login</Link>
              <span>|</span>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
