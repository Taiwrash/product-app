import React, { useState, useEffect } from "react";
import Loading from "../pages/Loading";
import { useParams, Link } from "react-router-dom";
const ProductDetails = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const url = "http://localhost:3200/products";
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const resp = data.data;

        setItems(resp.filter((item) => item._id !== +id));
        setLoading(false);
      });
  }, [id]);

  //   console.log(items);

  console.log(items);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        items.map((item) => {
          return (
            <section className="details" key={item._id}>
              <div className="left">
                <img src="/images/hunt.png" alt="info" />
              </div>
              <div className="right">
                <h2>Title:{item.name}</h2>
                <p>Description: {item.description}</p>
                <h3>
                  Price: {item.price} <sub>per kg</sub>
                </h3>
                <Link to="/products" className="btn-primary">
                  Continue Shopping
                </Link>
              </div>
            </section>
          );
        })
      )}
    </>
  );
};

export default ProductDetails;
