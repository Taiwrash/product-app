import React, { useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";
import Loading from "../pages/Loading";
import Axios from "axios";

const GeneralProducts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = "https://mylawlegal-internship.herokuapp.com/products";
  // const url = "http://localhost:3200/products";
  useEffect(() => {
    setIsLoading(true);
    Axios.get(url).then((data) => {
      setData(data.data.data);

      setIsLoading(false);
    });
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
