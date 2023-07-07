import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="bg">
      <div className="login__container container">
        <div className="login">
          <h3>Login</h3>
          <input type="text" placeholder="Email:" />
          <input type="text" placeholder="Password:" />
          <button className="btn">Login</button>
          <h4>
            Don't have an account?
            <Link to="/signup" className="signupLink">
              Sign up here.
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
}
