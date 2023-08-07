import "./Signup.css";
import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(userName, email, password);
  };

  return (
    <div className="bg">
      <div className="signup__container container">
        <form className="signup" onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <input
            type="text"
            placeholder="User Name:"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
          <input
            type="email"
            placeholder="Email:"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password:"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className="btn" disabled={isLoading}>
            Sign Up
          </button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
}
