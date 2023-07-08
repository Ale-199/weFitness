import "./Signup.css";

export default function Signup() {
  return (
    <div className="bg">
      <div className="signup__container container">
        <div className="signup">
          <h3>Sign Up</h3>
          <input type="text" placeholder="User Name:" />
          <input type="text" placeholder="Email:" />
          <input type="text" placeholder="Password:" />
          <button className="btn">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
