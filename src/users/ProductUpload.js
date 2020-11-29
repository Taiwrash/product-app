import React from "react";

const ProductUpload = () => {
  return (
    <>
      <section className="form-section">
        <div className="form-container">
          <h2>Upload Your Product</h2>
          <form>
            <input required type="text" placeholder="Product Name" name="hi" />
            <input
              type="text"
              placeholder="Product Description"
              name="description"
              required
            />
            <input
              type="url"
              placeholder="Your Product Image url (link)"
              name="img_url"
              required
            />
            <input
              type="number"
              placeholder="Product Price"
              name="price"
              required
              min="1"
            />

            <button className="btn-primary">Upload Now</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ProductUpload;
