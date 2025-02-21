/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { API_URL } from "../api";
import { useParams } from "react-router-dom";
import TopBar from "./TopBar";

const ProductMenu = () => {
  const [products, setProducts] = useState([]);
  const { firmId, firmName } = useParams();

  const productHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/product/${firmId}/products`);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const newProductData = await response.json();
      setProducts(newProductData.products || []);
    } catch (error) {
      console.error("Product fetch failed:", error);
    }
  };

  useEffect(() => {
    productHandler();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Runs again if firmId changes

  return (
    <>
      <TopBar />
      <section className="productSection">
        <h3>{firmName}</h3>
        {products.length > 0 ? (
          products.map((item, index) => (
            <div className="productBox" key={item.id || index}>
              <div>
                <div><strong>{item.productName}</strong></div>
                <div>₹{item.price}</div>
                <div>{item.description}</div>
              </div>
              <div className="productGroup">
                <img 
                  src={`${API_URL}/uploads/${item.image}`} 
                  alt={item.productName} 
                  loading="lazy" 
                />
                <div className="addButton">ADD</div>
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </section>
    </>
  );
};

export default ProductMenu;
