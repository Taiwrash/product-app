import React, { useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";
import Loading from "../pages/Loading";

const GeneralProducts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = "http://localhost:3200/products";
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return isLoading ? (
    <Loading />
  ) : (
    <>
      <section className="product-page">
        {data.map((item) => (
          <SingleProduct item={item} key={item._id} />
        ))}
      </section>
    </>
  );
};

export default GeneralProducts;
