import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section className="header">
        <div className="header-content">
          <p>
            Note that the development build is not optimized. To create a
            production build, use npm run build.Note that the development build
            is not optimized. To create a production build, use npm run
            build.Note that the development build is not optimized. To create a
            production build, use npm run build.
          </p>

          <Link to="/signup" className="btn-primary">
            Start Now
          </Link>
        </div>
        <div className="hero-bg">
          <img src="/images/list.png" alt="bg-image" />
        </div>
      </section>
    </>
  );
};
export default Header;
