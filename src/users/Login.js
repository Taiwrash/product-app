import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resp, setResp] = useState("");

  const data = { email, password };

  const handleSubmit = (e) => {
    e.preventDefault();

    // fetch("http://localhost:3200/user/login", {
    //   method: "POST",
    //   mode: "cors",
    //   headers: {
    //     "Content-Type": "application/json",
    //     // "Content-Type": "application/x-www-form-urlencoded",
    //   },
    //   redirect: "follow",
    //   body: JSON.stringify({ email, password }),
    // }).then((res) => console.log(res));

    Axios.post("http://localhost:3200/user/login", data).then((res) =>
      setResp(res.data)
    );
  };
  return (
    <>
      {resp.success === true ? <Redirect to="/products" /> : null}
      <section className="form-section">
        <div className="form-container">
          <h2>Login Page</h2>
          <p>{resp.err}</p>
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
