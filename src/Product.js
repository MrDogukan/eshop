import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam
            qui veniam quos laborum quam corrupti iusto similique eligendi quo
            ipsa, debitis ex nesciunt.
          </p>
          <p className="product__price">
            <small></small>
            <strong>$61</strong>
          </p>
          <div className="product__rating">⭐⭐⭐⭐⭐</div>
        </div>
        <img
          src="https://cdn.webshopapp.com/shops/245502/files/376944878/900x900x2/trabzonspor-macron-forma-bordo-mavi-cubuklu-cocuk.jpg"
          alt="product_image"
        />
        <button>Add to Basket</button>
      </div>
    </div>
  );
};

export default Product;
