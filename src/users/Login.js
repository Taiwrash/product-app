import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = { email, password };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3200/user/login", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => console.log(res));
  };
  return (
    <>
      {/* {email && password ? <Redirect to="/products"></Redirect> : null} */}
      <section className="form-section">
        <div className="form-container">
          <h2>Login Page</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Your Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn-primary">Sign In</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
