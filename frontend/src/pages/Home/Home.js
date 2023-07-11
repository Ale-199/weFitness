import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  return (
    <div className="home__background">
      <div className="container home__container">
        <h1>Let's record your fitness Today!</h1>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          laboriosam iste sed numquam debitis ut earum officia ad similique
          expedita sint repudiandae minus, in a corporis! Unde nulla, minima
          aliquam perferendis magni earum eligendi voluptate debitis consectetur
          laboriosam illum iste natus porro, corporis in soluta officia fugit
          fugiat repellat! Quaerat.
        </h3>
        <button
          className="btn home__btn"
          onClick={() => navigate(user ? "/dashboard" : "/login")}
        >
          Get started
        </button>
      </div>
    </div>
  );
}
