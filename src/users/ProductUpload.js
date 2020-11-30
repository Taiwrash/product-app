import React, { useState } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";

const ProductUpload = () => {
  const [product, setProduct] = useState({
    product_name: "",
    description: "",
    price: "",
    image: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      product.product_name &&
      product.description &&
      product.image &&
      product.price
    ) {
      Axios.post("http://bit.ly/backendpro/products/add", product)
        .then((res) => setProduct(res.data))
        .catch((err) => console.log(err));
    } else {
      console.log("hello WOrld");
    }
  };

  return (
    <>
      {product.success === true ? <Redirect to="/products" /> : null}
      <section className="form-section">
        <div className="form-container">
          <h2>Upload Your Product</h2>
          <form onSubmit={handleSubmit}>
            <input
              required
              type="text"
              placeholder="Product Name"
              name="product_name"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Product Description"
              name="description"
              required
              onChange={handleChange}
            />
            <input
              type="url"
              placeholder="Your Product Image url (link)"
              name="image"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Product Price"
              name="price"
              required
              min="1"
              onChange={handleChange}
            />

            <button className="btn-primary">Upload Now</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ProductUpload;
