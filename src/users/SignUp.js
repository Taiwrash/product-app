import React from "react";

const SignUp = () => {
  return (
    <>
      <section className="form-section">
        <div className="form-container">
          <h2>Sign Up Page</h2>
          <form>
            <input type="text" placeholder="First Name" name="firstname" />
            <input type="text" placeholder="Last Name" name="lastname" />
            <input type="email" placeholder="Your Email" name="email" />
            <input
              type="password"
              placeholder="Your Password"
              name="password"
            />
            <input
              type="password"
              placeholder="Confirm Your Password"
              name="password"
            />
            <button className="btn-primary">Create an Account</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
