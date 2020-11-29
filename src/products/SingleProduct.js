import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ item }) => {
  return (
    <>
      <section className="single-product">
        <div className="product">
          <div className="top-product">
            <div className="product-img">
              <img src="images/shopping.png" alt="product image" />
            </div>
            <div className="product-desc">
              <h2>{item.name}</h2>
              <p>{`${item.description.substring(0, 20)}...`}</p>
              <h3>
                {item.price} <sub> per kg</sub>
              </h3>
            </div>
            <div className="caro">
              <ul>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <Link to={`/product/${item._id}`} className="btn-primary">
            Hunt Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
