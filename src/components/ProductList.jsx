import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductList({ onAddToCart, category, sortOrder }) {
  const { addToCart } = useContext(CartContext);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        const filteredProducts = data.products.filter(
          (product) => product.category === category
        );

        if (sortOrder === "asc") {
          filteredProducts.sort((a, b) => a.price - b.price);
      } else {
          filteredProducts.sort((a, b) => b.price - a.price);
      }

        setProducts(filteredProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, sortOrder]);

  const handleAddToCart = (product) => {
    onAddToCart(product);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {showMessage && (
        <div
          className="alert alert-success position-fixed top-0 start-50 translate-middle-x w-100 text-center"
          style={{ zIndex: 1050 }}
        >
          Додано в кошик!
        </div>
      )}

      <div className="container my-4">
        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                    style={{ maxHeight: "200px", objectFit: "cover" }}
                  />
                </Link>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center">{product.name}</h5>
                  <p className="card-text text-center">
                    <strong>{product.price} грн</strong>
                  </p>
                  <div className="d-flex flex-column align-items-center mt-auto">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart(product)}
                    >
                      Додати в кошик
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;