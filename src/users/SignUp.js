import React, { useState } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";

const SignUp = () => {
  const [singleInfo, setSingleInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [info, setInfo] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSingleInfo({ ...singleInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(singleInfo);

    if (
      singleInfo.firstname &&
      singleInfo.lastname &&
      singleInfo.password &&
      singleInfo.email
    ) {
      Axios.post("http://localhost:3200/user/signup", singleInfo)
        .then((res) => setSingleInfo(res.data))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      {singleInfo.success === true ? <Redirect to="/login" /> : null}
      <section className="form-section">
        <div className="form-container">
          <h2>Sign Up Page</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              name="firstname"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Your Password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Confirm Your Password"
              name="password"
              onChange={handleChange}
            />
            <button className="btn-primary">Create an Account</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
