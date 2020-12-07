import React, { useState, useEffect } from "react";
import Loading from "../pages/Loading";
import { useParams, Link } from "react-router-dom";
const ProductDetails = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  // console.log(useParams());

  const url = "https://mylawlegal-internship.herokuapp.com/products";
  // const url = "http://localhost:3200/products";

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const resp = data.data;
        const newItem = resp.find((item) => item._id === id);
        setItems(newItem);
        setLoading(false);
      });
  }, []);

  const { name, price, image, description } = items;
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="details">
          <div className="left">
            <img src="/images/hunt.png" alt="info" />
          </div>
          <div className="right">
            <h2>Title:{name}</h2>
            <p>Description: {description}</p>
            <h3>
              Price: {price} <sub>per kg</sub>
            </h3>
            <Link to="/products" className="btn-primary">
              Continue Shopping
            </Link>
          </div>
        </section>
      )}
    </>
  );
};
export default ProductDetails;
